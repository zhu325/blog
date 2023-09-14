---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: kkzzyt
  text: 记录学习笔记 🃏
  tagline: coder diary
  image:
    src: /logo.png
    alt: kkzzyt
  actions:
    - text: 前端导航
      link: /
      theme: alt
    - text: Nest学习
      link: /backend/nestjs/
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /
    linkText: 前端常用知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /
    linkText: 源码阅读
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: /
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
