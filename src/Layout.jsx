import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Footer from './components/Footer'

const Layout = () => {
  const [menuToggle,setMenuToggle]=useState(false);
  const menuStatus=(status)=>setMenuToggle(status);

  return (
    <div className='flex h-full'>
      
        {
        !menuToggle
        ?
            <>
                {/* left-section */}
                <div className='w-full hidden md:block md:w-[22%] lg:w-[18%] pt-[120px] px-[17px] md:px-[10px] lg:px-[17px] relative'>
                        <Sidebar></Sidebar>
                </div>
        
                {/* right-section */}
                <div className='md:w-[78%] lg:w-[82%] pt-[30px] md:pt-[41px]'> 
                    <Topbar></Topbar>  

                    {/* back button */}
                    <div className='flex gap-[4px] items-center pl-[39px] text-lightgray-400 pt-[15px ]'>
                        <img src="/arrowIcon.svg" alt="" />
                        <button>Back to Library</button>   
                    </div>
                    <Outlet></Outlet>
                    <Footer></Footer>
            </div>
        </>
        :
        <>
           {/* left-section */}
           <div className='w-full md:w-[18%] md:block  pt-[120px] px-[17px] md:px-[10px] lg:px-[17px]'>
                    <Sidebar menuOpen={menuStatus}></Sidebar>
             </div>
         
            {/* right-section */}
            <div className='bg w-full hidden md:block md:w-full pt-[30px] md:pt-[41px]'> 
                <Topbar></Topbar>  

                {/* back button */}
                <div className='flex gap-[4px] items-center text-lightgray-300 pt-[15px ]'>
                    <img src="/arrowIcon.svg" alt="" />
                    <button>Back to Library</button>   
                </div>
                <Outlet></Outlet>   
                <Footer></Footer>           
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
