"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import project1 from "../assets/proj5.png";
import project2 from "../assets/proj6.png";
import project3 from "../assets/proj7.png";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Doodle - customer support chatbot",
    description:
      "A chatbot that provides customer support and answers frequently asked questions.",
    image: project1,
  },
  {
    id: 2,
    year: 2024,
    title: "Dash - AI calling system",
    description:
      "An AI-powered calling system that provides real-time assistance and personalized recommendations.",
    image: project2,
  },
  {
    id: 3,
    year: 2024,
    title: "Atomic - AI driven outreach",
    description:
      "An AI-powered outreach platform that helps businesses connect with potential customers and leads.",
    image: project3,
  },
];

const COLORS_TOP = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c"];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-12">
        <div className="mb-12">
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group "
            >
              <p className="text-gray-400 mb-2 text-lg">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors duration-300 ${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                }`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="my-4 border-b-2 border-purple-200"
                />
              )}

              {selectedProject.id === project.id && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-purple-400"
                >
                  {project.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={selectedProject.id}
        >
          <Image
            src={selectedProject.image.src}
            alt={selectedProject.title}
            width={800}
            height={450}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
