import SessionStorage from "../js/session-storage";
SessionStorage.log = true;

const KEY = "login";
export default {
  isLoggedIn() {
    return "true" === SessionStorage.fetch(KEY);
  },
  login() {
    SessionStorage.save(KEY, "true");
  },
  logout() {
    SessionStorage.remove(KEY);
  }
};
