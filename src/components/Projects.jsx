import React from 'react'
import { useParams } from 'react-router-dom';
import Rani from '../../rani.json'

function Projects() {
   const {id}=useParams();
    const pj=Rani.find((item,index)=>{
        return item.id == Number(id);
    })
   
    if(!pj) return;
  return (
    <div>
    <img src={pj.img} alt="" width={200}/>
    </div>
    )
}

export default Projects
