import Image from "next/image";
import Link from "next/link";
import React from "react";
type props = { handleNext: () => void };
function StepA({ handleNext }: props) {
  return (
    <div className="absolute left-0 h-screen flex justify-center items-center w-full">
      <div className="bg-3"></div>
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-[64px] font-normal leading-[74px]">
          Embrace the future of <br /> Custom AI Bots
        </h1>
      </div>
      <div className="h-full w-[30%] bg-[#0B0B0B] px-20 py-30 flex flex-col justify-center items-center gap-20">
        <Image src={"/logo.svg"} width={250} height={60} alt="logo png" />
        <form className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
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
              required
              placeholder="Enter your password"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            <button className="btn sec" onClick={handleNext}>
              Login
            </button>
            <p className="text-[#518EF8]">
              New Here? <Link href={"/"}>Create an Account</Link>
            </p>
          </div>
          <span className="bg-[#252525] h-[1px] w-full" />
        </form>
        <div className="w-full">
          <button className="btn prim !w-full flex gap-4">
            <Image
              src={"/google.png"}
              width={20}
              height={20}
              alt="google png"
            />
            <p>Signup with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepA;
