document.getElementById("extractBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      return (async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));

        for (let i = 0; i < 10; i++) {
          window.scrollBy(0, 2000);
          await delay(1000);
        }

        await delay(2000);

        const thumbnails = [];
        const allLinks = Array.from(document.querySelectorAll('a[href*="/watch"], a[href*="/shorts"]'));
        const uniqueIds = new Set();

        allLinks.forEach((a) => {
          const url = new URL(a.href);
          let id = null;

          if (url.pathname.startsWith("/watch")) {
            id = url.searchParams.get("v");
          } else if (url.pathname.startsWith("/shorts/")) {
            id = url.pathname.split("/")[2];
          }

          if (id && !uniqueIds.has(id)) {
            uniqueIds.add(id);
            const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

            thumbnails.push({ videoId: id, thumbnail: thumbnailUrl });
          }
        });

        return thumbnails;
      })();
    }
  }, async (injectionResults) => {
    const thumbnails = injectionResults[0].result;

    for (const { videoId, thumbnail } of thumbnails) {
      chrome.downloads.download({
        url: thumbnail,
        filename: `${videoId}.jpg`
      });
    }

    // Save JSON too
    const blob = new Blob([JSON.stringify(thumbnails, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    chrome.downloads.download({
      url: url,
      filename: "youtube_thumbnails.json"
    });
  });
});
