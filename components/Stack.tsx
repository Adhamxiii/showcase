import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItems = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    color: "#61dafb",
  },
  {
    id: 2,
    icon: IoLogoNodejs,
    name: "Node.js",
    color: "#339933",
  },
  {
    id: 3,
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178c6",
  },
  {
    id: 4,
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47a248",
  },
  {
    id: 5,
    icon: TbBrandNextjs,
    name: "Next.js",
    color: "#000",
  },
];

const Stack = () => {
  return (
    <section className="py-16 glass" id="stack">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "size-32",
                  style: { color: item.color },
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
