"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
function Page() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const signUpWithGoogle = () => {
    signIn("google", { callbackUrl: "/setup" });
  };
  const signUp = async (email: string, password: string) => {
    await signIn("credentials", {
      redirect: true,
      email: email,
      password: password,
      callbackUrl: "/setup",
    });
  };
  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    signUp(formData.email, formData.password);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };
  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };
  const session = useSession();
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
        <form className="flex flex-col gap-10 w-full" onSubmit={onSubmitHandle}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.password}
              onChange={handleInputChange2}
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
        <div className="w-full">
          {session.status !== "unauthenticated" ? (
            <button
              onClick={() => {
                signOut();
              }}
              className="btn prim !w-full flex gap-4"
            >
              <Image
                src={"/google.png"}
                width={20}
                height={20}
                alt="google png"
              />
              <p>log out with Google</p>
            </button>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
