"use client";

import { CURRENT_STRIKE, TABLE_DATA } from "@/utils/constants";
import { binarySearch, findUpperBound } from "@/utils/helper";
import React from "react";
import TableHeader from "./table-header";
import TableItem from "./table-item";

const Table = () => {
  const data = TABLE_DATA.sort((a, b) => a.strike - b.strike);

  const target_strike = binarySearch(
    data.map((data) => data.strike),
    CURRENT_STRIKE
  );

  const upperBound = findUpperBound(data);

  return (
    <div className="mt-12 border min-h-[50vh]">
      <TableHeader />
      <div className="">
        {data.map((item, index) => {
          const side: "CALLS" | "PUTS" | "NONE" =
            index < target_strike
              ? "CALLS"
              : index > target_strike
              ? "PUTS"
              : "NONE";
          return (
            <TableItem
              data={item}
              key={index}
              side={side}
              upperBound={upperBound}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
