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
  | "botSettings";
function Page({ params }: props) {
  const [activeSection, setActiveSection] = useState<sectionType>("chat");
  const botId = params.botId;
  const session = useSession();
  return (
    <div className="flex flex-col gap-6 p-6 w-full min-h-screen">
      <NavBar />
      <div className="flex gap-6 flex-1">
        <SideBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {activeSection == "chat" && <Chat />}
        {activeSection == "pastChat" && <PastChat />}
        {activeSection == "dataSources" && <DataSources />}
        {activeSection == "export" && <Export />}
        {activeSection == "botSettings" && <BotSettings />}
      </div>
    </div>
  );
}

export default Page;
