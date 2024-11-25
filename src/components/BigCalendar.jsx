
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// Dummy events data
// const events = [
//   {
//     title: "Jai Shree Ram",
//     start: new Date(2022, 4, 27, 8, 0),
//     end: new Date(2022, 4, 27, 8, 15),
//     description: "To be played in 15 min",
//   },
//   {
//     title: "Radha 2023",
//     start: new Date(2022, 4, 27, 9, 0),
//     end: new Date(2022, 4, 27, 9, 30),
//     description: "To be played",
//   },
//   {
//     title: "Office Chill Track",
//     start: new Date(2022, 4, 27, 10, 0),
//     end: new Date(2022, 4, 27, 11, 0),
//     description: "To be played",
//   },
 
// ];
const today=new Date();
const events = [
    {
      title: "Jai Shree raam",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 1, 0),
    },
    {
      title: "Radha 2023",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 1, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 1, 30),
    },
    {
      title: "B Prank",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 2, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 3, 0),
    },
    {
      title: "Arlene mccoy track",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 4, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 4, 30),
    },
    {
      title: "Office chill track",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 5, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 5, 30),
    },
    {
      title: "Jacob Jones",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 0),
    },
    {
      title: "Kristin Watson",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    },
    {
      title: "Esther Track",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
    },
    {
      title: "Chloe McKinney Hits",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
    },
      {
        title: "Lunch",
        start: new Date(2024, 10, 24, 13, 0),
        end: new Date(2024, 10, 24, 14, 0),
      },
      {
        title: "Conference",
        start: new Date(2024, 10, 25, 9, 0),
        end: new Date(2024, 10, 25, 17, 0),
      },
      {
        title: "Workshop",
        start: new Date(2024, 10, 26, 9, 0),
        end: new Date(2024, 10, 26, 11, 0),
      },
  ];

const CustomEvent = ({ event }) => (
  <div>
    <strong>{event.title}</strong>
    <p className="text-gray-500 text-sm">{event.description}</p>
  </div>
);



const CustomToolbar = ({ label, onNavigate, view, onView, day=new Date().toDateString()}) => (
  <div className="flex flex-col lg:flex-row items-center  justify-between mb-4  gap-6">

            <div className="flex lg:flex-non  items-center gap-3">
                <button onClick={() => onNavigate("PREV")} className="px-3 py-2 border border-lightgray-400 rounded">
                    <img src="/public/leftIcon.svg" className="rotate-180" alt="" />
                </button>
                <div>{label}</div>
                <button onClick={() => onNavigate("NEXT")} className="px-3 py-2 border border-lightgray-400 rounded">
                    <img src="/rightIcon.svg" alt="" />
                </button>
            </div>
        
            <div className="flex items-center w-full lg:flex-1 lg:w-64 justify-between">
                {/* view buttons */}
                    <div>

                        <button onClick={() => onView("day")} className={`px-3 py-[7px] ${view === "day" ? "bg-orange text-white" : "bg-gray-200"}`}>
                            Day
                        </button>
                        
                        <button
                            onClick={() => onView("week")}
                            className={`px-3 py-[7px]  ${view === "week" ? "bg-orange text-white" : "bg-gray-200"}`}
                        >
                            Week
                        </button>
                        
                        <button
                            onClick={() => onView("month")}
                            className={`px-3 py-[7px]  ${view === "month" ? "bg-orange text-white" : "bg-gray-200"}`}
                        >
                            Month
                        </button>
                    </div>

                {/* schedule button */}
                    <div>
                        <button className="px-4 py-[7px]  bg-orange text-sm rounded-full text-white flex items-center gap-[5px]"> 
                            <img src="/plusIcon.svg" alt="" className=" inline-block" />                        
                            Schedule session
                        </button>
                    </div>
            </div>
 
  </div>
);

const BigCalendar = () => {
  return ( 
    <div className="p-1 bg-white rounded-lg w-full h-[100vh] text-[12.5px]">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="day"
        views={["day", "week", "month"]}
        timeslots={4}
        step={15}
        defaultDate={today}
        style={{ height: "100%", width: "100%" }}
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default BigCalendar;
