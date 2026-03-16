import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Daniel from "../assets/Daniel-Adeleye.jpg";
import daniel2 from "../assets/daniel2.jpg";

export default function Hero() {
  const impactStats = [
    { number: 200, label: "Young Players Supported" },
    { number: 25, label: "Tournaments Organized" },
    { number: 15, label: "Tennis Academies" },
    { number: 10, label: "States Reached" },
  ];

  const [counts, setCounts] = useState(impactStats.map(() => 0));

  useEffect(() => {
    const durations = impactStats.map((stat) => 2000 / stat.number);
    const intervals = impactStats.map((stat, idx) =>
      setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.number) {
            newCounts[idx] += 1;
          } else {
            clearInterval(intervals[idx]);
          }
          return newCounts;
        });
      }, durations[idx])
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full h-[60vh]">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${Daniel})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-[60vh] flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4 font-serif">
              Nigerian Diaspora Tennis Development Forum LCC
            </h1>

            <p className="text-gray-300 mt-2">
              Nigerian Tennis Championship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship / About Section */}
<section className="w-full py-16 bg-green-900 text-white">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

    {/* Text */}
    <motion.div
      className="w-full md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
        Investing in <span className="text-yellow-400">Nigerian Tennis</span>
        <br />
        Creates Opportunities, Builds Champions
      </h2>

      <p className="text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
        Nigeria is full of talented tennis players ready to shine on the global
        stage. Your sponsorship can support tournaments, training programs,
        and player development, helping grow the sport nationwide and
        creating future stars.
      </p>

      <p className="text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
        Tennis is a racket sport played on a court using a racket and rubber
        ball. It can be played by two players (singles) or four players
        (doubles) on grass, clay, hard surfaces, or synthetic courts.
      </p>

      <div className="flex justify-center md:justify-start">
  <Link to="/contact">
    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
      Become a Sponsor
    </button>
  </Link>
</div>
    </motion.div>

    {/* Image */}
    <motion.div
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src={daniel2}
        alt="Training Nigerian Tennis Player"
        className="w-full h-[320px] md:h-[420px] object-cover rounded-xl shadow-lg"
      />
    </motion.div>
  </div>

  {/* Impact Stats */}
  <motion.div
    className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {impactStats.map((stat, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h3 className="text-3xl font-bold text-yellow-400">
          {counts[idx]}
          {idx === 0 ? "+" : ""}
        </h3>
        <p className="text-gray-300 mt-1">{stat.label}</p>
      </motion.div>
    ))}
  </motion.div>
</section>
</div>
  );
}