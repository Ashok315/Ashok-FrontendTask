
import React, { useState } from "react";

const ScheduleTag = () => {
  const tags = [
    "Listen",
    "Learn",
    "Work-Out",
    "Study",
    "Practice",
    "Other",
    "Work-Out",
    "Study",
    "Listen",
    "Learn",
    "Work-Out",
    "Study",
    "Learn",
    "Work-Out",
    "Study",
    "Practice",
    "Other",
    "Work-Out",
    "Study",
    "Listen",
    "Learn",
    "Work-Out",
    "Study",
    "Practice",
    "Other",
    "Work-Out",
    "Study",
    "Learn",
    "Work-Out",
    "Study",
    "Practice",
    "Other",
    "Work-Out",
    "Study",
    "Listen",
    "Learn",
    "Work-Out",
    "Study",
    "Practice",
    "Other",
    "Work-Out",
  ];

  const itemsPerPage = 15; // Number of tags to display per page
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate total pages
  const totalPages = Math.ceil(tags.length / itemsPerPage);

  // Get tags for the current page in sequence
  const getCurrentTags = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return tags.slice(startIndex, endIndex);
  };

  const currentTags = getCurrentTags();

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-[16px] font-open-sans font-bold my-4">Schedule</h2>
      {/* Tags Container */}
      <div className="flex flex-wrap gap-[6px] items-center">
        {currentTags.map((tag, index) => (
          <div
            key={`${tag}-${currentPage}-${index}`} 
            className={`px-[12px] py-[5px] text-deepgray rounded-full text-[13px] mb-3 cursor-pointer ${
              tag === "Listen"
                ? "bg-lightgray-300 text-gray-800"
                : tag === "Learn"
                ? "bg-mistyrose"
                : tag === "Work-Out"
                ? "bg-papayawhip"
                : tag === "Study"
                ? "bg-lightgreen"
                : tag === "Practice"
                ? "bg-antiquewhite"
                : "bg-darkgray"
            }`}
          >
            {tag}
          </div>
        ))}
           
               {/* buttons */}
               <div className="flex justify-center gap-2 items-center mb-3">
                  {/* prev-button */}
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className={`px-[7.5px] py-[0.5px] rounded-full border-[1.5px] border-gray-400  text-gray-400 font-medium ${
                      currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    &lt;
                  </button>

              {/* next-button */}
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    className={`px-[7.5px] py-0.5px] rounded-full border-[1.5px] border-gray-400 text-gray-400 font-medium ${
                      currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    &gt;
                  </button>
            </div>

      </div>

    </div>
  );
};


export default ScheduleTag;

