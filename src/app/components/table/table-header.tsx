import { ArrowDown, FileQuestion } from "lucide-react";
import React from "react";

const TableHeader = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="h-12 col-span-5 flex items-center justify-end px-2 border-[1px] border-red-500/30 bg-red-500/5">
          <h2 className="text-red-500 font-semibold">CALLS</h2>
        </div>
        <div className="h-12 col-span-2 flex items-center justify-center border text-xs text-slate-500">
          Strike
          <ArrowDown strokeWidth={1} className="size-4" />
        </div>
        <div className="h-12 col-span-5 flex items-center px-2 border-[1px] border-green-500/30 bg-green-500/5">
          <h2 className="text-green-500 font-semibold">PUTS</h2>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="h-12 col-span-5 border">
          <div className="flex items-center h-full">
            {["Gamma", "Vega", "Theta", "Delta"].map((label) => (
              <div
                key={label}
                className="flex items-center  justify-center text-xs text-slate-500 w-[85px] px-1 border-r h-full"
              >
                {label} <FileQuestion strokeWidth={1} className="size-4" />
              </div>
            ))}
            <div className="flex items-center px-2 gap-2 text-xs text-slate-500 border-r h-full flex-1 justify-between">
              <span>OI-lakh</span>
              <div className="flex items-center gap-1">
                <span className="text-red-700">Call Ol</span>
                <div className="h-3 w-8 bg-red-700 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 w-[70px] px-3 border-r h-full">
              LTP <FileQuestion strokeWidth={1} className="size-4" />
            </div>
          </div>
        </div>
        <div className="h-12 col-span-2 flex items-center justify-center text-xs text-slate-500 border-b">
          
        </div>
        <div className="h-12 col-span-5 border">
          <div className="flex items-center h-full flex-row-reverse">
            {["Gamma", "Vega", "Theta", "Delta"].map((label) => (
              <div
                key={label}
                className="flex items-center  justify-center text-xs text-slate-500 w-[85px] px-1 border-r h-full"
              >
                {label} <FileQuestion strokeWidth={1} className="size-4" />
              </div>
            ))}
            <div className="flex items-center px-2 gap-2 text-xs text-slate-500 border-r h-full flex-1 justify-between">
              <div className="flex items-center gap-1">
                <span className="text-green-700">Put Ol</span>
                <div className="h-3 w-8 bg-green-700 rounded-full"></div>
              </div>
              <span>OI-lakh</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 w-[70px] px-3 border-r h-full">
              LTP <FileQuestion strokeWidth={1} className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableHeader;
