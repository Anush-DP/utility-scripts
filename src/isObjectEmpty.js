export const isObjectEmpty = (obj) => {
  if (Array.isArray(obj) || typeof obj !== 'object') return false;
  let keys = Object.keys(obj);
  if (keys.length === 0) return true;
  return !keys.some((key) => !isObjectEmpty(obj[key]));
};
