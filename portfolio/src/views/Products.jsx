import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card';

function Products() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{setData(res.data.products)})
    .catch((err)=>console.log('err is this ',err))
  },[]);

  // console.log(data)


  return (
    <>
     {data.map((item,index)=>{
      return <Card key={index} data={item}/>
     })} 
    </>
  )
}

export default Products
