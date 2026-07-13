import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "+91 ", // Pre-filled to guide the user into the correct format
    destination: "",
    travelDate: "",
    travelers: 1,
    dreamTrip: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔍 Real-time validation handler based on your guidelines
  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "fullName": {
        const parts = value.trim().split(/\s+/);
        // Validates that there is at least a first name and a surname
        if (parts.length < 2 || parts[0] === "" || parts[1] === "") {
          errorMsg = "Invalid name format. Please enter both your first name and surname.";
        }
        break;
      }

      case "email": {
        // 1. Checks if it starts with a capital letter
        if (/^[A-Z]/.test(value)) {
          errorMsg = "Invalid email address: Email cannot start with a capital letter.";
        } 
        // 2. Checks if it strictly ends with @gmail.com and allows letters/numbers before it
        else if (!/^[a-z0-9._%+-]+@gmail\.com$/.test(value)) {
          errorMsg = "Invalid email address: Must be lowercase and end with '@gmail.com'.";
        }
        break;
      }

      case "phone": {
        // Enforces +91 followed exactly by 10 digits (allows optional single space after +91)
        const phoneRegex = /^\+91\s?\d{10}$/;
        if (!phoneRegex.test(value)) {
          errorMsg = "Invalid phone number: Must start with +91 followed by exactly 10 digits without letters.";
        }
        break;
      }

      case "dreamTrip": {
        // Counts words by splitting on spaces and filtering out empty elements
        const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
        if (wordCount < 20) {
          errorMsg = `Please describe your trip using a minimum of 20 words. (Current word count: ${wordCount}/20)`;
        }
        break;
      }

      case "destination": {
        if (!value) {
          errorMsg = "Please select a travel destination.";
        }
        break;
      }

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Final validation sweep before sending data to the email server
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const nameErr = validateField("fullName", formData.fullName);
    const emailErr = validateField("email", formData.email);
    const phoneErr = validateField("phone", formData.phone);
    const destinationErr = validateField("destination", formData.destination);
    const tripErr = validateField("dreamTrip", formData.dreamTrip);

    // Block submission completely if any rule is broken
    if (nameErr || emailErr || phoneErr || destinationErr || tripErr) {
      alert("Please fix the marked invalid fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/inquiries@thrillquest.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Customer Name": formData.fullName,
          "Customer Email": formData.email,
          "Phone Number": formData.phone,
          "Target Destination": formData.destination,
          "Approx Travel Date": formData.travelDate || "Not Specified",
          "Number of Travelers": formData.travelers,
          "Dream Trip Notes": formData.dreamTrip
        })
      });

      if (response.ok) {
        alert("Thank you! Your information has been verified and successfully sent to inquiries@thrillquest.com.");
        setFormData({
          fullName: "",
          email: "",
          phone: "+91 ",
          destination: "",
          travelDate: "",
          travelers: 1,
          dreamTrip: ""
        });
        setErrors({});
      } else {
        alert("An error occurred while sending your request. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine if there are active validation errors to safely disable the button
  const hasValidationErrors = Object.values(errors).some((msg) => msg !== "");
  const isFormEmpty = !formData.fullName || !formData.email || !formData.phone || !formData.destination || !formData.dreamTrip;

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
              
              {/* Full Name Input Field */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Full Name *</label>
                <input 
                  type="text" name="fullName" required placeholder="Enter your full name"
                  value={formData.fullName} onChange={handleInputChange}
                  className={`w-full bg-slate-50 border ${errors.fullName ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500" : "border-slate-200/80 focus:border-[#7fa0a0]"} rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:bg-white transition-all`}
                />
                {errors.fullName && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{errors.fullName}</p>}
              </div>

              {/* Email Input Field */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Email *</label>
                <input 
                  type="text" name="email" required placeholder="Enter your email address"
                  value={formData.email} onChange={handleInputChange}
                  className={`w-full bg-slate-50 border ${errors.email ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500" : "border-slate-200/80 focus:border-[#7fa0a0]"} rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:bg-white transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{errors.email}</p>}
              </div>

              {/* Phone Input Field */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Phone *</label>
                <input 
                  type="text" name="phone" required placeholder="+91 9239337204"
                  value={formData.phone} onChange={handleInputChange}
                  className={`w-full bg-slate-50 border ${errors.phone ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500" : "border-slate-200/80 focus:border-[#7fa0a0]"} rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:bg-white transition-all`}
                />
                {errors.phone && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{errors.phone}</p>}
              </div>

              {/* Destination Dropdown Field */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Destination *</label>
                <select 
                  name="destination" required value={formData.destination} onChange={handleInputChange}
                  className={`w-full bg-slate-50 border ${errors.destination ? "border-red-500 focus:border-red-600" : "border-slate-200/80 focus:border-[#7fa0a0]"} rounded-2xl px-5 py-3.5 text-sm text-slate-700 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer`}
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
                {errors.destination && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{errors.destination}</p>}
              </div>

              {/* Travel Date */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Approx. Travel Date</label>
                <input 
                  type="date" name="travelDate" value={formData.travelDate} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-700 focus:outline-none focus:bg-white transition-all"
                />
              </div>

              {/* Travelers Counter */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Travelers</label>
                <input 
                  type="number" name="travelers" min="1" value={formData.travelers} onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fa0a0] focus:bg-white transition-all"
                />
              </div>

            </div>

            {/* Dream Trip Description Textarea */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Tell us about your dream trip *</label>
              <textarea 
                name="dreamTrip" rows="4" placeholder="Please write at least 20 words detailing your expected route, specific points of interest, or overall budget choices..."
                value={formData.dreamTrip} onChange={handleInputChange}
                className={`w-full bg-slate-50 border ${errors.dreamTrip ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500" : "border-slate-200/80 focus:border-[#7fa0a0]"} rounded-2xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white transition-all resize-none`}
              />
              {errors.dreamTrip && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{errors.dreamTrip}</p>}
            </div>

            {/* Form Submit Button Container */}
            <div className="text-center md:text-left">
              <button 
                type="submit"
                disabled={isSubmitting || hasValidationErrors || isFormEmpty}
                className="bg-[#6b8c8c] hover:bg-[#587575] disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-bold tracking-wide text-xs uppercase px-10 py-4 rounded-full transition-all shadow-md active:scale-95"
              >
                {isSubmitting ? "Sending Request..." : "Submit Request"}
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