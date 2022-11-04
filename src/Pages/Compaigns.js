import React, { Fragment } from "react";
import { CompaingsCard, ComppaignTable, Footer } from "../Components";

const Compaigns = () => {
  return (
    <Fragment>
      <div className="pt-3 px-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="font-semibold uppercase text-[#505d69]">Compaigns</h1>
          <button className="px-6 py-2 text-xs uppercase bg-green-500 text-white rounded-xl">
            + Add new
          </button>
        </div>
        <div className="flex items-center gap-x-6 py-4">
          <CompaingsCard />
          <CompaingsCard />
          <CompaingsCard />
          <CompaingsCard />
        </div>
        <div className="w-full bg-white shadow-lg p-2 mb-6">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg text-[#505d60]">Successful</h1>
            <div className="flex items-center gap-x-2">
              <button className="bg-green-500 text-white px-3 py-2 text-xs">
                Successful
              </button>
              <button className="bg-gray-300 px-3 py-2 text-xs">Recent</button>
              <button className="bg-gray-300 px-3 py-2 text-xs">Failed</button>
            </div>
          </div>
          <div className="py-3">
            <ComppaignTable />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Compaigns;
