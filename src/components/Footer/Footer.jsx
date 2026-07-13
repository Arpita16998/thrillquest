import React from "react";
import { 
  HiMapPin, 
  HiPhone, 
  HiEnvelope, 
  HiClock
} from "react-icons/hi2";
import { 
  FaInstagram, 
  FaFacebookF
} from "react-icons/fa";

// 🖼️ Official logo asset import
import logoImg from "../../assets/images/thrill-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#527174] text-white/90 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* 📋 SECTION 1: TOP NAVIGATION GRID (Balanced and centered across the page) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 justify-center justify-items-center">
          
          {/* Column 1: Quick Links */}
          <div className="w-full max-w-[180px] text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10 chunk-header">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {["Home", "About Us", "Domestic Tours", "International Tours", "Blog", "Contact Us"].map((link) => (
                <li key={link} className="hover:text-white hover:translate-x-0.5 transition-all duration-200 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Our Services */}
          <div className="w-full max-w-[180px] text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10 chunk-header">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {["Domestic Tours", "International Tours", "Customized Holidays", "Honeymoon Packages", "Group Tours", "Family Vacations", "Flight Bookings", "Hotel Bookings", "Visa Assistance", "Travel Insurance"].map((service) => (
                <li key={service} className="hover:text-white hover:translate-x-0.5 transition-all duration-200 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trending Places */}
          <div className="w-full max-w-[180px] text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10 chunk-header">
              Trending Places
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {["Sri Lanka", "Thailand", "Bali", "Dubai", "Ladakh", "Kashmir", "Andaman", "North East India"].map((dest) => (
                <li key={dest} className="hover:text-white hover:translate-x-0.5 transition-all duration-200 cursor-pointer">
                  {dest}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us Column */}
          <div className="w-full max-w-[220px] text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10 chunk-header">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <HiEnvelope className="mt-0.5 shrink-0 text-white/80" size={16} />
                <a href="mailto:inquiries@mythrillquest.com" className="hover:text-white break-all">
                  inquiries@mythrillquest.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="shrink-0 text-white/80" size={16} />
                <a href="tel:+919239337204" className="hover:text-white">
                  +91 9239337204
                </a>
              </li>
              <li className="flex items-start gap-2">
                <HiMapPin className="mt-0.5 shrink-0 text-white/80" size={16} />
                <span>Dhupguri, West Bengal 735210, India</span>
              </li>
              <li className="flex items-start gap-2 text-white/60">
                <HiClock className="mt-0.5 shrink-0" size={16} />
                <span>Mon – Sat | 10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="w-full max-w-[180px] text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10 chunk-header">
              Social
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              
              {/* 👤 Interactive Facebook Link */}
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61572555554884" // 👈 REPLACE WITH YOUR REAL FACEBOOK URL
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <FaFacebookF size={14} className="text-white/80 w-4 text-left" />
                  <span>Facebook</span>
                </a>
              </li>

              {/* 📸 Interactive Instagram Link */}
              <li>
                <a 
                  href="https://www.instagram.com/thrillquest_official/" // 👈 REPLACE WITH YOUR REAL INSTAGRAM URL
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <FaInstagram size={15} className="text-white/80 w-4 text-left" />
                  <span>Instagram</span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* 📝 SECTION 2: BOTTOM BAR LOGO & COPYRIGHT BANNER */}
        <div className="w-full text-xs text-white/40 pt-4 mt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright Information */}
          <div className="text-center sm:text-left order-2 sm:order-1 pt-2 sm:pt-0">
            <p>© 2026 <span className="font-bold text-white/60">Thrill Quest</span>. All Rights Reserved.</p>
          </div>

          {/* Sized-down logo container shifted upwards toward the divider line */}
          <div className="order-1 sm:order-2 max-w-[125px] sm:max-w-[145px] flex justify-center sm:justify-end -mt-1 sm:-mt-3">
            <img 
              src={logoImg} 
              alt="Thrill Quest Logo" 
              className="w-full h-auto object-contain mix-blend-multiply contrast-125 brightness-110"
            />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;