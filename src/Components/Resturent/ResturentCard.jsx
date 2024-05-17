import { GiForkKnifeSpoon } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
//import StarRatings from 'react-star-ratings';
export const ResturentCard = ({name , location , outCode ,typeOfFood , rating , postCode}) => {
    const arr = []
    for(let i=0; i<rating; i++){
        arr.push("⭐");
    }
  return (
    
    <>
        <div className='w-96 border-8 flex justify-between flex-col m-4 bg-gray-400 mix-blend-multiply hover:mix-blend-overlay'>
            <div className='topDiv  p-4'>
                <div className="flex  items-center">
                    <h1 className="mr-4">{name}</h1>
                    {/* star rating component Addded here */}
                    {/* <StarRatings
          rating={rating}
          starRatedColor="blue"
         
          numberOfStars={6}
          name='rating'
        /> */}
                    {
                        arr.map((items , idx)=>{
                            return( items);
                        })
                    }
                </div>
                <div className="flex  items-center">
                    <FaLocationDot/>
                    <p  className="ml-2">{location}</p>
                    
                </div>
                <p>{outCode} { postCode}</p>
            </div>
            <div className='bottomDiv  bg-amber-400 p-4'>
                <div className="flex items-center">
                    <GiForkKnifeSpoon/>
                    <p className="ml-2">{typeOfFood}</p>
                </div>
                <p>Visit Menu</p>
            </div>
        </div>
    </>
  )
}
