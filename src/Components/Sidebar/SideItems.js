import React from "react";
import { TbLayoutDashboard, TbChartInfographic } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideItems = ({ open }) => {
  const Items = [
    {
      title: "Menu",
      components: [
        {
          name: "Dashboard",
          link: "/",
          icon: <TbLayoutDashboard />,
        },
        {
          name: "Customers",
          link: "/customers",
          icon: <BsPeople />,
        },
        {
          name: "Compaigns",
          link: "/compaigns",
          icon: <TbChartInfographic />,
        },
        {
          name: "Stages",
          link: "/stages",
          icon: <TbLayoutDashboard />,
        },
      ],
    },
  ];
  return (
    <div className="w-full h-full pt-3 px-3">
      {Items.map((item, i) => (
        <div key={i}>
          <div>
            <h1 className="uppercase text-gray-600 font-semibold pb-2">
              {item.title}
            </h1>
          </div>
          <ul>
            {item.components.map((component, i) => (
              <li key={i} className="my-2">
                {console.log(i)}
                <NavLink
                  to={component.link}
                  className={({ isActive }) =>
                    `${isActive ? "bg-gray-700" : ""} flex items-center ${
                      !open ? "justify-center" : "gap-x-4"
                    }  p-2 text-gray-400 hover:bg-gray-700 cursor-pointer rounded-xl duration-300`
                  }
                >
                  <span>{component.icon}</span>
                  <h1
                    className={`whitespace-pre ${
                      !open &&
                      "opacity-0 translate-x-28 overflow-hidden duration-300"
                    }`}
                  >
                    {component.name}
                  </h1>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideItems;
