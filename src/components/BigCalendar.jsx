
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const today=new Date();
const events = [
    {
      title: "Jai Shree raam",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 1, 0),
      color: "#12BDB2"
    },
    {
      title: "Radha 2023",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 1, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 1, 30),
      color: "#8239BC"
    },
    {
      title: "B Prank",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 2, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 3, 0),
      color: "#8239BC"
    },
    {
      title: "Arlene mccoy track",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 4, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 4, 30),
      color: "#54A0CA",
    },
    {
      title: "Office chill track",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 5, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 5, 30),
      color: "#54A0CA",
    },
    {
      title: "Jacob Jones",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 0),
      color: "#12BDB2"
    },
    {
      title: "Kristin Watson",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
      color:"#8239BC"
    },
    {
      title: "Esther Track",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 30),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
      color:"#8239BC"
    },
    {
      title: "Chloe McKinney Hits",
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
      end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
      color: "#12BDB2"
    },
      {
        title: "Lunch",
        start: new Date(2024, 10, 24, 13, 0),
        end: new Date(2024, 10, 24, 14, 0),
        color:"#8239BC"
      },
      {
        title: "Conference",
        start: new Date(2024, 10, 25, 9, 0),
        end: new Date(2024, 10, 25, 11, 0),
        color: "#12BDB2"
      },
      {
        title: "Workshop",
        start: new Date(2024, 10, 26, 11, 0),
        end: new Date(2024, 10, 26, 11, 30),
        color: "#54A0CA",
      },
  ];

const CustomEvent = ({ event }) => (
  <div className="text-darker">
    <p className="py-[3px]">{event.title}</p>
    <p className="text-gray-500 text-sm">{event.description}</p>
  </div>
);

const CustomToolbar = ({ label, onNavigate, view, onView, day=new Date().toDateString()}) => (
  <div className="flex flex-col lg:flex-row items-center  justify-between mb-4  gap-6 lg:gap-3">

            <div className="flex lg:flex-non  items-center gap-3 lg:gap-1">
                <button onClick={() => onNavigate("PREV")} className="px-3 py-2 border border-lightgray-400 rounded">
                    <img src="/public/leftIcon.svg" className="rotate-180" alt="" />
                </button>
                <div>{label}</div>
                <button onClick={() => onNavigate("NEXT")} className="px-3 py-2 border border-lightgray-400 rounded">
                    <img src="/rightIcon.svg" alt="" />
                </button>
            </div>
        
            <div className="flex items-center w-full lg:flex-1 lg:w-64 justify-between text-[12px]">
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
                        <button className="px-4 py-[7px]  bg-orange text-[12px] rounded-full text-white flex items-center gap-[5px] lg:gap-[3px]"> 
                            <img src="/plusIcon.svg" alt="" className=" inline-block" />                        
                            Schedule session
                        </button>
                    </div>
            </div>
 
  </div>
);

// Dynamically style events
const eventPropGetter = (event) => {
    if (event.color) {
      return {
        style: {
          border: `4px solid ${event.color}`,
          borderWidth:'0 0 0 4px',
          backgroundColor: "#F3F4F6", 
          color: "gray", 
          borderRadius: "4px", 
          padding: "5px",
        },
      };
    }
    return {};
  };
  


const BigCalendar = () => {
  return ( 
    <div className="p-1 bg-white rounded-lg w-full h-[100vh] text-[12px]">
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
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default BigCalendar;
