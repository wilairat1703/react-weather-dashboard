import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataPoint[] = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// Define the possible valid values for interval
type AxisInterval =
  | "preserveStart"
  | "preserveEnd"
  | "preserveStartEnd"
  | "equidistantPreserveStart"
  | number;

interface CustomActiveShapeProps {
  [key: string]: unknown;
}

const CustomActiveShape: React.FC<CustomActiveShapeProps> = () => {
  // Correct type for interval
  const chart = (interval: AxisInterval) => (
    <ResponsiveContainer height={200} width="100%">
      <LineChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={interval} />
        <YAxis interval={interval} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <div className="row-span-1 bg-white flex justify-center items-center p-4 rounded-2xl shadow-lg">
        {chart("preserveEnd")}
      </div>
      <div className="row-span-1 bg-white flex justify-center items-center p-4 rounded-2xl shadow-lg">
        {chart(1)}
      </div>

      {/* {chart("preserveStart")} */}
      {/* {chart("preserveStartEnd")} */}
      {/* {chart("equidistantPreserveStart")} */}
      {/* {chart(1)} */}
    </>
  );
};

export default CustomActiveShape;
