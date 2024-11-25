import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="hidden lg:flex justify-center items-center  w-full py-4 md:pr-[6px]">
      <div className="bg-white py-4 rounded-lg w-full lg:w-full !border-none !outline-none">
        <Calendar
          value={date}
          onChange={handleDateChange}
        //   showNeighboringMonth={false}
          className="mt-3 text-sm  !border-none !shadow-none !lowercase"
        />
      </div>
    </div>
  );
};

export default EventCalendar;
