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
    // aside，设定为false将关闭右侧栏，文档内容会填充剩余空白部分
    aside: true,
    // outline设置为deep可以解析2-6层深度的标题嵌套
    outline: 'deep',
    // 暂时没发现这个属性有啥用
    outlineBadges: true,
    // 设置所有aside的标题
    outlineTitle: 'kk',
  },
}
