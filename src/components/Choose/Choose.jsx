import React, { useState } from "react";
import { 
  HiSparkles, 
  HiCurrencyDollar, 
  HiPhone, 
  HiGlobeEuropeAfrica, 
  HiBriefcase 
} from "react-icons/hi2";

const Choose = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const features = [
    {
      id: 1,
      icon: <HiSparkles size={24} className="text-blue-600" />,
      iconBg: "bg-blue-50",
      title: "Personalized Travel Planning",
      description: "Every traveler is different. We carefully curate your itinerary based on your interests, travel style, and budget to create a truly personalized experience."
    },
    {
      id: 2,
      icon: <HiCurrencyDollar size={24} className="text-emerald-600" />,
      iconBg: "bg-emerald-50",
      title: "Best Price Guarantee",
      description: "We work with trusted travel partners to offer competitive pricing without compromising on quality, ensuring you receive the best value for your money."
    },
    {
      id: 3,
      icon: <HiPhone size={24} className="text-purple-600" />,
      iconBg: "bg-purple-50",
      title: "24/7 Travel Assistance",
      description: "Our support doesn't end after your booking. Once you arrive at your destination, our team remains available 24/7 to assist you with any questions or unexpected situations."
    },
    {
      id: 4,
      icon: <HiGlobeEuropeAfrica size={24} className="text-amber-600" />,
      iconBg: "bg-amber-50",
      title: "Reliable On-Ground Support",
      description: "Through our trusted local partners, you'll have dependable on-ground assistance whenever you need it, giving you complete peace of mind throughout your trip."
    },
    {
      id: 5,
      icon: <HiBriefcase size={24} className="text-rose-600" />,
      iconBg: "bg-rose-50",
      title: "Budget-Friendly Custom Packages",
      description: "Whether you're planning a luxury getaway, a family vacation, a honeymoon, or a budget-friendly adventure, we design customized travel packages that match your preferences and budget."
    }
  ];

  return (
    <section className="w-full bg-[#fcfdfe] py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* 1. Introductory Header Paragraph Block */}
      <div className="max-w-4xl mb-10 text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold font-['Agrandir'] tracking-tight text-gray-950 mb-4">
          Why Choose Thrillquest
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed max-w-3xl">
          At Thrill Quest, we believe every journey should be seamless, memorable, and tailored to your travel dreams. From the moment you start planning until you return home, we're with you every step of the way.
        </p>
      </div>

      {/* 
        2. Proportional Card Grid Container 
        FIX: Reduced pb-6 to pb-1 to eliminate unnecessary gap underneath the grid tracks.
      */}
      <div className="flex gap-6 overflow-x-auto pb-1 pt-2 lg:grid lg:grid-cols-5 lg:overflow-x-visible scrollbar-none snap-x snap-mandatory items-start">
        {features.map((item) => {
          const isExpanded = !!expandedCards[item.id];
          
          return (
            <div
              key={item.id}
              className="min-w-[290px] sm:min-w-[320px] lg:min-w-0 w-full snap-start bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
            >
              <div>
                {/* Icon Frame */}
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#064e3b] tracking-tight mb-3 leading-snug min-h-[48px] flex items-center">
                  {item.title}
                </h3>

                {/* Description Content */}
                <p className={`text-xs md:text-sm text-gray-500 font-normal leading-relaxed transition-all duration-300 ${
                  isExpanded ? "" : "line-clamp-2"
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Functional Toggle Button */}
              <div 
                onClick={() => toggleExpand(item.id)}
                className="mt-5 pt-3 border-t border-gray-50 flex items-center text-xs font-bold text-[#00a896] hover:text-[#029283] cursor-pointer transition-colors select-none"
              >
                {isExpanded ? (
                  <>Read less <span className="ml-1">&larr;</span></>
                ) : (
                  <>Read more <span className="ml-1">&rarr;</span></>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 
        3. Concluding Outro Paragraph Block 
        FIX: Reduced margins from mt-16 pt-8 down to a clean, compact mt-5 pt-5 track.
      */}
      <div className="mt-5 pt-5 border-t border-gray-100 text-left">
        <p className="text-sm md:text-base text-gray-900 font-bold font-sans max-w-4xl leading-relaxed">
          With Thrill Quest, you're not just booking a trip—you're choosing a travel partner dedicated to making every journey hassle-free, memorable, and extraordinary.
        </p>
      </div>

    </section>
  );
};

export default Choose;