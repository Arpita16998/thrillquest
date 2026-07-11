import React from "react";
import { 
  HiMapPin, 
  HiPhone, 
  HiEnvelope, 
  HiClock, 
  HiHeart
} from "react-icons/hi2";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaWhatsapp
} from "react-icons/fa";

// 🖼️ Official logo asset import
import logoImg from "../../assets/images/thrill-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#527174] text-white/90 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* 📋 SECTION 1: TOP NAVIGATION GRID (All shifted cleanly to the left) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {["Home", "About Us", "Domestic Tours","International Tours", "Tour Packages", "Blog", "Contact Us"].map((link) => (
                <li key={link} className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {["Domestic Tours", "International Tours", "Customized Holidays", "Honeymoon Packages", "Group Tours", "Family Vacations", "Flight Bookings", "Hotel Bookings", "Visa Assistance", "Travel Insurance"].map((service) => (
                <li key={service} className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Destinations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10">
              Trending Places
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {["Sri Lanka", "Thailand", "Bali", "Dubai", "Ladakh", "Kashmir", "Andaman", "North East India"].map((dest) => (
                <li key={dest} className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                  {dest}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us Column (Integrated into Grid) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <HiEnvelope className="mt-0.5 shrink-0" size={16} />
                <a href="mailto:inquiries@thrillquest.com" className="hover:text-white break-all">
                  inquiries@thrillquest.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <HiPhone className="mt-0.5 shrink-0" size={16} />
                <a href="tel:+919239337204" className="hover:text-white">
                  +91 9239337204
                </a>
              </li>
              <li className="flex items-start gap-2">
                <HiMapPin className="mt-0.5 shrink-0" size={16} />
                <span> Dhupguri, West Bengal 735210, India</span>
              </li>
              <li className="flex items-start gap-2 text-white/50">
                <HiClock className="mt-0.5 shrink-0" size={16} />
                <span>Mon – Sat | 10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Vertical Layout Link Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 pb-1 border-b border-white/10">
              Social
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <FaFacebookF size={14} className="w-4 text-center" />
                <span>Facebook</span>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <FaInstagram size={15} className="w-4 text-center" />
                <span>Instagram</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 📝 SECTION 2: BOTTOM BAR LOGO & COPYRIGHT BANNER */}
        <div className="w-full text-xs text-white/40 pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright Information */}
          <div className="flex flex-col gap-1 text-center sm:text-left order-2 sm:order-1">
            <p>© 2026 <span className="font-bold text-white/60">Thrill Quest</span>. All Rights Reserved.</p>
          </div>

          {/* Logo shifted to the bottom right with dynamic transparent blend treatment */}
          <div className="order-1 sm:order-2 max-w-[150px] sm:max-w-[180px]">
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