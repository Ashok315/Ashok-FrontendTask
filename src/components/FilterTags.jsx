import React from 'react'

const FilterTags = ({listOfTags,navigateListItem,activeListItem}) => {
    
  return (

    <div className='flex items-center gap-[10px] capitalize py-[33px] text-[12.5px]'>
        {listOfTags.map((item)=>(
            <div key={item} onClick={()=>navigateListItem(item)} role='button' className={`${activeListItem==item?"bg-orange text-white":"text-dark"} cursor-pointer rounded-full px-[33px] py-[4px]`}>{item}</div>
        ))}
    </div>
  )
}

export default FilterTags;

