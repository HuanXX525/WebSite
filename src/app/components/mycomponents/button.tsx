/*
 * @Author: HuanXX shy2757539057@163.com
 * @Date: 2024-11-18 11:57:26
 * @LastEditors: HuanXX
 * @LastEditTime: 2024-11-18 11:57:29
 * @Description: file content
 */
const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="test-xs px-4 py-2 bg-zinc-950 text-white rounded-md">
      {children}
    </button>
  );
};

export default Button;
