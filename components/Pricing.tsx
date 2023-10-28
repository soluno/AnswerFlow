import React from "react";
import Image from "next/image";
import Link from "next/link";

function Pricing() {
  return (
    <section className="section relative flex justify-center flex-col gap-20 p-4 py-[140px]">
      <h1 className="text-[35px] md:text-[45px] font-bold">Pricing</h1>
      <div className="flex flex-col lg:flex-row gap-20 items-start justify-between w-[100%] md:w-[86%] mx-auto ">
        <div className="border-gad-1 flex-1 flex flex-col gap-10 w-full  ">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-[#A595FD] font-semibold uppercase text-[22px] ">
              Company
            </p>
            <p className="text-[#616161] text-[20px] ">
              <span className="text-[52px] font-bold text-white">
                $99<span className="text-[#616161]">/</span>
              </span>
              month
            </p>
            <p>Powered by GPT - 4</p>
          </div>
          <hr />
          <div className="flex flex-col gap-4 text-[#9D9D9D] text-[19px] ">
            <p>📄 100 Documents</p>
            <p>🔗 2 Links</p>
            <p>👨 1 Seat</p>
            <p>✅ Unlimited Chats</p>
            <p>💿 1 Database Connection </p>
            <p className="line-through">🧩 Third Party Integrations </p>
            <p className="line-through">🏛️ Private Cloud Hosting</p>
          </div>
          <div className=" flex flex-col gap-4 w-full">
            <Link
              href={"https://cal.com/srivatsa"}
              target="_blank"
              className="btn sec !w-full"
            >
              Book a Demo
            </Link>
            <Link
              href={"https://cal.com/srivatsa"}
              target="_blank"
              className="btn prim !w-full"
            >
              FAQs
            </Link>
          </div>
        </div>
        <div className="border-gad-1 flex  flex-col gap-6 flex-1  ">
          <h1 className="text-[#969696] text-[35px] md:text-[42px] font-bold">
            Enterprise?
          </h1>
          <p className=" text-[#9D9D9D] text-[16px] md:text-[19px] max-w-[70%]">
            Please write to us at{" "}
            <Link
              href={"mailto:team@answerflowai.com"}
              className=" text-[#A595FD]"
            >
              team@answerflowai.com
            </Link>{" "}
            Our senior executives will reachout to you asap!
          </p>
        </div>
      </div>
      <div className="border-gad-1 flex flex-col  items-center gap-4  ">
        <h1 className="text-[32px] leading-[32px] md:text-[48px] md:leading-[69px] font-bold text-center lg:max-w-[70%]">
          The Most Secure Way to Build Custom Bots for your Company
        </h1>
        <p className="text-[18px] font-normal md:text-[19px]  text-[#9D9D9D] lg:max-w-[60%] text-center pb-10">
          AnswerFlow AI is built with world-class security standards like SOC &
          GDPR. It runs on secure Microsoft Azure cloud and your data is never
          shared with LLM operators like OpenAI
        </p>

        <Link
          href={"https://cal.com/srivatsa"}
          target="_blank"
          className="btn sec"
        >
          Book a Demo
        </Link>
      </div>
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[100%] ">
        <Image src={"/div.png"} width={1200} height={220} alt="separator" />
      </div>
    </section>
  );
}

export default Pricing;
