import { useFormContext } from "@/app/context/FormContext";
import Image from "next/image";
import React from "react";
type props = { handleNext: () => void };

function StepD({ handleNext }: props) {
  const { formData, setBotName, setBotPurpose, setToneOfVoice } =
    useFormContext();

  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <form className="flex flex-1 flex-col justify-between min-h-screen  items-start w-full px-20 py-20">
        <h1 className="text-[40px] font-bold">Create a Bot</h1>
        <div className="w-[460px] flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="botName" className="font-medium">
              Bot Name
            </label>
            <input
              type="text"
              id="botName"
              value={formData.botName}
              onChange={(e) => {
                setBotName(e.target.value);
              }}
              required
              placeholder="Enter a name. Eg: Customer Support"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <label htmlFor="botPurpose" className="font-medium">
                Bot Purpose
              </label>
              <div className="relative group cursor-pointer">
                <Image src={"/info.png"} width={15} height={15} alt="info" />
                <div className="bg-[#424242] w-[240px] text-[12px] py-4 px-8 rounded-md absolute text-center bottom-[20px] left-[50%] translate-x-[-50%] invisible  group-hover:visible">
                  This helps us automatically fine tune the bots responses to
                  match your usecase
                </div>
              </div>
            </div>
            <textarea
              id="botPurpose"
              value={formData.botPurpose}
              onChange={(e) => {
                setBotPurpose(e.target.value);
              }}
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
              value={formData.toneOfVoice}
              onChange={(e) => {
                setToneOfVoice(e.target.value);
              }}
              required
              placeholder="Select an option"
              className="bg-[#232323] rounded-[10px] px-8 py-4 outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <button
            disabled={formData.openAiApiKey == ""}
            className={`btn sec flex !justify-around ${
              (formData.botName.length == 0 ||
                formData.botPurpose.length == 0 ||
                formData.toneOfVoice.length == 0) &&
              " opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (
                formData.botName ||
                formData.botPurpose ||
                formData.toneOfVoice
              ) {
                e.preventDefault();
                handleNext();
              }
            }}
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
      <div className="min-h-screen min-w-[33%] bg-[#0B0B0B] py-30 flex flex-col justify-center items-start gap-20">
        <h2 className="px-20 text-[#707070] text-[32px] font-bold">
          Setup Progress
        </h2>
        <div className="flex flex-col justify-center items-start gap-10 ">
          <div className="flex flex-col justify-start items-start gap-6 px-20">
            <p className="text-[#9D9D9D] uppercase ">1. basic settings</p>
            {formData.botName ? (
              <p className="text-[18px] h-[31px]">{formData.botName}</p>
            ) : (
              <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
            )}
          </div>
          <br />
          <div className="flex flex-col justify-start items-start gap-6 px-20">
            <p className="text-[#9D9D9D] uppercase">2. Data sources</p>
            <div className="flex flex-col gap-2">
              <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
              <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
              <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
            </div>
          </div>
          <br />
          <div className="flex flex-col justify-start items-start gap-6 px-20">
            <p className="text-[#9D9D9D] uppercase">3. create bot</p>
            <div className="flex flex-col gap-2">
              <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
              <div className="w-[341px] h-[31px] bg-[#1E1E1E] rounded"></div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default StepD;
