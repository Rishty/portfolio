import React from "react"
import skills from '../../skill.json'
import { Link } from "react-router-dom";

function Skills() {


  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
      
        <Link to={`/skilldetails/${skill.id}`} key={index}>
         <div className="skill-card" style={{ backgroundColor: skill.bgColor }}>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
        
        </Link>
       
      ))}
    </div>
  );
};


export default Skills
