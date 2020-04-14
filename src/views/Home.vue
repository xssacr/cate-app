<template>
  <div class="home-container">
    <HeaderBar message="搜索菜谱、食材">
      <!-- 左侧图标 -->
      <template #left-slot>
        <span>
          <i class="iconfont icon-cross"></i>
        </span>
      </template>

      <!-- 右侧图标 -->
      <template #right-slot>
        <span>
          <i class="iconfont icon-warn"></i>
        </span>
      </template>
    </HeaderBar>
    <main>
      <router-view></router-view>
    </main>
    <Tabbar />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar";
import Tabbar from "../components/Tabbar";
export default {
  components: {
    HeaderBar,
    Tabbar
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  main {
    flex: 1;
  }
}
</style>