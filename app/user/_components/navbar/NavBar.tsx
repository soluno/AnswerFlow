import React from "react";
import BotSelection from "./_components/BotSelection";
import UserItem from "./_components/UserItem";
import Image from "next/image";

function NavBar() {
  return (
    <div className="flex justify-between w-full">
      <Image src={"/logo.png"} width={200} height={60} alt="logo png" />

      <BotSelection />
      <UserItem />
    </div>
  );
}

export default NavBar;
