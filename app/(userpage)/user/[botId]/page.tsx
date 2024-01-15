"use client";

import { useEffect, useState } from "react";
import { Sections } from "./_components/Sections";
import { useActiveSection } from "@/hooks/use-active-section";

type props = {
  params: {
    botId: string;
  };
};
function Page({ params }: props) {
  const [botData, setBotData] = useState<any>();
  const setActiveSection = useActiveSection((state) => state.setActiveSection);
  useEffect(() => {
    setActiveSection("Chat");
    getBotData(params.botId);
  }, [params.botId, setActiveSection]);
  const getBotData = async (botId: string) => {
    try {
      const response = await fetch(
        `//ec2-13-127-192-129.ap-south-1.compute.amazonaws.com/get_bot/${botId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      if (data.status == "error") {
        throw new Error(`${data.message}`);
      }
      setBotData(data.bot);
      return data.bot;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return <Sections botData={botData} />;
}

export default Page;
