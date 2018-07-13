export default {
  context: this,
  pushTo(path) {
    this.context.$router.push(path);
  },
  replaceTo(path) {
    this.context.$router.replace(path);
  },
  go(n) {
    this.context.$router.go(n);
  },
  goBack() {
    this.context.$router.back(-1);
  },
  forward() {
    this.context.$router.forward();
  }
};
