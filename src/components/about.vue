<template lang="pug">
  #about(@click="close")
    button.btn-close(@click.stop="close") X
    .menu(@click.stop="() => {}")
      button.menu-btn(:class="{ 'active' : show === 'about'}" @click.stop="show = 'about'") About
      button.menu-btn(:class="{ 'active' : show === 'specs'}" @click.stop="show = 'specs'") Specs
      button.menu-btn(:class="{ 'active' : show === 'specs-local'}" @click.stop="show = 'specs-local'") Specs(local)
    .about(v-show="show === 'about'" @click.stop="() => {}")
      .about-item
        i 我是 KO
        br
        i 一個 fullstack 導向的攻城獅
        br
        i 這裡是攻打 F2E 的第 3 座城堡 -- admin order
        br
        i 目前攻打的目標： page-home
        br
        i 採用的武器有
        br
        ul
          li flexbox
          li scss
          li 樣式與排版分離
          li vue component
          li chart.js
          li webpack
      .about-item(@click.stop="() => {}")
        i 由於 F2E 開啟 蟲洞
        br
        i 目前我方已被傳送到其他據點
        br
        i 等待時機再度回來攻城……
    iframe.specs(v-if="show === 'specs'" src="https://hexschool.github.io/THE_F2E_Design/week3-admin%20order/")
    iframe.specs(v-show="show === 'specs-local'" src="../src/static/spec.html")
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      show: "about"
    };
  },
  methods: {
    close() {
      this.$emit("close", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
  align-items: center;
  border: 1px dotted #fff;
  position: fixed;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 99999;

  .menu {
    display: flex;
    height: 40px;

    .menu-btn {
      background: #000;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      height: 100%;
      padding: 5px 25px;

      &.active {
        border-bottom: 4px solid #fff;
        box-sizing: border-box;
        cursor: default;
      }

      &:hover:not(.active) {
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
      }
    }
  }
}

.btn-close {
  background: #000;
  border: 1px dashed #fff;
  color: #fff;
  font-size: 36px;
  position: fixed;
  right: 15px;
  top: 15px;

  &:hover {
    border-color: #f5a623;
    color: #f5a623;
    cursor: pointer;
    font-weight: bolder;
  }
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
.specs {
  border: 1px dashed #f5a623;
  height: 90%;
  width: 90%;
}

ul {
  list-style-type: circle;
  padding-left: 40px;
}
</style>
