/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-17 23:14:07
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 17:22:50
 * @Description: file content
 */
export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  // submenu?: Menu[];
};
