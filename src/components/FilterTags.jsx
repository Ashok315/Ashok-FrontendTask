import React from 'react'

const FilterTags = ({listOfTags,navigateListItem,activeListItem}) => {
    
  return (

    <div className='flex justify-center md:justify-start  items-center gap-[0]  md:gap-[10px] capitalize px-[10px] md:px-[0px] py-[33px] text-[12px]'>
        {listOfTags.map((item)=>(   
            <div key={item} onClick={()=>navigateListItem(item)} role='button' className={`${activeListItem==item?"bg-orange text-white":"text-dark"} cursor-pointer rounded-full px-[20px] py-[4px]`}>{item}</div>
        ))}
    </div>
  )
}

export default FilterTags;

