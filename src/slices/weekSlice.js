import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
    week1 : [],
    week2 : [],
    week3 : [],
    week4 : [],
    meal : "AllMeals",
    isCardClicked: false,
    id : null,
    isModalOpen: false,
    weekno: null,
}
export const weekSlice = createSlice({
    name: "weeks",
    initialState,
    reducers:{
        setMeal:(state, action)=> {
            state.meal = action.payload;
        },
        clickCard:(state , action)=>{
            state.id = action.payload;
            state.isCardClicked = true;  
            console.log("card clicked with id" , state.id);
            
        },
        clickWeek:(state , action)=>{
            state.isModalOpen = true;
            console.log("week button clicked");
            state.isCardClicked =false;
            
        },
        close:(state)=>{
            state.isModalOpen = false;
        },
        save:(state, action) =>{
            const {selectedweek , recipes} = action.payload;
            const selectedRecipe = recipes.find((item)=> item.id === state.id  );
            const week = `week${selectedweek}`;
             
            const alreadyExists = state[week].some(
                (item) => item.id === selectedRecipe.id
            )
            if (!alreadyExists) {
                state[week].push(selectedRecipe)
                toast.success(`Recipe added in ${week}`)
            }else{
                toast.error(`Recipe already exists in ${week}`)
            }
            
        },
        delete_card:(state, action)=>{
            const {week , id} = action.payload;
            state[week] = state[week].filter( (item)=> item.id !== id );
        }
    }
})
export const {clickCard , clickWeek , close , save , setMeal , delete_card} = weekSlice.actions;
export default weekSlice.reducer;