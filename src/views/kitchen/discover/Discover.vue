<template>
  <div class="discover-container">
    <!-- 发现列表 瀑布流布局 -->
    <WaterFall :url="requestUrl"></WaterFall>
  </div>
</template>

<script>
import WaterFall from "../../../components/WaterFall";
export default {
  data() {
    return {
      requestUrl: "/api/recommend/getlist"
    };
  },
  components: {
    WaterFall
  }
};
</script>

<style lang="scss" scoped>
.discover-container {
  height: 100%;
}
</style>