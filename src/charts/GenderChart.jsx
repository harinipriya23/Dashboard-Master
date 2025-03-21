import React from "react";
import DonutChart from "./DonutChart";
import { patientsList } from "../data/Patients";

const GenderChart = () => {
  const COLORS = ["#66bb6a", "#ffca28"];

  const genderCount = patientsList.reduce((accumulator, patient) => {
    const gender = patient.gender;
    accumulator[gender] = (accumulator[gender] || 0) + 1;
    return accumulator;
  }, {});

  const data = Object.keys(genderCount).map((gender) => ({
    name: gender,
    value: genderCount[gender],
  }));

  return (
    <div className=" flex flex-col m-5 py-2 h-[300px] w-[300px] lg:w-[270px] bg-gray-100 dark:bg-themeDark-quinary rounded-md">
      <p className="text-[14px] text-center my-4">Gender</p>
      <DonutChart data={data} colors={COLORS} />
    </div>
  );
};

export default GenderChart;
