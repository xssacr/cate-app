// 推荐 列表的数据接口

import Mock from 'mockjs';
let Random = Mock.Random;

let recommendlist = []

function initRecommendList() {
  for (let i = 0; i < 100; i++) {
    recommendlist.push(Mock.mock({
      id:'@increment()',
      profile_src: "@image(50x50,@color,#fff,png,@word)",
      title: '@ctitle(10,30)',
      uname: '@ctitle(4,10)',
      lovenum: '@natural(1,1000)',
      src: "@image(300x" + Math.floor(Math.random() * 400 + 200) + ",@color,#fff,png,@word)"
    }))
  }
}

initRecommendList();

Mock.mock('/api/recommend/getlist', "post", options => {
  let { group } = JSON.parse(options.body);
  
  let startIndex = (group - 1) * 10;
  let endIndex = startIndex + 10;
  let result = recommendlist.slice(startIndex, endIndex)

  return {
    code: 1,
    datalist: result
  };

})

let attentionList = Mock.mock({
  'datalist|100': [{
    'id|+1': 1,
    profile_src: "@image(50x50,@color,#fff,png,@word)",
    uname: '@ctitle(4,10)',
    'imgArr|1-10': [
      "@image(375x200,@color,#fff,png,@word)"
    ],
    likenum: '@natural(1,9999)',
    commentnum: '@natural(1,9999)',
    collectnum: '@natural(1,9999)',
    'tags|1-4': ['@ctitle(2,6)'],
    intro: '@csentence(20,100)',
    date: '@natural(1,9)',
    'commentinfos|1-2': [{
      'id|+1': 1,
      profile_src: "@image(50x50,@color,#fff,png,@word)",
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