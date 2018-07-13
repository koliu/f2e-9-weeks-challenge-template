<template lang="pug">
  .app {{page}}
    button.btn-login(@click.prevent="login", v-if="!this.loginManager.isLoggedIn()") LOGIN
    button.btn-login(@click.prevent="logout", v-if="this.loginManager.isLoggedIn()") LOGOUT
  
</template>
<script>
export default {
  data: function() {
    return {
      page: "index"
    };
  },
  methods: {
    login() {
      this.loginManager.login();
      this.loggedIn = this.loginManager.isLoggedIn();
      this.$forceUpdate();
    },
    logout() {
      this.loginManager.logout();
      this.$forceUpdate();
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900");
@import "../css/partials/predefined";
@import "../css/partials/animations";
@import "../css/partials/text-utils";

.app{  
  padding-bottom: 30px;
}

.btn-login {
  border: 1px dashed $color-yellow;
  background: rgba(255, 255, 255, 0.3);
  color: $color-yellow;
  position: fixed;
  left: 5px;
  top: 5px;
  z-index: 9999;

  &:hover {
    border-color: $color-blue;
    color: $color-blue;
    cursor: pointer;
    font-weight: bolder;
  }
}
</style>
