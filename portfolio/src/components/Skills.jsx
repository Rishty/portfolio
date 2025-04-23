import React from 'react'
import { FaFacebookF, FaGoogle, FaBullhorn, FaGlobe, FaVideo, FaStore, FaRegLightbulb } from 'react-icons/fa';
import { SiGoogletagmanager, SiGoogleads, SiGooglemybusiness } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { MdOutlineWeb } from 'react-icons/md';


function Skills() {
  const skills = [
    {
      title: 'Social Media Marketing',
      description: 'Boost your online presence with expert social media strategies.',
      icon: <BsInstagram />,
      bgColor: '#f3e8ff',
      link: '/services/social-media-marketing',
    },
    {
      title: 'Google Ads',
      description: 'Drive targeted traffic and maximize ROI with tailored Google ad campaigns.',
      icon: <SiGoogleads />,
      bgColor: '#e0f7ff',
      link: '/services/google-ads',
    },
    {
      title: 'Meta Ads',
      description: 'Engage your audience effectively with powerful Meta ad solutions.',
      icon: <FaFacebookF />,
      bgColor: '#fff8dc',
      link: '/services/meta-ads',
    },
    {
      title: 'Brand Promotion',
      description: 'Elevate your brand with impactful promotional strategies.',
      icon: <FaBullhorn />,
      bgColor: '#f3e8ff',
      link: '/services/brand-promotion',
    },
    {
      title: 'Website Development',
      description: 'Build modern, user-friendly websites tailored to your business needs.',
      icon: <MdOutlineWeb />,
      bgColor: '#e0f7ff',
      link: '/services/website-development',
    },
    {
      title: 'Video Creators',
      description: 'Captivate your audience with high-quality, engaging video content.',
      icon: <BiSolidCameraMovie />,
      bgColor: '#fff8dc',
      link: '/services/video-creation',
    },
    {
      title: 'Google My Business Listing',
      description: 'Make your business easily discoverable with accurate GMB listings.',
      icon: <SiGooglemybusiness />,
      bgColor: '#e0f7ff',
      link: '/services/gmb-listing',
    },
    {
      title: 'Lead Generation',
      description: 'Generate quality leads to grow your business and increase sales.',
      icon: <FaRegLightbulb />,
      bgColor: '#fff8dc',
      link: '/services/lead-generation',
    },
  ];
  
  
  const SkillsSection = () => {
    return (
      <div className="skills-container">
        {skills.map((skill, index) => (
          <a
            href={skill.link}
            key={index}
            className="skill-card"
            style={{ backgroundColor: skill.bgColor }}
          >
            <div className="icon-box">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </a>
        ))}
      </div>
    );
  };
}

export default Skills
