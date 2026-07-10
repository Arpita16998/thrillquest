import React, { useState } from "react";
import { HiMapPin, HiArrowRight, HiArrowUp } from "react-icons/hi2";

// 📸 EXACT IMAGE IMPORTS MAPPED TO YOUR LOWERCASE STRUCTURE
import SrilankaImg from "../../assets/images/Srilanka-destination.jpeg";
import ThailandImg from "../../assets/images/Thailand-destination.jpeg";
import VietnamImg from "../../assets/images/Vietnam-destination.jpeg";
import DubaiImg from "../../assets/images/Dubai.jpg";
import BaliImg from "../../assets/images/Bali-destination.jpeg";

const Destination = () => {
  // State to track whether the user has toggled the view expansion
  const [showAll, setShowAll] = useState(false);

  // Clean data array (separated price from individual metadata layout lines)
  const destinations = [
    {
      id: 1,
      country: "Sri Lanka",
      city: "Kandy, Bentota, Colombo",
      price: "₹ 35,000/-",
      badge: "Bestseller",
      badgeBg: "bg-[#0284c7]",
      image: SrilankaImg 
    },
    {
      id: 2,
      country: "Vietnam",
      city: "Hanoi, Da Nang, Ho Chi Minh City",
      price: "₹30,000/-",
      badge: "Trending",
      badgeBg: "bg-[#f43f5e]",
      image: VietnamImg 
    },
    {
      id: 3,
      country: "Thailand",
      city: "Phuket, Krabi",
      price: "₹ 30,000/-",
      badge: "Popular",
      badgeBg: "bg-[#0d9488]",
      image: ThailandImg 
    },
    {
      id: 4,
      country: "Bali, Indonesia",
      city: "Kuta, Ubud",
      price: "₹ 30,000/-",
      badge: "Trending",
      badgeBg: "bg-[#0284c7]",
      image: BaliImg 
    },
    {
      id: 5,
      country: "UAE",
      city: "Dubai, Abu Dhabi",
      price: "₹ 45,000/-",
      badge: "Popular",
      badgeBg: "bg-[#0284c7]",
      image: DubaiImg 
    }
  ];

  // Slice array dynamically: displays first 4 items initially, or all items on click
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

      {/* 
        Responsive Layout Grid Track System:
        Using a clean grid model layout ensures that items appearing after Bali (like UAE) 
        wrap gracefully into a brand new row right beneath the first group of elements.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
        {visibleDestinations.map((item) => (
          <div
            key={item.id}
            className="w-full h-[380px] rounded-2xl overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <img 
              src={item.image} 
              alt={`${item.city}, ${item.country}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1 rounded-full text-[11px] font-bold text-white tracking-wide shadow-sm ${item.badgeBg}`}>
                {item.badge}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-5 flex items-end justify-between text-white z-10 gap-2">
              
              {/* Left Side: Destination Identifiers */}
              <div className="flex flex-col min-w-0">
                <h3 className="text-xl font-bold tracking-tight leading-tight truncate">
                  {item.country}
                </h3>
                {/* Clean inline location icon rendering ahead of the text string */}
                <div className="flex items-start gap-1 text-white/80 text-xs font-normal mt-1">
                  <HiMapPin size={14} className="mt-0.5 shrink-0 text-white/90" />
                  <span className="leading-tight break-words">{item.city}</span>
                </div>
              </div>

              {/* Right Side: Re-engineered Pricing Metrics Layer */}
              <div className="text-right flex flex-col items-end shrink-0 whitespace-nowrap">
                {/* Removed 'font-extrabold' and 'From' tracking layers */}
                <span className="text-lg font-normal text-white">
                  {item.price}
                </span>
                {/* Locked text element configuration safely to a single row strip */}
                <span className="text-xs font-normal text-white/80 tracking-wide mt-0.5">
                  Per Person
                </span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Destination;