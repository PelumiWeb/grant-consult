import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis, ReferenceLine } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 1,
    year: "Jan",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 7,
    year: "Feb",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 16,
    year: "Mar",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 5,
    year: "Apr",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 8,
    year: "May",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 11,
    year: "Jun",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 15,
    year: "Jul",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 16,
    year: "Aug",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 13,
    year: "Sep",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 15,
    year: "Oct",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 11,
    year: "Nov",
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 14,
    year: "Dec",
  },
];

const BarchartComponent = () => {
  const getBarColor = (year: any) => {
    if (year === "Jan") return "#2B72FB"; // Light purple for low values
    if (year === "Feb") return "#64BDC6"; // Green for medium values
    if (year === "Mar") return "#EECA34"; // Yellow for higher values
    if (year === "Apr") return "#FE6A35"; // Yellow for higher values
    if (year === "May") return "#FA4B42"; // Yellow for higher values
    if (year === "Jun") return "#EE60E0"; // Yellow for higher values
    if (year === "Jul") return "#7B47E9"; // Yellow for higher values
    if (year === "Aug") return "#5D89DF"; // Yellow for higher values
    if (year === "Sep") return "#6AD1FE"; // Yellow for higher values
    if (year === "Oct") return "#3FDC7E"; // Yellow for higher values
    if (year === "Nov") return "#2B72FB"; // Yellow for higher values
    if (year === "Dec") return "#64BDC6"; // Yellow for higher values

    return "#ff8042"; // Orange for the highest values
  };
  const maxY = Math.max(...data.map((d) => d.amt)); // Find the max value from the data
  const evenTicks = Array.from(
    { length: Math.ceil(20 / 2) + 1 },
    (_, i) => i * 2
  ); // Generate even ticks up to max

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: -25,
          bottom: 5,
        }}>
        {evenTicks.map((tick) => (
          <ReferenceLine
            key={tick}
            y={tick}
            stroke="lightGray" // Light gray line
            // strokeDasharray="3 3"
          />
        ))}
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
        <YAxis dataKey="amt" ticks={evenTicks} domain={[0, 20]} />

        {/* XAxis for years */}
        <XAxis dataKey="year" />

        {/* Add a ReferenceLine at each even tick */}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarchartComponent
