/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-17 22:48:49
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-17 23:05:20
 * @Description: file content
 */
import Signin from "@/app/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
