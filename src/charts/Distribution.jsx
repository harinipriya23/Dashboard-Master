import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const PatientsDistribution = ({ list, name, colors }) => {
  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="flex gap-2 border-2 bg-gray-400 border-themeDark-primary dark:bg-themeDark-senary dark:text-themeDark-primary text-[12px] font-medium p-2 rounded-md">
          <p>{payload[0].name}</p>
          <p>{payload[0].value}</p>
        </div>
      );
    }
  };

  const departmentCounts = list.reduce((accumulator, patient) => {
    const department = patient.medicalDepartment;
    accumulator[department] = (accumulator[department] || 0) + 1;
    return accumulator;
  }, {});

  const data = Object.keys(departmentCounts).map((department) => ({
    name: department,
    value: departmentCounts[department],
  }));

  return (
    <div className=" flex flex-col m-5 py-2 px-10 h-[300px] w-[300px] lg:w-[270px] bg-gray-100  dark:bg-themeDark-quinary rounded-md">
      <p className="text-[14px] my-4 text-center ">{name} per Department</p>
      <div className=" w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              stroke="#A5A9AE"
              strokeWidth={1}
              isAnimationActive={true}
              animationEasing="ease-in-out"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              content={<CustomToolTip />}
              cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default PatientsDistribution;
