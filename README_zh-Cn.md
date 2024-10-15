# 🌿 WEBRTC-Garden
<p align="center">
<a href="./README.md">English</a>
</p>
**WEBRTC-Garden** 是一个简单的 WebRTC 实现项目，用于本地点对点视频聊天。本项目展示了 WebRTC 的核心原理，允许两名用户在同一局域网内进行视频通信。

## ✨ 功能特点

* 📹 **点对点视频聊天**：两名用户之间的实时视频连接，无需服务器。
* ⚡ **WebRTC 技术**：利用 WebRTC 实现低延迟的实时通信。
* 🏠 **局域网支持**：专为局域网设计，非常适合测试和演示使用。

## 🛠️ 使用技术

* 🛡️ **WebRTC**：处理点对点的视频/音频通信。
* 🎨 **HTML5 & CSS3**：提供前端用户界面。
* 🔧 **JavaScript**：管理 WebRTC 信令和连接。
* 🚀 **Node.js（可选）**：可用于搭建本地服务器和信令机制。

## 🚀 快速开始

### 前置条件

* [Node.js](https://nodejs.org) （可选，仅在使用本地服务器时需要）。
* 支持 WebRTC 的现代浏览器（例如 Chrome、Firefox、Edge）。

### 安装和运行步骤

1. **克隆仓库**：

   ```
   bash
   git clone https://github.com/ShetePro/WEBRTC-Garden.git
   cd WEBRTC-Garden
   ```

2. **运行项目**： 

   ```
   bash
   npm install
   npm run socket // 开启socket服务
   npm run dev // 开启本地页面
   ```

3. **打开应用**：

    * 在两个浏览器窗口/标签页中或两个设备上同时打开该应用，确保它们在同一局域网内。
    * 在浏览器中访问 `http://localhost:5173`（或你设置的其他本地 URL）。

## 👨‍💻 贡献

欢迎大家为项目做出贡献！可以通过 GitHub 提交问题或拉取请求。我们期待任何建议、错误修复或新功能的加入。

## 📄 许可证

本项目基于 MIT 许可证开源。详情请参见 [LICENSE](https://github.com/ShetePro/WEBRTC-Garden/blob/main/LICENSE) 文件。
