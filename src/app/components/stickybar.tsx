import { ChartBar, ChevronDown, Settings } from "lucide-react";
import React from "react";

const StickyBar = () => {
  return (
    <div className="w-screen fixed bottom-0 h-10 border-t bg-slate-100">
      <div className="flex justify-between h-full">
        <div className="flex h-full divide-x-2 px-12">
          {BOTTOM_OPTIONS_1.map((option, index) => (
            <div
              className="min-w-[80px] text-xs bg-white h-full flex items-center justify-center px-6"
              key={index}
            >
              {option}
              <ChevronDown strokeWidth={1} />
            </div>
          ))}
        </div>
        <div className="flex ">
          <span className="text-xs self-center mr-4">Open with</span>
          <div className="flex items-end gap-4">
            <button className="px-4 flex items-center bg-white border rounded-t-md h-[80%]">
              <ChartBar strokeWidth={1} className="size-4" />
              Ol
            </button>
            <button className="px-4 flex items-center bg-white border rounded-t-md h-[80%]">
              <ChartBar strokeWidth={1} className="size-4" />
              Ol
            </button>
            <button className="px-4 flex items-center bg-white border rounded-t-md h-[80%]">
              <ChartBar strokeWidth={1} className="size-4" />
              Ol
            </button>
          </div>
          <button className="gap-2 bg-slate-200 h-full ml-6 flex items-center px-6 text-blue-500">
            <Settings className="size-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;

const BOTTOM_OPTIONS_1 = ["LTP View", "LTP View", "LTP View"];
