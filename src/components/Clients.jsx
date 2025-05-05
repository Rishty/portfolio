import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialCarousel() {
  const testimonials = [
    {
      text: "He is my partner. We work together. When I fall into an error or any other problem he supports me always.",
      name: "Ilham Wahyu Budiaji",
      role: "Front-end Developer",
    },
    {
      text: "I gave him a task to make a webpage. He made an awesome website. I recommend him!",
      name: "Dadang Darsono",
      role: "CEO MSN Production",
    },
    {
      text: "I was finding someone to build my grocery site. He made me an e-commerce store. I'm satisfied.",
      name: "Raden Amal Prayogo",
      role: "Full Stack Developer",
    },
    {
      text: "Working with him was smooth and professional. He delivers on time with great quality.",
      name: "Aman Verma",
      role: "UX Designer",
    },
    {
      text: "His creativity and coding skills are amazing. He built exactly what I needed!",
      name: "Neha Sharma",
      role: "Startup Founder",
    },
    {
      text: "Reliable, fast, and skilled — highly recommended!",
      name: "Karan Malhotra",
      role: "App Developer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ background: "#111", padding: "40px", color: "#fff", textAlign: "center" }}>
      <h3 style={{ color: "#aaa" }}>What My Clients Say</h3>
      <h2 style={{ color: "red", marginBottom: "30px" }}>Testimonials</h2>

      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i}>
            <div
              style={{
                border: "2px solid red",
                padding: "25px",
                margin: "10px",
                borderRadius: "10px",
                backgroundColor: "#222",
                height: "100%",
              }}
            >
              <FaQuoteLeft size={25} color="red" />
              <p style={{ margin: "20px 0", minHeight: "120px" }}>{t.text}</p>
              <strong style={{ color: "red" }}>{t.name}</strong>
              <div style={{ fontSize: "0.9rem", color: "#ccc" }}>{t.role}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;
