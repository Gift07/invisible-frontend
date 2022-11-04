import React from "react";
import {
  AnalyticsCard,
  Footer,
  HomeCard,
  RevenueAnalytics,
  Subscribers,
} from "../Components";

const Home = () => {
  return (
    <React.Fragment>
      <div className="px-8 pt-3">
        <div>
          <h1 className="font-semibold uppercase text-[#505d69]">Dashboard</h1>
        </div>
        <div className="pt-3 grid-items  gap-x-7">
          <div className="gap-x-4">
            <div className="flex gap-x-6 pb-6">
              <HomeCard />
              <HomeCard />
              <HomeCard />
            </div>
            <RevenueAnalytics />
          </div>
          <AnalyticsCard />
        </div>
        <div className="py-8 pr-4 ">
          <Subscribers />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
