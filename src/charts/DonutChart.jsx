import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const DonutChart = ({ data, colors }) => {
  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="flex gap-2 border-2 border-themeDark-primary  bg-gray-400 dark:bg-themeDark-senary dark:text-themeDark-primary text-[12px] font-medium p-2 rounded-md">
          <p>{payload[0].name}</p>
          <p>{payload[0].value}</p>
        </div>
      );
    }
  };

  return (
    <div className="h-full w-full">
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
          <Legend
            wrapperStyle={{
              fontSize: "12px",
            }}
          />
          <Tooltip
            content={<CustomToolTip />}
            cursor={{ fill: "rgba(255, 255, 255, 0.3)" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
