"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-xl p-6 h-full shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-[#E0E0E0]">Attendance</h1>
        <Image src="/moreDark.png" alt="More" width={24} height={24} />
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart width={500} height={300} data={data} barSize={14}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#555" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#A3A3A3" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#A3A3A3" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2C2C2C",
              borderRadius: "10px",
              borderColor: "#555",
              color: "#E0E0E0",
            }}
            labelStyle={{ color: "#FAE27C" }}
            cursor={{ fill: "#333" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "20px",
              paddingBottom: "30px",
              color: "#E0E0E0",
            }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
