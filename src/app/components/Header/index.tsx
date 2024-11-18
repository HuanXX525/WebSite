"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname(); // 获取当前的URL部分,用于判断当前是正在那个页面

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) { // 根判断据下滚的像素
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    // 捕获屏幕滚动
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "backdrop-blur bg-whitet transition-all duration-300 !py-4 shadow dark:bg-blackt"
          : "transition-all duration-300 bg-white dark:bg-black"
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          {/* 头像 */}
          <a href="/" className="flex gap-4 items-center">
            <Image
              src="/images/pic/headpic.jpeg"
              alt="logo"
              width={40}
              height={40}
              // className="hidden w-full dark:block"
              className="w-full ring-4 rounded-full"
            />
            <span className="text-4xl text-black dark:text-white font-bold">Huanxx</span>
          </a>
          {/* 头像 */}

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "transition-all duration-300 navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-whitet p-7.5 shadow-solid-5 dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key}>
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        `font-bold text-lg ${pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"}`
                      }
                    >
                      {menuItem.title}
                    </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            {/* 显示模式切换 */}
            <ThemeToggler />
          
            {/* GitHub */}
            <Link
              target="blank"
              href="https://github.com/HuanXX525/website"
              className="text-regular font-medium text-waterloo hover:text-primary"
            >
              GitHub Repo 
            </Link>
            {/* GitHub仓库 */}
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
