"use client";
import React, { useState } from "react";
import NavBar from "./_components/navbar/NavBar";
import SideBar from "./_components/sidebar/SideBar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 p-6 w-full min-h-screen">
      <NavBar />
      <div className="flex gap-6 flex-1">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
