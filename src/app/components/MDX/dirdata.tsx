/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 18:26:28
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 20:30:45
 * @Description: file content
 */
/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 18:26:28
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 19:07:33
 * @Description: file content
 */

import { MDDir, MDFile } from '@/app/types/mddir';
import fs from 'fs'
import Path from 'path' 
const path = "./public/MD/"

export function getFilesInDir(path:string):MDFile[] { // 获取文件
    const items = fs.readdirSync(path);
    const result = [];
    items.forEach(item => {
        let itemPath = `${path}/${item}`;
        const stat = fs.statSync(itemPath);
        itemPath = itemPath.substring("./public".length, itemPath.length);
        if (!stat.isDirectory()) {
            result.push({
                path: itemPath,
                name: item
            });
        }
    })
    return result;
}

export function getFoldersInDir(path): MDDir[] { // 获取文件夹
  const items = fs.readdirSync(path);
    const result = [];
    
  items.forEach(item => {
    const itemPath = `${path}${item}`;
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
        let data = {
        picpath : `${itemPath.substring("./public".length, itemPath.length)}/${item}.png`,
        name: item,
        children:[]
      }
      let children = getFilesInDir(itemPath)
        if (children && children.length) {
            children.forEach(
                child => {
                    if (Path.extname(child.name) === "mdx") {
                        data.children.push(child);
                    }
              }
          )
      }
      result.push(data);
    }
  });
  return result;
}

const MDDirList = getFoldersInDir(path);
// const MDDirList = [
//     {
//         picpath: "/images/pic/headpic.jpeg",
//         name: "test1",
//         children: ["1", "2"]
//     },
//     {
//         picpath: "/images/pic/headpic.jpeg",
//         name: "test2",
//         children: ["2", "3"]
//     }
// ];

export default MDDirList