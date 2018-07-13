export default {
  log: false,
  isSupported() {
    return typeof Storage !== "undefined";
  },
  validateSupported() {
    if (!this.isSupported) {
      throw new Error("Unsupported Local Storage!");
    }
  },
  fetch(key) {
    this.validateSupported();
    return window.localStorage.getItem(key);
  },
  save(key, value) {
    this.validateSupported();
    window.localStorage.setItem(key, value);
    this.log && console.log(`save(${key},${value}) >>> ${this.fetch(key)}`);
  },
  remove(key) {
    this.validateSupported();
    window.sessionStorage.removeItem(key);
    this.log && console.log(`remove(${key}) >>> ${this.fetch(key)}`);
  }
};
