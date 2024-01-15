import React from "react";

export function Usage() {
  return (
    <div className="rounded-[10px] bg-[#161616] p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-[25px]">Data Usage</h1>
        <p className="text-[#727272] text-[14px]">
          Total uploaded data as data sources
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full bg-[#2B2B2B] rounded-[10px] h-[10px] overflow-hidden">
          <p
            className="h-full transition-all bg-gradient-to-r from-[#7515EF] to-[#EC7D4E] rounded-[10px]"
            style={{ width: `${30}%` }}
          />
        </div>
        <p className="text-[#727272] text-[14px] font-mono">33% of 50MB used</p>
      </div>
    </div>
  );
}
