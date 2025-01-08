import { Box, Typography } from "@mui/material";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", Winter: 40, Rain: 34, Summer: 45 },
  { month: "Feb", Winter: 30, Rain: 13, Summer: 25 },
  { month: "Mar", Winter: 20, Rain: 30, Summer: 10 },
  { month: "Apr", Winter: 27, Rain: 24, Summer: 30 },
  { month: "May", Winter: 18, Rain: 13, Summer: 45 },
  { month: "Jun", Winter: 15, Rain: 10, Summer: 50 },
  { month: "Jul", Winter: 20, Rain: 15, Summer: 45 },
  { month: "Aug", Winter: 22, Rain: 18, Summer: 42 },
  { month: "Sep", Winter: 25, Rain: 50, Summer: 48 },
  { month: "Oct", Winter: 28, Rain: 22, Summer: 30 },
  { month: "Nov", Winter: 35, Rain: 28, Summer: 30 },
  { month: "Dec", Winter: 38, Rain: 32, Summer: 20 },
];
const StackedAreaChart = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "450px",
        backgroundColor: "white",
        paddingTop: 4,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 8,
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        borderRadius: 4,
      }}
    >
      <Typography variant="h6" gutterBottom fontWeight={"bold"} >
        Temperature Overtimer Grouped
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Winter"
            stackId="1"
            stroke="#e65a92"
            fill="#e65a92"
          />
          <Area
            type="monotone"
            dataKey="Rain"
            stackId="1"
            stroke="#2389ff"
            fill="#2389ff"
          />
          <Area
            type="monotone"
            dataKey="Summer"
            stackId="1"
            stroke="#fdb636"
            fill="#fdb636"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StackedAreaChart;
