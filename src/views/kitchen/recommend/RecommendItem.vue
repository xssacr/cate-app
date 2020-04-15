<template>
  <div class="rec-item-container"></div>
</template>

<script>
export default {
  data() {
    return {
      height: Math.floor(Math.random() * 100 + 100)
    };
  },
  mounted() {
    this.$el.style.height = this.height + 'px';
  }
};
</script>

<style lang="scss" scoped>
.rec-item-container {
  width: 48%;
  // height: 200px;
  margin-bottom: 5px;
  background-color: #ccc;
  position: relative;
}
</style>