import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiFillEdit , AiFillDelete } from 'react-icons/ai'
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
  

const Contact = () => {
    const [contact,setContact] = useState([]);
    const nav = useNavigate();
    const getContact = async()=>{
        const {data} = await axios.get('http://localhost:3000/contact');
        setContact(data);

    } ;
    const handleDelete = async(id)=>{
       await axios.delete(`http://localhost:3000/contact/${id}`)
       Toast.fire({
        icon: 'success',
        title: 'delete   successfully'
      })
        getContact();
     }
    
    useEffect(()=>{
        getContact();
    } , []) ;

  return (
    <div>
      <Link to="/create" className=' bg-blue-400 p-1  rounded '>Create</Link>

        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    
                    Email 
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone 
                </th>
                <th scope="col" className="px-6 py-3">
                    Control 
                </th>
                
            </tr>
        </thead>
        <tbody>
            {contact.map((el)=>
              <tr key={el.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {el.name}
              </th>
              <td className="px-6 py-4">
                 {el.email}
              </td>
              <td className="px-6 py-4">
                 {el.phone}
              </td>
            
              <td className="px-6 py-4">
                <Link to={`edit/${el.id}`}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
<AiFillEdit></AiFillEdit>
                </Link>
            <button onClick={handleDelete.bind(null, el.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline" > <AiFillDelete/></button>
              </td>
          </tr>
            )}
          
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Contact