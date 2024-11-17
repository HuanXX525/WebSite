/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-17 18:33:43
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-17 21:50:42
 * @Description: file content
 */
import Nav from '@/app/navigation/page'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Huanxx Bolg Home</title>
      </head>
      <body className="h-full w-full bg-gradient-to-b from-black from-80% to-gray-900 to-100%">
        <Nav />
        <main className=' w-full mt-20'>{children}</main>
      </body>
    </html>
  );
}
