import { Socket } from 'socket.io-client/build/esm/socket'
import { defineStore } from 'pinia'
import { RoomData } from '@/types/room'
export const useRtcStore = defineStore('rtcStore', {
  state: () => {
    return {
      // 当前room对象
      currentRoom: {
        id: '',
        roomPerson: [],
        messageList: []
      } as RoomData,
      rtcSocket: undefined as Socket | undefined,
      user: {
        userId: '',
        name: ''
      }
    }
  },
  actions: {
    clearRoom () {
      this.currentRoom = {
        id: '',
        roomPerson: [],
        messageList: []
      }
      console.log(this)
    }
  }
})
