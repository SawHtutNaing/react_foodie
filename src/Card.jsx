import React from 'react'
import { useNavigate } from "react-router-dom";
const Card = ({meal}) => {
    const godetails = useNavigate();
    const handleDetils = ()=>{
       godetails(`details/${meal.idMeal}`)
    };
  return (
    <div className='w-36 border shadow p-5 rounded hover:scale-105 transition-all'>
        
<img src={meal.strMealThumb} alt=""  />
<h1 className='text-sm'>
    {meal.strMeal}
</h1>
<button onClick={handleDetils} className='p-1 rounded text-white shadow   bg-blue-500'>Details</button>

    </div>
  )
}

export default Card