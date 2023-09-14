import { backendNav } from './backend'
import { nestjsSidebar } from './backend/nestjsSidebar'
import { diaryNav } from './diary'
import { frontendNav } from './frontend'

export default {
  base: '/blog/',
  title: 'kkzzyyt的个人记录',
  description: 'Talk is cheap, show me your code.',
  themeConfig: {
    siteTitle: 'coder diary',
    logo: '/logo.png',
    nav: [
      {
        text: '首页',
        link: '/index',
      },
      frontendNav,
      backendNav,
      diaryNav,
    ],
    sidebar: {
      // 前端
      // 后端
      '/backend/nestjs/': nestjsSidebar,
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
    outlineTitle: '⚓️ 大纲',
  },
}
