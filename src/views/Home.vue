<template>
  <div class="home-container">
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
  main {
    flex: 1;
  }
}
</style>