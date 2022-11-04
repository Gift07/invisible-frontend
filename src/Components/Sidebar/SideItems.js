import React from "react";
import { TbLayoutDashboard, TbChartInfographic } from "react-icons/tb";
import { BsPeople, BsCalendarDate } from "react-icons/bs";
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
        {
          name: "Calendar",
          link: "/calendar",
          icon: <BsCalendarDate />,
        },
      ],
    },
    {
      title: "Analtycs",
      components: [
        {
          name: "Reports",
          link: "/reports",
          icon: <TbLayoutDashboard />,
        },
        {
          name: "Templates",
          link: "/templates",
          icon: <BsPeople />,
        },
        {
          name: "Social Media",
          link: "/social Media",
          icon: <BsPeople />,
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
                    style={{ transitionDelay: `${i + 2}00ms` }}
                    className={`whitespace-pre duration-300 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
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
