import Mock from 'mockjs'

import './kitchen.js';
import './category.js'

// 设置数据有一个1到2秒的延迟
Mock.setup({
  timeout: '200-500'
})