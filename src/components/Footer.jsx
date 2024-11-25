import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center my-[72px] font-open-sans text-sm text-lightgray-500'>
         <div className='flex justify-between'>
             <Link href="#" className="px-[17px] border-r border-gray-500">About</Link>
             <Link href="#" className="px-[17px] border-r border-gray-500">Help</Link>
             <Link href="#" className="px-[17px] border-r border-gray-500">Term & Conditions</Link>
             <Link href="#" className="px-[17px] border-r border-gray-500">Privacy</Link>
             <Link href="#" className="px-[17px] border-r border-gray-500">Copyright policy</Link>
             <Link href="#" className="px-[17px] ">Contact us</Link>
         </div>
         <div className='my-[14px] flex justify-center items-center gap-[17px]'>
             <div className='px-[17px] border-x border-gray-500'>©CuriousHit 2023 - All Rights Reserved</div>
             <div className='gap-[30px] flex justify-center items-center'>
                <div><img src="/facebookIcon.svg" alt="" /></div>
                <div><img src="/twitterIcon.svg" alt="" /></div>
                <div><img src="/linkedinIcon.svg" alt="" /></div>
                <div><img src="/instagramIcon.svg" alt="" /></div>
                <div><img src="/tiktokIcon.svg" alt="" /></div>                
             </div>
         </div>

    </div>
  )
}

export default Footer