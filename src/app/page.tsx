import React from "react";
import Topbar from "./components/topbar";
import StickyBar from "./components/stickybar";
import Table from "./components/table/table";

const Page = () => {
  return (
    <>
      <div className="px-6 mb-24">
        <Topbar />
        <Table />
      </div>
      <StickyBar />
    </>
  );
};

export default Page;
