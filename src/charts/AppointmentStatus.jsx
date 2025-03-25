import React from "react";
import { patientsList } from "../data/Patients";
import DonutChart from "./DonutChart";

const AppointmentStatus = () => {
  const COLORS = ["#66bb6a", "#ffca28", "#ef5350", "#448aff"];

  const appointmentStatusCount = patientsList.reduce((accumulator, patient) => {
    const appointmentStatus = patient.appointmentStatus;
    accumulator[appointmentStatus] = (accumulator[appointmentStatus] || 0) + 1;
    return accumulator;
  }, {});

  const data = Object.keys(appointmentStatusCount).map((appointmentStatus) => ({
    name: appointmentStatus,
    value: appointmentStatusCount[appointmentStatus],
  }));

  return (
    <div className=" flex flex-col m-5 py-2 h-[300px] w-[300px] lg:w-[270px] bg-gray-100 dark:bg-themeDark-quinary rounded-md">
      <p className="text-[14px] text-center my-4">Appointment Status</p>
      <DonutChart data={data} colors={COLORS} />
    </div>
  );
};
export default AppointmentStatus;
