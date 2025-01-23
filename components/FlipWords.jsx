"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {cn} from '@/app/lib/utils'

export function FlipWordsDemo() {
  const words = ["Preproduction", "Filming", "Postproduction"];

  return (
    (<div className="h-[15rem] flex justify-center items-center px-4">
      <div
        className="text-2xl md:text-5xl uppercase text-center md:text-left mx-auto font-normal">
        <p>Posted Productions brings your vision to life, </p>
         <p>With expertise in  <span> <FlipWords words={words}/></span></p>
        
        <br className="block md:hidden"/>
        
        
      </div>
    </div>)
  );
}




export const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    (<AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left uppercase text-4xl md:text-7xl text-blue-500 font-bold px-2",
          className
        )}
        key={currentWord}>
        {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block">
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>)
  );
};
