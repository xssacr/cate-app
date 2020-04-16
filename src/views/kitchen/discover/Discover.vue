<template>
  <div class="discover-container">
    <WaterFall :cols="2" gap="4">

      <!-- 每个item -->
      <ListItem v-for="i in 2" :key="i">
        <template #right-icon>
          <i class="iconfont icon-praise"></i>
        </template>
      </ListItem>

    </WaterFall>
  </div>
</template>

<script>
import WaterFall from "../../../components/WaterFall";
import ListItem from "../../../components/ListItem";
export default {
  components: {
    WaterFall,
    ListItem
  }
};
</script>

<style lang="scss" scoped>
</style>