<template>
  <div class="home-container">
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
export default {
  components: {
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
    overflow: hidden;
  }
}
</style>