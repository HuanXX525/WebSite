/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 19:10:08
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 20:40:42
 * @Description: file content
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MDDir } from "@/app/types/mddir"
const MDdir = ({ mddir }: { mddir: MDDir }) => {
  const { picpath, name } = mddir;
  const link = `/MD/${name}`;
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-gray-100 p-4 pb-9 shadow-xl dark:bg-blacksection"
      >
        <Link href={link} className="relative block aspect-[368/239]">
          <Image className="rounded-2xl" src={picpath} alt={name} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={link}>
              {`${name.slice(0, 40)}...`}
            </Link>
          
          </h3>
          {/* <p className="line-clamp-3">{metadata}</p> */}
        </div>
      </motion.div>
    </>        
    )
}

export default MDdir;