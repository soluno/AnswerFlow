import React from "react";
type props = { handleNext: () => void };
function StepB({ handleNext }: props) {
  return (
    <div className="absolute left-0 h-screen flex justify-center items-center w-full">
      <div className="flex-1 flex justify-start items-start py-20 px-20 h-full">
        <h1 className="text-[40px] leading-[74px] font-bold">Selected Plan</h1>
      </div>
      <div className="h-full min-w-[30%] bg-[#0B0B0B] px-20 py-30 flex flex-col justify-end items-center gap-20 py-20">
        <button className="btn sec" onClick={handleNext}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default StepB;
