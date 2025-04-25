import React from 'react'

function Card({data}) {
    const {images,title,description}=data;
  return (
    <>
      <div>
        <img src={images} alt="" height={100}/>
        <h1>{title}</h1>
        <p>{description}</p>
       </div> 
    </>
  )
}

export default Card
