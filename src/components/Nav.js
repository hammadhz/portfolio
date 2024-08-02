// Nav.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobNav from "./MobNav";
import logo from "../assets/svg/Hammad.hz.svg";
import { ReactSVG } from "react-svg";

const Nav = () => {
  const [isVisibleMobNav, setIsVisibleMobNav] = useState(
    window.innerWidth > 786
  );
  const [isOpen, setIsOpen] = useState(false);
  // Motion variants for navigation
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleOpenSideBar = (isOpenVal) => setIsOpen(isOpenVal);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsVisibleMobNav(false);
      } else {
        setIsVisibleMobNav(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisibleMobNav]);

  return (
    <motion.div
      className=" w-full bg-accent flex justify-between items-center p-2.5 border border-b-2 border-b-tertiary"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-black text-[[#000000]]">
          <ReactSVG src={logo} />
        </a>
      </div>
      {isVisibleMobNav ? (
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="font-semibold text-lg font-poppins">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="font-semibold text-lg font-poppins">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="font-semibold text-lg font-poppins">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="font-semibold text-lg font-poppins"
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="font-semibold font-poppins text-lg">
              Contact
            </a>
          </li>
        </ul>
      ) : (
        <>
          <MobNav isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
        </>
      )}
    </motion.div>
  );
};

export default Nav;
