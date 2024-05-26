import React from 'react'
import bg from './bgResturent.webp'
export const FoodCard = ({foodName , image  }) => {
    
  return (
   <>
        <div className='w-[300px] h-[350px] border-4 border-red-200 m-4 flex justify-center items-center flex-col'>
            <img src = {image} className='w-[250px]' />
            <figcaption className='text-center font-bold text-lg '>{foodName}</figcaption>
        </div>
   </>
  )
}
