import React from 'react'
import rani from '../../rani.json'
import 'bootstrap/dist/css/bootstrap.min.css'


function Products() {

  return (
    <div className='project'>
      <h1>My Projects</h1>
      {rani.map((project, index)=>(
        <div>
          
          </div>
      ))
      }
      
    </div>
  )
}

export default Products
