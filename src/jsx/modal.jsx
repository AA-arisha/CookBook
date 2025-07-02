import { useDispatch, useSelector } from "react-redux";
import { close, save } from "../slices/weekSlice";
import { useState } from "react";

const Modal = () => {
  const dispatch = useDispatch();
  const [selectedWeek, setSelectedWeek] = useState(null); // 🟩 Track selected week

  const handleSelect = (week) => {
    setSelectedWeek(week);
  };
  const recipes = useSelector((state)=>{return  state.recipes.recipes} );


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={()=>dispatch(close()) } >
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md mx-auto"
      onClick={(e)=>{e.stopPropagation()}}>

        <h1 className="font-bold text-2xl text-center mb-4">Select Week</h1>

        <div className="flex items-center justify-center  mx-auto">
          {[1, 2, 3, 4].map((week) => (
            <button
              key={week}
              onClick={() => handleSelect(week)}
              className={`p-2 rounded font-semibold  transition col-span-6 p-4  ${
                selectedWeek === week
                  ? "bg-teal-300 text-white"
                  : null
              }`}
            >
              <span>Week {week}</span> 
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          
          <button
            disabled={!selectedWeek}
            className={`px-10 py-2 text-sm font-semibold rounded transition text-white ${
                selectedWeek ? "bg-[#004370] hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => dispatch(save({ selectedweek: selectedWeek, recipes }))}
            >Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
