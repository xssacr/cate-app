<template>
  <div class="headerbar-container">
    <!-- 左侧内容 -->
    <slot class="header-left" name="left-slot"></slot>
    <!-- 中间搜索框 -->
    <div v-if="title" class="title-txt">{{title}}</div>
    <div v-else class="header-input-full-style">
      <i class="iconfont icon-search"></i>
      <input class="search-input" type="text" :placeholder="message" />
      <i class="iconfont icon-voice"></i>
    </div>
    <!-- 右侧内容 -->
    <slot class="header-right" name="right-slot"></slot>
  </div>
</template>

<script>
export default {
  props: ["message", "title"]
};
</script>

<style lang="scss" scoped>
.headerbar-container {
  display: flex;
  align-items: center;
  height: 48px;
  span {
    width: 48px;
    height: 100%;
    display: flex;
    i {
      margin: auto;
      font-size: 18px;
    }
  }
  .header-input-full-style {
    flex: 1;
    background-color: #d9d9d9;
    border-radius: 4px;
    height: 40px;
    display: flex;
    text-align: center;
    line-height: 40px;
    i {
      width: 40px;
      height: 100%;
      align-self: center;
      font-size: 18px;
      color: #555;
    }
    .search-input {
      flex: 1;
      font-size: 18px;
      color: #555;
      background-color: #d9d9d9;
      border: 0;
    }
  }

  .title-txt {
    flex: 1;
    height: 100%;
    line-height: 48px;
    text-align: center;
    font-size: 20px;
  }
}
</style>