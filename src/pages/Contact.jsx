import React, { useState } from "react";
import heroPhoto from "../assets/images/contact-hero.jpg";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "+91 ", // Pre-filled to guide user format
    destination: "",
    travelDate: "",
    travelers: 1
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time validation handler
  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "fullName": {
        const parts = value.trim().split(/\s+/);
        if (parts.length < 2 || parts[0] === "" || parts[1] === "") {
          errorMsg = "Invalid name format. Please enter both your first name and surname.";
        }
        break;
      }

      case "email": {
        if (/^[A-Z]/.test(value)) {
          errorMsg = "Invalid email address: Email cannot start with a capital letter.";
        } else if (!/^[a-z0-9._%+-]+@gmail\.com$/.test(value)) {
          errorMsg = "Invalid email address: Must be lowercase and end with '@gmail.com'.";
        }
        break;
      }

      case "phone": {
        const phoneRegex = /^\+91\s?\d{10}$/;
        if (!phoneRegex.test(value)) {
          errorMsg = "Invalid phone number: Must start with +91 followed by 10 digits.";
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const nameErr = validateField("fullName", formData.fullName);
    const emailErr = validateField("email", formData.email);
    const phoneErr = validateField("phone", formData.phone);
    const destinationErr = validateField("destination", formData.destination);

    if (nameErr || emailErr || phoneErr || destinationErr) {
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
          "Number of Travelers": formData.travelers
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
          travelers: 1
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

  const hasValidationErrors = Object.values(errors).some((msg) => msg !== "");
  const isFormEmpty = !formData.fullName || !formData.email || !formData.phone || !formData.destination;

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ================= 1. FULL-COVER HERO BANNER ================= */}
      <section className="relative w-full h-52 sm:h-64 md:h-80 flex items-center justify-center text-center overflow-hidden">
        
        {/* Full Section Background Image */}
        <img 
          src={heroPhoto} 
          alt="Contact Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

        {/* Heading On Top */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
            Contact Us
          </h1>
        </div>

      </section>

      {/* ================= 2. MAIN FORM & COMPACT CONTACT DESK SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: FORM SECTION */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl space-y-6">
            
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Send us a message
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                Do you have a question? A custom request? Or need help choosing the right destination? Feel free to contact us.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Full Name Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Full Name *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="Enter your first name and surname"
                  value={formData.fullName} 
                  onChange={handleInputChange}
                  className={`w-full bg-white border ${errors.fullName ? "border-red-500" : "border-slate-200"} rounded-full px-5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#afbf4a] transition-all`}
                />
                {errors.fullName && <p className="text-red-500 text-xs pl-3">{errors.fullName}</p>}
              </div>

              {/* Email & Phone Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Email *</label>
                  <input 
                    type="text" 
                    name="email" 
                    placeholder="example@gmail.com"
                    value={formData.email} 
                    onChange={handleInputChange}
                    className={`w-full bg-white border ${errors.email ? "border-red-500" : "border-slate-200"} rounded-full px-5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#afbf4a] transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs pl-3">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Phone *</label>
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="+91 9239337204"
                    value={formData.phone} 
                    onChange={handleInputChange}
                    className={`w-full bg-white border ${errors.phone ? "border-red-500" : "border-slate-200"} rounded-full px-5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#afbf4a] transition-all`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs pl-3">{errors.phone}</p>}
                </div>
              </div>

              {/* Destination & Travel Date Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Destination *</label>
                  <select 
                    name="destination" 
                    value={formData.destination} 
                    onChange={handleInputChange}
                    className={`w-full bg-white border ${errors.destination ? "border-red-500" : "border-slate-200"} rounded-full px-5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#afbf4a] transition-all appearance-none cursor-pointer`}
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
                  {errors.destination && <p className="text-red-500 text-xs pl-3">{errors.destination}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Approx. Travel Date</label>
                  <input 
                    type="date" 
                    name="travelDate" 
                    value={formData.travelDate} 
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-full px-5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#afbf4a] transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Travelers Counter */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Number of Travelers</label>
                <input 
                  type="number" 
                  name="travelers" 
                  min="1" 
                  value={formData.travelers} 
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-200 rounded-full px-5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#afbf4a] transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting || hasValidationErrors || isFormEmpty}
                  className="bg-[#afbf4a] hover:bg-[#9eb03d] disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-bold text-sm px-8 py-3 rounded-full transition-all shadow-md active:scale-95"
                >
                  {isSubmitting ? "Sending..." : "Send a Message"}
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT COLUMN: COMPACT CONTACT CARD & WHATSAPP BAR */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            
            {/* Main Side Card */}
            <div className="bg-[#e2ee98] text-slate-900 rounded-2xl p-5 shadow-sm space-y-4">
              
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                Hi! We are always to help you
              </h3>

              <div className="space-y-2.5">
                {/* Call Desk */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 flex items-start gap-3">
                  <div className="text-slate-800 pt-0.5">
                    <FaPhoneAlt size={15} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Call Desk</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">+91 9239337204</p>
                  </div>
                </div>

                {/* Email Direct */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 flex items-start gap-3">
                  <div className="text-slate-800 pt-0.5">
                    <FaEnvelope size={15} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Email Direct</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">inquiries@mythrillquest.com</p>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 flex items-start gap-3">
                  <div className="text-slate-800 pt-0.5">
                    <FaMapMarkerAlt size={15} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Office Location</p>
                    <p className="text-xs font-medium text-slate-800 leading-snug mt-0.5">
                       Dhupguri, Jalpaiguri,West Bengal, pin - 735210
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* DIRECT LIVE WHATSAPP CONSULTATION BAR */}
            <a 
              href="https://wa.me/919239337204?text=Hi%2C%20I%20have%20a%20query%20regarding%20a%20travel%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e3f399] hover:bg-[#d5e683] text-slate-900 font-extrabold py-3.5 px-5 rounded-xl shadow-md flex items-center justify-center gap-2.5 transition-all transform active:scale-95 group cursor-pointer"
            >
              <FaWhatsapp size={20} className=" text-[#107c41] group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm tracking-wider uppercase">
                Open WhatsApp 
              </span>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;