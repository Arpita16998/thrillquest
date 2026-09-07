import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Domestic Tour",
    link: "/domestic-tour",
  },
  {
    name: "International Tour",
    link: "/international-tour",
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      {/* 1. DARK OVERLAY BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setShowMenu(false)}
      />

      {/* 2. FLOATING ROUNDED DRAWER */}
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-[60] flex h-screen w-[75%] max-w-[300px] flex-col justify-between bg-[#0b1329] px-6 pb-6 pt-8 text-white transition-all duration-300 md:hidden rounded-tr-[35px] rounded-br-[35px] shadow-2xl`}
      >
        <div className="Navbar__card">
          {/* Top Section - User Profile */}
          <div>
            <div className="flex items-center justify-start gap-4">
              <FaUserCircle size={48} className="text-gray-400" />
              <div className="text-gray-300">
                <h1 className="font-semibold text-base text-white">Hello User</h1>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="mt-10">
            <ul className="space-y-5 text-base font-medium">
              {navbarLinks.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    to={link}
                    onClick={() => setShowMenu(false)}
                    className="inline-block text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;