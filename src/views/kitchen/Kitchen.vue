<template>
  <div class="kitchen-container">
    <van-tabs v-model="active" animated swipeable>
      <van-tab title="关注"></van-tab>

      <van-tab title="推荐">
        <Recommend />
      </van-tab>

      <van-tab title="发现"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Recommend from "./recommend/Recommend";
export default {
  data() {
    return {
      active: 1
    };
  },
  components: {
    Recommend
  }
};
</script>

<style lang="scss" scoped>
.kitchen-container {
  background-color: #f78;
  width: 100%;
  height: 100%;
  
}
</style>