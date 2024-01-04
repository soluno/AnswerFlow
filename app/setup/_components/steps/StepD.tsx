import Image from "next/image";
import Link from "next/link";
import React from "react";
type props = { handleNext: () => void };
function StepD({ handleNext }: props) {
  return (
    <div className="absolute left-0 h-screen flex justify-center items-center w-full flex-col ">
      <form className="flex flex-col justify-around items-center w-[500px] h-full">
        <Image src={"/logo.svg"} width={250} height={60} alt="logo png" />
        <div className="flex flex-col gap-3">
          <label htmlFor="APIKey" className="font-medium">
            OpenAI API Key
          </label>
          <input
            type="text"
            id="APIKey"
            required
            placeholder="Paste your key here"
            className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
          />
          <p className="text-[#909090]">
            <Link href={"/"} className="text-[#518EF8] text-[14px]">
              Learn more
            </Link>{" "}
            about how you can get your OpenAI API Key
          </p>
        </div>

        <div className="flex justify-center items-center flex-col gap-4">
          <button className="btn sec flex !justify-around" onClick={handleNext}>
            <p>Next</p>
            <Image
              src={"/rightarrow.png"}
              width={8}
              height={8}
              alt="rightarrow png"
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepD;
