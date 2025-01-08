import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Define the data type for the chart entries
interface ChartData {
  name: string;
  rain: number;
  sun: number;
  winter: number;
}

// Sample data
const data: ChartData[] = [
  { name: "2018", rain: 4000, sun: 7400, winter: 8500 },
  { name: "2019", rain: 3000, sun: 8398, winter: 8500 },
  { name: "2020", rain: 2000, sun: 9800, winter: 1200  },
  { name: "2021", rain: 2780, sun: 5908, winter: 2300  },
  { name: "2022", rain: 1890, sun: 6800, winter: 7500  },
  { name: "2023", rain: 2390, sun: 7800, winter: 4500  },
  { name: "2024", rain: 3490, sun: 5300, winter: 7800  },
];

// Define the type for the custom bar shape props
type CustomBarShapeProps = React.ComponentProps<typeof Rectangle>;

// Custom shape for the bars
const CustomBarShape = ({
  x,
  y,
  width,
  height,
  fill,
  stroke,
}: CustomBarShapeProps) => {
  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    />
  );
};

function CustomBarChart() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex w-full text-xl px-7 pb-3 font-bold">
        Annual Rainfall and Sunshine Amounts
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          width={500}
          height={240}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sun" fill="#fdb636" shape={<CustomBarShape />} />
          <Bar dataKey="rain" fill="#fc94bd" shape={<CustomBarShape />} />
          <Bar dataKey="winter" fill="#2389ff" shape={<CustomBarShape />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart;
