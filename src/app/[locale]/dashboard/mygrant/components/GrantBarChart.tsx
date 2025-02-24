import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  ReferenceLine,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 50,
    year: "Lagos",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 30,
    year: "Abuja",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 20,
    year: "Kaduna",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 10,
    year: "Others",
  },
];

const GrantBarChart = () => {
  const getBarColor = (year: any) => {
    if (year === "Lagos") return "#2B72FB"; // Light purple for low values
    if (year === "Abuja") return "#64BDC6"; // Green for medium values
    if (year === "Kaduna") return "#EECA34"; // Yellow for higher values
    if (year === "Others") return "#FE6A35"; // Yellow for higher values
    return "#ff8042"; // Orange for the highest values
  };
  const maxY = Math.max(...data.map((d) => d.amt)); // Find the max value from the data
  const evenTicks = Array.from(
    { length: Math.ceil(60 / 2) + 1 },
    (_, i) => i * 2
  ); // Generate even ticks up to max

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}>
        {/* {evenTicks.map((tick) => (
          <ReferenceLine
            key={tick}
            y={tick}
            stroke="lightGray" // Light gray line
            // strokeDasharray="3 3"
          />
        ))} */}
        <Bar
          dataKey="amt"
          fill="#8884d8"
          shape={(props: any) => (
            <rect
              {...props}
              fill={getBarColor(props.payload.year)} // Pass the value to the color function
            />
          )}
        />
        <YAxis
          dataKey="amt"
          // ticks={evenTicks}
          // label={"Views"}
          label={{
            value: "Views",
            angle: -90,
            position: "insideLeft",
            style: {
              textAnchor: "middle",
              fill: "#666666",
              fontSize: 12,
              fontWeight: 400,
              fontFamily: "Inter",
            },
          }}
          axisLine={false}
          domain={[0, 60]}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            fill: "#000000",
          }}
        />

        <XAxis
          dataKey="year"
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            fill: "#000000",
          }}
        />

        {/* Add a ReferenceLine at each even tick */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GrantBarChart;
