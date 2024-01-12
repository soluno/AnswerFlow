"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { signIn, signOut } from "next-auth/react";
import { toast } from "sonner";
import { usePlan } from "@/hooks/use-plan-hook";

function Page() {
  const signUpWithGoogle = () => {
    signIn("google", { callbackUrl: "/setup" });
  };

  // const signUp = async (email: string, password: string) => {
  //   const response = await signIn("email", {
  //     redirect: false,
  //     email: email,
  //     password: password,
  //     callbackUrl: "/setup",
  //   });
  //   console.log(response);
  //   if (response?.ok) {
  //     toast("verify your email");
  //   }
  // };

  return (
    <div className="absolute left-0 h-screen flex justify-center items-center w-full">
      <div className="bg-3"></div>
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-[64px] font-semibold leading-[74px]">
          Embrace the future of <br /> Custom AI Bots
        </h1>
      </div>

      <div className="h-full min-w-[33%] bg-[#0B0B0B] px-20 py-30 flex flex-col justify-center items-center gap-20">
        <Image src={"/logo.svg"} width={250} height={60} alt="logo png" />
        {/* credentials sign in */}
        <form className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your work email"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            <button className="btn sec">Login</button>
            <p className="text-[#518EF8]">
              New Here? <Link href={"/signup"}>Create an Account</Link>
            </p>
          </div>
          <span className="bg-[#252525] h-[1px] w-full" />
        </form>
        {/* google sign in */}
        <div className="w-full">
          <button
            onClick={signUpWithGoogle}
            className="btn prim !w-full flex gap-4"
          >
            <Image
              src={"/google.png"}
              width={20}
              height={20}
              alt="google png"
            />
            <p>Sign up with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
