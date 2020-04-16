<template>
  <div class="waterfall-container">
    <!-- height 溢出隐藏 -->
    <!-- height 内容撑开，有几列就生成几个 li , 每个 li 里面有多个 子布局 -->

    <ul class="waterfall-wrapper" ref="waterfall-wrapper">
      <li v-for="(col,index) in cols" :key="index" :style="{width:colWidth + 'px'}">
        <!-- 把插槽的内容放到最小高度的列 -->
        <slot v-if="index === minHeightIndex"></slot>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: ["cols", "gap"],
  data() {
    return {
      // 根据列数，生成一个高度列表，存放每一列的高度
      heightList: []
    };
  },
  computed: {
    colWidth() {
      // 计算每一列的宽度
      return (
        document.documentElement.clientWidth / this.cols - (this.cols - 1) * 10
      );
    },
    minHeightIndex() {
      // 计算出高度最低的列的索引
      let min = Math.min.apply(null, this.heightList);
      return this.heightList.indexOf(min);
    },
    resetHeightList() {
      return this.heightList.map((item, index) => {
        let height = parseFloat(
          window.getComputedStyle(
            this.$refs["waterfall-wrapper"].children[index]
          ).height
        );

        // 0  0,  0,1
        item = height;
        return item;
      });
    }
  },
  methods: {
    initHeightList() {
      for (let i = 0; i < this.cols; i++) {
        this.heightList.push(0);
      }
    }
  },
  created() {
    // 初始化最小高度
    this.initHeightList();
  },
  mounted() {
    //重新统计列表的高度
    // this.heightList = this.resetHeightList;
    console.log(this.resetHeightList);
  }
};
</script>

<style lang="scss" scoped>
.waterfall-container {
  .waterfall-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      background-color: #ccc;
    }
  }
}
</style>