import React from "react";
import { motion } from "framer-motion";
import academy1 from "../assets/academy1.jpg";
import academy2 from "../assets/academy2.jpg";
import academy3 from "../assets/academy3.jpg";
import academybg from "../assets/academybg.avif";

const academies = [
  {
    name: "Lagos Tennis Academy",
    description:
      "Providing top-level coaching and facilities to nurture young tennis talent in Lagos and beyond.",
    image: academy1,
  },
  {
    name: "Abuja Elite Tennis Center",
    description:
      "Focused on professional training and tournament preparation for players at all levels.",
    image: academy2,
  },
  {
    name: "Port Harcourt Tennis Club",
    description:
      "Developing grassroots programs and local competitions to discover new talent.",
    image: academy3,
  },
];

const programs = [
  {
    title: "Youth Development",
    description:
      "Structured training programs for players under 18, including fitness, technique, and competition preparation.",
  },
  {
    title: "Professional Coaching",
    description:
      "Coaching sessions for all levels, from beginner to professional, with certified trainers.",
  },
  {
    title: "National Tournaments",
    description:
      "Organizing competitions across states to give players exposure and experience.",
  },
  {
    title: "Sponsorship & Partnerships",
    description:
      "Collaborating with sponsors and organizations to fund programs and support players.",
  },
];

export default function AcademiesPrograms() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${academybg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-6"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Academies & Programs
            </h1>
            <p className="text-gray-200 mt-3 text-lg sm:text-xl max-w-2xl mx-auto">
              Discover our academies and programs shaping the future of Nigerian tennis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academies Section */}
      <section className="py-16 bg-green-900">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Our Academies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            Nigerian Tennis partners with top academies to train and develop players across the country.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {academies.map((academy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={academy.image}
                alt={academy.name}
                className="w-full h-52 md:h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-green-900 mb-2">{academy.name}</h3>
                <p className="text-gray-700 leading-relaxed">{academy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            We run programs to develop players at every level, from beginners to professionals.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-green-800 border-2 border-green-900 p-6 rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{program.title}</h3>
              <p className="leading-relaxed text-white">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}