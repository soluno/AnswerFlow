import { useFormContext } from "@/app/context/FormContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type props = { handleNext: () => void };
function StepC({ handleNext }: props) {
  const { formData, setOpenAiApiKey } = useFormContext();
  const session = useSession();

  const handleCreateUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (formData.openAiApiKey && session.data?.user) {
      e.preventDefault();
      const userDate = session.data?.user;
      try {
        const response = await fetch(
          `//ec2-13-127-192-129.ap-south-1.compute.amazonaws.com/update_user/${localStorage.getItem(
            "userId"
          )}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              openai_api_key: formData.openAiApiKey,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData.user.id);
      } catch (error) {
        console.error("Error:", error);
      }
      handleNext();
    }
  };
  return (
    <div className="h-screen flex justify-center items-center w-full flex-col ">
      <form className="flex flex-col justify-around items-center w-[500px] h-full">
        <Image src={"/logo.svg"} width={250} height={60} alt="logo png" />
        <div className="flex flex-col gap-3">
          <label htmlFor="APIKey" className="font-medium">
            OpenAI API Key
          </label>
          <input
            type="text"
            id="APIKey"
            value={formData.openAiApiKey}
            onChange={(e) => setOpenAiApiKey(e.target.value)}
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
          <button
            disabled={formData.openAiApiKey == ""}
            className={`btn sec flex !justify-around ${
              formData.openAiApiKey == "" && " opacity-50 cursor-not-allowed"
            }`}
            onClick={handleCreateUser}
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
    </div>
  );
}

export default StepC;
