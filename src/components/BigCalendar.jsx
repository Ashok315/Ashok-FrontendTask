
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// Dummy events data
const events = [
  {
    title: "Jai Shree Ram",
    start: new Date(2022, 4, 27, 8, 0),
    end: new Date(2022, 4, 27, 8, 15),
    description: "To be played in 15 min",
  },
  {
    title: "Radha 2023",
    start: new Date(2022, 4, 27, 9, 0),
    end: new Date(2022, 4, 27, 9, 30),
    description: "To be played",
  },
  {
    title: "Office Chill Track",
    start: new Date(2022, 4, 27, 10, 0),
    end: new Date(2022, 4, 27, 11, 0),
    description: "To be played",
  },
  // Add more events as needed
];

const CustomEvent = ({ event }) => (
  <div>
    <strong>{event.title}</strong>
    <p className="text-gray-500 text-sm">{event.description}</p>
  </div>
);

const CustomToolbar = ({ label, onNavigate, view, onView }) => (
  <div className="flex items-center justify-between mb-4">
    <button onClick={() => onNavigate("PREV")} className="px-3 py-2 bg-gray-100 rounded">
    <img src="/public/leftIcon.svg" className="rotate-180" alt="" />
    </button>
    <span >{label}</span>
    <button onClick={() => onNavigate("NEXT")} className="px-3 py-2 bg-gray-100 rounded">
      <img src="/rightIcon.svg" alt="" />
    </button>
    <div className="">
      <button
        onClick={() => onView("day")}
        className={`px-3 py-1 ${view === "day" ? "bg-orange text-white" : "bg-gray-200"}`}
      >
        Day
      </button>
      <button
        onClick={() => onView("week")}
        className={`px-3 py-1  ${view === "week" ? "bg-orange text-white" : "bg-gray-200"}`}
      >
        Week
      </button>
      <button
        onClick={() => onView("month")}
        className={`px-3 py-1  ${view === "month" ? "bg-orange text-white" : "bg-gray-200"}`}
      >
        Month
      </button>
    </div>

 
    <button className="px-4 py-2 bg-orange text-sm rounded text-white">
        Schedule session
    </button>
  </div>
);

const BigCalendar = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-[120%]">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="day"
        views={["day", "week", "month"]}
        step={15}
        timeslots={4}
        style={{ height: "calc(100% - 80px)" }}
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default BigCalendar;
