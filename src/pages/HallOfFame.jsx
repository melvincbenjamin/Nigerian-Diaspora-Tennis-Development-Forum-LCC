import React from "react";
import { motion } from "framer-motion";
import timelinebg from "../assets/timelinebg.jpg";
import Player1 from "../assets/Player1.webp";
import player2 from "../assets/player2.JPG";
import player3 from "../assets/player3.PNG";
import player4 from "../assets/player4.jpg";

const hallOfFamers = [
  {
    name: "Nduka Odizor",
    achievement:
      "One of Nigeria’s greatest tennis icons, Nduka Odizor reached a career-high ATP ranking of No. 52 and competed in major Grand Slam tournaments including Wimbledon and the US Open, putting Nigerian tennis on the global stage.",
    image: Player1,
    objectPosition: "top",
  },
  {
    name: "Joseph Imeh",
    achievement:
      "Former Nigerian No.1 and Davis Cup representative who played a crucial role in promoting professional tennis in Nigeria and mentoring upcoming players after his competitive career.",
    image: player2,
    objectPosition: "center 30%",
  },
  {
    name: "Emmanuel Sylvester",
    achievement:
      "A standout Nigerian tennis professional known for representing Nigeria in international competitions and contributing to the development of the sport across Africa.",
    image: player3,
    objectPosition: "top",
  },
  {
    name: "Marylove Edwards",
    achievement:
      "One of Nigeria’s most promising tennis talents, Marylove Edwards has represented Nigeria at international junior competitions and continues to inspire the next generation of players.",
    image: player4,
    objectPosition: "top",
  },
];

export default function HallOfFame() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${timelinebg})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Nigerian Tennis Hall of Fame
            </h1>
            <p className="text-gray-200 mt-3 text-lg sm:text-xl max-w-2xl mx-auto">
              Honoring the Legends Who Shaped Tennis in Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Hall of Fame
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {hallOfFamers.map((player, idx) => (
              <motion.div
                key={idx}
                className="bg-green-800 rounded-2xl shadow-lg overflow-hidden border-2 border-green-700 hover:shadow-2xl transition transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className={`w-full h-64 md:h-72 object-cover`}
                  style={{ objectPosition: player.objectPosition }}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
                    {player.name}
                  </h3>
                  <p className="text-white mt-2 text-sm sm:text-base">
                    {player.achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}