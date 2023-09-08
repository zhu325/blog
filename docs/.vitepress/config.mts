import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'kkzzyt的blog',
  description: '第一次使用vitePress',
  base: '/vitepress_blog/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '描述页面', link: '/' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/' },
          { text: 'Runtime API Examples', link: '/' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zhu325' }],
  },
})
