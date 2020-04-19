<template>
  <div class="item-container">
    <div class="van-multi-ellipsis--l2 title">{{data.title}}</div>
    <van-row type="flex" justify="space-between">
      <van-col span="4" align="center">
        <img
          class="user-icon"
          :src="data.profile_src"
          alt
        />
      </van-col>
      <van-col span="10">
        <span class="nick-name">{{data.uname}}</span>
      </van-col>
      <van-col span="10" class="praise">
        <slot name="right-icon"></slot>
        <span>{{data.lovenum}}</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.item-container {
  & > img {
    width: 100%;
    height: 200px;
  }
  .title {
    font-size: 15px;
    font-weight: bold;
  }
  .user-icon {
    width: 24px;
    border-radius: 50%;
  }

  .nick-name {
    font-size: 14px;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 28px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .praise {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }
}
</style>