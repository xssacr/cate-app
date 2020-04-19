<template>
  <div class="discover-container">
    <!-- 征集 -->
    <div class="collect-wrapper" ref="collect-wrapper">
      <div class="collect-con">
        <CollectItem v-for="i in 10" :key="i" />
      </div>
    </div>

    <!-- tags -->
    <div class="collect-tags" ref="collect-tags">
      <div class="collect-con">
        <div class="tag-item" v-for="(tag,tagIndex) in tags" :key="tagIndex">{{tag}}</div>
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
      requestUrl: "/api/recommend/getlist",
      tags: ["早餐", "泡面", "火锅", "囤菜", "种菜", "玩牛面", "午餐", "晚餐"]
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
      this.collectScroll.on("scrollEnd", position => {
        if (position.x === this.collectScroll.maxScrollX) {
          console.log("滑动到最后了");
          this.$router.push("/collectlist");
        }
      });

      this.tagsScroll = new BScroll(this.$refs["collect-tags"], {
        probeType: 3,
        scrollX: true
      });

      this.tagsScroll.on("scroll", () => this.scrollHandler());
    },
    scrollHandler() {
      if (
        this.collectScroll.x === this.collectScroll.minScrollX &&
        this.tagsScroll.x === this.tagsScroll.minScrollX
      ) {
        this.SET_SWIPEABLE(true);
      } else {
        this.SET_SWIPEABLE(false);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
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
    margin: 5px 0 15px 10px;
    box-sizing: border-box;
    width: 100%;
    .collect-con {
      display: inline-block;
      white-space: nowrap;
    }
  }

  .collect-tags {
    height: 30px;
    margin : 0 0 10px 10px;
    overflow: hidden;
    .collect-con {
      display: inline-block;
      white-space: nowrap;
      .tag-item {
        width: 45px;
        height: 25px;
        border-radius: 5px;
        display: inline-block;
        margin-right: 5px;
        text-align: center;
        line-height: 26px;
        font-size: 12px;
        font-weight: bold;
        color: #555;
        border: 1px solid #f1f1f1;
      }
    }
  }

  .discover-list {
    flex: 1;
  }
}
</style>