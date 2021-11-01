// NOTE: Implement a listener system to storage change
const storageListenerMap = {};
const notifyStorageChanged = (key, value) => {
  if (storageListenerMap[key]) {
    storageListenerMap[key].forEach((callback) => {
      if (callback) callback(key, value);
    });
  }
};
export const addStorageListener = (key, callback) => {
  storageListenerMap[key] = storageListenerMap[key] || [];
  return storageListenerMap[key].push(callback) - 1;
};
export const removeStorageListener = (key, id) => {
  storageListenerMap[key] = storageListenerMap[key] || [];
  storageListenerMap[key][id] = null;
};

export const readData = (key, defaultValue) => {
  const data = window.localStorage.getItem(key);
  return data !== undefined && data !== null ? JSON.parse(data) : defaultValue;
};

export const writeData = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
  notifyStorageChanged(key, value);
};

export const removeData = (key) => {
  window.localStorage.removeItem(key);
  notifyStorageChanged(key, null);
};
