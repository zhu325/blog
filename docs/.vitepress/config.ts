import { backendNav } from './backend'
import { gitSidebar } from './backend/gitSidebar'
import { nestjsSidebar } from './backend/nestjsSiderbar'
import { nginxSidebar } from './backend/nginxSidebar'
import { frontendNav } from './frontend'
export default {
  base: '/blog/',
  title: 'kkzzyyt的个人记录',
  description: 'Talk is cheap, show me your code.',
  themeConfig: {
    siteTitle: '📝 code',
    logo: '/img/logo.png',
    nav: [
      {
        text: '首页',
        link: '/index',
      },
      frontendNav,
      backendNav,
    ],
    sidebar: {
      // 前端
      // 后端
      '/backend/nestjs/': nestjsSidebar,
      '/backend/nginx/': nginxSidebar,
      '/backend/gitLearn/': gitSidebar,
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhu325',
      },
    ],
  },
}
