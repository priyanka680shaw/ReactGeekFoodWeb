import logo from './logo.png'
import bg from './bgResturent.webp'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

export const FoodHomePage = () => {
  return (
    <>
        <div className="mainContainer bg-red-900 w-full h-[70vh] bg-[url('./bgResturent.webp')]" style={{ backgroundImage: `url(${bg})` }}>
            <div className="nav">
                <div className='flex c pl-8 pr-8 pt-4 pb-4 bg-orange-700 justify-between'>
                   <div className='flex items-center'>
                   <span><img src= {logo} className='w-[40px]'/></span>
                    <span className='pl-4 text-white font-bold text-lg'>FastEat</span>
                   </div>
                    <div className='flex justify-end w-fulls'>
                        <HiOutlineAdjustmentsHorizontal className='text-3xl text-white'/>
                    </div>
                </div>
                
            </div>
        </div>
        
    </>
  )
}
