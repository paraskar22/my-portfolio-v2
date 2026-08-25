import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Importing styles and assets
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 navbar-theme ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo and Title */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='navbar-title text-[18px] font-bold cursor-pointer flex '>
            Vaishali &nbsp;
            <span className='sm:block hidden'> | Full Stack Software Engineer </span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className='list-none hidden sm:flex flex-row gap-6 items-center'>
          {navLinks.map((nav) =>
            nav.icon ? (
              <li key={nav.id}>
                <a 
                  href={nav.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-tertiary p-2.5 rounded-full hover:bg-[#915EFF] transition-all duration-300 flex items-center justify-center"
                  aria-label={nav.id}
                >
                  {nav.id === 'linkedin' && <FaLinkedin className="text-white text-lg" />}
                  {nav.id === 'github' && <FaGithub className="text-white text-lg" />}
                  {nav.id === 'email' && <FaEnvelope className="text-white text-lg" />}
                </a>
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "nav-link-active" : "nav-link"
                } hover:nav-link-active text-[15px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-blue-300 text-xl" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 mobile-menu absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) =>
                nav.icon ? (
                  <li key={nav.id}>
                    <a
                      href={nav.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tertiary p-2.5 rounded-full hover:bg-[#915EFF] transition-all duration-300 flex items-center justify-center"
                      aria-label={nav.id}
                    >
                      {nav.id === 'linkedin' && <FaLinkedin className="text-white text-lg" />}
                      {nav.id === 'github' && <FaGithub className="text-white text-lg" />}
                      {nav.id === 'email' && <FaEnvelope className="text-white text-lg" />}
                    </a>
                  </li>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "nav-link-active" : "nav-link"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                )
              )}
              {/* Theme Toggle in Mobile Menu */}
              <li>
                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF] transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <FaSun className="text-yellow-400 text-xl" />
                  ) : (
                    <FaMoon className="text-blue-300 text-xl" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
