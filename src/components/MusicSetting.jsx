import React, { useState } from "react";

const MusicSetting = () => {
  const [isPlaying, setIsPlaying] = useState([true, false]);

  const togglePlay = (index) => {
    setIsPlaying((prev) =>
      prev.map((playing, i) => (i === index ? !playing : playing))
    );
  };

  return (
    <div className="mx-auto py-[35px] bg-white rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px] font-bold font-open-sans text-dark">Music</h2>
        <button className="text-gray-500">
          <img src="/settingIcon.svg" alt="" />
        </button>
      </div>
      <div className="space-y-4">
        {["Ronald rich playlist", "Ronald rich playlist"].map((playlist, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
          >
            <span>{playlist}</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => togglePlay(index)}
                className={`p-2 rounded-full`}
              >
                {isPlaying[index]?<img src="/onSwitchIcon.svg" alt="" />:<img src="/offSwitchIcon.svg" alt="" />}
                
              </button>
              <button>
                 <img src="/deleteIcon.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button className="flex items-center space-x-5 bg-orange text-white py-2 px-5 rounded-full shadow hover:bg-yellow-500">
          <img src="/shareIcon.svg" width="15px" alt="" />
          <span className="text-[16px]">Share</span>
        </button>
      </div>
    </div>
  );
};

export default MusicSetting;
