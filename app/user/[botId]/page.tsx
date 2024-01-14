"use client";
import { getServerSession } from "next-auth";
import React, { useState } from "react";
import SideBar from "../_components/sidebar/SideBar";
import NavBar from "../_components/navbar/NavBar";
import { useSession } from "next-auth/react";
import Chat from "../_components/sections/Chat";
import PastChat from "../_components/sections/PastChat";
import DataSources from "../_components/sections/DataSources";
import Export from "../_components/sections/Export";
import BotSettings from "../_components/sections/BotSettings";

type props = {
  params: {
    botId: string;
  };
};
type sectionType =
  | "chat"
  | "pastChat"
  | "dataSources"
  | "export"
  | "botSettings"
  | "";
function Page({ params }: props) {
  const [activeSection, setActiveSection] = useState<sectionType>("chat");
  const botId = params.botId;

  return (
    <div className="flex flex-col gap-6 w-full">
      {activeSection == "chat" && <Chat botId={botId} />}
      {/* {activeSection == "pastChat" && <PastChat  botId={botId} />}
      {activeSection == "dataSources" && <DataSources   botId={botId}/>}
      {activeSection == "export" && <Export  botId={botId} />}
      {activeSection == "botSettings" && <BotSettings  botId={botId}/>} */}
    </div>
  );
}

export default Page;
