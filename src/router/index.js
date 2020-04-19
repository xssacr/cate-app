import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authority from '../views/Authority.vue'
import Login from '../views/Login.vue'

import Kitchen from '../views/kitchen/Kitchen.vue';
import Fair from '../views/fair/Fair.vue';
import ClassRoom from '../views/classroom/ClassRoom.vue';
import Enshrine from '../views/enshrine/Enshrine.vue';
import Profile from '../views/profile/Profile.vue';
import CollectList from '../views/kitchen/discover/CollectList.vue'

Vue.use(VueRouter)

const routes = [
  // 访问 / 时跳转到 推荐
  {
    path: '/',
    redirect: '/home/kitchen'
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
        path: 'enshrine',
        component: Enshrine
      },
      {
        // 我的
        path: 'profile',
        component: Profile
      }
    ]
  },
  {
    path: '/collectlist',
    component: CollectList
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
