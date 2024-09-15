"use client";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { MoreHorizontal } from "lucide-react"; // Use lucide-react for the 'more' icon

const data = [
  { name: "Group A", value: 92, fill: "#6BCB77" }, // Updated color for Group A
  { name: "Group B", value: 8, fill: "#FF6B6B" },  // Updated color for Group B
];

const Performance = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-80 relative w-96">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Performance</h1>
        <MoreHorizontal className="text-gray-500 w-5 h-5 cursor-pointer" />
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="75%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">9.2</h1>
        <p className="text-sm text-gray-400">out of 10 max LTS</p>
      </div>
      <h2 className="font-medium absolute bottom-8 left-0 right-0 text-center text-gray-600">1st Semester - 2nd Semester</h2>
    </div>
  );
};

export default Performance;
