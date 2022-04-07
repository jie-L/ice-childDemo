/*
 * @Author: jiE
 * @Date: 2022-03-04 14:12:09
 * @Description: utils
 * @LastEditors: gy
 * @LastEditTime: 2022-03-16 16:11:15
 */


export function deepClone(obj) {
  const copy = obj instanceof Array ? [] : {};
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' && i != 'searchDom' ? deepClone(obj[i]) : obj[i];
    }
  }
  return copy;
}

export const regExpFromString = (q) => {
  let flags = q.replace(/.*\/([gimuy]*)$/, '$1');
  if (flags === q) {
    flags = '';
  }
  const pattern = flags ? q.replace(new RegExp(`^/(.*?)/${flags}$`), '$1') : q;
  try {
    return new RegExp(pattern, flags);
  } catch (e) {
    return null;
  }
};
