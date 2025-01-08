import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface Platform {
  id: string;
  value: number;
  color?: string;
}

const platforms: Platform[] = [
  { id: "Summer", value: 50 },
  { id: "Rain", value: 30 },
  { id: "Winter", value: 15 },
];

const palette = ["#fdb636", "#2389ff", "#fc94bd"];

export default function PieColor() {
  return (
    <Stack
      direction="column"
      width="100%"
      height="100%"
      justifyContent="center"
      justifyItems="center"
      textAlign="center"
    >
      <div className="text-2xl font-bold">The Seasons of This Year</div>
      <Box>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={platforms}
              dataKey="value"
              nameKey="id"
              innerRadius="50%" // This creates the hole in the center
              outerRadius="80%" // Adjust this for the outer circle size
              paddingAngle={4}
            >
              {platforms.map((platform, index) => (
                <Cell key={platform.id} fill={palette[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <Box className="flex text-center gap-4 justify-center ">
        {platforms.map((platform, index) => (
          <Box
            key={platform.id}
            className="text-sm font-medium flex items-center gap-1"
          >
            <Box
              style={{
                backgroundColor: palette[index],
              }}
              className="w-3 h-3 rounded-full lg:w-2.5 lg:h-2.5"
            ></Box>
            {platform.id}: {platform.value}%
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
