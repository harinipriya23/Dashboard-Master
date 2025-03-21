import React from "react";
import { patientsList } from "../data/Patients";
import DonutChart from "./DonutChart";

const AppointmentMethod = () => {
  const COLORS = ["#4db6ac", "#81c784", "#dce775"];

  const bookingTypeCounts = patientsList.reduce((accumulator, patient) => {
    const bookingType = patient.bookingType;
    accumulator[bookingType] = (accumulator[bookingType] || 0) + 1;
    return accumulator;
  }, {});

  const data = Object.keys(bookingTypeCounts).map((bookingType) => ({
    name: bookingType,
    value: bookingTypeCounts[bookingType],
  }));

  return (
    <div className=" flex flex-col m-5 py-2 h-[300px] w-[300px] lg:w-[270px] bg-gray-100 dark:bg-themeDark-quinary rounded-md">
      <p className="text-[14px] text-center my-4">Appointment Method</p>
      <DonutChart data={data} colors={COLORS} />
    </div>
  );
};
export default AppointmentMethod;
