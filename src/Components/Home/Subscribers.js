import React from "react";
import BasicTable from "../Tables/Subscribers";

const Subscribers = () => {
  return (
    <div className="w-full bg-white shadow-lg h-96 p-2">
      <div className="py-2 px-2">
        <h1 className="text-[#505d60]">Loyal Subscribers</h1>
      </div>
      <BasicTable />
    </div>
  );
};

export default Subscribers;
