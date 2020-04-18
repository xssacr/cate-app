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

let attentionList = Mock.mock({
  'datalist|13': [{  // 
    'id|+1': 1,
    profile_src: Random.image('50x50', '@color()', '#fff', 'png'),
    uname: '@ctitle(4,6)',
    'imgArr|1-10': [
      Random.image('375x200', '@color()', '#fff', 'png')
    ],
    likenum: '@natural(1,9999)',
    commentnum: '@natural(1,9999)',
    collectnum: '@natural(1,9999)',
    'tags|1-4': ['@ctitle(2,6)'],
    intro: '@csentence(20,100)',
    date: '@natural(1,9)',
    'commentinfos|1-2': [{
      'id|+1': 1,
      profile_src: Random.image('50x50', '@color()', '#fff', 'png'),
      uname: '@ctitle(2,6)',
      message: '@csentence(10,20)',
      date: Random.date('yyyy-MM-dd HH:ss:mm')
    }]
  }]
})



// 关注数据接口
Mock.mock('/api/attention/getlist', "post", options => {
  let { pageno, pagesize } = JSON.parse(options.body);

  let startIndex = (pageno - 1) * pagesize;
  let endIndex = startIndex + pagesize;

  let result = attentionList.datalist.slice(startIndex, endIndex);
  return {
    code: 1,
    datalist: result
  };

})