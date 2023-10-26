import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="section mx-auto h-[70vh] flex flex-col justify-between items-start">
      <div className="flex w-full gap-40 justify-center lg:justify-start items-start py-[100px] flex-col md:flex-row lg:pl-[130px] p-4">
        <div className="flex flex-col gap-12">
          <h1 className=" font-bold text-2xl ">AnswerFlow</h1>
          <div className="flex flex-col gap-6 text-[#707070]">
            <Link href={"/"}>FAQs</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Write to us</Link>
            <Link href={"/"}>Refund Policy</Link>
            <Link href={"/"}>Terms & Conditions</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Security & Compliance</Link>
          </div>
        </div>
        <div className="flex flex-col gap-12  ">
          <h1 className="font-bold text-2xl">AnswerFlow</h1>
          <div className="flex flex-col gap-6 text-[#707070]">
            <Link href={"/"}>ChatGPT Bots for Sales Reports</Link>
            <Link href={"/"}>ChatGPT Bots for Customer Success</Link>
            <Link href={"/"}>ChatGPT Bots for Revenue Reports</Link>
            <Link href={"/"}>ChatGPT Bot for Company Wiki</Link>
            <Link href={"/"}>ChatGPT Bot for Business s</Link>
            <Link href={"/"}>ChatGPT Bot for Enterprises</Link>
            <Link href={"/"}>Custom ChatGPT Bot</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <h1 className="text-5xl sm:text-8xl md:text-[120px] xl:text-[180px] 2xl:text-[200px]  font-bold footerText">
          AnswerFlow
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
