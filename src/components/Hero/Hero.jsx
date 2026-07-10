import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMapPin, HiSparkles, HiShieldCheck, HiPhone } from "react-icons/hi2";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center relative min-h-[600px] px-4">
      
      {/* 
        1. MAIN CENTER STACK: Headline and Thin Search Bar 
        Grouped together in standard layout flow with a tight gap.
      */}
      <div className="text-center text-white max-w-3xl w-full flex flex-col items-center gap-6 md:gap-8 -mt-12">
        
        {/* Slogan Tagline */}
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-md font-sans whitespace-nowrap">
          not just a travel, it's a Thrill Quest
        </h1>

        {/* Thin Capsule Search Bar directly underneath */}
        <div className="w-full max-w-2xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="flex items-center bg-white rounded-full p-1 pl-4 md:pl-6 shadow-2xl border border-black/5 w-full transition-all duration-300 focus-within:ring-4 focus-within:ring-teal-500/10">
              <FaSearch className="text-gray-400 text-sm md:text-base flex-shrink-0 mr-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Destinations..."
                className="w-full bg-transparent text-gray-800 placeholder-gray-400/90 text-xs md:text-sm font-normal outline-none pr-3 py-1.5 md:py-2"
              />
              <button
                type="submit"
                className="bg-[#00a896] hover:bg-[#029283] text-white font-bold px-5 md:px-8 py-2 md:py-2.5 rounded-full text-xs md:text-sm tracking-wide transition-all duration-200 active:scale-95 flex-shrink-0"
              >
                Search
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* 
        2. FIXED: Bottom-Anchored Transparent Features Bar 
        Isolated using absolute positioning so it pins directly to the bottom edge.
      */}
      <div className="absolute bottom-4 md:bottom-6 left-0 w-full px-4 z-10">
        <div className="max-w-5xl w-full mx-auto bg-black/20 border border-white/10 backdrop-blur-md rounded-2xl p-3 md:py-3.5 md:px-6 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 md:gap-y-0 text-white divide-x-0 md:divide-x divide-white/10">
            
            {/* Handpicked Destinations */}
            <div className="flex items-center gap-2.5 px-1 md:px-3">
              <div className="p-2 rounded-full bg-amber-500/20 text-amber-400 flex-shrink-0">
                <HiMapPin size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-[11px] md:text-xs font-semibold tracking-wide">Handpicked Destinations</h4>
                <p className="text-[9px] md:text-[11px] text-white/60">Carefully selected for you</p>
              </div>
            </div>

            {/* Unforgettable Experiences */}
            <div className="flex items-center gap-2.5 px-1 md:px-4">
              <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                <HiSparkles size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-[11px] md:text-xs font-semibold tracking-wide">Unforgettable Experiences</h4>
                <p className="text-[9px] md:text-[11px] text-white/60">Moments that last forever</p>
              </div>
            </div>

            {/* Safe & Reliable */}
            <div className="flex items-center gap-2.5 px-1 md:px-4">
              <div className="p-2 rounded-full bg-blue-500/20 text-blue-400 flex-shrink-0">
                <HiShieldCheck size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-[11px] md:text-xs font-semibold tracking-wide">Safe & Reliable</h4>
                <p className="text-[9px] md:text-[11px] text-white/60">Your safety is our priority</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center gap-2.5 px-1 md:px-4">
              <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 flex-shrink-0">
                <HiPhone size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-[11px] md:text-xs font-semibold tracking-wide">24/7 Support</h4>
                <p className="text-[9px] md:text-[11px] text-white/60">We are here to help anytime</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;