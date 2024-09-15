"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Science Fair",
    class: "All",
    date: "2024-09-20",
    startTime: "09:00",
    endTime: "15:00",
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    class: "All",
    date: "2024-09-25",
    startTime: "16:00",
    endTime: "20:00",
  },
  {
    id: 3,
    title: "Field Trip to Natural History Museum",
    class: "6A",
    date: "2024-10-05",
    startTime: "09:00",
    endTime: "15:00",
  },
  {
    id: 4,
    title: "Annual Sports Day",
    class: "All",
    date: "2024-10-15",
    startTime: "08:00",
    endTime: "16:00",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <Calendar onChange={onChange} value={value} className="rounded-lg shadow-md" />
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-[#E0E0E0]">Events</h1>
        <Image src="/moreDark.png" alt="More options" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-4 rounded-md border-2 border-gray-800 bg-gray-900 text-gray-300"
            key={event.id}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-semibold text-[#FAE27C]">{event.title}</h1>
              <span className="text-gray-400 text-xs">{event.startTime}</span>
              <span className="text-gray-400 text-xs">{event.endTime}</span>
            </div>
            <p className="text-gray-400 text-sm">{event.class}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
