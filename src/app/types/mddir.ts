/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 18:48:59
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 19:32:14
 * @Description: file content
 */
export type MDDir = {
    picpath: string,
    name: string,
    children: Array<string>
}

export type MDFile = {
    path: string,
    name: string
}