import { useSystemStore } from "@/store/system.ts";
import { isString } from "@/util/is.ts";

export function getCache(key) {
  const settingStore = useSystemStore();
  if (isString(key)) {
    return sessionStorage.getItem(`${settingStore.cachePrefix}-${key}`);
  }
}
export function setCache(cacheKey: string, value: string) {
  const settingStore = useSystemStore();
  sessionStorage.setItem(`${settingStore.cachePrefix}-${cacheKey}`, value);
}
