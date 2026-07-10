import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/images/thrill-logo.png";
import { HiMenuAlt3, HiMenuAlt1, HiPhone, HiMail } from "react-icons/hi";
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
        
        {/* 1. TOP CONTACT BAR */}
        <div className="w-full bg-[#005c4b] text-white text-xs sm:text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-6">
            <a href="tel:+919239337204" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <HiPhone size={16} />
              <span>+91 9239337204</span>
            </a>
            <a href="mailto:info@thrillquest.com" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <HiMail size={16} />
              <span>info@thrillquest.com</span>
            </a>
          </div>
        </div>

        {/* 2. MAIN NAVBAR BAR */}
        <div className="w-full bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between w-full h-16 md:h-20">
              
              {/* Logo Area (Stays pinned perfectly to the left) */}
              <div className="flex items-center h-full">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center h-full">
                  <img 
                    src={LogoImg} 
                    alt="ThrillQuestLogo" 
                    className="h-12 md:h-14 w-auto object-contain mix-blend-multiply transform scale-[1.65] origin-left transition-transform duration-200" 
                  />
                </Link>
              </div>

              {/* 
                FIX: Grouped the Desktop Navlinks and Mobile Layout together 
                inside this container so everything automatically flushes right!
              */}
              <div className="flex items-center justify-end">
                
                {/* Desktop Navlinks */}
                <div className="hidden md:block">
                  <ul className="flex items-center gap-6 lg:gap-8">
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

              </div> {/* End of Right Aligned Group */}

            </div>
          </div>
        </div>

        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;