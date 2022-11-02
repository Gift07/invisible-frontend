import React from "react";
import SalesChart from "../../Charts/SalesChart";
import { IoIosArrowDown } from "react-icons/io";

const AnalyticsCard = () => {
  return (
    <div className="w-[19rem] bg-white pb-6 shadow-lg">
      <div className="flex items-center justify-between py-2 px-3">
        <h1>Sales analytics</h1>
        <div className="border-[.8px] border-[#505d69] px-2 py-1 text-xs flex gap-x-1 items-center">
          <h1>Aprl</h1>
          <IoIosArrowDown />
        </div>
      </div>
      <SalesChart />
      <div className="flex items-center px-3 justify-evenly text-xs">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-2">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <h1>Product 1</h1>
          </div>
          <h1 className="text-lg text-[#505d69]">46%</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-2">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <h1>Product 1</h1>
          </div>
          <h1 className="text-lg text-[#505d69]">46%</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-2">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <h1>Product 1</h1>
          </div>
          <h1 className="text-lg text-[#505d69]">46%</h1>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
