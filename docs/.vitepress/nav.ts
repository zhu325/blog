import { createDirectoryStructure } from "./scripts/utils";

export default [
  createDirectoryStructure("前端小食堂"),
  {
    text: "后端自习室",
    activeMatch: "/backend/",
    items: [
      {
        text: "框架",
        items: [{ text: "NestJS", link: "/backend/nestjs/" }],
      },
      {
        text: "服务",
        items: [
          { text: "Nginx", link: "/backend/nginx/" },
          { text: "Git", link: "/backend/gitLearn/" },
        ],
      },
    ],
  },
  {
    text: "日常记录",
    activeMatch: "diary",
    items: [
      {
        text: "效率优化",
        items: [{ text: "zsh终端优化", link: "/diary/zsh/" }],
      },
    ],
  },
];
