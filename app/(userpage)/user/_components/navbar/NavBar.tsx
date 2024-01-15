import React from "react";
import UserItem from "./_components/UserItem";
import Image from "next/image";
import Upgrade from "./_components/Upgrade";
import { Bots } from "./_components/botSelection/Bots";

function NavBar() {
  const userId =
    typeof window !== "undefined" && (localStorage.getItem("userId") as string);
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-6 items-center">
        <div className="w-[300px]">
          <Image src={"/logo.png"} width={200} height={60} alt="logo png" />
        </div>
        <Bots userId={userId || ""} />
      </div>
      <div className="flex gap-6">
        <Upgrade />
        <UserItem />
      </div>
    </div>
  );
}

export default NavBar;
