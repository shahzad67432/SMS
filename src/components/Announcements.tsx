"use client";

const Announcements = () => {
  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-[#E0E0E0]">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-[#2C2C2C] rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium text-[#FAE27C]">New Library Hours</h2>
            <span className="text-xs text-gray-500 bg-[#3A3A3A] rounded-md px-2 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-300">
            For All Classes
          </p>
        </div>
        <div className="bg-[#2C2C2C] rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium text-[#C3EBFA]">Student Council Elections</h2>
            <span className="text-xs text-gray-500 bg-[#3A3A3A] rounded-md px-2 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-300">
          9A, 9B, 10A, 10B, 11A, 11B
          </p>
        </div>
        <div className="bg-[#2C2C2C] rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium text-[#FAE27C]">Flu Shot Clinic</h2>
            <span className="text-xs text-gray-500 bg-[#3A3A3A] rounded-md px-2 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-300">
            For All Classes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
