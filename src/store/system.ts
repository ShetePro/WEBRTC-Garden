import { ThemeModeEnum } from '@/enums';

import { defineStore } from 'pinia';
export const useSystemStore = defineStore('systemStore', {
  state: () => {
    return {
      themeMode: ThemeModeEnum.light as ThemeModeEnum,
      cachePrefix: 'webrtc-garden'
    };
  },
  actions: {

  }
});
