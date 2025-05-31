'use client';

import { useState } from "react";
import { motion } from "framer-motion"; // Use framer-motion not "motion/react"

function Navigation({ vertical = false }: { vertical?: boolean }) {
  return (
    <ul
      className={`nav-ul ${vertical ? 'flex flex-col space-y-4' : 'flex space-x-6 items-center'}`}
    >
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition" href="#about">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition" href="#projects">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-neutral-400 hover:text-white transition" href="#about">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-black/50">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-1  ">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            N
          </a>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex  focus:outline-none transition-colors text-neutral-400 hover:text-white  sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          className="block sm:hidden bg-black/80 text-white py-4 px-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav>
            <Navigation vertical />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
