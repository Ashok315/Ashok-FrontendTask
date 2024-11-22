import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 bg-white shadow-md rounded-lg w-[80%]">
        <Calendar
          value={date}
          onChange={handleDateChange}
          showNeighboringMonth={false} // Hide extra days from other months
        />
      </div>
    </div>
  );
};

export default EventCalendar;
