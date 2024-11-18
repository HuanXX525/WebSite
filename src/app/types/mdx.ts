/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 18:14:39
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 18:14:57
 * @Description: file content
 */
// types/mdx.d.ts

declare module '*.mdx' {
  // 允许你在 TypeScript 中导入 MDX 文件
  const content: React.ComponentType<any>;
  export default content;
}
