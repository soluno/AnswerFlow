import Image from "next/image";
import React from "react";

function Cards() {
  return (
    <section className=" relative section p-6 py-[130px]">
      <div className="flex flex-col gap-10 xl:flex-row flex-wrap xl:items-start">
        <div className="flex flex-col  border-gad-1  items-center md:items-start xl:w-[56%]">
          <Image
            src={"/Dashboard.png"}
            alt="Dashboard"
            width={140}
            height={140}
          />
          <h2 className="text-[25px] md:text-[32px] font-medium ">
            Company Dashboard
          </h2>
        </div>
        <div className="flex flex-col border-gad-1 items-center md:items-start  xl:w-[39%]">
          <Image
            src={"/Knowledge.png"}
            alt="Knowledge  "
            width={140}
            height={140}
          />
          <h2 className="text-[25px] md:text-[32px] font-medium ">
            Knowledge base Management
          </h2>
        </div>
        <div className="flex flex-col border-gad-1 p-6 items-center md:items-start xl:w-[45%]">
          <Image
            src={"/ApiSetting.png"}
            alt="ApiSetting"
            width={140}
            height={140}
          />
          <h2 className="text-[25px] md:text-[32px] font-medium ">
            Connections Library
          </h2>
        </div>
        <div className="flex flex-col  border-gad-1  items-center md:items-start xl:w-[50%]">
          <Image src={"/Cloud.png"} alt="Cloud" width={140} height={140} />
          <h2 className="text-[25px] md:text-[32px] font-medium ">
            Secure Cloud Hosting
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[100%] ">
        <Image src={"/div.png"} width={1200} height={220} alt="separator" />
      </div>
    </section>
  );
}

export default Cards;
