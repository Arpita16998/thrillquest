import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="h-full w-full flex flex-col justify-center relative">
      {/* Hero text section */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">
          <p className="text-lg md:text-xl font-medium mb-3 tracking-wide">
            Explore The World With Us
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your Perfect Journey
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white/90">
            Discover beautiful destinations, plan your dream trip, and travel
            with unforgettable experiences.
          </p>
        </div>
      </div>

      {/* bottom search bar */}
      <div className="absolute bottom-12 left-0 w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Destination */}
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full h-[64px] rounded-2xl border border-white/50 bg-black/35 text-white px-5 pr-12 text-lg outline-none backdrop-blur-sm appearance-none"
              >
                <option value="" className="text-black">
                  Destination
                </option>
                <option value="Maldives" className="text-black">Maldives</option>
                <option value="Malaysia" className="text-black">Malaysia</option>
                <option value="Vietnam" className="text-black">Vietnam</option>
                <option value="Sri Lanka" className="text-black">Sri Lanka</option>
                <option value="Egypt" className="text-black">Egypt</option>
                <option value="Dubai" className="text-black">Dubai</option>
              </select>
              <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white/80 pointer-events-none" />
            </div>

            {/* Category */}
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-[64px] rounded-2xl border border-white/50 bg-black/35 text-white px-5 pr-12 text-lg outline-none backdrop-blur-sm appearance-none"
              >
                <option value="" className="text-black">
                  Category
                </option>
                <option value="Adventure" className="text-black">Adventure</option>
                <option value="Beach" className="text-black">Beach</option>
                <option value="Honeymoon" className="text-black">Honeymoon</option>
                <option value="Family Tour" className="text-black">Family Tour</option>
                <option value="Luxury" className="text-black">Luxury</option>
              </select>
              <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white/80 pointer-events-none" />
            </div>

            {/* Date */}
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-[64px] rounded-2xl border border-white/50 bg-black/35 text-white px-5 pr-12 text-lg outline-none backdrop-blur-sm"
              />
              <FaRegCalendarAlt className="absolute right-5 top-1/2 -translate-y-1/2 text-white/80 pointer-events-none" />
            </div>

            {/* Search button */}
            <button className="w-full h-[64px] rounded-2xl bg-[#f6a313] hover:bg-[#e39a10] text-black font-semibold text-xl flex items-center justify-center gap-3 transition">
              Search <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;