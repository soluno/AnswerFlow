import Image from "next/image";
import React from "react";

type sectionType =
  | "chat"
  | "pastChat"
  | "dataSources"
  | "export"
  | "botSettings";
type props = {
  activeSection: sectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionType>>;
};
function SideBar({ activeSection, setActiveSection }: props) {
  return (
    <div className="flex flex-col justify-between w-[300px] ">
      <div className="rounded-[10px] bg-[#161616] px-6 py-8 flex flex-col gap-6 text-[22px] font-medium">
        <div
          onClick={() => {
            setActiveSection("chat");
          }}
          className={`flex gap-4 items-center cursor-pointer brightness-50 transition-all hover:brightness-100 ${
            activeSection == "chat" && "brightness-100"
          }`}
        >
          <Image src={"/chat.png"} width={30} height={30} alt="logo png" />
          <p>Chat</p>
        </div>
        <div
          onClick={() => {
            setActiveSection("pastChat");
          }}
          className={`flex gap-4 items-center cursor-pointer brightness-50 transition-all hover:brightness-100 ${
            activeSection == "pastChat" && "brightness-100"
          }`}
        >
          <Image src={"/chat.png"} width={25} height={25} alt="logo png" />
          <p>Past Chats</p>
        </div>
        <div
          onClick={() => {
            setActiveSection("dataSources");
          }}
          className={`flex gap-4 items-center cursor-pointer brightness-50 transition-all hover:brightness-100 ${
            activeSection == "dataSources" && "brightness-100"
          }`}
        >
          <Image src={"/chat.png"} width={30} height={30} alt="logo png" />
          <p>Data Sources</p>
        </div>
        <div
          onClick={() => {
            setActiveSection("export");
          }}
          className={`flex gap-4 items-center cursor-pointer brightness-50 transition-all hover:brightness-100 ${
            activeSection == "export" && "brightness-100"
          }`}
        >
          <Image src={"/chat.png"} width={30} height={30} alt="logo png" />
          <p>Export</p>
        </div>
        <div
          onClick={() => {
            setActiveSection("botSettings");
          }}
          className={`flex gap-4 items-center cursor-pointer brightness-50 transition-all hover:brightness-100 ${
            activeSection == "botSettings" && "brightness-100"
          }`}
        >
          <Image src={"/chat.png"} width={30} height={30} alt="logo png" />
          <p>Bot Settings</p>
        </div>
      </div>
      <div className="rounded-[10px] bg-[#161616] p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-[25px]">Data Usage</h1>
          <p className="text-[#727272] text-[14px]">
            Total uploaded data as data sources
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full bg-[#2B2B2B] rounded-[10px] h-[10px] overflow-hidden">
            <p
              className="h-full transition-all bg-gradient-to-r from-[#7515EF] to-[#EC7D4E] rounded-[10px]"
              style={{ width: `${10}%` }}
            />
          </div>
          <p className="text-[#727272] text-[14px] font-mono">
            33% of 50MB used
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
