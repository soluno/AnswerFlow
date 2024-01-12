"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type props = { handleNext: () => void };
type YourPlanType = {
  plan: "basic" | "starter" | "pro";
  method: "monthly" | "annual";
};
function StepB({ handleNext }: props) {
  const [planFromLocal, setPlanFromLocal] = useState<YourPlanType | null>(null);
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("plan");
      if (storedPlan) {
        const parsedPlan = JSON.parse(storedPlan);
        setPlanFromLocal(parsedPlan);
      }
    } catch (error) {
      console.error("Error while retrieving plan from local storage:", error);
    }
  }, []);
  const currentDate = new Date();
  let formattedDate;

  if (planFromLocal?.method == "annual") {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  } else {
    currentDate.setMonth(currentDate.getMonth() + 1);
    formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-6">
      <Image
        src={"/Payment Success.png"}
        width={320}
        height={320}
        alt="PaymentSuccess png"
      />
      <h1 className="text-[64px] font-normal">Hoorah, Welcome to AnswerFlow</h1>
      <p className="text-[#606060] font-normal text-[24px]">
        Congratulations! You’re Subscription for the Starter Plan in now active.{" "}
        <br />
        Your plan will be automatically renewed on{" "}
        <span className="text-[#A595FA]">{formattedDate}</span>.
      </p>
      <button className="btn sec flex !justify-around" onClick={handleNext}>
        <p>Get Started</p>
        <Image
          src={"/rightarrow.png"}
          width={8}
          height={8}
          alt="rightarrow png"
        />
      </button>
    </div>
  );
}

export default StepB;
