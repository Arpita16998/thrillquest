import React, { useEffect, useRef, useState } from "react";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers the animation when 15% of the section is visible on scroll
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 py-16 md:py-24 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Column: The image with asymmetrical rounded corners */}
        <div className="w-full flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop" 
            alt="Welcome to ThrillQuest"
            className="w-full max-w-md h-[450px] object-cover rounded-[50px] shadow-lg"
          />
        </div>

        {/* Right Column: The welcome text matching your screenshot reference */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-serif italic text-teal-600 tracking-wide">
              Welcome
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f6a313] leading-tight">
              to Our Page
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>ThrillQuest Travels</strong> has been offering first-class travel planning services 
            and advice since 2012. Our experienced agents are great at finding the lowest fares and rates, 
            helping you secure the best travel deals according to your specific preferences and needs. 
            And with our well-established industry connections, we're able to offer unique travel promotions 
            for families and groups that you can't find anywhere else.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            We are all born to explore and guide you. Whatever travel means to you, ThrillQuest provides the 
            path to finding the perfect experience and the right balance of comfort and adventure. We are 
            your premier tour marketplace for an extraordinary travel experience. We have hosted premium 
            expert-planned trips from group tour packages to luxury, tailor-made trips, to independent adventures.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Welcome;