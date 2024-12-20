import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


const data = [
  { name: "A1", value: 43 },
  { name: "A2", value: 30 },
  { name: "B1", value: 27 },
];


const COLORS = ["#EECA34", "#64BDC6", "#2B72FB"];

const GrantBarChart = () => {
  const demoUrl = "https://codesandbox.io/s/pie-chart-of-two-levels-gor24";

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            fill="#82ca9d"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) / 2;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="black"
                  textAnchor={x > cx ? "middle" : "end"}
                  dominantBaseline="central"
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                  }}>
                  {data[index].value + "%"}
                </text>
              );
            }}
            labelLine={false}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="transparent"

                // shape={() => <CustomShape index={index} {...entry} />}
              ></Cell>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}

export default GrantBarChart
