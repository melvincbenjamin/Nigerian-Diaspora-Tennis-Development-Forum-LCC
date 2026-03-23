import React from "react";
import { motion } from "framer-motion";
import historyHero from "../assets/timelinebg.jpg"; // Hero image
import timeline3 from "../assets/timeline3.webp"; // 1960
import timeline1 from "../assets/timeline1.jpg";  // 1980
import timeline2 from "../assets/timeline2.jpg";  // 2000
import timeline5 from "../assets/timeline5.jpg";  // 2020
import { Helmet } from "react-helmet";

const historyEvents = [
  {
    year: "1960",
    title: "Establishment of Nigerian Tennis Federation",
    description:
      "Founded to govern, promote, and develop tennis throughout Nigeria, laying the foundation for future champions.",
    image: timeline3,
  },
  {
    year: "1980",
    title: "First National Tournament",
    description:
      "Bringing together top players from all states, this event set the stage for competitive tennis nationwide.",
    image: timeline1,
  },
  {
    year: "2000",
    title: "International Recognition",
    description:
      "Nigerian players began competing internationally, establishing the country on the global tennis map.",
    image: timeline2,
  },
  {
    year: "2020",
    title: "Youth Development Programs",
    description:
      "Structured programs introduced to nurture young talent and discover the next generation of champions.",
    image: timeline5,
  },
];

export default function History() {
  return (
    <div className="w-full">

      {/* SEO */}
      <Helmet>
        <title>History | Nigerian Tennis Development Forum LCC</title>

        <meta
          name="description"
          content="Learn about the Nigerian Tennis Development Forum LCC. We are dedicated to growing lawn tennis in Nigeria by nurturing talent, organizing tournaments, and creating sponsorship opportunities for players."
        />

        <meta
          name="keywords"
          content="Nigeria tennis, tennis Nigeria, Nigerian tennis players, tennis development Nigeria, tennis sponsorship Nigeria, lawn tennis Nigeria, tennis tournaments Nigeria"
        />

        <meta name="author" content="Nigerian Diaspora Tennis Development Forum LCC" />

        {/* Open Graph */}
        <meta property="og:title" content="About Nigerian Tennis Development Forum" />
        <meta
          property="og:description"
          content="Learn how we are growing tennis in Nigeria through training, tournaments, and sponsorship opportunities."
        />
        <meta property="og:image" content="/Logo.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nigerian Tennis Development Forum" />
        <meta
          name="twitter:description"
          content="Growing tennis in Nigeria through structured development and sponsorship opportunities."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${historyHero})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Our History
            </h1>
            <p className="text-gray-200 mt-3 text-lg sm:text-xl max-w-2xl mx-auto">
              A journey of growth, achievements, and developing tennis in Nigeria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            Milestones in Nigerian Tennis
          </h2>

          <div className="space-y-20">
            {historyEvents.map((event, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                {/* Writeup */}
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-green-800 p-6 rounded-2xl shadow-lg border-2 border-green-700 hover:shadow-2xl transition"
                  >
                    <h3 className="text-xl font-bold text-yellow-400">{event.year}</h3>
                    <h4 className="text-lg font-semibold text-white mt-2">{event.title}</h4>
                    <p className="text-gray-200 mt-2 leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}