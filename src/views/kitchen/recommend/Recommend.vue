<template>
  <div class="rec-container">
    <!-- 话题广场 -->
    <van-row>
      <van-col span="20" class="topic-square" offset="2">
        <span>话题广场图片占位</span>
      </van-col>
    </van-row>

    <!-- 为你推荐 -->
    <van-row class="rec-title" type="flex" justify="space-around">
      <van-col span="6" align="left">
        <h2>为你推荐</h2>
      </van-col>
      <van-col span="6" align="right">
        <span class="cate-menu-category" @click="$router.push('/category')">菜谱分类</span>
      </van-col>
    </van-row>

    <!-- 推荐列表 瀑布流布局 -->
    <WaterFall :url="requestUrl" icon="icon-love"></WaterFall>
  </div>
</template>

<script>
import RecommendItem from "./RecommendItem";
import WaterFall from "../../../components/WaterFall";

export default {
  data() {
    return {
      requestUrl: "/api/recommend/getlist"
    };
  },
  components: {
    RecommendItem,
    WaterFall
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.rec-container {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .topic-square {
    // 话题广场
    height: 38px;
    text-align: center;
    line-height: 38px;
    margin-top: 20px;
    span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      background-color: antiquewhite;
    }
  }

  .rec-title {
    line-height: 50px;
    h2 {
      font-weight: bold;
      font-size: 22px;
    }
    .cate-menu-category {
      font-size: 16px;
      color: #ccc;
    }
  }

  .rec-list {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-evenly;
    position: relative;
  }
}
</style>