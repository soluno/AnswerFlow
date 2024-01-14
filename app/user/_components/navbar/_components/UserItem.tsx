import { useSession } from "next-auth/react";
import React from "react";

function UserItem() {
  const session = useSession();
  return <div>{session.data?.user?.name}</div>;
}

export default UserItem;
