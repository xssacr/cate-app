<template>
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
</template>

<script>
import ListItem from "./ListItem";
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  props: ["url"],
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
        .post(this.url, {
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
    ListItem,
    vueWaterfallEasy
  },
  created() {
    this.getData();
  }
};
</script>

<style>
</style>