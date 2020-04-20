import Mock from 'mockjs';

Mock.mock('/api/cate/categorylist', "get", () => {
  return Mock.mock({
    'datalist|6': [
      {
        id: '@increment',
        name: '@cword(2,4)',
        'items|5-10': [
          {
            id: '@increment',
            name: '@cword(2,4)',
            icon: '@image(80x80,@color)'
          }
        ]
      }
    ]
  })
})