import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authority from '../views/Authority.vue'
import Login from '../views/Login.vue'

import Kitchen from '../views/kitchen/Kitchen.vue';
import Attention from '../views/kitchen/attention/Attention.vue';
import Recommend from '../views/kitchen/recommend/Recommend.vue';
import Discover from '../views/kitchen/discover/Discover.vue';
import Fair from '../views/fair/Fair.vue';
import ClassRoom from '../views/classroom/ClassRoom.vue';
import Collect from '../views/collect/Collect.vue';
import Profile from '../views/profile/Profile.vue';

Vue.use(VueRouter)

const routes = [
  // 访问 / 时跳转到 推荐
  {
    path: '/',
    redirect: '/home/kitchen/recommend'
  },
  {
    // 首页
    path: '/home',
    component: Home,
    children: [
      {
        // 厨房
        path: 'kitchen',
        component: Kitchen,
        redirect: '/home/kitchen/recommend',
        children: [
          {
            // 关注
            path: 'attention',
            component: Attention
          },
          {
            // 推荐 (网页第一次加载时跳转到这里)
            path: 'recommend',
            component: Recommend
          },
          {
            // 发现
            path: 'discover',
            component: Discover
          }
        ]
      },
      {
        // 市集
        path: 'fair',
        component: Fair
      },
      {
        // 课堂
        path: 'classroom',
        component: ClassRoom
      },
      {
        // 收藏
        path: 'collect',
        component: Collect
      },
      {
        // 我的
        path: 'profile',
        component: Profile
      }
    ]
  },
  {
    // 没有权限
    path: '/authority',
    component: Authority
  }
  ,
  {
    // 登录
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
