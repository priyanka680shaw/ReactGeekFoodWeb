import { useCallback, useState } from "react"
import { ResturentCard } from "../../Components/Resturent/ResturentCard"
import ResturentData from "../../Components/Resturent/ResturentData"

export const ReasturentPage = () => {
    //console.log("ResturentData" ,ResturentData[0])
    const [searchQuery , setSearchQuery] = useState(ResturentData);
    //search data
     function searchData(e){
        let serchFilterList = searchQuery.filter((resturentData , indx)=>{
            return(
                resturentData.name.toLocaleLowerCase().includes((e.target.value).toLocaleLowerCase().trim())
            )
           
        })
        setSearchQuery(serchFilterList);
     }
     //rating
    function ratingVaue(e){
        const ratingRecived = Number(e.target.value);
        let ratigFilteredData = searchQuery.filter((data , idx)=>{
           if(data.rating === ratingRecived){
            return true;
           }
           else{
            return false
           }
        })
        setSearchQuery(ratigFilteredData);
    }
  return (
        <>
        <div className="search bg-green-900 p-4 flex justify-between item-center">
            <input type="text" placeholder="Search here" className="border-4 
text-center rounded p-2" onChange={searchData}/>
            <div className="flex items-center">
                <p className="mr-2 text-lg font-bold text-white">Rating : </p>
                <input type="number" className="border-4 " onChange={ratingVaue}/>
            </div>
           
        </div>
        <div className="flex flex-wrap justify-around">
        {
            searchQuery.map((items , index) =>{
                   return(
                    <ResturentCard name = {items.name} location = {items.address} key={items.id} outCode = {items.outcode} postCode = {items.postcode} typeOfFood = {items.type_of_food} rating ={items.rating} />
                   )
                })
            }
        </div>
           
        </>
  )
}
