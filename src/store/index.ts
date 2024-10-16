import { Socket } from "socket.io-client/build/esm/socket";
import { defineStore } from "pinia";
import { RoomData } from "@/types/room";
import { User } from "@/types/user.ts";
import {getCache, setCache} from "@/util/cache.ts";
export const useRtcStore = defineStore("rtcStore", {
  state: () => {
    return {
      // 当前room对象
      currentRoom: {
        id: "",
        roomPerson: [],
        messageList: []
      } as RoomData,
      rtcSocket: undefined as Socket | undefined,
      user: {
        userId: getCache('userId'),
        name: ""
      } as User
    };
  },
  actions: {
    setUser(user: User) {
      this.user = user;
      setCache("userId", user.userId);
    },
    clearRoom() {
      this.currentRoom = {
        id: "",
        roomPerson: [],
        messageList: []
      };
      console.log(this);
    }
  }
});
