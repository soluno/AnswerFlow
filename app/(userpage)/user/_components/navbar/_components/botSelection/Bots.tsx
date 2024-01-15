import React, { useEffect, useState } from "react";
import BotSelection from "./BotSelection";
type props = {
  userId: string;
};
export function Bots({ userId }: props) {
  const [bots, setBots] = useState<any>();
  useEffect(() => {
    getBots(userId);
  }, [userId]);
  const getBots = async (userId: string) => {
    try {
      const response = await fetch(
        `//ec2-13-127-192-129.ap-south-1.compute.amazonaws.com/get_bots/1`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (data.status == "error") {
        throw new Error(`${data.message}`);
      }
      setBots(data.bots);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // console.log(bots);
  return <BotSelection bots={bots} />;
}
