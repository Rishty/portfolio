import React from 'react'
import { useParams } from 'react-router-dom'
import skill  from '../../skill.json';

function SkillDetails() {
    const {id}=useParams();
    const dd=skill.find((item,index)=>{
        return item.id === id;
    })

    if(!dd) return;
  return (
    <div>
    <img src={dd.img} alt="" width={200}/>
    </div>
  )
}

export default SkillDetails
