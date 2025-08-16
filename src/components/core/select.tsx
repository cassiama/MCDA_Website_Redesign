"use client";
import * as React from "react";

// TODO (functionality): add props so that you can dynamically replace the label, placeholder, and options
// TODO (functionality): create types for the above
const Select = () => {
  return (
    <div className="inline-flex flex-col items-start gap-2 w-[105px] h-16 lg:w-full lg:max-w-[300px] sm:w-full sm:max-w-[280px]">
      <label className="text-[#1f1f1f] text-center text-sm font-normal font-['Work_Sans'] tracking-[-0.27px] lg:text-[15px] sm:text-base sm:text-left">
        Availability
      </label>
      <div className="relative w-full">
        {/* TODO (polish): when the select is focused, give the ring around the select the accent color */}
        <select className="appearance-none w-full h-10 py-2 px-3 pl-3 pr-8 bg-white rounded text-[#4d4d4d] text-[13px] font-normal font-['Work_Sans'] tracking-[-0.26px] shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)] lg:py-[10px] lg:px-[10px] lg:pl-[14px] lg:h-11 lg:text-sm sm:py-3 sm:px-3 sm:pl-4 sm:h-12 sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="" disabled selected hidden>Select...</option>
          <option value="available">Available</option>
          <option value="busy">Busy</option>
          <option value="away">Away</option>
        </select>

        {/* TODO (polish): when the select menu is open, animate this chevron to rotate 90° */}
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 shrink-0"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#4D4D4D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Select;
