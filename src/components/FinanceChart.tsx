"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 5000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1200,
  },
  {
    name: "Mar",
    income: 4500,
    expense: 1500,
  },
  {
    name: "Apr",
    income: 6000,
    expense: 4000,
  },
  {
    name: "May",
    income: 3500,
    expense: 1800,
  },
  {
    name: "Jun",
    income: 5000,
    expense: 3200,
  },
  {
    name: "Jul",
    income: 4000,
    expense: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-xl w-full h-full p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-[#E0E0E0]">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2C2C2C" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4A90E2"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#FF6B6B"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
