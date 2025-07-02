import { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetchRecipes } from '../slices/recipeSlice';
import { clickCard, delete_card } from '../slices/weekSlice';
const Cards = ()=>{
    const {recipes , status , error} = useSelector((state)=> state.recipes );
    const {id ,isCardClicked} = useSelector( (state)=> state.weeks)
    const {meal , week1, week2, week3, week4} = useSelector( (state)=> state.weeks )
    const dispatch = useDispatch();
    let displayRecipes = [];
    if (meal === "AllMeals") {
        displayRecipes = recipes
    }else if (meal === "Week1") {
        displayRecipes = week1
    }else if (meal === "Week2") {
        displayRecipes = week2
    }else if (meal === "Week3") {
        displayRecipes = week3
    }else if (meal === "Week4") {
        displayRecipes = week4
    }
    useEffect(()=>{
        dispatch(fetchRecipes())
    },[dispatch] )
    return(
        <div className="container-fluid lg:p-40 md:p-10" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    displayRecipes.map((item)=>(
                        <div
                        onClick={()=> dispatch(clickCard(item.id))  }
                         className={ `relative bg-white shadow-xl m-5 rounded-lg p-6  hover:shadow-5xl ${(id === item.id && isCardClicked)?"border-2 border-black":""} `}>
                            {meal !== "AllMeals" && ( <button className='top-50 left-10 absolute' onClick={()=> dispatch(delete_card({id: item.id ,week: meal.toLowerCase() }))} ><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5zm3 9H4V7h1zm2 0H6V7h1zm2 0H8V7h1zm2 0h-1V7h1zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.75.75 0 0 0-.75.75V4h13V2.75a.75.75 0 0 0-.75-.75M9 2H6v-.987h3z"></path></svg></button>)}
                                <img srcSet={item.image} className='object-cover rounded w-full h-50 ' alt="" />
                                <div className='p-2'>
                                    <h2 className='font-bold text-2xl'>{item.name}</h2>
                                    <p className='text-sm text-gray-600 mt-2 mb-5 text-left'>
                                        {item.instructions}
                                    </p>
                                    <span className='flex absolute bottom-5 left-5'><p className='font-bold'>Cuisine :</p><p>{item.cuisine}</p></span>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Cards;