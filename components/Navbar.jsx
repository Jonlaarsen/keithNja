"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const categories = [
  { id: 1, title: "About", path: "about" },
  { id: 2, title: "Our Team", path: "team" }, // fix new page
  { id: 3, title: "Services", path: "services" },
  { id: 4, title: "Works", path: "works" },
  { id: 5, title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="w-full uppercase  top-0 left-0 absolute  z-50 flex flex-row items-center justify-between px-10">
      {isHomePage ? (
        <Link href="/">
          <img
            className="h-[8rem] py-5 invert"
            src="/postedlogo.png"
            alt="Posted-production logo"
          />
        </Link>
      ) : (
        <Link href="/">
          <img
            className="h-[6.5rem] md:h-[8rem] py-5 invert absolute left-1/2 transform -translate-x-1/2 top-2"
            src="/posted3.png"
            alt="Posted-production logo"
          />
        </Link>
      )}
      <div className="flex sm:flex-row flex-col-reverse items-end space-y-2 sm:items-center absolute space-x-4 right-4 top-4 sm:right-[2rem] sm:top-6">
        <motion.div whileHover={{ scale: 1.1 }}>
          <a
            href="https://www.linkedin.com/in/posted-productions-00488833b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 mb-2 hover:text-blue-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1, color: "blue-800" }}>
          <a
            href="https://www.instagram.com/_postedproductions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 mb-2 hover:text-blue-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </motion.div>
        <motion.button
          initial={false}
          animate={isOpen ? "open" : "closed"}
          onClick={() => toggleOpen(true)}
          custom="100%"
          className="focus:outline-none z-30 group"
        >
          <span
            className={`block w-[3rem] mb-2 h-1 transition-all duration-300 bg-white ${
              isOpen ? "rotate-45 translate-y-3" : ""
            } group-hover:bg-blue-800`}
          ></span>
          <span
            className={`block w-[3rem] mb-2 h-1 my-1 transition-all duration-300 bg-white ${
              isOpen ? "opacity-0" : ""
            } group-hover:bg-blue-800`}
          ></span>
          <span
            className={`block w-[3rem] mb-2 h-1 transition-all duration-300 bg-white ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            } group-hover:bg-blue-800`}
          ></span>
        </motion.button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col bg-cover items-center justify-center bg-[url("/MENU2.png")]'>
          <Link onClick={() => toggleOpen(false)} href={"/"}>
            <img
              src="/posted3.png"
              className="w-[18rem] invert pb-10"
              alt="Posted-production logo"
            />
          </Link>

          <motion.ul>
            {categories.map((link) => (
              <motion.li
                onClick={() => toggleOpen(false)} // Close menu on click
                key={link.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="pb-10 text-center"
              >
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-white text-3xl md:text-5xl my-4 hover:text-blue-800 transition"
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
