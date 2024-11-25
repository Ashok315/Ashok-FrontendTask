import React from 'react'

 const Topbar = () => {
  return (
    <div className='flex justify-end md:justify-between gap-[7px] items-center px-[45px]'>
        {/* search button */}
        <div className='lg:ml-[25%] relative'>
            <input type="text" className='text-xs w-full ring-1 ring-gray-300 py-[5px] ps-[30px] pe-[12px] rounded-full outline-none' placeholder='Search'/>
             <img  src="/searchIcon.svg" alt="" width="27px" className='absolute ml-[5px] top-[1px]' />
        </div>
        
        {/* user-section */}
        <div className='flex justify-between items-center gap-[21px]'>
             <div className='hidden md:block'>Premium</div>

             <div className='cursor-pointer hidden md:flex justify-center text-xs md:text-sm items-center px-[12px] py-[6px] bg-black rounded-full'>
                <img src="/downloadIcon.svg" alt="" width="20px" />
                <div className='text-white'>Get App</div>
             </div>

             <div className='cursor-pointer hidden md:block'>
                <img src="/notificationIcon.svg" alt="" />
             </div>

             <div className='cursor-pointer'>
                <img src="/userIcon.svg" alt="" />
             </div>

        </div>

    </div>
  )
}

export default Topbar;
