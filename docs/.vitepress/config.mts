import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'kkzzyt的blog',
  description: '第一次使用vitePress',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '快速搭建博客',
        link: '/1.使用vitepress快速搭建博客/1.使用vitepress快速搭建博客',
      },
    ],
    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/' },
      //     { text: 'Runtime API Examples', link: '/' },
      //   ],
      // },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zhu325' }],
  },
})
