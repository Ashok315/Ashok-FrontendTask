import { useState } from "react";
import FilterTags from "../components/FilterTags";
import BigCalendar from "../components/BigCalendar";
import EventCalendar from "../components/EventCalendar";
const listOfTag=["all","listening","learning","rehearsal","perform"];



const Home=()=>{
 
    const [query, setQuery]=useState('all');
    const changeQuery=(item)=>setQuery(item);


    return(
        <>
        <div className="px-[39px]">
            <FilterTags listOfTags={listOfTag} navigateListItem={changeQuery} activeListItem={query}></FilterTags>
            {/* schedule-section */}
            <div className="shadow-md shadow-gray-400 rounded-md h-full">

                <div className="flex items-center justify-between py-[15px] text-dark border-spacing-0 border-b-[1.5px] border-b-gray-400">
                    <p className="border-spacing-0 border-b border-b-gray-600 text-[24px] font-semibold ms-[20px]">Calendar</p>

                    <div className="flex justify-between items-center gap-[32px] py-[2.5px]">
                    <img src="/lockIcon.svg" alt="" />
                    <p>Google Calendar</p>
                    {/* switch input */}
                    <div>
                            <div className="flex items-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-dark rounded-full peer peer-focus:ring-4 peer-focus:ring-orange peer-checked:bg-orange"></div>
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                                    </label>
                                    <span className="ml-3 text-sm font-medium text-dark"></span>
                                </div>
                    </div>

                    </div>

                </div>

                
            
              {/* big calender and calender */}
                 <div className="flex items-start justify-between p-[10px] flex-col xl:flex-row">
                    {/* left */}
                      <div>
                           <BigCalendar/>
                      </div>

                    {/* right */}
                    <div>
                         <EventCalendar />
                    </div>
                 </div>
 
            </div>
         
          </div>
        </>
    )
};

export default Home;