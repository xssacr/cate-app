<template>
  <div class="attention-wrap" ref="attention-wrap">
    <div class="attention-container">
      <AttentionItem v-for="item in datalist" :key="item.id" :item="item" />

      <div class="pullup-wrapper">
        <div class="before-trigger" v-if="isPullUpLoad">
          <van-loading color="#f78"></van-loading>
        </div>
        <div class="before-trigger" v-else>没有更多内容了呢...</div>
      </div>
    </div>
  </div>
</template>

<script>
import AttentionItem from "./AttentionItem";
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
BScroll.use(PullUp);
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      datalist: [],
      pageno: 1,
      pagesize: 5,
      isEnd: false,
      isPullUpLoad: true
    };
  },
  components: {
    AttentionItem
  },
  methods: {
    initScroll() {
      if (this.scroll) {
        this.scroll.refresh(); // 刷新 bsroll
        return;
      }

      this.scroll = new BScroll(this.$refs["attention-wrap"], {
        probeType: 3,
        scrollY: true,
        click: true,
        pullUpLoad: true
      });

      this.scroll.on("pullingUp", () => this.getAttentionList());

      this.scroll.on("refresh", () => {
        console.log("refresh已经调用");
      });
    },
    async getAttentionList() {
      if (this.isEnd) {
        this.isPullUpLoad = false;
        return;
      }
      let rs = await this.$http.post("/api/attention/getlist", {
        pageno: this.pageno,
        pagesize: this.pagesize
      });

      console.log("length : ", rs.data.datalist.length);
      // 判断返回数据的长度
      if (rs.data.datalist.length < this.pagesize) {
        this.isEnd = true;
      }

      // 如果不是第一次加载就把数据追加到原列表中
      if (this.pageno === 0) {
        this.datalist = rs.data.datalist;
      } else {
        this.datalist.push(...rs.data.datalist);
      }

      this.$nextTick(() => {
        // 初始化 betterscroll
        this.initScroll();
        this.scroll.finishPullUp();
        this.pageno++;
      });
    }
  },
  created() {
    // 页面第一次加载时，加载 <关注> 的数据
    this.getAttentionList();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.attention-wrap {
  height: 100%;
  overflow: hidden;
  .pullup-wrapper {
    padding: 20px;
    text-align: center;
    color: #999;
  }
}
</style>