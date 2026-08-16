import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiArrowUp } from "react-icons/hi2";

// EXACT IMAGE IMPORTS MAPPED TO YOUR LOWERCASE STRUCTURE
import SrilankaImg from "../../assets/images/Srilanka-destination.jpeg";
import ThailandImg from "../../assets/images/Thailand-destination.jpeg";
import VietnamImg from "../../assets/images/Vietnam-destination.jpeg";
import DubaiImg from "../../assets/images/Dubai.jpg";
import BaliImg from "../../assets/images/Bali-destination.jpeg";

const Destination = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // Added 'query' field matching exact names in International_Tour.jsx
  const destinations = [
    {
      id: 1,
      country: "Sri Lanka",
      query: "Sri Lanka",
      badge: "Bestseller",
      badgeBg: "bg-[#0284c7]",
      image: SrilankaImg 
    },
    {
      id: 2,
      country: "Vietnam",
      query: "Vietnam",
      badge: "Trending",
      badgeBg: "bg-[#f43f5e]",
      image: VietnamImg 
    },
    {
      id: 3,
      country: "Thailand",
      query: "Thailand",
      badge: "Popular",
      badgeBg: "bg-[#0d9488]",
      image: ThailandImg 
    },
    {
      id: 4,
      country: "Bali, Indonesia",
      query: "Bali",
      badge: "Trending",
      badgeBg: "bg-[#0284c7]",
      image: BaliImg 
    },
    {
      id: 5,
      country: "UAE",
      query: "Dubai",
      badge: "Popular",
      badgeBg: "bg-[#0284c7]",
      image: DubaiImg 
    }
  ];

  const handleCardClick = (destinationQuery) => {
    // Navigate to international tour route with query parameter
    // Update "/international-tour" if your App.jsx path is named differently
    navigate(`/international-tour?destination=${encodeURIComponent(destinationQuery)}`);
  };

  const visibleDestinations = showAll ? destinations : destinations.slice(0, 4);

  return (
    <section className="w-full bg-white pt-2 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Section Container */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-['Agrandir'] tracking-tight text-gray-900 flex items-center gap-2">
            Popular Destinations
            <span className="hidden sm:inline-block text-gray-300 font-normal text-sm tracking-widest select-none">
              ┈┈┈┈✈
            </span>
          </h2>
        </div>
        
        {/* View All Button Toggle Control */}
        <button 
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-xs md:text-sm font-semibold text-blue-600 hover:bg-gray-50 active:scale-95 transition-all duration-200"
        >
          {showAll ? (
            <>Show Less <HiArrowUp size={14} /></>
          ) : (
            <>View All Destinations <HiArrowRight size={14} /></>
          )}
        </button>
      </div>

      {/* Responsive Layout Grid Track System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
        {visibleDestinations.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.query)}
            className="w-full h-[380px] rounded-2xl overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={item.country}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1 rounded-full text-[11px] font-bold text-white tracking-wide shadow-sm ${item.badgeBg}`}>
                {item.badge}
              </span>
            </div>

            {/* Bottom Card Title */}
            <div className="absolute bottom-0 left-0 w-full p-5 z-10">
              <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                {item.country}
              </h3>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Destination;