import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useActiveSection } from "@/hooks/use-active-section";

function BotSelection({ bots }: { bots: any }) {
  const setActiveSection = useActiveSection((state) => state.setActiveSection);
  const [toggle, setToggle] = useState(false);

  const route = useRouter();
  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className="flex justify-between items-center gap-10 py-2 px-4 bg-[#1B1B1B] rounded-[10px] cursor-pointer relative"
    >
      <div className="flex gap-2 items-center">
        <h1 className="font-medium">bot name</h1>
      </div>
      <Image src={"/downArrow.png"} alt="user image" width={25} height={25} />

      {toggle && (
        <div className="absolute w-[fill] top-[120%] left-0 py-2 px-4 bg-[#1B1B1B] rounded-[10px] flex flex-col items-start">
          {bots.map((item: any) => (
            <button
              key={item.id}
              onClick={() => {
                route.push(`/user/${item.id}`);
                setActiveSection("Chat");
                localStorage.setItem("botId", `${item.id}`);
              }}
              className="flex justify-between gap-1 py-1 px-2 w-full capitalize"
            >
              <p>{item.name}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default BotSelection;
