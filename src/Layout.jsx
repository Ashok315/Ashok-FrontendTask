import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

const Layout = () => {
  const [menuToggle,setMenuToggle]=useState(false);


  return (
    <div className='flex h-full'>
      
        {
        !menuToggle
        ?
        <>
              {/* left-section */}
             <div className='w-[18%] hidden md:block md:w-[20%] pt-[120px] px-[17px] md:px-[10px] lg:px-[17px]'>
                    <Sidebar></Sidebar>
             </div>
        
            {/* right-section */}
            <div className='bg w-full md:w-[80%] pt-[30px] md:pt-[41px]'> 
                <Topbar></Topbar>  

                {/* back button */}
                <div className='flex gap-[4px] items-center text-lightgray-300 pt-[15px ]'>
                    <img src="/arrowIcon.svg" alt="" />
                    <button>Back to Library</button>   
                </div>
                <Outlet></Outlet>
            </div>
        </>
        :
        <>
           {/* left-section */}
           <div className='w-[60%]  md:hidden  pt-[120px] px-[17px] md:px-[10px] lg:px-[17px]'>
                    <Sidebar></Sidebar>
             </div>
         
            {/* right-section */}
            <div className='bg w-[40%]  opacity-30  backdrop:bg-gray-500 pt-[30px] md:pt-[41px]'> 
                <Topbar></Topbar>  

                {/* back button */}
                <div className='flex gap-[4px] items-center text-lightgray-300 pt-[15px ]'>
                    <img src="/arrowIcon.svg" alt="" />
                    <button>Back to Library</button>   
                </div>
                <Outlet></Outlet>
            </div>  
        </>}
       


{/* menuBar mobile */}
          <div onClick={()=>setMenuToggle(!menuToggle)} className='absolute top-[40px] left-[20px] md:hidden cursor-pointer'>
               <img src="/menuBarIcon.svg" alt=""  width="22px"/>
          </div>
        
    </div>



  )
}

export default Layout
