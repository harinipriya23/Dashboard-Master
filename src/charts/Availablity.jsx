import React from "react";
import DonutChart from "./DonutChart";

const Availabilty = ({ availability, text }) => {
  const COLORS = ["#4CAF50", "#F44336"];

  const availabilityCounts = availability.reduce(
    (accumlator, doctor) => {
      doctor.availability === "Available"
        ? accumlator.available++
        : accumlator.unavailable++;
      return accumlator;
    },
    { available: 0, unavailable: 0 }
  );

  const data = [
    { name: "Available", value: availabilityCounts.available },
    { name: "Unavailable", value: availabilityCounts.unavailable },
  ];

  return (
    <div className="flex flex-col m-5 py-2 px-10 h-[300px] w-[300px] lg:w-[270px] bg-gray-100 dark:bg-themeDark-quinary rounded-md">
      <p className="text-[14px] text-center my-2">{text} Availability</p>
      <DonutChart data={data} colors={COLORS} />
    </div>
  );
};

export default Availabilty;
