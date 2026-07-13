import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: 1,
    dreamTrip: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Thril Quest Form Submitted:", formData);
    alert("Thank you! A Thril Quest holiday planner will reach out with a custom itinerary within 24 hours.");
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* 1. TOP HERO BANNER */}
      <section className="bg-[#e4ecec] py-20 px-6 relative overflow-hidden text-center">
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex text-[#bcccbc] text-3xl tracking-tighter opacity-60 font-light select-none">
          <FaChevronRight /><FaChevronRight /><FaChevronRight /><FaChevronRight /><FaChevronRight />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">Contact Us</h1>
          <p className="text-slate-600 font-medium text-lg max-w-xl mx-auto leading-relaxed">
            Tell us where your <span className="text-[#d65f47] italic font-serif">thrill</span> begins. 
            Let's build a story worth remembering.
          </p>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex text-[#bcccbc] text-3xl tracking-tighter opacity-60 font-light select-none">
          <FaChevronRight /><FaChevronRight /><FaChevronRight /><FaChevronRight /><FaChevronRight />
        </div>
      </section>

      {/* 2. MAIN INTERACTIVE FORM AREA */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Plan Your Next Epic Journey
            </h2>
            <p className="text-slate-500 text-sm max-w-xl font-normal leading-relaxed">
              Share a few details and a Thril Quest planner will craft a draft itinerary, tailored to your dates, pace and budget. Replies within 24 hours.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Full Name *</label>
                <input 
                  type="text" name="fullName" required placeholder="Your name"
                  value={formData.fullName} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Email *</label>
                <input 
                  type="email" name="email" required placeholder="you@email.com"
                  value={formData.email} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Phone *</label>
                <input 
                  type="text" name="phone" required placeholder="+91 9239337204"
                  value={formData.phone} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Destination *</label>
                <select 
                  name="destination" required value={formData.destination} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-700 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select destination</option>
                  <option value="Ladakh">Ladakh (India)</option>
                  <option value="Kashmir">Kashmir (India)</option>
                  <option value="Andaman">Andaman (India)</option>
                  <option value="North East India">North East India (India)</option>
                  <option value="Sri Lanka">Sri Lanka (International)</option>
                  <option value="Bali">Bali (International)</option>
                  <option value="Dubai">Dubai (International)</option>
                  <option value="Thailand">Thailand (International)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Approx. Travel Date</label>
                <input 
                  type="date" name="travelDate" value={formData.travelDate} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-700 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Travelers</label>
                <input 
                  type="number" name="travelers" min="1" value={formData.travelers} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all"
                />
              </div>

            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Tell us about your dream trip</label>
              <textarea 
                name="dreamTrip" rows="4" placeholder="Pace, budget, occasion, must-haves..."
                value={formData.dreamTrip} onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all resize-none"
              />
            </div>

            <div className="text-center md:text-left">
              <button 
                type="submit"
                className="bg-[#6b8c8c] hover:bg-[#587575] text-white font-bold tracking-wide text-xs uppercase px-10 py-4 rounded-full transition-colors shadow-md active:scale-95"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. THREE INFORMATIONAL CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#9bb4b4]/20 border border-[#9bb4b4]/30 rounded-3xl p-6 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#6b8c8c]/10 text-[#6b8c8c] flex items-center justify-center">
              <FaPhoneAlt size={16} />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Call Concierge</h4>
              <p className="text-sm text-slate-600 font-semibold">+91 9239337204</p>
              <p className="text-xs text-slate-400">Mon-Sat · 10am - 7pm IST</p>
            </div>
          </div>

          <div className="bg-[#9bb4b4]/20 border border-[#9bb4b4]/30 rounded-3xl p-6 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#6b8c8c]/10 text-[#6b8c8c] flex items-center justify-center">
              <FaEnvelope size={16} />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Digital Dispatch</h4>
              <p className="text-sm text-slate-600 font-semibold">inquiries@thrillquest.com</p>
              <p className="text-xs text-slate-400">Custom business inquiries within 12 hours</p>
            </div>
          </div>

          {/* Location Info Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col items-center text-center space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#6b8c8c]/10 text-[#6b8c8c] flex items-center justify-center">
              <FaMapMarkerAlt size={16} />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Headquarters</h4>
              <p className="text-sm text-slate-600 font-medium px-4">Ward No. 11, Satsangha Para, Dhupguri, West Bengal 735210</p>
              <p className="text-xs text-slate-400">Prior meeting reservations advised</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FULL WIDTH GEOGRAPHIC MAP COMPONENT */}
      <section className="w-full px-6 pb-16 max-w-7xl mx-auto">
        <div className="w-full h-96 rounded-[2rem] overflow-hidden shadow-inner border border-slate-200/60 relative">
          <iframe 
            title="Thril Quest Base Location"
            src="https://maps.google.com/maps?q=Thrill%20Quest%20Dhupguri%20Satsangha%20Para&t=k&z=19&ie=UTF8&iwloc=A&output=embed"
            className="w-full h-full border-none"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
};

export default Contact;