import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "15 Oct",
    uv: 4000,
    pv: 2400,
    amt: 10,
  },
  {
    name: "18 Oct",
    uv: 3000,
    pv: 1398,
    amt: 20,
  },
  {
    name: "20 Oct",
    uv: 2000,
    pv: 9800,
    amt: 9,
  },
  {
    name: "22 Oct",
    uv: 2780,
    pv: 3908,
    amt: 30,
  },
  {
    name: "24 Oct",
    uv: 1890,
    pv: 4800,
    amt: 32,
  },
  {
    name: "26 Oct",
    uv: 2390,
    pv: 3800,
    amt: 34,
  },
  {
    name: "28 Oct",
    uv: 3490,
    pv: 4300,
    amt: 38,
  },
  {
    name: "30 Oct",
    uv: 3490,
    pv: 4300,
    amt: 45,
  },
  {
    name: "1 Nov",
    uv: 3490,
    pv: 4300,
    amt: 40,
  },
  {
    name: "3 Nov",
    uv: 3490,
    pv: 4300,
    amt: 50,
  },
];

const GrantAreaChart = () => {
  const demoUrl = "https://codesandbox.io/p/sandbox/tiny-area-chart-gq23nh";

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <XAxis
          dataKey="name"
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            fill: "#000000",
          }}
        />
        <YAxis
          axisLine={false}
          domain={[0, 60]}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Inter",
            fill: "#000000",
          }}
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
        />
        {/* <Tooltip /> */}
        <Area type="monotone" dataKey="amt" stroke="#2B72FB" fill="#2B72FB" />
      </AreaChart>
    </ResponsiveContainer>
  );
};


export default GrantAreaChart