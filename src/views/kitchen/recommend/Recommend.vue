<template>
  <div class="rec-container">
    <!-- 话题广场 -->
    <van-row>
      <van-col span="24" class="topic-square">
        <span>话题广场图片占位</span>
      </van-col>
    </van-row>

    <!-- 为你推荐 -->
    <van-row class="rec-title" type="flex" justify="space-between">
      <van-col span="6" align="left">
        <h2>为你推荐</h2>
      </van-col>
      <van-col span="6" align="right">
        <span class="cate-menu-category">菜谱分类</span>
      </van-col>
    </van-row>

    <!-- 推荐列表 -->
    <div class="rec-list">
      <RecommendItem v-for="i in 3" :key="i"></RecommendItem>
    </div>
  </div>
</template>

<script>
import RecommendItem from "./RecommendItem";
export default {
  components: {
    RecommendItem
  }
};
</script>

<style lang="scss" scoped>
.rec-container {
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  flex: 1;
  .topic-square {
    // 话题广场
    height: 38px;
    text-align: center;
    line-height: 38px;
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