import { createServer } from "http";
import { RtcRoom } from "../room.js";
import { stringify } from "./util.js";
import { Server } from "socket.io";

const roomList = [];
const userMap = {};
export function initSocket() {
  // const pemPath = process.cwd() + "\\bin\\";
  // const options = {
  // key: fs.readFileSync(pemPath + 'localhost+5-key.pem'),
  // cert: fs.readFileSync(pemPath + 'localhost+5.pem'),
  // };
  const server = createServer();
  const io = new Server(server, {
    cors: {
      credentials: true,
      // 跨域过滤源
      origin: "*"
      // origin: ["http://localhost:8796", 'http://localhost:3100', 'http://localhost:8080', 'http://192.168.19.129:8080'],
    }
  });
  io.on("connection", (socket) => {
    console.log("用户已连接socket");
    socket.on("disconnect", () => {
      //监听用户断开事件
      console.log("用户" + userMap[socket.id] + "断开连接");
      // 清除 房间内的用户
      const roomId = socket.data.roomId;
      const room = roomList.find((item) => item.id === roomId);
      room && room.exit(userMap[socket.id]);
      io.to(roomId).emit("exit", userMap[socket.id]);
      io.in(socket.id).disconnectSockets();
    });
    // 连接就调用登录
    //监听login事件 返回socket用户id
    socket.on("login", (data) => {
      userMap[socket.id] = data || socket.id;
      socket.emit("login", userMap[socket.id]);
      console.log("用户" + userMap[socket.id] + "登录", data);
    });
    socket.on("createRoom", () => {
      console.log("创建房间");
      const room = new RtcRoom({
        id: Math.floor(Math.random() * 10000000),
        createUser: userMap[socket.id],
        roomSize: 10
      });
      roomList.push(room);
      // 加入指定房间
      socket.emit("roomList", stringify(roomList));
    });
    socket.on("join", (roomId) => {
      let flag = false;
      let room;
      if (roomId) {
        room = roomList.find((item) => Number(item.id) === Number(roomId));
        console.log("join", room);
        if (room) {
          room.join(userMap[socket.id]) && (flag = true);
        }
      }
      // 给对应房间 推送事件
      if (flag) {
        console.log(userMap[socket.id]);
        io.in(socket.id).socketsJoin(roomId);
        io.to(roomId).emit("roomChange", stringify(room.getRoomData()));
        io.to(roomId).emit("addUser", userMap[socket.id]);
        // 保存进入的房间id
        socket.data.roomId = roomId;
      }
      console.log("roomchange", stringify(room.getRoomData()));
      socket.emit(
        "join",
        stringify({
          success: flag,
          data: room ? room.getRoomData() : {}
        })
      );
    });
    socket.on("exit", (roomId) => {
      let flag = false;
      let room;
      if (roomId) {
        room = roomList.find((item) => Number(item.id) === Number(roomId));
        if (room) {
          room.exit(userMap[socket.id]) && (flag = true);
        }
      }
      // 给对应房间 推送事件
      if (flag) {
        socket.leave(roomId);
        io.to(roomId).emit("roomChange", stringify(room.getRoomData()));
        io.to(roomId).emit("exit", userMap[socket.id]);
      }
      console.log("离开房间", socket.rooms);
    });
    socket.on("roomList", () => {
      socket.emit("roomList", stringify(roomList));
    });
    socket.on("offer", (data) => {
      socket.to(data.roomid).emit("offer", data);
    });
    socket.on("answer", (data) => {
      socket.to(data.roomid).emit("answer", data);
    });
    socket.on("__ice_candidate", (data) => {
      socket.to(data.roomid).emit("__ice_candidate", data);
    });
    socket.on("message", (data) => {
      const roomId = socket.data.roomId;
      const message = {
        msg: data,
        userId: userMap[socket.id],
        roomId
      };
      io.to(roomId).emit("message", stringify(message));
      const room = getRoom(socket);
      room.addMessage(message);
      console.log(message, "发送房间消息");
    });
  });
  server.listen(3000, () => {
    console.log("socket https:3000");
  });
}

function getRoom(socket) {
  const roomId = socket.data.roomId;
  const room = roomList.find((item) => item.id === roomId);
  return room;
}
