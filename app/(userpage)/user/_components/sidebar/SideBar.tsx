import React from "react";

import { Sections } from "./_components/Sections";
import { Usage } from "./_components/Usage";

function SideBar() {
  return (
    <div className="flex flex-col justify-between min-w-[300px] ">
      {/* sections (features) */}
      <Sections />

      {/* data usage */}
      <Usage />
    </div>
  );
}

export default SideBar;
