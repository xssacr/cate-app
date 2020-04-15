// 推荐 列表的数据接口

import Mock from 'mockjs';
let Random = Mock.Random;

Mock.mock('/api/recommend/getlist', "post", options => {
  return Mock.mock({
    "recommendlist|10": [
      {
        'id|+1': 1,
        title: '@ctitle(10,30)',
        uname: '@ctitle(4,6)',
        lovenum: '@natural(1,1000)',
        src: Random.image('350x' + '@natural(200,600)', '@color()', '#fff', 'png', 'hello')
      }
    ]
  })
})