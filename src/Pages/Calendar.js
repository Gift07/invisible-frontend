import React, { Fragment } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { EventsCard } from "../Components";
import { Footer } from "../Components";

const Calendar = () => {
  return (
    <Fragment>
      <div className="pt-3 px-8">
        <div>
          <h1 className="font-semibold uppercase text-[#505d69]">Calendar</h1>
        </div>
        <div className="w-full flex items-center gap-x-6 py-4">
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
        <div className="bg-white shadow-lg my-3 mb-6">
          <Scheduler
            view="month"
            events={[
              {
                event_id: 1,
                title: "Event 1",
                start: new Date("2021/5/2 09:30"),
                end: new Date("2021/5/2 10:30"),
              },
              {
                event_id: 2,
                title: "Event 2",
                start: new Date("2021/5/4 10:00"),
                end: new Date("2021/5/4 11:00"),
              },
            ]}
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Calendar;
