<template>
  <div class="item-container">
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586979676468&di=31bd9ffc3443dd2ee8616f64c9ee1438&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffilebroker%2Fcdn%2Fvnd%2F8b%2Feb%2F8bebdd059ea86c9e7b057765b83ba502_w320_h240_c1_t0.jpg"
      alt
    />
    <h2>大龙虾爱神的箭阿喀琉斯的</h2>
    <van-row type="flex" justify="space-between">
      <van-col span="4" align="center">
        <img
          class="user-icon"
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2040892447,786614283&fm=26&gp=0.jpg"
          alt
        />
      </van-col>
      <van-col span="10">
        <span class="nick-name">飞天淘淘猪333</span>
      </van-col>
      <van-col span="10" class="praise">
        <slot name="right-icon"></slot>
        <span>7700</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  // props: ["width"]
};
</script>

<style lang="scss" scoped>
.item-container {
  background-color: pink;
  & > img {
    width: 100%;
    height: 200px;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 30px;
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