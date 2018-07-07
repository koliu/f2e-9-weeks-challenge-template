<template lang="pug">
  .container
    .about
      .about-item
        i 我是 KO
        br
        i 一個 fullstack 導向的攻城獅
        br
        i 這裡是攻打 F2E 的第 5 座城堡 -- Comic Viewer
        br
        i 目前已攻下： 
        br
        i 待進攻： 
        br
        i 採用的武器有
        br
        ul
          li css flex
          li css animation/transition
          li scss
          li pug
  </div>
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
.container {
  align-items: center;
  border: 1px dotted #fff;
  position: fixed;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 59999;
}

.about {
  align-items: center;
  /* border: 1px dashed #2397f5; */
  display: flex;
  flex-flow: column nowrap;
  /* height: 90%; */
  margin-top: 24px;
  /* width: 90%; */

  .about-item {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #f5a623;
    line-height: 30px;
    padding: 24px;
    margin-bottom: 10px;
  }
}

ul {
  list-style-type: circle;
  padding-left: 40px;
}
</style>
