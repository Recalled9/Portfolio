"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as FaIcons from "react-icons/fa";

const skillsData = [
  { name: "Java", icon: "FaJava", color: "#007396" },
  { name: "C++", icon: "SiCplusplus", color: "#00599C" },
  { name: "Python", icon: "SiPython", color: "#3776AB" },
  { name: "Web Dev", icon: "SiHtml5", color: "#E34F26" },
  { name: "OOP", icon: "TbCode", color: "#000000" },
  { name: "AI & ML", icon: "TbBrain", color: "#FFCA28" },
  { name: "Gameplay Prog.", icon: "SiUnity", color: "#000000" },
  { name: "Game Logic", icon: "TbDeviceGamepad2", color: "#FF6C37" },
  { name: "Debugging", icon: "TbBug", color: "#E34F26" },
  { name: "Data Structures", icon: "TbDatabase", color: "#47A248" },
  { name: "GitHub", icon: "SiGithub", color: "#000000" },
];

const Icon = ({ name, color, size }) => {
  const IconComponent = SiIcons[name] || TbIcons[name] || FaIcons[name];
  if (!IconComponent) {
    console.warn(`Icon ${name} not found`);
    return <span className="w-5 h-5"></span>;
  }
  // If provided color is strict black, let it inherit current text color.
  // This makes it white in dark mode and black in light mode automatically.
  const isPureBlack = typeof color === "string" && color.toLowerCase() === "#000000";
  return isPureBlack ? (
    <IconComponent size={size} />
  ) : (
    <IconComponent color={color} size={size} />
  );
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[rgb(var(--bg))] text-[rgb(var(--fg))] relative overflow-hidden"
    >
      {/* Big faded text background */}
      <h1
        className="absolute inset-0 font-mono flex items-start top-16 sm:-top-8 justify-center text-[5rem] sm:text-[7rem] md:text-[12rem] font-bold 
       bg-gradient-to-r from-[rgb(var(--fg))]/60 via-[rgb(var(--fg))]/35 to-[rgb(var(--fg))]/80 
       bg-clip-text text-transparent tracking-tighter select-none pointer-events-none z-0"
        style={{
          opacity: 0.18,
          WebkitTextStroke: "1px rgba(var(--fg),0.45)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        SKILLS
      </h1>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[3rem] sm:text-5xl md:text-[6rem] font-bold">
            Skills
          </h2>
          <p className="text-[rgb(var(--fg))]/60 mt-4 tracking-widest">
            I CONSTANTLY TRY TO IMPROVE
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="flex flex-wrap  justify-center gap-3 px-4 py-14"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map(({ name, icon, color }, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center gap-2 px-4 py-2 bg-[rgb(var(--fg))]/10 rounded-lg border border-[rgb(var(--fg))]/20 hover:border-[rgb(var(--fg))]/40 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <Icon name={icon} color={color} size={20} />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
