# Youtube_Video_Scraper_Extension
A Chrome extension that extracts thumbnail URLs from YouTube videos on a channel page, saves them into a JSON file, and downloads the thumbnails directly to your default Downloads folder.
🚀 Features
Extracts all video thumbnail URLs from a YouTube channel page.

Saves the extracted URLs into a structured youtube_thumbnails.json file.

Automatically downloads each thumbnail image to your browser's default download directory.

User-friendly interface with a simple pop-up to initiate the process.
📦 Installation

Clone or download this repository:

git clone https://github.com/Muhammad-Moaz-Shafiq/Youtube_Video_Scraper.git

Open Google Chrome and navigate to chrome://extensions/.

Enable Developer Mode by toggling the switch in the top-right corner.

Click on "Load unpacked" and select the directory where you cloned or extracted the repository.

The extension should now appear in your list of Chrome extensions.

🛠️ Usage
Navigate to any YouTube channel page (e.g., https://www.youtube.com/@channelname/videos).

Click on the YouTube Video Scraper extension icon in the Chrome toolbar.

In the popup that appears, click the "Extract Thumbnails" button.

The extension will:

Collect all video thumbnail URLs from the current page.

Save these URLs into a thumbnails.json file.

Automatically download each thumbnail image to your default Downloads folder

📁 Project Structure
Youtube_Video_Scraper/

├── icon.png
├── manifest.json
├── popup.html
├── popup.js
└── README.md

🔒 Permissions
The extension requires the following permissions:

activeTab: To access the current tab's content and extract thumbnail URLs.

downloads: To save the thumbnails.json file and download thumbnail images.

📬 Contact
For any questions, suggestions, or feedback, feel free to reach out:

GitHub: Muhammad-Moaz-Shafiq

Email: muhammadmoazmdmz@gmail.com
