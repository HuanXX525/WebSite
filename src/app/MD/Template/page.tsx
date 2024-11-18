/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 20:41:20
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 21:39:40
 * @Description: file content
 */

import { getFilesInDir } from "@/app/components/MDX/dirdata";
import MDList from "@/app/components/MDX/mditem";
import { Metadata } from "next";
// import { usePathname } from "next/navigation";
export const metadata: Metadata = {
  title: "MDX Test Page",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const pathUrl = "Template"; // 获取当前的URL部分,用于判断当前是正在那个页面
const root = "./src/app/MD/";
const mdfiles = getFilesInDir(root + pathUrl+"/md/md/");
const MDLIST = async () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
          <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {mdfiles.map((mddir, key) => (
              <MDList key={key} mdlist={mddir} url={pathUrl} />
            ))}
            </div>
          </div>
      </section>
    </>
  )
}

export default MDLIST;