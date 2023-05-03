import axios from 'axios';
import React, { useRef, useState  } from 'react'
import { useNavigate } from 'react-router-dom';
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


const Create = () => {
    const  nav = useNavigate();
    const name = useRef('');
    const email = useRef('');
    const phone  = useRef('');
    const [Name , setName ] = useState('');
    const [Email ,setEmail] = useState('');
    const [Phone ,setPhone ] = useState('');
    const handleFrom = (e)=>{
        e.preventDefault();
        setName(name.current.value);
        setEmail(email.current.value);
        setPhone(phone.current.value);
        CreateApiPost();
        Toast.fire({
          icon: 'success',
          title: 'Create   successfully'
        })
        nav(-1);
    }

    
    // console.log(Name ,Email , Phone );
    const  CreateApiPost = async()=> {
        await axios.post('http://localhost:3000/contact' ,
        {
            name: Name,
            email:Email ,
            phone:Phone 
        }
        ) .then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
    }

  return (
    <div>
        <form onSubmit={handleFrom}>
<div className="mb-6">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="name" ref={name}  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input type="email" ref={email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="phone   " className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone  </label>
    <input type="phone" ref={phone} id="phone   " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </div>
  )
}

export default Create