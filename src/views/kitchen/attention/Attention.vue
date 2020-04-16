<template>
  <div class="attention-wrap" ref="attention-wrap">
    <div class="attention-container">
      <AttentionItem v-for="item in datalist" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import AttentionItem from "../../../components/AttentionItem";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
BScroll.use(Pullup);
BScroll.use(PullDown);
export default {
  data() {
    return {
      pageno: 1,
      pagesize: 3,
      datalist: [],
      isEnd: false
    };
  },
  components: {
    AttentionItem
  },
  methods: {
    async getlist() {
      if (this.isend) {
        this.$toast.fail("没有更多的数据了");
        // this.scroll.finishPullUp();
        return;
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });

      let rs = await this.$http.post("/api/attention/getlist", {
        pageno: this.pageno,
        pagesize: this.pagesize
      });

      if (rs.data.code === -1) {
        // 没有更多数据了
        this.isEnd = true;
        return;
      }

      // 如果是第一次请求数据，就直接赋值给 datalist
      if (this.pageno === 1) {
        this.datalist = rs.data.datalist;
      } else {
        // 否则需要添加追加
        this.datalist.push(...rs.data.datalist);
        this.scroll.refresh();
      }

      this.$nextTick(() => {
        this.initScroll();
        // this.scroll.finishPullUp();
      });
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs["attention-wrap"], {
        probeType: 3,
        scrollY: true,
        click: true,
        pullUpLoad: true
      });

      this.scroll.on("pullingUp", () => {
        this.pageno++;
        this.getlist();
      });
    }
  },
  created() {
    this.getlist();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.attention-wrap {
  height: 100%;
  overflow: hidden;
}
</style>