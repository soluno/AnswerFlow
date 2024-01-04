import Image from "next/image";
import Link from "next/link";
import React from "react";
type props = { handleNext: () => void };

function StepE({ handleNext }: props) {
  return (
    <div className="absolute left-0 h-screen flex justify-center items-center w-full">
      <form className="flex flex-1 flex-col justify-between h-full items-start w-full px-20 py-20">
        <h1 className="text-[40px] font-bold">Create a Bot</h1>
        <div className="w-[460px] flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="botName" className="font-medium">
              Bot Name
            </label>
            <input
              type="text"
              id="botName"
              required
              placeholder="Enter a name. Eg: Customer Support"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="botPurpose" className="font-medium">
              Bot Purpose
            </label>
            <textarea
              id="botPurpose"
              required
              placeholder="A customer support agent for a saas company that operates in healthcare market"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none min-h-[140px]  max-h-[240px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="toneOfVoice" className="font-medium">
              Tone Of Voice
            </label>
            <input
              type="text"
              id="toneOfVoice"
              required
              placeholder="Select an option"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <button
            className="btn sec flex !justify-around "
            onClick={handleNext}
          >
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
      <div className="h-full w-[30%] bg-[#0B0B0B] px-20 py-30 flex flex-col justify-center items-center gap-20"></div>
    </div>
  );
}

export default StepE;
