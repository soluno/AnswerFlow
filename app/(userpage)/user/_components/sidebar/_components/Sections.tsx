import { useActiveSection } from "@/hooks/use-active-section";
import { activeSectionType, sectionType } from "@/types/activeSection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// sections data
const sections: activeSectionType[] = [
  "Chat",
  "Past Chat",
  "Data Sources",
  "Export",
  "Bot Settings",
];
export function Sections() {
  const route = useRouter();

  const { activeSection, setActiveSection } = useActiveSection(
    (state) => state
  );
  const onClickSection = (section: activeSectionType) => {
    setActiveSection(section);
    route.push(`/user/${localStorage.getItem("botId")}`);
  };

  return (
    <div className="rounded-[10px] bg-[#161616] flex flex-col text-[22px] py-2 font-medium overflow-hidden">
      {sections.map((section, i) => (
        <button
          key={i}
          onClick={() => onClickSection(section)}
          className={`flex gap-4 items-center cursor-pointer hover:brightness-100 brightness-50 transition-all py-4 px-4 hover:bg-[#111111] ${
            activeSection == section && "!brightness-100 bg-[#111111]"
          }`}
        >
          <Image
            src={`/${section}.png`}
            width={30}
            height={30}
            alt={`/${section} image`}
          />
          <p>{section}</p>
        </button>
      ))}
    </div>
  );
}
