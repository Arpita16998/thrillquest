import React, { useState, useEffect } from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import Hero from "../components/Hero/Hero";
// This imports the new section you just made in Step 1
import Welcome from "../components/Welcome/Welcome"; 

const Home = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* 1. Hero Slideshow Container */}
      <div className="relative h-[700px] w-full overflow-hidden">
        {/* background slideshow */}
        <img
          src={images[currentImage]}
          alt="slideshow"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
        />
        {/* dark overlay on image */}
        <div className="absolute inset-0 bg-black/35"></div>
        {/* hero section */}
        <div className="relative z-10 h-full">
          <Hero />
        </div>
      </div>

      {/* 2. Welcome Section: Displays right below the hero slideshow when you scroll */}
      <Welcome/>
    </>
  );
};

export default Home;
