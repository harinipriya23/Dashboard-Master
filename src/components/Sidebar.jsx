import React from "react";
import { Link } from "react-router";
import { ImHome } from "react-icons/im";
import { MdPersonAdd } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { FaUserDoctor, FaUsers } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";

const navItems = [
  {
    label: "Dashboard",
    child: [
      {
        name: "Dashboard",
        path: "/",
        icon: <ImHome size={18} />,
      },
      {
        name: "Reports",
        path: "/reports",
        icon: <TbReportSearch size={18} />,
      },
    ],
  },
  {
    label: "Medical Team",
    child: [
      {
        name: "Doctors",
        path: "/doctors",
        icon: <FaUserDoctor size={18} />,
      },
      {
        name: "Staff",
        path: "/staff",
        icon: <FaUsers size={18} />,
      },
      {
        name: "New Member",
        path: "/new-member",
        icon: <MdPersonAdd size={18} />,
      },
    ],
  },
  {
    label: "Appointments",
    child: [
      {
        name: "Appointments",
        path: "/appointments",
        icon: <AiFillSchedule size={18} />,
      },
      {
        name: "New Appointment",
        path: "/new-appointment",
        icon: <FaNotesMedical size={18} />,
      },
    ],
  },
];

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div
      className={`fixed top-12 left-0 h-screen ${
        isMenuOpen ? "w-52" : "w-20"
      }  dark:bg-themeDark-senary bg-gray-200 border-gray-400 dark:text-themeDark-primary border-r-2 dark:border-themeDark-quaternary`}
    >
      <nav className="my-5 mx-2">
        {navItems.map(({ label, child }, index) => (
          <div key={index}>
            {isMenuOpen && (
              <p className="text-[12px] text-gray-700 dark:text-themeDark-tertiary">
                {label}
              </p>
            )}
            <div>
              {child.map(({ name, path, icon }) => (
                <Link
                  key={name}
                  to={path}
                  className="flex items-center duration-500 hover:scale-105 my-6 mx-4 text-[13px] gap-2"
                >
                  <span>{icon}</span>
                  {isMenuOpen && <span>{name}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
