import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Chat() {
  // const chat: [{ question: string; answer: string }] = [
  //   { question: "string", answer: "string" },
  // ];
  const session = useSession();
  console.log(session.data?.user);
  return (
    <div className="flex-1 bg-[#131313] rounded-[12px] p-10 gap-10 flex flex-col ">
      <div className="flex gap-4 items-start">
        <Image
          src={session.data?.user?.image as string}
          alt="user image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-[] bg-[#1F1F1F] px-8 py-4 rounded-[10px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
          commodi cumque explicabo autem numquam fuga. Incidunt deleniti odio
        </p>
      </div>
      <div className="flex gap-4 items-start">
        <Image
          src={session.data?.user?.image as string}
          alt="user image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-[] bg-[#1F1F1F] px-8 py-4 rounded-[10px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
          commodi cumque explicabo autem numquam fuga. Incidunt deleniti odio
        </p>
      </div>
      <div className="flex gap-4 items-start">
        <Image
          src={session.data?.user?.image as string}
          alt="user image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-[] bg-[#1F1F1F] px-8 py-4 rounded-[10px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
          commodi cumque explicabo autem numquam fuga. Incidunt deleniti odio
        </p>
      </div>
    </div>
  );
}

export default Chat;
