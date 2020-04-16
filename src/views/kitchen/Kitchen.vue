<template>
  <div class="kitchen-container">
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

    <van-tabs class="vant-tab-bar" v-model="active" animated swipeable title-active-color="#000">
      <van-tab title="关注" :title-style="titleStyle">
        <Attention />
      </van-tab>

      <van-tab title="推荐" :title-style="titleStyle">
        <Recommend />
      </van-tab>

      <van-tab title="发现" :title-style="titleStyle">
        <Discover />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HeaderBar from "../../components/HeaderBar";
import Recommend from "./recommend/Recommend";
import Discover from "./discover/Discover";
import Attention from "./attention/Attention";
export default {
  data() {
    return {
      active: 1,
      titleStyle: {
        fontSize: "18px"
      }
    };
  },
  components: {
    HeaderBar,
    Recommend,
    Discover,
    Attention
  }
};
</script>

<style lang="scss" scoped>
.kitchen-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .vant-tab-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /deep/ .van-tabs__content {
      flex: 1;
      .van-tab__pane {
        height: 100%;
        overflow: hidden;
      }
    }
    // .van-tabs__content {
    //   height: 100%;
    //   flex: 1;
    // }
  }
}
</style>