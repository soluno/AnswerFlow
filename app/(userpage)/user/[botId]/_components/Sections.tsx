import { useActiveSection } from "@/hooks/use-active-section";
import React, { useEffect, useState } from "react";
import Chat from "./sections/Chat";
import PastChat from "./sections/PastChat";
import DataSources from "./sections/DataSources";
import Export from "./sections/Export";
import BotSettings from "./sections/BotSettings";

export function Sections({ botData }: { botData: any }) {
  const activeSection = useActiveSection((state) => state.activeSection);
  return (
    <div className="flex flex-col gap-6 w-full">
      {activeSection == "Chat" && <Chat botData={botData} />}
      {activeSection == "Past Chat" && <PastChat />}
      {activeSection == "Data Sources" && <DataSources />}
      {activeSection == "Export" && <Export />}
      {activeSection == "Bot Settings" && <BotSettings />}
    </div>
  );
}
