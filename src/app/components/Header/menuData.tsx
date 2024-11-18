/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-17 22:48:35
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 18:20:37
 * @Description: file content
 */
import { Menu } from "@/app/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    path: "/MDX"
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
