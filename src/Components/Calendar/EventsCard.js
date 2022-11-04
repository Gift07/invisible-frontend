import { IoBagAddOutline } from "react-icons/io5";

const EventsCard = () => {
  return (
    <div className="w-1/4 h-32 bg-white shadow-md">
      <div className="flex items-center justify-between px-2 pt-2">
        <h1 className="text-sm font-light">Number of sales</h1>
        <div className="p-2 bg-blue-100 text-blue-500 rounded-full">
          <IoBagAddOutline />
        </div>
      </div>
      <div className="px-2 py-2">
        <h1 className="text-2xl text-[#505d69]">$34000</h1>
      </div>
      <hr />
      <div className="flex pt-2 items-center px-2 gap-x-2">
        <div className="px-2 py-1 text-xs bg-green-200">
          <h1>+ 2.4</h1>
        </div>
        <div className="text-xs">
          <h1>From last month</h1>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
