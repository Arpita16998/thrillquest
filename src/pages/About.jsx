import React from "react";
import { FiCompass, FiShield, FiHeart, FiGlobe, FiArrowRight } from "react-icons/fi";

// Core Experience Images
import ExpeditionImg from "../assets/images/Ladakh.jpg"; 
import CulturalImg from "../assets/images/Vietnam.jpg";
import BespokeImg from "../assets/images/Bali.jpg";

const coreValues = [
  {
    id: 1,
    icon: <FiCompass className="text-[#d65f47] w-6 h-6" />,
    title: "Thrill-led design",
    description: "Every itinerary is built around a hero moment – a sunrise, a summit, a flavour – and the day flows from there."
  },
  {
    id: 2,
    icon: <FiGlobe className="text-[#d65f47] w-6 h-6" />,
    title: "Local hands, global standards",
    description: "Vetted ground partners in every region, paired with 24/7 concierge support from our home team."
  },
  {
    id: 3,
    icon: <FiHeart className="text-[#d65f47] w-6 h-6" />,
    title: "Quietly thoughtful",
    description: "From window-side seats on scenic trains to a card on your anniversary – small things, done on purpose."
  },
  {
    id: 4,
    icon: <FiShield className="text-[#d65f47] w-6 h-6" />,
    title: "Honest, transparent pricing",
    description: "No hidden upgrades. What you see is what you pay – and what you'll experience."
  }
];

const specializedRealms = [
  {
    id: 1,
    image: ExpeditionImg,
    tag: "High Altitude & Wild",
    title: "Off-Grid Expeditions",
    desc: "From freezing high-altitude mountain passes in Ladakh to remote deep jungle trekking paths in Nagaland."
  },
  {
    id: 2,
    image: CulturalImg,
    tag: "Timeless Traditions",
    title: "Deep Cultural Immersions",
    desc: "Lantern-lit slow river towns, hidden ancient monastery trails, and authentic regional culinary masterclasses."
  },
  {
    id: 3,
    image: BespokeImg,
    tag: "Tailored Luxury",
    title: "Bespoke Logistical Design",
    desc: "Handpicked boutique cliffside private pool villas paired with seamless private 4WD transit solutions."
  }
];

const About = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-orange-100 selection:text-[#d65f47]">
      
      {/* SECTION 1: CORE PHILOSOPHY MATRIX */}
      {/* Adjusted pt-32 to pt-10 to completely remove the large vertical gap */}
      <section className="max-w-7xl mx-auto px-6 pt-10 md:pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Hero Statement Frame */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.25em] block">
              About Thril Quest
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              We don't sell tickets.<br />
              We design <span className="text-[#d65f47] italic font-serif font-normal">stories.</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed pr-2">
              Thril Quest started with a simple idea — travel should feel earned, intimate and alive. 
              Seven years and four thousand travelers later, that's still how we measure every single 
              trip we send out the door.
            </p>
          </div>

          {/* Right Core Value 2x2 Grid Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-2 lg:pt-6">
            {coreValues.map((value) => (
              <div key={value.id} className="space-y-3.5 group">
                {/* Rounded Icon Enclosure */}
                <div className="w-12 h-12 rounded-full bg-orange-50/70 border border-orange-100 flex items-center justify-center transition-colors group-hover:bg-orange-100/80">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-normal">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <hr className="border-slate-100 max-w-7xl mx-auto px-6" />

      {/* SECTION 2: CURATED REALMS & PHOTOS */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#d65f47] uppercase tracking-widest block">
              What We Do Best
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Our Curated Realms of Travel
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md font-normal leading-relaxed">
            We bypass standard commercial holiday tracks to map out raw, distinct pathways across both domestic frontiers and global archipelagos.
          </p>
        </div>

        {/* Dynamic Experience Photo Grid Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializedRealms.map((realm) => (
            <div 
              key={realm.id} 
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Photo Box Container */}
              <div className="h-56 w-full overflow-hidden relative">
                <img 
                  src={realm.image} 
                  alt={realm.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                
                {/* Micro Floating Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#d65f47] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {realm.tag}
                </span>
              </div>

              {/* Informational Lower Card Chassis */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-[#d65f47]">
                    {realm.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">
                    {realm.desc}
                  </p>
                </div>
                
                {/* Micro Interaction Arrow Anchor */}
                <div className="pt-4 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-[#d65f47] transition-colors cursor-pointer">
                  <span>Explore framework</span>
                  <FiArrowRight className="transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;