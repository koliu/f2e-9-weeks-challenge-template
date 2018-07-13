<template lang="pug">
  .container 404  
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      show: "about"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../css/partials/_predefined.scss";

.container {
  height: 100%;

  @include flex-box(center, center);
}
</style>
