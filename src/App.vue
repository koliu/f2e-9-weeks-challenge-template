<template lang="pug">
  div
    nav.menu
      router-link(to="/index") Home
      router-link(to="/spec") Spec
      router-link(to="/about") About
    div
      router-view
</template>
<style lang="scss" scoped>
.menu {
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px dotted #f5a623;
  display: flex;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  // width: 100%;
  z-index: 65535;

  a {
    padding: 0 12px;
    color: rgba(255, 255, 255, 0.8);
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 4px solid #fff;
  }

  .router-link-exact-active {
    color: #fff;
    cursor: auto;
    font-weight: 900;
  }
}
</style>
