<template>
  <div id="about" @click="close">
    <button class="btn-close" @click.stop="close">X</button>
    <div class="menu"  @click.stop="() => {}">
      <button class="menu-btn" :class="{ 'active' : show === 'about'}" @click.stop="show = 'about'">About</button>
      <button class="menu-btn" :class="{ 'active' : show === 'specs'}" @click.stop="show = 'specs'">Specs</button>
      <button class="menu-btn" :class="{ 'active' : show === 'specs-local'}" @click.stop="show = 'specs-local'">Specs(local)</button>
    </div>
    <div class="about" v-show="show === 'about'" @click.stop="() => {}">
      <div class="about-item">
        我是 KO<br>
        一個 fullstack 導向的攻城獅<br>
        這裡是攻打 F2E 的第三個座城堡 -- admin order<br>
        目前攻打的目標： page-home<br>
        採用的武器有<br>
        - flexbox<br>
        - scss<br>
        - 樣式與排版分離<br>
        - vue component<br>
        - chart.js<br>
        - webpack<br>
      </div>
      <div class="about-item" @click.stop="() => {}">
        由於 F2E 開啟 蟲洞<br>
        目前我方已被傳送到其他據點<br>
        等待時機再度回來攻城……
      </div>
    </div>
    <iframe class="specs" v-show="show === 'specs'" src="https://hexschool.github.io/THE_F2E_Design/week3-admin%20order/"></iframe>
    
    <iframe class="specs" v-show="show === 'specs-local'" src="../src/static/spec.html"></iframe>
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
<style scoped>
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
}

#about .menu {
  display: flex;
  height: 40px;
}
#about .menu-btn {
  background: #000;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  height: 100%;
  padding: 5px 25px;
}

#about .menu-btn.active {
  border-bottom: 4px solid #fff;
  box-sizing: border-box;
  cursor: default;
}

#about .menu-btn:hover:not(.active) {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.btn-close {
  background: #000;
  border: 1px dashed #fff;
  color: #fff;
  font-size: 36px;
  position: fixed;
  right: 15px;
  top: 15px;
}

.btn-close:hover {
  border-color: #f5a623;
  color: #f5a623;
  cursor: pointer;
  font-weight: bolder;
}

.about {
  align-items: center;
  /* border: 1px dashed #2397f5; */
  display: flex;
  flex-flow: column nowrap;
  /* height: 90%; */
  margin-top: 24px;
  /* width: 90%; */
}

.about-item {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #f5a623;
  line-height: 30px;
  padding: 24px;
  margin-bottom: 10px;
}
.specs {
  border: 1px dashed #f5a623;
  height: 90%;
  width: 90%;
}
</style>
