import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tournamentBg from "../assets/timelinebg.jpg";

const statsData = [
  { number: 12, label: "Tournaments This Year" },
  { number: 250, label: "Players Registered" },
  { number: 8, label: "States Represented" },
];

const tournaments = [
  {
    name: "Nigeria National Tennis Championship",
    location: "Lagos, Nigeria",
    date: "August 15 - August 22, 2026",
    status: "Upcoming",
    description: "The premier national tennis event with top players competing for the championship title.",
    link: "https://nigeriatennislive.com/national-tournament",
  },
  {
    name: "Abuja Open Tennis Tournament",
    location: "Abuja, Nigeria",
    date: "September 10 - September 16, 2026",
    status: "Upcoming",
    description: "A high-profile tournament attracting regional champions and national contenders.",
    link: "https://www.itftennis.com/en/tournament/j30-abuja/ngr/2026/j-j30-ngr-2026-001/draws-and-results/",
  },
  {
  name: "Rainoil Tennis Tournament",
  location: "Lagos, Nigeria",
  date: "October 5 - October 10, 2026",
  status: "Upcoming",
  description:
    "A major national tennis open sponsored by Rainoil, showcasing top Nigerian players and strong competition.",
  link: "https://nigeriatennislive.com/rainoil-tennis-open",
},
  {
    name: "West Africa Junior Tennis Championship",
    location: "Ibadan, Nigeria",
    date: "June 5 - June 10, 2025",
    status: "Completed",
    description: "Junior players from across West Africa competed to showcase young talent.",
    link: "/tournaments/west-africa-junior",
  },
  {
    name: "Nigeria Tennis League Finals",
    location: "Port Harcourt, Nigeria",
    date: "November 2 - November 8, 2025",
    status: "Completed",
    description: "Finals of the national league, highlighting Nigeria's top tennis players.",
    link: "/tournaments/league-finals",
  },
  {
    name: "Kano State Open",
    location: "Kano, Nigeria",
    date: "July 10 - July 16, 2025",
    status: "Completed",
    description: "State-level tournament featuring local champions.",
    link: "/tournaments/kano-open",
  },
];

export default function Tournament() {
  const [stats, setStats] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev =>
        prev.map((val, idx) => {
          if (val < statsData[idx].number) return val + 1;
          return val;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">

      {/* Hero Section */}
      <section
        className="relative w-full h-[55vh] md:h-[65vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${tournamentBg})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Tournaments
            </h1>
            <p className="text-gray-200 mt-3 text-lg max-w-xl mx-auto">
              Discover upcoming and past tennis tournaments organized across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-2">{val}</h2>
              <p className="text-lg">{statsData[idx].label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 bg-green-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Upcoming Tournaments
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments
              .filter(t => t.status === "Upcoming")
              .map((tournament, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-700 hover:shadow-2xl transition"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-green-900">{tournament.name}</h3>
                  <p className="text-gray-700 mt-2">📍 {tournament.location}</p>
                  <p className="text-gray-700 mt-1">📅 {tournament.date}</p>
                  <p className="text-gray-600 mt-2">{tournament.description}</p>
                  <a
                    href={tournament.link}
                    className="mt-4 inline-block w-full text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Past Tournaments
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments
              .filter(t => t.status === "Completed")
              .map((tournament, index) => (
                <motion.div
                  key={index}
                  className="bg-green-800 rounded-2xl shadow-lg p-6 border-l-4 border-green-700 hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold">{tournament.name}</h3>
                  <p className="mt-2">📍 {tournament.location}</p>
                  <p className="mt-1">📅 {tournament.date}</p>
                  <p className="mt-2">{tournament.description}</p>
                  <a
                    href={tournament.link}
                    className="mt-4 inline-block text-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}