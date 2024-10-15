// 序列化
export function stringify (data) {
  try {
    return JSON.stringify(data);
  }catch {
    return '';
  }
}
