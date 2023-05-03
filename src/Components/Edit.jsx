import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Card/Loader'
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const Edit = () => {
    const {id} = useParams();
    const [contact,setContact] = useState({});
    const [loader_edit , setLoader]  = useState(true);
    const  nav = useNavigate();
  
    const [name , setName ] = useState('');
    const [email ,setEmail] = useState('');
    const [phone ,setPhone ] = useState('');
    const handleFrom = (e)=>{
        e.preventDefault();
     
    const data = { name,email , phone  }
        updateContact(data);
        Toast.fire({
          icon: 'success',
          title: 'Update  successfully'
        })
        nav(-1);
        
    }

    const getContact = async()=>{
        const {data} = await axios.get(`http://localhost:3000/contact/${id}`);
      
        setContact(data);
       
    } ;

    const updateContact = async(data)=>{
  //  console.log(data);
  await axios.put(`http://localhost:3000/contact/${id}`,data);
     

    }

useEffect(()=>{
    getContact();
    setLoader(false);
} , [])
const updateApi = async(id)=>{

}
  return  ( loader_edit ? (
    <Loader></Loader>
  ) : (
    <div>
        
    <form onSubmit={handleFrom}>
    <div className="mb-6">
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <input onChange={(e)=>
        setName(e.target.value)
        } type="name"   id="name" defaultValue={contact.name}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
        <input onChange={(e)=>
          setEmail(e.target.value)
        }  type="email"  id="email" defaultValue={contact.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
      </div>
      <div className="mb-6">
        <label htmlFor="phone   " className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone  </label>
        <input onChange={(e)=> 
          setPhone(e.target.value)
        }  type="phone  "  id="phone   " defaultValue={contact.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
      </div>
      
     
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    
        </div>
  ) )
 
    
  
}

export default Edit