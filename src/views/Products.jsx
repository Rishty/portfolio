
import axios from 'axios'
import React, {useEffect,useState } from 'react'

function Products() {
            cont[data,setData]=useState([])
            useEffect(()=>{
              axios.get('https://jsonplaceholder.typicode.com/users')
              .then((rep)=>setData(rep.data))
              .catch((err)=>console.log("err is:",err))
            },[])
        

           console.log(data);
  return (
    <>
     <h1></h1> 
    </>
  )
}

export default Products
