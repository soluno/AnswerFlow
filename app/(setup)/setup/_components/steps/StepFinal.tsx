import { useFormContext } from "@/context/FormContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type props = { handleNext: () => void };
function StepFinal({ handleNext }: props) {
  const { resetFormData } = useFormContext();
  return (
    <div className="min-h-screen flex flex-col gap-10 text-center justify-center items-center ">
      <div className="">
        <Image src={"/favicon.png"} width={120} height={120} alt="logoDark" />
      </div>
      <div className="">
        <h2 className="font-bold text-[36px]">Sales Analysis Bot</h2>
        <p className="text-[#737373]  text-[20px]">
          Yahoo, your AnswerFlow AI Bot is up and running!
        </p>
      </div>
      <Link
        onClick={() => resetFormData()}
        href={`/user/${localStorage.getItem("userId")}`}
        className="btn sec"
      >
        Start Chatting
      </Link>
    </div>
  );
}

export default StepFinal;
