import React from "react";
import RevenueChart from "../../Charts/RevenueChart";

const RevenueAnalytics = () => {
  return (
    <div className="w-[44rem] h-96 bg-white shadow-lg">
      <div className="flex items-center justify-between px-3 py-2">
        <h1>Revenue Analytics</h1>
        <div className="flex gap-x-1">
          <div className="text-xs py-1 px-3 bg-green-500 text-white">
            <h1>Weekly</h1>
          </div>
          <div className="text-xs py-1 px-3 bg-gray-300">
            <h1>Monthly</h1>
          </div>
          <div className="text-xs py-1 px-3 bg-gray-300">
            <h1>Yearly</h1>
          </div>
        </div>
      </div>
      <RevenueChart />
    </div>
  );
};

export default RevenueAnalytics;
