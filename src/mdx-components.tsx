/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 11:10:01
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 11:59:23
 * @Description: file content
 */
import type { MDXComponents } from "mdx/types";
import Button from "@/app/components/mycomponents/button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="text-3xl font-bold">{props.children}</h1>,
    Button,
  };
}
