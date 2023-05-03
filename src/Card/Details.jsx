import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import {AiFillYoutube} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const Details = () => {
  
    const {id} = useParams();
    
  const [loader ,setloader]  = useState(true) ;
const [mealData , setMealData] = useState({});
    const getDetails = async()=>{
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      setMealData(data.meals[0]);
    }
    console.log(mealData);


    useEffect(
       ()=>{
        getDetails() ;
        setloader(false);

       }
 , []    )
  return (
    loader ? (<Loader></Loader>) :
 ( <div className=' flex flex-col justify-center gap-3'>
 {/* {mealData[0].idMeal}
 {mealData[0].strMeal} */
 }
<div className='w-40 border rounded overflow-hidden'>
<img src={mealData.strMealThumb} alt=""  className='hover:scale-105 transition'/>

</div>

<div className=' '>

<span className=' bg-red-500 rounded-full px-3 py-2'>
 {
   mealData.strCategory
 }
 </span>
</div>
<div>

<h1 className='font-bold '>
{mealData.strMeal}
</h1>
</div>

<div>
<p>
{
   mealData.strInstructions
 }
</p>
</div>
<div>
<Link to={mealData.strYoutube}>
<AiFillYoutube className='text-red-700 text-2xl inlinex'></AiFillYoutube>
 <span > watch it on youtube </span>
</Link>
</div>
</div>)
  )
}

export default Details