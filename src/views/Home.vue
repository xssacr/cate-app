<template>
  <div class="home-container">
    <header></header>
    <main>
      <router-view></router-view>
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
  header {
    height: 48px;
    background-color: #f78;
  }
  main {
    flex: 1;
  }
}
</style>