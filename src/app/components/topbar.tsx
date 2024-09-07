import { CURRENT_STRIKE } from "@/utils/constants";
import { ArrowRightCircle, ChevronDown, Search } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center bg-slate-100 py-4 px-6 rounded divide-x divide-slate-300 gap-4 w-fit mx-auto mt-12">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Search />
          <div className="flex items-baseline ml-2">
            <span>NIFTY</span>
            <span className="ml-2">{CURRENT_STRIKE}</span>
            <span className="text-xs text-red-500 font-medium">-1.2%</span>
          </div>
          <div className="flex gap-2 ml-24">
            <button className="border border-blue-500 px-2 rounded ">
              <ArrowRightCircle className="text-blue-500 " />
            </button>
            <button className="border border-blue-500 px-2 rounded">
              <ArrowRightCircle className="text-blue-500 " />
            </button>
          </div>
        </div>
      </div>
      {/* <Seperator /> */}
      <div className="flex items-center px-5 gap-2">
        <span className="text-sm">Expiry</span>
        <button className="text-md font-medium flex items-center gap-2">
          26 Sep
          <ChevronDown />
        </button>
      </div>
      {/* ---- */}
      <div className="flex items-center px-5 gap-2">
        <span className="text-sm">ATM IV</span>
        <span className="text-md">14.4</span>
        <span className="font-medium text-green-500">+0.02</span>
      </div>
      {/*  */}
      <div className="flex items-center px-5 gap-2">
        <span className="text-sm">ATM IV</span>
        <span className="text-md">14.4</span>
        <span className="font-medium text-green-500">+0.02</span>
      </div>
      {/*  */}
      <div className="px-5">
        <span>IVP V7</span>
      </div>
      <div className="px-5 flex items-center gap-2">
        <input type="radio" name="" id="" />
        <span>Per lot</span>
      </div>
      <div className="flex items-center px-5">
        <button>
          <ArrowRightCircle className="text-blue-500" strokeWidth={3} />
        </button>
        <span className="text-blue-500 font-medium">Demo</span>
      </div>
    </div>
  );
};

export default Topbar;
