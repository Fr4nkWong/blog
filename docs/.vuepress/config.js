module.exports = {
  title: 'Frank',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/frank.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/frank.png',  // 左上角logo
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '前端', link: '/tech/front_end/' },
      {text: '运维', link: '/tech/database/' },
      {text: '数据科学', link: '/tech/data_science/' },
      {text: '关于我', link: '/about/'}      
    ],
    sidebar: 'auto', // 侧边栏配置
  }
};