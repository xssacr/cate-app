<template>
  <div class="discover-container">
    <!-- 征集 -->
    <div class="collect-wrapper" ref="collect-wrapper">
      <div class="collect-con">
        <CollectItem v-for="i in 10" :key="i" />
      </div>
    </div>
    <!-- 发现列表 瀑布流布局 -->
    <div class="discover-list">
      <WaterFall :url="requestUrl"></WaterFall>
    </div>
  </div>
</template>

<script>
import WaterFall from "../../../components/WaterFall";
import CollectItem from "../../../components/CollectItem";
import BScroll from "@better-scroll/core";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      requestUrl: "/api/recommend/getlist"
    };
  },
  components: {
    WaterFall,
    CollectItem
  },
  methods: {
    ...mapMutations(["SET_SWIPEABLE"]),
    initScroll() {
      this.collectScroll = new BScroll(this.$refs["collect-wrapper"], {
        probeType: 3,
        scrollX: true
      });

      this.collectScroll.on("scroll", () => this.scrollHandler());
      this.collectScroll.on('scrollEnd',position=>{
        if(position.x === this.collectScroll.maxScrollX){
          console.log('滑动到最后了')
          this.$router.push('/collectlist')
        }
      })
    },
    scrollHandler() {
      let minX = this.collectScroll.minScrollX;
      let currX = this.collectScroll.x;

      if (currX === minX) {
        this.SET_SWIPEABLE(true);
      } else {
        this.SET_SWIPEABLE(false);
      }

    }
  },
  mounted() {
    this.initScroll();
  }
};
</script>

<style lang="scss" scoped>
.discover-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .collect-wrapper {
    height: 100px;
    margin: 8px 0 15px;
    padding: 0 5px;
    box-sizing: border-box;
    width: 100%;
    .collect-con {
      display: inline-block;
      white-space: nowrap;
    }
  }
  .discover-list {
    flex: 1;
  }
}
</style>