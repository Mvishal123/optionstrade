import { StrikeData } from "@/utils/types";
import clsx from "clsx";
import { MenuSquareIcon } from "lucide-react";
import React from "react";

interface TableItemProps {
  data: StrikeData;
  side: "CALLS" | "PUTS" | "NONE";
  upperBound: number;
}

const TableItem = ({
  data: { call, put, strike },
  side,
  upperBound,
}: TableItemProps) => {
  return (
    <div className="grid grid-cols-12">
      <div className="h-12 col-span-5 border relative group">
        {side === "CALLS" && (
          <div className="absolute inset-0 bg-yellow-200/20 z-0"></div>
        )}
        <div
          className={clsx(
            "group-hover:flex  hidden absolute inset-0 items-center bg-white/80 z-10 gap-2 justify-end px-4"
          )}
        >
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
        </div>
        <div className="flex items-center h-full">
          <div className="flex items-center justify-center text-xs text-black font-medium border-r h-full w-[85px]">
            {call.gamma}
          </div>
          <div className="flex items-center justify-center  text-xs text-black font-medium  border-r h-full w-[85px] ">
            {call.vega}
          </div>
          <div className="flex items-center justify-center  text-xs text-black font-medium  border-r h-full w-[85px]">
            {call.theta}
          </div>
          <div className="flex items-center justify-center  text-xs text-black font-medium w-[85px]  border-r h-full ">
            {call.delta}
          </div>
          <div className="flex items-center  px-2  text-xs text-black font-medium border-r h-full flex-1 justify-between relative">
            <span>{call.oi_lakh} </span>
            <div
              className={clsx("absolute right-0")}
              style={{
                width: `${(call.oi_lakh / upperBound) * 100}%`,
              }}
            >
              <div className="h-3 w-full  bg-red-700/10 rounded-l-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-center  text-xs text-black font-medium w-[70px]  border-r h-full ">
            {call.ltp}
          </div>
        </div>
      </div>
      <div className="h-12 col-span-2 flex items-center justify-center text-xs text-black font-medium border-b relative">
        {side === "NONE" && (
          <div className="absolute inset-0 bg-blue-300/30"></div>
        )}
        <div
          className={`py-1 px-2 ${
            side === "NONE" ? "bg-blue-200" : "bg-slate-200"
          } rounded text-black`}
        >
          {strike}
        </div>
      </div>
      <div className="h-12 col-span-5 border relative group">
        {side === "PUTS" && (
          <div className="absolute inset-0 bg-yellow-200/20"></div>
        )}
        <div
          className={clsx(
            "group-hover:flex  hidden absolute inset-0 items-center bg-white/80 z-10 gap-2 justify-start px-4"
          )}
        >
          {" "}
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
          <button className="border  border-black/50 rounded bg-black/20 grid place-content-center p-1">
            <MenuSquareIcon className="size-4" strokeWidth={1} />
          </button>
        </div>
        <div className="flex items-center h-full flex-row-reverse">
          <div className="flex items-center justify-center text-xs text-black font-medium w-[85px]  border-r h-full ">
            {put.gamma}
          </div>
          <div className="flex items-center justify-center text-xs text-black font-medium w-[85px]  border-r h-full ">
            {put.vega}
          </div>
          <div className="flex items-center justify-center text-xs text-black font-medium w-[85px]  border-r h-full ">
            {put.theta}
          </div>
          <div className="flex items-center justify-center text-xs text-black font-medium w-[85px]  border-r h-full ">
            {put.delta}
          </div>
          <div className="flex items-center px-2  text-xs text-black font-medium border-r h-full flex-1 justify-end relative">
            <div
              className={clsx("absolute left-0")}
              style={{
                width: `${(put.oi_lakh / upperBound) * 100}%`,
              }}
            >
              <div className="h-3 w-full  bg-green-500/20 rounded-r-full"></div>
            </div>
            <span>{call.oi_lakh} </span>
          </div>
          <div className="flex items-center justify-center text-xs text-black font-medium w-[70px]  border-r h-full ">
            {put.ltp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
