import { useDispatch, useSelector } from "react-redux";
import { clickCard, clickWeek} from "../slices/weekSlice";
import Cards from "./cards";
import { useEffect } from "react";
import { setMeal } from "../slices/weekSlice";
const StickyDiv = ()=>{
    const dispatch = useDispatch()
    const isCardClicked = useSelector((state)=> state.weeks.isCardClicked )
    const meal = useSelector((state)=>state.weeks.meal )
    useEffect(()=>{
        console.log(" is card clicked ",isCardClicked)
    }, isCardClicked)
    return(
        <>
            <section>
                <div className="container-fluid">
                    <div className="row p-5">
                        <h1 className="font-bold  md:text-2xl lg:text-2xl">Weekly Orders</h1>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="row flex justify-center z-10 sticky top-0 bg-white ">
                    <div className="stickyDiv">
                        <button className={`xl:m-5 xl:p-5 md:m-5 md:p-5 p-2 font-bold ${meal=== "AllMeals" ? "border-b-5 text-[#004370]": ""} `} onClick={()=> dispatch(setMeal("AllMeals"))}  >All Meals</button>
                        <button className={`xl:m-5 xl:p-5 md:m-5 md:p-5 p-2 font-bold ${meal=== "Week1" ? "border-b-5 text-[#004370]": ""} `} onClick={()=> dispatch(setMeal("Week1"))}  >Week 1 </button>
                        <button className={`xl:m-5 xl:p-5 md:m-5 md:p-5 p-2 font-bold ${meal=== "Week2" ? "border-b-5 text-[#004370]": ""} `} onClick={()=> dispatch(setMeal("Week2"))}  >Week 2 </button>
                        <button className={`xl:m-5 xl:p-5 md:m-5 md:p-5 p-2 font-bold ${meal=== "Week3" ? "border-b-5 text-[#004370]": ""} `} onClick={()=> dispatch(setMeal("Week3"))}  >Week 3 </button>
                        <button className={`xl:m-5 xl:p-5 md:m-5 md:p-5 p-2 font-bold ${meal=== "Week4" ? "border-b-5 text-[#004370]": ""} `} onClick={()=> dispatch(setMeal("Week4"))}  >Week 4 </button>
                        <button
                         className="xl:m-5 xl:p-3 md:m-5 md:p-3 p-2 m-2 font-bold text-white rounded border disabled:opacity-50 disabled:cursor-not-allowed"
                         style={{backgroundColor: 'rgb(0 ,67, 112)'}} 
                         onClick= { ()=>dispatch(clickWeek()) }  
                         disabled = {!isCardClicked}
                         
                         >Add to Week</button>
                    </div>
                </div>
                
                <Cards/>
                
            </section>
        </>
    )
}
export default StickyDiv;