"use client";
import React, { useState } from "react";
import NavBar from "./_components/navbar/NavBar";
import SideBar from "./_components/sidebar/SideBar";

type sectionType =
  | "chat"
  | "pastChat"
  | "dataSources"
  | "export"
  | "botSettings";
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<sectionType>("chat");

  return (
    <div className="flex flex-col gap-6 p-6 w-full min-h-screen">
      <NavBar />
      <div className="flex gap-6 flex-1">
        <SideBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {children}
      </div>
    </div>
  );
}
