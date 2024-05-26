import { SubCategory } from "./SubCategory"
import { FoodHomePage } from "./FoodHomePage"
import { FoodCategorie } from "./FoodCategorie"
export const FoodPage= () => {
  return (
    <>
    <div className="h-[auto]">
      <FoodHomePage/>
      <SubCategory/>
      <FoodCategorie/> 
    </div>
      
    </>
  )
}
