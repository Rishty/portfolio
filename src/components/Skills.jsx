import React from "react"


function Skills() {
  const skills = [
    {
      title: "Social Media Marketing",
      description: "Boost your online presence with expert social media strategies.",
      bgColor: "#f3e8ff",
      link: "/services/social-media-marketing",
    },
   
    {
      title: "Meta Ads",
      description: "Engage your audience effectively with powerful Meta ad solutions.",
      bgColor: "#fff8dc",
      link: "/services/meta-ads",
    },
    
    {
      title: "Website Development",
      description: "Build modern, user-friendly websites tailored to your business needs.",
      bgColor: "#e0f7ff",
      link: "/services/website-development",
    },
    {
      title: "Video Creators",
      description: "Captivate your audience with high-quality, engaging video content.",
      bgColor: "#fff8dc",
      link: "/services/video-creation",
    },
    {
      title: "Google My Business Listing",
      description: "Make your business easily discoverable with accurate GMB listings.",
      bgColor: "#e0f7ff",
      link: "/services/gmb-listing",
    },
    {
      title: "Lead Generation",
      description: "Generate quality leads to grow your business and increase sales.",
      bgColor: "#f3e8ff",
      link: "/services/lead-generation",
    },
  ];
  
  
 
    return (
      <div className="skills-container">
        {skills.map((skill, index) => (
          <a
            href={skill.link}
            key={index}
            className="skill-card"
            style={{ backgroundColor: skill.bgColor }}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </a>
        ))}
      </div>
    );
  };


export default Skills
