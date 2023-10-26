import Image from "next/image";
import React from "react";

function Steps() {
  return (
    <section className="steps">
      <div className="card">
        <div className="sticker -rotate-6 left-[60%]">
          <p>1</p>
        </div>
        <div className="py-14 px-8 bg-[#1c1b23] rounded-[10px] flex flex-col  gap-4 w-[100%] lg:w-[36%] ">
          <div className="inner-card-1 text-sm md:text-base">
            <h3 className="text-sm md:text-base">Add Data Source</h3>
            <Image
              src={"/downArrow.png"}
              alt="downArrow"
              width={40}
              height={40}
            />
          </div>
          <div className="inner-card-2 text-sm md:text-base">
            <div className="flex items-center justify-start flex-row gap-4">
              <Image src={"/Doc.png"} alt="downArrow" width={20} height={20} />
              <p>Document</p>
            </div>
            <div className="flex items-center justify-start flex-row gap-4">
              <Image
                src={"/Database.png"}
                alt="downArrow"
                width={20}
                height={20}
              />
              <p>Database</p>
            </div>
            <div className="flex items-center justify-start flex-row gap-4  ">
              <Image src={"/Link.png"} alt="downArrow" width={20} height={20} />
              <p>Link</p>
            </div>
            <div className="">...........</div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[100%] lg:w-[60%] items-center lg:items-start">
          <h1 className="text-[35px] md:text-[45px] font-bold ">
            Connect Data Sources
          </h1>
          <div className="text-[#9D9D9D] text-[16px] md:text-[22px] font-light flex flex-col gap-5">
            <p className="flex justify-start items-start gap-2">
              <span>01.</span>
              Signup & Create your Company’s <br /> Knowledge base. 100% NoCode!
            </p>
            <p className="flex justify-start items-start gap-2">
              <span>02.</span>
              Supports Documents, Excel Sheets,
              <br /> Databases, Links & 3rd party APIs.
            </p>
            <p className="flex justify-start items-start gap-2">
              <span>03.</span>Integrations Library
            </p>
          </div>
        </div>
        <div className="hidden absolute right-[50px] bottom-[60px] lg:flex gap-8 justify-center items-center">
          <Image src={"/GdprLock.png"} alt="downArrow" width={50} height={20} />
          <Image
            src={"/GdprLock2.png"}
            alt="downArrow"
            width={84}
            height={20}
          />
        </div>
      </div>
      <div className="card">
        <div className="sticker -rotate-2 left-[30%]">
          <p>2</p>
        </div>
        <div className="flex flex-col gap-8 w-[100%] lg:w-[60%] items-center lg:items-start ">
          <h1 className="text-[35px] md:text-[45px]  font-bold ">
            Onboard your Team
          </h1>
          <div className="text-[#9D9D9D] text-[16px] md:text-[22px] font-light flex flex-col gap-5">
            <p className="flex justify-start items-start gap-2">
              <span>01.</span>
              Invite your organization to access next-gen
              <br /> conversational bot trained on your data
            </p>
            <p className="flex justify-start items-start gap-2">
              <span>02.</span>
              Enable instant insights & answers
            </p>
            <p className="flex justify-start items-start gap-2">
              <span>03.</span>Role based access feature
            </p>
          </div>
        </div>
        <div className="relative w-[50%] md:w-[30%] h-[350px] translate-x-[-110px] md:translate-x-[-60px]  ">
          <Image
            src={"/person1.png"}
            alt="downArrow"
            width={70}
            height={70}
            className=" absolute top-[-31px] left-[100px]"
          />
          <Image
            src={"/person2.png"}
            alt="downArrow"
            width={110}
            height={110}
            className=" absolute top-[10px] left-[170px]"
          />
          <Image
            src={"/person3.png"}
            alt="downArrow"
            width={150}
            height={20}
            className=" absolute top-[100px] left-[40px]"
          />
          <Image
            src={"/person4.png"}
            alt="downArrow"
            width={100}
            height={20}
            className=" absolute bottom-[82px] left-[203px]"
          />
          <Image
            src={"/person5.png"}
            alt="downArrow"
            width={120}
            height={20}
            className=" absolute bottom-[-35px] left-[100px]"
          />
        </div>
      </div>
      <div className="card flex-col">
        <div className="sticker rotate-6 left-[60%]">
          <p>3</p>
        </div>
        <div className="flex flex-col gap-8 w-[100%] text-center md:h-[300px] ">
          <h1 className="text-[35px] md:text-[45px] font-bold ">
            Empower Org with Custom ChatGPT Bot
          </h1>
          <div className="text-[#9D9D9D] text-[16px] md:text-[22px] font-light flex flex-col gap-5">
            Your Custom LLM ChatBot is up to deliver rich insights about
            everything <br /> from your company’s knowledge through natural
            language prompts
          </div>
        </div>
        <div className="floatCard md:absolute p-6 md:p-8 rounded-[20px] bg-[#1D1D1D] bottom-[-420px] lg:bottom-[-70%] xl:bottom-[-56%]  left-[50%] md:translate-x-[-50%] w-[100%] lg:w-[50%] border-gad-2">
          <div className="w-full flex flex-col justify-start items-start gap-8 ">
            <div className=" w-full px-4 py-2 bg-[#2B2B2B] flex justify-start items-center rounded-[10px] gap-4 ">
              <Image
                src={"/Stars.png"}
                alt="downArrow"
                width={60}
                height={60}
              />
              <input
                type="text"
                placeholder="How can I help today?"
                className="w-full bg-transparent outline-none"
              />
            </div>
            <p>EXAMPLES</p>
            <div className=" w-full flex justify-start items-center gap-4">
              <Image
                src={"/Magic.png"}
                alt="downArrow"
                width={30}
                height={30}
              />
              <p>Generate last year sales report</p>
            </div>
            <div className=" w-full flex justify-start items-center gap-4">
              <Image
                src={"/Magic.png"}
                alt="downArrow"
                width={30}
                height={30}
              />
              <p>Tell me about the new product we launched</p>
            </div>
            <div className=" w-full flex justify-start items-center gap-4">
              <Image
                src={"/Magic.png"}
                alt="downArrow"
                width={30}
                height={30}
              />
              <p>How many users visited our website in January?</p>
            </div>
          </div>
          <div className="absolute z-[-100]  bg-[#370b7ecb] w-[70%] blur-[170px] aspect-square  rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "></div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
