import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loader from './Loader';

const Meals = () => {
  const [loader ,setloader]  = useState(true) ;

    const [meals , setMeals]  = useState([]);
    const getMeals = async()=>{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        
        setMeals(data.meals)
    }
    useEffect(()=>{
        getMeals();
        setloader(false);   
    } , []);
  return (
  loader ? (<Loader></Loader>) : (
    <div className='flex justify-center align-middle flex-wrap gap-5'>
    {meals?.map(el =>  <Card key={el.idMeal} meal={ el} >dd</Card>)}
    
     </div>
  )
  )
}

export default Meals