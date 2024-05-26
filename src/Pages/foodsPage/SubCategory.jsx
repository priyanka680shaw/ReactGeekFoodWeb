import React, { useEffect, useState } from 'react'
import { FoodCard } from './FoodCard';
import axios from "axios";
export const SubCategory = () => {
    const[subCategorie , setSubCategorie] = useState([])
    async function subCategorieHandle(){
        const subCategorie = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
        setSubCategorie(subCategorie.data.meals)
        console.log(subCategorie.data.meals)
    }
    useEffect(()=>{
        subCategorieHandle()
    } , [])
    return (
        <>
            <div className='flex flex-wrap justify-center items-center'>
                <h1 className='text-[50px] font-bold underline underline-offset-1'>Meals</h1>
                <div className='foodCategories flex flex-wrap justify-center items-center'>
                       {
                        subCategorie && subCategorie.map((subCategorie)=>{
                            return(
                                <FoodCard foodName = {subCategorie.strMeal
    } key = {subCategorie.idMeal} image = {subCategorie.strMealThumb
}/>
                            )
                        })
                       }                     
                </div>
            </div>
        </>
      )
    }

