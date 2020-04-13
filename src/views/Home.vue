<template>
  <div class="home">
    <header></header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/home/kitchen">下厨房</router-link>
      <router-link to="/home/fair">市集</router-link>
      <router-link to="/home/classroom">课堂</router-link>
      <router-link to="/home/collect">收藏</router-link>
      <router-link to="/home/profile">我的</router-link>
    </footer>
  </div>
</template>

<script>
</script>
