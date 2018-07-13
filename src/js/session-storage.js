export default {
  log: false,
  isSupported() {
    return typeof Storage !== "undefined";
  },
  validateSupported() {
    if (!this.isSupported) {
      throw new Error("Unsupported Session Storage!");
    }
  },
  fetch(key) {
    this.validateSupported();
    return window.sessionStorage.getItem(key);
  },
  save(key, value) {
    this.validateSupported();
    window.sessionStorage.setItem(key, value);
    this.log && console.log(`save(${key},${value}) >>> ${this.fetch(key)}`);
  },
  remove(key) {
    this.validateSupported();
    window.sessionStorage.removeItem(key);
    this.log && console.log(`remove(${key}) >>> ${this.fetch(key)}`);
  }
};
