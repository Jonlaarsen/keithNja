"use client";
import { motion } from "framer-motion";

const logos = [
    "/postedlogo.png",
    "/Posted.png",
    "/Posted3.png",
    "/postedlogo.png",
    "/Posted.png",
    "/Posted3.png",
    "/postedlogo.png",
    "/Posted.png",
    "/Posted3.png",  
    "/postedlogo.png",
    "/Posted.png",
    "/Posted3.png",
  ];
  
const InfiniteCarousel = () => {
    return (
      <div className="relative overflow-hidden py-12">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: `-${100}%` }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ gap: "10px" }} // Ensures consistent gap
        >
          {/* Combine logos and duplicates dynamically */}
          {[...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="h-12 mx-10 invert"
            />
          ))}
        </motion.div>
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none"></div>
      </div>
    );
  };
  
  export default InfiniteCarousel;