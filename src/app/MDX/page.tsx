/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 18:06:51
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 19:45:58
 * @Description: file content
 */
import { Metadata } from "next";
import MDDirList from '../components/MDX/dirdata';
import MDdir from '../components/MDX/mddir';
export const metadata: Metadata = {
  title: "MDX Test Page",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const MDXPage = async () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
          <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {MDDirList.map((mddir, key) => (
              <MDdir key={key} mddir={mddir} />
            ))}
            </div>
          </div>
      </section>
    </>
  )
}

export default MDXPage;