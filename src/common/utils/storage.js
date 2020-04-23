/**
 * 设置localStorage
 * @param name
 * @param value
 */
export function setStorageItem(name, value) {
  if (value) {
    window.localStorage.setItem(name, JSON.stringify(value));
  }
}

/**
 * 获取localStorage
 * @param name
 * @param value
 */
export function getStorageItem(name) {
  let value = window.localStorage.getItem(name);
  return value == null ? '' : JSON.parse(value);
}

/**
 * 删除localStorage
 * @param name
 * @param value
 */
export function removeStorageItem(name) {
  if (name) {
    window.localStorage.removeItem(name);
  }
}

/**
 * 设置sessionStorage
 * @param name
 * @param value
 */
export function setSessionStorage(name, value) {
  if (value) {
    window.sessionStorage.setItem(name, JSON.stringify(value));
  }
}

/**
 * 获取sessionStorage
 * @param name
 */
export function getSessionStorage(name) {
  let value = window.sessionStorage.getItem(name);
  return value == null ? '' : JSON.parse(value);
}

/**
 * 删除sessionStorage
 * @param name
 */
export function removeSessionStorage(name) {
  if (name) {
    window.sessionStorage.removeItem(name);
  }
}
