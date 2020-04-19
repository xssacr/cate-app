<template>
  <div class="discover-container">
    <!-- 瀑布流布局 -->
    <vue-waterfall-easy
      :imgsArr="imgsArr"
      @scrollReachBottom="getData"
      :loadingDotStyle="loadingDotStyle"
      ref="waterfall"
    >
      <ListItem slot-scope="props" :data="props.value">
        <template #right-icon>
          <i class="iconfont icon-praise"></i>
        </template>
      </ListItem>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import ListItem from "../../../components/ListItem";
export default {
  data() {
    return {
      imgsArr: [], // 数据
      group: 1, // 页数
      isPullDown: true, // 是否支持下拉
      loadingDotStyle: {
        // loading 样式
        backgroundColor: "#f78"
      }
    };
  },
  methods: {
    async getData() {
      this.$http
        .post("/api/recommend/getlist", {
          group: this.group
        })
        .then(res => {
          this.group++;
          if (this.group === 11) {
            // 模拟已经无新数据，显示 slot="waterfall-over"
            this.$refs.waterfall.waterfallOver();
            return;
          }
          this.imgsArr = this.imgsArr.concat(res.data.datalist);
        });
    }
  },
  components: {
    vueWaterfallEasy,
    ListItem
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.discover-container {
  height: 100%;
  .vue-waterfall-easy-container .vue-waterfall-easy a[data-v-ded6b974] {
    display: block;
  }
}
</style>