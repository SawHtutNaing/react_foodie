import React from 'react'
import {GiMeal} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to='/'>
      <div className='flex mb-9 mt-3 gap-4'>
    <GiMeal className=' text-2xl text-red-400'/>
    <p className=' font-semibold'>  Yummy </p>
    </div>
    </Link>
    </div>
  )
}

export default Nav