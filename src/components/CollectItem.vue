<template>
  <div class="collect-item-container">
    <img src="http://img1.cache.netease.com/catchpic/F/FC/FCE68C680489F56530AA6DE7616FA808.jpg" alt />
    <div class="tag">征集中</div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style lang="scss" scoped>
.collect-item-container {
  width: 150px;
  height: 100px;
  position: relative;
  display: inline-block;
  margin: 0 5px;
  img {
    width: 100%;
    height: 100%;
  }
  .tag {
    width: 40px;
    height: 20px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    color: #555;
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-size: 12px;
  }
}
</style>