<template>
  <div class="kitchen-container">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/home/kitchen/attention">关注</router-link>
      <router-link to="/home/kitchen/recommend">推荐</router-link>
      <router-link to="/home/kitchen/discover">发现</router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>