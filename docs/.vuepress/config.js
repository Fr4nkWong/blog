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
      {text: '运维', link: '/tech/devops/' },
      {text: '算法', link: '/tech/algorithm/' },
      {text: '软件工程', link: '/tech/software_engineering/' },
      {text: 'Me', link: '/about/'}      
    ],
    sidebar: {
      '/about/': [
        ''
      ],
      '/tech/front_end/': [
        '',
        {
          title: 'Javascript',   
          path: '/tech/front_end/js/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
        {
          title: 'CSS',   
          path: '/tech/front_end/css/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
        {
          title: 'HTML',   
          path: '/tech/front_end/html/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        }
      ],
      '/tech/algorithm/': [
        '',
        {
          title: '数据科学',   
          path: '/tech/algorithm/data_science/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
        {
          title: '机器学习',   
          path: '/tech/algorithm/machine_learning/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
      ],
      '/tech/devops/': [
        '',
        {
          title: 'Linux',   
          path: '/tech/devops/linux/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
        {
          title: 'MySQL',   
          path: '/tech/devops/database/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
        {
          title: 'Docker',   
          path: '/tech/devops/docker/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
        {
          title: 'Nginx',   
          path: '/tech/devops/nginx/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
        {
          title: 'Git',   
          path: '/tech/devops/git/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
      ],
      '/tech/software_engineering/': [
        '',
        {
          title: 'Git',   
          path: '/tech/devops/git/',     
          collapsable: true, 
          sidebarDepth: 2, 
          children: [
            '/'
          ]
        },
      ],
      '/': [
        ''
      ]
    }
  },
  evergreen: true
};
