# 🌿 WEBRTC-Garden
<p align="center">
<a href="./README.zh-CN.md">简体中文</a>
</p>

**WEBRTC-Garden** is a simple WebRTC implementation for local peer-to-peer video chat. This project demonstrates the core principles of WebRTC by enabling video communication between two users on the same local network.

## ✨ Features

* 📹 **Peer-to-peer video chat**: Real-time video connections between two users without a server.
* ⚡ **WebRTC technology**: Utilizes WebRTC for low-latency, real-time communication.
* 🏠 **Local Network Support**: Designed for local networks, making it perfect for testing and demo purposes.

## 🛠️ Technologies Used

* 🛡️ **WebRTC**: Handles peer-to-peer video/audio communication.
* 🎨 **HTML5 & CSS3**: Provides the front-end user interface.
* 🔧 **JavaScript**: Manages WebRTC signaling and connections.
* 🚀 **Node.js (Optional)**: Can be used to serve the app and signaling mechanism.

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org) (optional, only required for serving the project via a local server).
* A modern browser that supports WebRTC (e.g., Chrome, Firefox, Edge).

### Installation and Setup

1. **Clone the repository**:

   ```
   bash
   git clone https://github.com/ShetePro/WEBRTC-Garden.git
   cd WEBRTC-Garden
   ```

2. **Serve the project** (optional): If you have Node.js installed, you can serve the app using `http-server` or a similar tool:

   ```
   bash
   npm install
   npm run socket // socket service
   npm run dev
   ```

3. **Open the app**:

    * Open the app in two browser windows/tabs or on two devices within the same local network.
    * Navigate to `http://localhost:5173` (or the URL you set up).


## 👨‍💻 Contributing

Contributions are welcome! Feel free to submit issues or pull requests on GitHub. Suggestions, bug fixes, or new features will be greatly appreciated.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ShetePro/WEBRTC-Garden/blob/main/LICENSE) file for details.
