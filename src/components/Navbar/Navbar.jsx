import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/images/thrill-logo.png";
import { HiMenuAlt3, HiMenuAlt1, HiPhone, HiMail } from "react-icons/hi"; // Added contact icons
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinkClass = ({ isActive }) =>
    `inline-block px-2 py-2 transition-colors duration-300 ${
      isActive ? "text-teal-600 font-bold" : "text-gray-700 hover:text-teal-600"
    }`;

  return (
    <>
      {/* Main Fixed Header Container */}
      <div className="fixed top-0 left-0 w-full shadow-md z-50 flex flex-col">
        
        {/* 1. TOP CONTACT BAR (Matches JourneyTank Style) */}
        <div className="w-full bg-[#005c4b] text-white text-xs sm:text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-6">
            {/* Phone Number Link */}
            <a href="tel:+917407903965" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <HiPhone size={16} />
              <span>+91 7407903965</span>
            </a>
            {/* Email Link */}
            <a href="mailto:inquiries@mythrillquest.com" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <HiMail size={16} />
              <span>inquiries@mythrillquest.com</span>
            </a>
          </div>
        </div>

        {/* 2. MAIN NAVBAR BAR (White background) */}
        <div className="w-full bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            {/* 
              FIX: Height locked to exactly h-20 (80px) on desktop to accommodate 
              the bigger logo smoothly without leaking any extra white space below!
            */}
            <div className="flex items-center justify-between w-full h-16 md:h-20">
              
              {/* Logo Area */}
              <div className="flex items-center h-full py-2">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center h-full">
                  {/* 
                    FIX: Set to h-12 on mobile and h-16 on desktop. 
                    This makes the logo big, highly readable, and cleanly contained.
                  */}
                  <img 
                    src={LogoImg} 
                    alt="ThrillQuestLogo" 
                    className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" 
                  />
                </Link>
              </div>

              {/* Desktop Navlinks */}
              <div className="hidden md:block">
                <ul className="flex items-center gap-8">
                  <li>
                    <NavLink to="/" className={navLinkClass}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={navLinkClass}>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/India_Tour" className={navLinkClass}>
                      India Tour
                  </NavLink>
                  </li>
                  <li>
                    <NavLink to="/International_Tour" className={navLinkClass}>
                      International Tour
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={navLinkClass}>
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Mobile Hamburger Layout */}
              <div className="flex items-center gap-4">
                <div className="md:hidden block">
                  {showMenu ? (
                    <HiMenuAlt1
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all text-gray-800"
                      size={30}
                    />
                  ) : (
                    <HiMenuAlt3
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all text-gray-800"
                      size={30}
                    />
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>

        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;