import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FoodCard } from './FoodCard';
export const FoodCategorie = () => {

    const[categorie , setCategorie] = useState([])

    async function handleCtegorie(){
        const categorieApi = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
       
        setCategorie(categorieApi.data.categories)
        
    }
    useEffect(()=>{
        handleCtegorie()
    } , [])
    //api Call
  return (
    <>
        <div className='flex flex-wrap justify-center items-center'>
            <h1 className='text-[50px] font-bold underline underline-offset-1'>Categorie</h1>
            <div className='foodCategories flex flex-wrap justify-center items-center'>
                   {
                    categorie && categorie.map((categorie)=>{
                        return(
                            <FoodCard foodName = {categorie.strCategory
} key = {categorie.idCategory} image = {categorie.strCategoryThumb}/>
                        )
                    })
                   }                     
            </div>
        </div>
    </>
  )
}
