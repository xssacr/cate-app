<template>
  <div class="tabbar-container">
    <router-link to="/home/kitchen" tag="div">
      <i class="iconfont icon-home"></i>
      <span>下厨房</span>
    </router-link>
    <router-link to="/home/fair" tag="div">
      <i class="iconfont icon-shop"></i>
      <span>市集</span>
    </router-link>
    <router-link to="/home/classroom" tag="div">
      <i class="iconfont icon-classroom"></i>
      <span>课堂</span>
    </router-link>
    <router-link to="/home/enshrine" tag="div">
      <i class="iconfont icon-love"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/home/profile" tag="div">
      <i class="iconfont icon-profile"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tabbar-container {
  height: 48px;
  display: flex;
  div {
    flex: 1;
    text-align: center;
    color: #555;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    .iconfont {
      font-size: 24px;
    }
    &.router-link-active {
      color: #f78;
    }
  }
}
</style>