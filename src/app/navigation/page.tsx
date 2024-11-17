/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-17 20:24:31
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-17 21:45:46
 * @Description: file content
 */
import '@/app/globals.css' 
import Link from 'next/link';
/* 导入CSS */

export default function Page() {
  return (
      <nav className="p-2 w-full h-max bg-gradient-to-bl from-slate-800 to-sky-700 absolute top-0 left-0 mb-0 overflow-hidden">
        <div className='ml-auto mr-0 min-w-max'>
            <ul className='flex flex-row space-x-6 flex-wrap justify-end'>
                <li className='text-white hover:text-blue-500 text-2xl font-bold'>Home</li>
                <li className='text-white hover:text-blue-500 text-2xl font-bold'><Link href="/blog">Blog</Link></li>
                <li className='text-white hover:text-blue-500 text-2xl font-bold'>Test</li>
                <li></li>
            </ul>
        </div>
    </nav>
  );
}