import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const menuItems=[
    {
        label:"home",
        icon:"/homeIcon.svg",
        href:"/"

    },
    {
        label:"library",
        icon:"/libraryIcon.svg",
        href:"#"
    },
    {
        label:"collection",
        icon:"/collectionIcon.svg",
        href:"#",
        subItems:[
            {
                label:"playlists",
                icon:"/playlistIcon.svg",
                href:"#",
            },
            {
                label:"tracks",
                icon:"/tracksIcon.svg",
                href:"#",
            }, 
            {
                label:"artist",
                icon:"/artistsIcon.svg",
                href:"#",
            },
            {
                label:"albums",
                icon:"/albumsIcon.svg",
                href:"#",
            },
            {
                label:"genres",
                icon:"/genresIcon.svg",
                href:"#",
            },
            {
                label:"decades",
                icon:"/decadesIcon.svg",
                href:"#",
            }, 
            {
                label:"geos",
                icon:"/geosIcon.svg",
                href:"#",
            }        
        ]    
    },
    {
        label:"community",
        icon:"/communityIcon.svg",
        href:"#"
    }, 
    {
        label:"stations",
        icon:"/stationsIcon.svg",
        href:"#",
        subItems:[
            {
                label:"scheduled listening",
                icon:"/scheduleIcon.svg",
                href:"#",
            },
            {
                label:"music discovery ",
                icon:"/discoverIcon.svg",
                href:"#",
            }, 
            {
                label:"positive music",
                icon:"/positiveIcon.svg",
                href:"#",
            },
            {
                label:"mood regulation",
                icon:"/moodIcon.svg",
                href:"#",
            },
        ]

    },
    {
        label:"performance",
        icon:"/performanceIcon.svg",
        href:"#",
        subItems:[
            {
                label:"calendar",
                icon:"/calendarIcon.svg",
                href:"#",
            },
            {
                label:"groups",
                icon:"/groupIcon.svg",
                href:"#",
            }, 
            {
                label:"music analysis",
                icon:"/analysisIcon.svg",
                href:"#",
            }
        ]

    }
]


export const Sidebar = ({menuOpen}) => {
  const location=useLocation();
  const [subMenuOpen,setSubmenuOpen]=useState({});

  const toggleSubMenu = (menuLabel) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [menuLabel]: !prev[menuLabel], 
    }));
  };

  return (
    <>
    <div className='capitalize text-[16px] md:text-[12px] lg:text-[16px]'>
    
        {menuItems.map((item)=>(
            <div key={item.label} className={`flex items-start gap-[16px] mb-[15px] pl-[20px] py-[5px] font-raleway relative ${location.pathname==item.href?"text-orange font-semibold rounded-lg bg-light-hover":""}`}>
                <img src={item.icon} alt={`${item.label}-icon`} className='mt-[0.2rem] md:w-[14px] lg:w-[20px]'></img>
                <div className=''>
                    <div href={item.href} className='cursor-pointer' onClick={()=>{toggleSubMenu(item.label),!item.subItems&&menuOpen(false)}} >
                       
                        <div>{item.label}</div>
                        {item.subItems&&<div className='absolute let-[50%] right-[40%] md:right-0  top-[13px]'><img src='/sideArrowIcon.svg' className=''></img></div>}
                        <div className={`${subMenuOpen[item.label] ? "" : "hidden"}`}>
                        
                            {
                                item.subItems?.map((subItem)=>(
                                <Link key={subItem.label} onClick={()=>menuOpen(false)}  className={`flex gap-[10px] pt-[10px] font-open-sans text-submenu-color`}>
                                    <img src={`${subItem.icon}`} alt={`${subItem.label}`}></img>
                                    <div href={subItem.href}>{subItem.label}</div> 
                                </Link>
                            ))            
                          }  
                        </div> 
                    </div>
                 </div>
                    
                          
            </div>
        ))}

            
    </div>

    <div className='absolute bottom-[6rem] gap-[12px] cursor-pointer hidden md:flex justify-center text-xs md:text-sm items-center px-[20px] py-[10px] bg-black rounded-full'>
        <div className='text-white'>Pro Partner</div>
        <img src="/public/partnerIcon.svg" alt="" width="15px" />

    </div>
   </>
  )
}

export default Sidebar;
