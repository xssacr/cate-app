<template>
  <div class="attention-container">
    <AttentionItem v-for="item in datalist" :key="item.id" :item="item" />
  </div>
</template>

<script>
import AttentionItem from "../../../components/AttentionItem";
export default {
  data() {
    return {
      pageno: 1,
      pagesize: 10,
      datalist: []
    };
  },
  components: {
    AttentionItem
  },
  async created() {
    let rs = await this.$http.post("/api/attention/getlist", {
      pageno: this.pageno,
      pagesize: this.pagesize
    });
    this.datalist = rs.data.datalist;
  }
};
</script>

<style lang="scss" scoped>
.attention-container {
  overflow: hidden;
}
</style>