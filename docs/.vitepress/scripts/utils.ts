// const path = require('path')
// const fs = require('fs')
import path from "path";
import fs from "fs";
import { EOL } from "os";
//递归获取指定目录下的所有指定后缀名文件列表
export const walk = function (dirPath, subDir = "") {
  let results: Record<string, any> = [];
  const dirents = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const dirent of dirents) {
    if (dirent.name.includes(".md")) {
      results.push(dirent.name);
    }
  }
  const tempPath = dirPath.replace("docs", "");
  const items = results
    .filter((item) => {
      return !item.includes("index.md");
    })
    .map((item) => {
      return {
        text: path.basename(item, ".md"),
        link: tempPath + "/" + item,
      };
    })
    .sort((a, b) => {
      const index1 = Number(a.text.split(".")[0]);
      const index2 = Number(b.text.split(".")[0]);
      return index1 - index2;
    });

  const sidebar = {
    text: subDir ?? "默认值",
    collapsible: true,
    collapsed: false,
    items: items,
  };

  // console.log(JSON.stringify(sidebar), "sidebar");

  return JSON.stringify(sidebar);
};

// 设置一个基础目录，所有操作都相对于这个目录
const base = "./docs/";

function traverseDirectoriesSync(dirPath, depth, currentDepth = 1) {
  if (currentDepth >= depth) {
    return [];
  }

  let items: any[] = [];
  const dirents = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const dirent of dirents) {
    if (currentDepth === depth - 1) {
      createSidebar(dirPath + "/" + dirent.name, dirent.name);
    }
    if (dirent.isDirectory()) {
      const subDirPath = path.join(dirPath, dirent.name);
      const tempPath = subDirPath.replace("docs", "");
      if (currentDepth === depth - 1) {
        const item = {
          text: dirent.name,
          link: tempPath + "/",
        };
        items.push(item);
      } else {
        const subItems = traverseDirectoriesSync(
          subDirPath,
          depth,
          currentDepth + 1
        );
        const item = {
          text: dirent.name,
          items: subItems,
        };
        items.push(item);
      }
    }
  }

  return items;
}

export function createDirectoryStructure(relativeDirName) {
  // 使用 path.join 来确保路径正确处理，这里的路径都是相对于 base 的
  const fullPath = path.join(base, relativeDirName);
  const items = traverseDirectoriesSync(fullPath, 3);

  //添加sidebar
  console.log(
    JSON.stringify({
      text: path.basename(fullPath),
      items: items,
    })
  );

  return {
    text: path.basename(fullPath),
    items: items,
  };
}

function createSidebar(dirPath, dirName) {
  // 使用 path.join 来确保路径正确处理，这里的路径都是相对于 base 的
  const fullPath = path.join(base, ".vitepress/sidebar.ts");
  const source = fs.readFileSync(fullPath, "utf8");
  let tempPath = dirPath.replace("docs", "");
  const data = source.split(/\r?\n/gm).filter((c) => {
    return !c.includes(tempPath) && c.trim() !== "";
  });
  const sem = data.pop();
  const line = `"${tempPath}":[${walk(dirPath, dirName)}]`;
  console.log(JSON.stringify(line), "line");
  data.push(line);
  data.push(sem);
  console.log(data, "data");

  // fs.writeFileSync(fullPath, data.join(EOL));
  // console.log(source, "source");
}
