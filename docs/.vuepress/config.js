const {resolve} = require('path')
const r = path => resolve(__dirname, path)
module.exports = {
    title: '前端文档',
    description: '前端相关文档规范',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/fe-docs/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    configureWebpack:{
      resolve:{
        alias:{
          '@img': r('asset/img')
        }
      }
    },
    themeConfig: {
      nav:[ // 导航栏配置
        // {text: '前端基础', link: '/accumulate/' },
        // {text: '算法题库', link: '/algorithm/'},
        // {text: '微博', link: 'https://baidu.com'}  
        {text:'主页', link:'/'}    
      ],
      sidebar: ['/accumulate'], // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };