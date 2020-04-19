<template>
  <div>
    征集列表....
    <van-button @click="callbackHandler" type="success">callback</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    callbackHandler() {
      // 返回 之前的路由
      this.$router.go(-1)
    }
  }
};
</script>

<style>
</style>