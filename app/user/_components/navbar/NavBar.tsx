import React from "react";
import BotSelection from "./_components/BotSelection";
import UserItem from "./_components/UserItem";
import Image from "next/image";

function NavBar() {
  // const userId = localStorage.getItem("userId");
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-6 items-center">
        <div className="w-[300px]">
          <Image src={"/logo.png"} width={200} height={60} alt="logo png" />
        </div>
        {/* <BotSelection userId={userId!} /> */}
      </div>
      <div className="">
        <UserItem />
      </div>
    </div>
  );
}

export default NavBar;
