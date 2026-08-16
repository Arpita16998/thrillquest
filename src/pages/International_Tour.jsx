import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaCheck, FaTimes } from "react-icons/fa";
import Bali from "../assets/images/Bali.jpg";
import Dubai from "../assets/images/Dubai.jpg";
import Srilanka from "../assets/images/Srilanka.jpg";
import Vietnam from "../assets/images/Vietnam.jpg";
import Thailand from "../assets/images/Thailand.jpg";

const internationalDestinations = [
  {
    id: 0,
    name: "Bali",
    tagline: "Tropical beaches, volcanic peaks & spiritual temples",
    duration: "6 Days · 5 Nights",
    price: "42,900",
    description: "Bali is a world-famous Indonesian paradise known for its forested volcanic mountains, iconic terraced rice paddies, pristine beaches, and coral reefs. It seamlessly blends a deep spiritual heritage with lively coastal towns, offering travelers everything from tranquil mountain meditation retreats to thrilling cliffside surfing adventures.",
    image: Bali,
    highlights: [
      "Ubud Monkey Forest & rice terrace walk",
      "Tanah Lot cliffside sunset temple",
      "Mount Batur sunrise volcano trek",
      "Nusa Penida island speedboat tour"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive in Bali & transfer to Ubud villa" },
      { day: "02", title: "Day 2 – Ubud cultural tour & Kanto Lampo waterfall" },
      { day: "03", title: "Day 3 – Mount Batur sunrise trek & natural hot springs" },
      { day: "04", title: "Day 4 – Transfer to coastal Kuta & Tanah Lot Temple" },
      { day: "05", title: "Day 5 – Nusa Penida high-cliff island excursion" },
      { day: "06", title: "Day 6 – Departure via Denpasar Airport" }
    ],
    included: [
      "International airport private transfers",
      "Premium private pool villa stays",
      "Daily breakfast & select local lunches",
      "Dedicated English-speaking driver-guide",
      "All temple entry tickets & ferry passes"
    ]
  },
  {
    id: 1,
    name: "Dubai",
    tagline: "Futuristic skylines, luxury shopping & desert dunes",
    duration: "5 Days · 4 Nights",
    price: "54,800",
    description: "Dubai is the UAE's jewel of luxury, world-renowned for its ultra-modern architecture, high-end designer shopping avenues, and vibrant nightlife. Home to the world's tallest building, the Burj Khalifa, this oasis transitions seamlessly from high-tech urban marvels to sprawling, timeless golden desert dunes.",
    image: Dubai,
    highlights: [
      "Burj Khalifa 124th floor observation deck",
      "Premium desert safari with BBQ dinner",
      "Dubai Mall & dancing fountain show",
      "Marina luxury dhow dinner cruise experience"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive in Dubai & Marina Cruise welcome dinner" },
      { day: "02", title: "Day 2 – Half-day city tour & Burj Khalifa sunset visit" },
      { day: "03", title: "Day 3 – High-dune Desert Safari with belly dancing show" },
      { day: "04", title: "Day 4 – Museum of the Future & Dubai Frame exploration" },
      { day: "05", title: "Day 5 – Traditional gold souk shopping & departure" }
    ],
    included: [
      "UAE tourist visa permit processing fees",
      "Luxury 4-star city-center hotel accommodation",
      "All desert safari and cruise dinners on schedule",
      "Pre-booked entry vouchers to all listed sights",
      "Air-conditioned luxury group ground logistics"
    ]
  },
  {
    id: 2,
    name: "Sri Lanka",
    tagline: "The Ultimate Hills, Hikes & Surf Route - Srilanka",
    duration: "7 Days · 6 Nights",
    price: "49,300",
    description: "Sri Lanka is an island nation packed with diverse landscapes ranging from rainforests and arid plains to highlands and sandy beaches. It boasts a rich 3,000-year history told through majestic ancient rock citadels, sprawling colonial tea plantations, and wild sanctuaries teeming with elephants.",
    image: Srilanka,
    highlights: [
      "Bahirawakanda Buddha,Evening Dalada Maligawa ",
      "Scenic Hill Country Train Ride, Chill Cafe Culture",
      "Nine Arch Bridge, Little Adam's Peak Hike",
      "Diyaluma Falls, Weligama Beach Sunset Surf",
      "Blue Whale Watching or Mirissa Beach day trip",
      "Galle Fort Walk, Galle Face Green Promenade",
      "Lotus Tower, Pettah Market, Departure"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Airport to Kandy - Bahirawakanda Buddha, Evening Dalada Maligawac ~3.5 hours" },
      { day: "02", title: "Day 2 – Kandy to Ella Scenic Hill Country Train Ride, Chill Cafe Culture ~3.5 hours (Train)" },
      { day: "03", title: "Day 3 – Ella Nine Arch Bridge, Little Adam's Peak Hike Local only" },
      { day: "04", title: "Day 4 – Ella to Weligama Diyaluma Falls, Weligama Beach Sunset Surf ~3 hours" },
      { day: "05", title: "Day 5 – Weligama Blue Whale Watching or Mirissa Beach day trip Local only" },
      { day: "06", title: "Day 6 – Weligama to Colombo Galle Fort Walk, Galle Face Green Promenade ~2.5 hours" },
      { day: "07", title: "Day 7 – Colombo to Airport Lotus Tower, Pettah Market, Departure ~45 mins" }
    ],
    included: [
      "Comfortable hotels with breakfast",
      "Private transportation",
      "English-speaking guide/driver",
    ],
    excluded: [
      "Flight fares",
      "Entry ticket & activity charges",
      "Lunch & dinner",
      "personal expenses & other items of personal nature"
    ]
  },
  {
    id: 3,
    name: "Vietnam",
    tagline: "Timeless limestone bays, historic towns & rich street food",
    duration: "7 Days · 6 Nights",
    price: "48,900",
    description: "Vietnam captivates travelers with its energetic city streets, historic architecture, and calming natural backdrops. From the classic French-colonial accents of Hanoi to the thousands of towering limestone monoliths rising from the calm emerald waters of Ha Long Bay, it offers an unforgettable cultural journey.",
    image: Vietnam,
    highlights: [
      "Ha Long Bay boutique overnight cruise tour",
      "Hanoi Old Quarter cyclo ride & street food tour",
      "Hoi An ancient lantern-lit river town walk",
      "Cu Chi Tunnels underground historical exploration"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive in Hanoi & traditional welcome banquet" },
      { day: "02", title: "Day 2 – Hanoi city sights & transfer to Ha Long Bay board" },
      { day: "03", title: "Day 3 – Morning cruise, cave kayak & fly to Da Nang" },
      { day: "04", title: "Day 4 – Ba Na Hills Golden Bridge & Hoi An night walk" },
      { day: "05", title: "Day 5 – Flight to Ho Chi Minh City & Mekong Delta boat tour" },
      { day: "06", title: "Day 6 – Cu Chi Tunnels half-day historic circuit guide" },
      { day: "07", title: "Day 7 – Local market souvenir hunting & departure" }
    ],
    included: [
      "Domestic internal flight tickets (Hanoi - Da Nang - HCMC)",
      "Luxury 5-star Ha Long Bay cruise cabin accommodation",
      "Guided street food tasting rounds & historical entries",
      "All airport and destination private vehicle links",
      "English-fluent regional expert guides"
    ]
  },
  {
    id: 4,
    name: "Thailand",
    tagline: "Gilded royal temples, neon nightlife & tropical islands",
    duration: "6 Days · 5 Nights",
    price: "39,900",
    description: "Thailand is a vibrant tropical hub defined by glittering Buddhist temples, ultra-modern cityscapes, and quiet canalside floating markets. Beyond the high-energy rush of Bangkok, its world-famous southern islands like Phuket offer crystalline waters, hidden lagoons, and dramatic ocean cliffs.",
    image: Thailand,
    highlights: [
      "Bangkok Grand Palace & Wat Arun riverside temple",
      "Phi Phi Islands speedboat island-hopping trip",
      "Phuket Old Town cultural heritage walking tour",
      "Authentic Thai spa and traditional massage session"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive in Bangkok & Chao Phraya dinner cruise" },
      { day: "02", title: "Day 2 – Grand Palace & Wat Pho emerald sightseeing" },
      { day: "03", title: "Day 3 – Flight to Phuket & sunset beach relaxation" },
      { day: "04", title: "Day 4 – Phi Phi Island speedboat snorkeling excursion" },
      { day: "05", title: "Day 5 – James Bond Island & Phang Nga Bay canoe tour" },
      { day: "06", title: "Day 6 – Phuket ocean lookout visit & final departure" }
    ],
    included: [
      "Internal domestic flight ticket from Bangkok to Phuket",
      "Premium beach resort accommodation packages",
      "Shared speedboat island excursions with buffet lunches",
      "All airport, pier, and city hotel ground transfers",
      "English-speaking licensed destination hosts"
    ]
  }
];

const International_Tour = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTourDetails, setSelectedTourDetails] = useState(null);
  const [searchParams] = useSearchParams();

  // Parse URL query parameter on page load
  useEffect(() => {
    const destinationParam = searchParams.get("destination");
    if (destinationParam) {
      const matchedIndex = internationalDestinations.findIndex(
        (dest) => dest.name.toLowerCase() === destinationParam.toLowerCase()
      );

      if (matchedIndex !== -1) {
        setActiveIndex(matchedIndex);
        setSelectedTourDetails(internationalDestinations[matchedIndex]);
      }
    }
  }, [searchParams]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % internationalDestinations.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + internationalDestinations.length) % internationalDestinations.length);
  };

  const currentTour = internationalDestinations[activeIndex];

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-slate-950 flex items-center">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentTour.image}
          alt={currentTour.name}
          className="w-full h-full object-cover transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Informational Column */}
        <div className="lg:col-span-5 space-y-6 max-w-xl transition-all duration-500">
          <span className="text-teal-400 font-bold uppercase tracking-widest text-sm block">
            Explore the World
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-wider leading-none drop-shadow-md uppercase">
            {currentTour.name}
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-light leading-relaxed drop-shadow">
            {currentTour.description}
          </p>
          
          <button 
            onClick={() => setSelectedTourDetails(currentTour)}
            className="inline-flex bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-medium px-8 py-3 rounded-xl items-center gap-3 group shadow-lg shadow-blue-900/30"
          >
            Explore Destination
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Right Carousel Selection Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Track Deck */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide pt-6">
            {internationalDestinations.map((destination, index) => {
              const isSelected = index === activeIndex;
              return (
                <div
                  key={destination.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => isSelected && setSelectedTourDetails(destination)}
                  className={`relative cursor-pointer flex-shrink-0 transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl ${
                    isSelected 
                      ? "w-[220px] md:w-[260px] h-[320px] transform -translate-y-4 scale-105 z-20 ring-2 ring-white/20" 
                      : "w-[150px] md:w-[180px] h-[260px] opacity-60 translate-y-0 z-10 mt-auto"
                  }`}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform scale-100 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Card Content Elements */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-teal-300 font-medium uppercase tracking-wider">
                      <FaMapMarkerAlt className="text-xs" />
                      <span>Global</span>
                    </div>
                    <h3 className={`font-bold leading-tight transition-all duration-300 ${isSelected ? "text-base md:text-lg text-white" : "text-sm text-gray-300"}`}>
                      {destination.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Arrow Interactions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all text-white active:scale-95"
            >
              <FaArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all text-white active:scale-95"
            >
              <FaArrowRight size={16} />
            </button>
            
            {/* Visual Pagination Dots */}
            <div className="flex gap-2 ml-4">
              {internationalDestinations.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-teal-400" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* SPLIT SCREEN OVERVIEW ITINERARY SHEET MODAL LAYER */}
      {selectedTourDetails && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 transition-all duration-300 animate-fadeIn">
          <div className="bg-white text-slate-900 w-full max-w-5xl h-full md:h-[92vh] rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 relative">
            
            {/* Left Side: Visual Image Banner */}
            <div className="md:col-span-6 relative h-72 sm:h-80 md:h-full w-full flex flex-col justify-between p-6 md:p-8 overflow-hidden">
              <img 
                src={selectedTourDetails.image} 
                alt={selectedTourDetails.name} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-0"></div>
              
              {/* Back Close Button Ring */}
              <button 
                onClick={() => setSelectedTourDetails(null)}
                className="relative z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <FaTimes size={16} />
              </button>

              {/* Bottom Baseline Description Metadata */}
              <div className="relative z-10 text-white space-y-1.5 mt-auto">
                <span className="text-[11px] text-teal-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <FaMapMarkerAlt /> DESTINATION
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  {selectedTourDetails.name} Getaways
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 font-normal leading-snug drop-shadow-sm">
                  {selectedTourDetails.tagline}
                </p>
              </div>
            </div>

            {/* Right Side: Scrollable Technical Content Area */}
            <div className="md:col-span-6 h-[calc(100vh-19rem)] md:h-full overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-thin relative bg-white">
              
              {/* Top Meta Pricing Row */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium pt-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  <span>{selectedTourDetails.duration}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest block uppercase">FROM</span>
                  <div className="flex items-baseline justify-end text-slate-900">
                    <span className="text-3xl font-black tracking-tight">₹{selectedTourDetails.price}</span>
                    <span className="text-xs text-slate-500 font-normal ml-1">/person</span>
                  </div>
                </div>
              </div>

              {/* Section 1: Highlights Double Grid Checklists */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">HIGHLIGHTS</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {selectedTourDetails.highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-[14px] text-slate-700 leading-tight">
                      <FaCheck className="text-teal-600 text-xs mt-1 flex-shrink-0" />
                      <span className="font-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Day-by-Day Journey Itinerary Timeline */}
              <div className="space-y-5">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">DAY-BY-DAY ITINERARY</h4>
                <div className="space-y-5 pl-1">
                  {selectedTourDetails.itinerary.map((plan, index) => (
                    <div key={index} className="flex gap-5 items-start group">
                      <span className="text-sm font-black text-orange-600 tracking-tight w-6 flex-shrink-0 pt-0.5">
                        {plan.day}
                      </span>
                      <p className="text-[14px] text-slate-800 leading-relaxed font-normal">
                        {plan.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Package Inclusions & Exclusions Checklist */}
                    <div className="space-y-6 pt-2">

                      {/* WHAT'S INCLUDED */}
                      <div className="space-y-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                          WHAT'S INCLUDED
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {selectedTourDetails.included?.map((inc, index) => (
                            <div key={index} className="flex items-start gap-3 text-[14px] text-slate-700 leading-none">
                              <FaCheck className="text-teal-600 text-xs mt-0.5 flex-shrink-0" />
                              <span className="font-normal">{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* WHAT'S EXCLUDED */}
                      {selectedTourDetails.excluded && selectedTourDetails.excluded.length > 0 && (
                        <div className="space-y-4 pt-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                            WHAT'S EXCLUDED
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {selectedTourDetails.excluded.map((exc, index) => (
                              <div key={index} className="flex items-start gap-3 text-[14px] text-slate-700 leading-none">
                                <FaTimes className="text-rose-500 text-xs mt-0.5 flex-shrink-0" />
                                <span className="font-normal">{exc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

              {/* Section 4: Burnt Orange Inquiry Action Callout Button */}
              <div className="pt-4 pb-2">
                <button className="w-full bg-[#d65f47] hover:bg-[#c44f38] transition-colors text-white text-sm font-bold tracking-wide py-4 px-6 rounded-2xl shadow-lg shadow-orange-700/10 active:scale-[0.99]">
                  Inquire about {selectedTourDetails.name}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default International_Tour;