<template>
  <div class="category-container">
    <HeaderBar title="菜谱分类">
      <!-- 左侧图标 -->
      <template #left-slot>
        <span>
          <i class="iconfont icon-back" @click="$router.go(-1)"></i>
        </span>
      </template>

      <!-- 右侧图标 -->
      <template #right-slot>
        <span></span>
      </template>
    </HeaderBar>

    <div class="category-wrapper" ref="category-wrapper">
      <div class="category-con">
        <div v-for="obj in datalist" :key="obj.id">
          <h2>{{obj.name}}</h2>
          <div class="category-item">
            <div v-for="item in obj.items" :key="item.id">
              <img :src="item.icon" alt />
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from "../../../components/HeaderBar";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      datalist: []
    };
  },
  components: {
    HeaderBar
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs["category-wrapper"], {
        probeType: 3,
        scrollY: true,
        click: true
      });
      console.log(this.scroll);
    }
  },
  async created() {
    let rs = await this.$http.get("/api/cate/categorylist");
    this.datalist = rs.data.datalist;

    this.$nextTick(() => {
      this.initScroll();
    });
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.category-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .category-wrapper {
    flex: 1;
    padding: 0 10px;
    margin-top: 8px;
    overflow: hidden;
    .category-con {
      h2 {
        font-size: 18px;
        font-weight: bold;
        line-height: 44px;
      }
      .category-item {
        overflow: hidden;
        div {
          float: left;
          width: 80px;
          height: 80px;
          background-color: #fff;
          margin: 4.3px;
          border-radius: 5px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
          span {
            display: block;
            height: 30px;
            width: 100%;
            position: absolute;
            bottom: 0px;
            text-align: center;
            line-height: 30px;
            color: #fff;
            background: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
}
</style>