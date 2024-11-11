"use client";

import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import profilepic from "../assets/profilepic.png";
import obj from "../assets/obj1.png";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-16 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center justify-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </span>
        <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
          Adham Nasser
        </h1>

        <Image src={profilepic} alt="profile pic" width={250} height={200} />

        <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
          <Image
            src={obj}
            alt="obj"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="obj"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="obj"
            width={30}
            height={30}
            className="rounded-2xl mx-auto"
          />
          <p className="font-medium">80+ Happy Clients</p>
        </div>

        <p className="my-6 max-w-xl text-center">
          Fullstack Developer based in Alexandria, with over 5 years of
          experience
        </p>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
        >
          Download CV
          <FiArrowRight />
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};

export default Hero;