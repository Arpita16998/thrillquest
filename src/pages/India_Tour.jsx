import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaCheck, FaTimes } from "react-icons/fa";
import Ladakh from "../assets/images/Ladakh.jpg";
import Nathula from "../assets/images/Nathula.jpg";
import Lachen from "../assets/images/Lachen.jpg";
import Tawang from "../assets/images/Tawang.jpg";
import Dzukou from "../assets/images/Dzukou.jpg";

const indiaDestinations = [
  {
    id: 0,
    name: "Ladakh",
    tagline: "High passes, monasteries & magnetic skies",
    duration: "7 Days · 6 Nights",
    price: "38,900",
    description: "Ladakh is a high-altitude union territory in northern India, renowned for its dramatic, rugged mountain landscapes, pristine glacial lakes, and distinct Tibetan Buddhist culture. Often referred to as the Land of High Passes, it functions as a remote cold desert that attracts travelers with its ancient monasteries, adventure trekking, and stark natural beauty.",
    image: Ladakh,
    highlights: [
      "Pangong Lake overnight camp",
      "Nubra Valley & Hunder dunes",
      "Khardung La – world's highest pass",
      "Thiksey & Hemis monasteries"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive Leh, acclimatise" },
      { day: "02", title: "Day 2 – Local monasteries & Shanti Stupa" },
      { day: "03", title: "Day 3 – Leh → Nubra via Khardung La" },
      { day: "04", title: "Day 4 – Nubra → Pangong Lake" },
      { day: "05", title: "Day 5 – Pangong → Leh" },
      { day: "06", title: "Day 6 – Sham Valley & Magnetic Hill" },
      { day: "07", title: "Day 7 – Departure" }
    ],
    included: [
      "Inner line permits",
      "Hotels & Pangong camp",
      "All meals on circuit",
      "SUV with experienced driver",
      "Oxygen support on demand"
    ]
  },
  {
    id: 1,
    name: "Nathula",
    tagline: "Historic high-altitude international border pass",
    duration: "5 Days · 4 Nights",
    price: "24,500",
    description: "Nathula is a historic, high-altitude mountain pass in the Himalayas at 14,140 feet. It connects the Indian state of Sikkim with the Tibet Autonomous Region of China, serving as a prominent international border post and a scenic tourist destination famous for its snow-clad peaks.",
    image: Nathula,
    highlights: [
      "Indo-China Border overlook",
      "Tsomgo Sacred Glacial Lake",
      "Baba Harbhajan Singh Mandir shrine",
      "Gangtok high-street exploration"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive in Gangtok & check-in" },
      { day: "02", title: "Day 2 – Gangtok city tour & viewpoints" },
      { day: "03", title: "Day 3 – Excursion to Nathula Pass & Tsomgo Lake" },
      { day: "04", title: "Day 4 – Transfer to local cultural villages" },
      { day: "05", title: "Day 5 – Departure via Bagdogra/NJP" }
    ],
    included: [
      "Nathula special border permits",
      "Premium hotel stays & breakfast",
      "4x4 vehicle transfers on mountain terrain",
      "Experienced local route guide"
    ]
  },
  {
    id: 2,
    name: "Lachen",
    tagline: "Alpine valleys, mountain serenity & pristine lakes",
    duration: "6 Days · 5 Nights",
    price: "27,800",
    description: "Nestled quietly in North Sikkim, Lachen serves as the pristine base destination to explore high-altitude wetlands, fields of blooming rhododendrons, and the raw, unedited landscape of the North-Eastern inner Himalayan belt.",
    image: Lachen,
    highlights: [
      "Gurudongmar Lake high-altitude excursion",
      "Lachen Monastery ancient woodwork",
      "Chopta Valley sub-alpine meadow views",
      "Traditional mountain village home-stays"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrival in Gangtok town" },
      { day: "02", title: "Day 2 – Scenic drive from Gangtok to Lachen" },
      { day: "03", title: "Day 3 – Early drive to Gurudongmar Lake & transfer to Lachung" },
      { day: "04", title: "Day 4 – Yumthang Valley exploration & return to Gangtok" },
      { day: "05", title: "Day 5 – Day at leisure in Gangtok" },
      { day: "06", title: "Day 6 – Final departure" }
    ],
    included: [
      "North Sikkim area security permits",
      "Cozy lodge stays & daily fresh meals",
      "Private mountain-spec SUV transport",
      "All driver allowances and toll taxes"
    ]
  },
  {
    id: 3,
    name: "Tawang",
    tagline: "Monastic heritage & mist-shrouded waterfalls",
    duration: "7 Days · 6 Nights",
    price: "34,900",
    description: "Perched high in Arunachal Pradesh, Tawang captivates adventure seekers with its centuries-old Buddhist monastery heritage, challenging high-elevation passes like Sela Pass, and roaring mountain waterfalls dropped against clear blue skies.",
    image: Tawang,
    highlights: [
      "Tawang Monastery complex exploration",
      "Sela Pass snow-line crossing at 13,700 ft",
      "Madhuri Lake peaceful wilderness walk",
      "Nuranang Waterfalls day trip"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive in Guwahati & drive to Bhalukpong" },
      { day: "02", title: "Day 2 – Transfer from Bhalukpong to Dirang Valley" },
      { day: "03", title: "Day 3 – Cross Sela Pass and reach Tawang" },
      { day: "04", title: "Day 4 – Tawang Monastery & local sightseeing" },
      { day: "05", title: "Day 5 – Day trip to Bum La Pass & Madhuri Lake" },
      { day: "06", title: "Day 6 – Return journey to Bomdila" },
      { day: "07", title: "Day 7 – Drive back to Guwahati for departure" }
    ],
    included: [
      "Arunachal Inner Line Permit (ILP) handling",
      "Bum La Pass special defense clear permits",
      "Premium mountain eco-resort stays",
      "Dedicated 4WD SUV with expert mountain driver"
    ]
  },
  {
    id: 4,
    name: "Dzukou",
    tagline: "Stark green rolling hills & deep valley trekking",
    duration: "4 Days · 3 Nights",
    price: "19,500",
    description: "Famous for its undulating valleys that look like manicured golf courses, the Dzukou Valley sitting on the border of Nagaland and Manipur offers an unparalleled backcountry trekking experience through fields of endemic seasonal lilies.",
    image: Dzukou,
    highlights: [
      "Scenic trek through Dzukou Valley paths",
      "Overnight camping under clear starry night skies",
      "Kohima local heritage and war cemetery tour",
      "Traditional Naga tribal cuisine experiences"
    ],
    itinerary: [
      { day: "01", title: "Day 1 – Arrive in Dimapur & drive to Kohima" },
      { day: "02", title: "Day 2 – Drive to trekking base & trek up to Dzukou Valley" },
      { day: "03", title: "Day 3 – Explore the valley floors & return to Kohima" },
      { day: "04", title: "Day 4 – Local cultural market visit & departure" }
    ],
    included: [
      "Nagaland state entry permits",
      "Trekking tents, sleeping gear & camp meals",
      "Local certified trekking guide and porters",
      "All ground logistics from Dimapur airport"
    ]
  }
];

const India_Tour = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTourDetails, setSelectedTourDetails] = useState(null); // Tracks the active split view modal

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % indiaDestinations.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + indiaDestinations.length) % indiaDestinations.length);
  };

  const currentTour = indiaDestinations[activeIndex];

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

      {/* Main Container Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Informational Column */}
        <div className="lg:col-span-5 space-y-6 max-w-xl transition-all duration-500">
          <span className="text-teal-400 font-bold uppercase tracking-widest text-sm block">
            Explore India
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-wider leading-none drop-shadow-md uppercase">
            {currentTour.name}
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-light leading-relaxed drop-shadow">
            {currentTour.description}
          </p>
          
          {/* New Interactive Click Trigger for Button */}
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
            {indiaDestinations.map((destination, index) => {
              const isSelected = index === activeIndex;
              return (
                <div
                  key={destination.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => isSelected && setSelectedTourDetails(destination)} // New Dynamic Click Tracker for Active Card
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
                      <span>India</span>
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
              {indiaDestinations.map((_, idx) => (
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
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-0 md:p-6 transition-all duration-300 animate-fadeIn">
          <div className="bg-white text-slate-900 w-full max-w-5xl h-full md:h-[92vh] rounded-none md:rounded-[2rem] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 relative">
            
            {/* Left Side: Visual Image Banner (Matches Screenshot 2026-07-03 130213_2.jpg Left Pane) */}
            <div className="md:col-span-6 relative h-64 md:h-full w-full">
              <img 
                src={selectedTourDetails.image} 
                alt={selectedTourDetails.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Back Close Button Ring */}
              <button 
                onClick={() => setSelectedTourDetails(null)}
                className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-10"
              >
                <FaTimes size={16} />
              </button>

              {/* Bottom Baseline Description Metadata */}
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-1">
                <span className="text-[11px] text-gray-300 font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-90">
                  <FaMapMarkerAlt className="text-teal-400" /> DESTINATION
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
                  Leh {selectedTourDetails.name}
                </h2>
                <p className="text-sm text-gray-200 font-normal pt-1 drop-shadow-sm">
                  {selectedTourDetails.tagline}
                </p>
              </div>
            </div>

            {/* Right Side: Scrollable Technical Content Area (Matches Screenshot 2026-07-03 130213_2.jpg to 130310_2.jpg Right Pane) */}
            <div className="md:col-span-6 h-[calc(100vh-16rem)] md:h-full overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-thin relative bg-white">
              
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

              {/* Section 3: Package Inclusions Checklist */}
              <div className="space-y-4 pt-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">WHAT'S INCLUDED</h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedTourDetails.included.map((inc, index) => (
                    <div key={index} className="flex items-start gap-3 text-[14px] text-slate-700 leading-none">
                      <FaCheck className="text-teal-600 text-xs mt-0.5 flex-shrink-0" />
                      <span className="font-normal">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Burnt Orange Inquiry Action Callout Button */}
              <div className="pt-4 pb-2">
                <button className="w-full bg-[#d65f47] hover:bg-[#c44f38] transition-colors text-white text-sm font-bold tracking-wide py-4 px-6 rounded-2xl shadow-lg shadow-orange-700/10 active:scale-[0.99]">
                  Inquire about Leh {selectedTourDetails.name}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default India_Tour;