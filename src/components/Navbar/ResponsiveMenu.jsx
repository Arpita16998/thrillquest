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
    name: "India Tour",
    link: "/India_tour",
  },
  {
    name: "International Tour",
    link: "/International_tour",
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-[60] flex h-screen w-[75%] flex-col justify-between bg-slate-900 px-8 pb-6 pt-16 text-white transition-all duration-300 md:hidden rounded-r-xl shadow-2xl border-r border-white/10`}
    >
      <div className="Navbar__card">
        {/* top section */}
        <div>
          <div className="flex items-center justify-start gap-4">
            <FaUserCircle size={50} className="text-gray-400" />
            <div className="text-gray-300">
              <h1 className="font-semibold">Hello User</h1>
              <p className="text-sm text-teal-400">premium user</p>
            </div>
          </div>
        </div>

        {/* nav links */}
        <div className= "mt-12">
          <ul className="space-y-5 text-xl">
            {navbarLinks.map(({ name, link }) => (
              <li key={name}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className="inline-block hover:text-teal-400 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;