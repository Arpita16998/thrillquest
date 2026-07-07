import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/logo.jpeg";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Class helper updated to look perfect on a transparent, dark backdrop
  const navLinkClass = ({ isActive }) =>
    `inline-block px-2 py-2 transition-colors duration-300 ${
      isActive ? "text-teal-400 font-semibold" : "text-gray-200 hover:text-teal-400"
    }`;

  return (
    <>
      {/* Changed bg-white text-black shadow-md -> bg-transparent text-white */}
      <div className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
        
        {/* Main Navbar container */}
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-2">
          <div className="flex items-center justify-between w-full">
            
            {/* Logo */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={LogoImg} alt="Logo" className="h-16 object-contain mix-blend-screen" />
              </Link>
            </div>

            {/* Desktop Navlinks (Cleaned up Service and Quick Links) */}
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

            {/* Mobile Hamburger menu launcher (Book Now button removed completely) */}
            <div className="flex items-center gap-4">
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all text-white"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all text-white"
                    size={30}
                  />
                )}
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