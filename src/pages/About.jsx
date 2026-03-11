import React from "react";
import { motion } from "framer-motion";
import Daniel from "../assets/Daniel-Adeleye.jpg";

export default function About() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Daniel})` }}
        ></div>

        {/* Overlay with Motion */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold font-serif">
              About Nigerian Tennis
            </h1>
            <p className="text-gray-200 mt-3 text-lg sm:text-xl">
              Growing Lawn Tennis Across Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="bg-green-900 text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-200 text-lg sm:text-xl leading-relaxed"
          >
            Developing tennis across Nigeria by nurturing talent, organizing competitions, 
            and creating opportunities for players to compete locally and internationally.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-green-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-green-800 border-2 border-green-700 p-8 rounded-2xl shadow-lg text-center md:text-left transition hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-white leading-relaxed">
              To promote and develop tennis throughout Nigeria by providing 
              accessible programs, professional coaching, and competitive 
              opportunities for players of all ages.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-green-800 border-2 border-green-700 p-8 rounded-2xl shadow-lg text-center md:text-left transition hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-white leading-relaxed">
              To position Nigeria as a leading tennis nation in Africa and 
              produce world-class players who compete and succeed on the 
              international stage.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-12"
          >
            Our Programs
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {[
              {
                title: "Youth Development",
                desc: "Structured programs to identify, train, and mentor young tennis players across Nigeria."
              },
              {
                title: "Coaching Programs",
                desc: "Professional coaching courses for players and trainers to enhance skills and performance."
              },
              {
                title: "National Tournaments",
                desc: "Organizing competitive events at local and national levels to showcase talent and foster sportsmanship."
              },
              {
                title: "Sponsorship & Partnerships",
                desc: "Collaborating with sponsors, academies, and organizations to fund programs and develop tennis infrastructure."
              },
              {
                title: "Player Development",
                desc: "One-on-one training, fitness programs, and mentorship to help players reach national and international levels."
              },
              {
                title: "Community Engagement",
                desc: "Initiatives to grow awareness, encourage participation, and promote tennis as a healthy lifestyle sport."
              }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-green-800 border-2 border-green-700 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{program.title}</h3>
                <p className="text-white leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}