import React from "react";
import { motion } from "framer-motion";
import BoardOfDirectors from "../assets/BoardOfDirectors.jpg";
import member1 from "../assets/williamOgene(bill).jpeg";
import member2 from "../assets/Dukes2.jpeg";
import member3 from "../assets/RunsellJCC.jpeg";
import member4 from "../assets/julius3.jpg";
import member5 from "../assets/Friday.jpeg";
import member6 from "../assets/philip.jpeg"

import { Helmet } from "react-helmet";


const boardMembers = [
  {
    name: "Mr Nduka Dukes Odizor",
    role: "President",
    image: member2,
    description:
      "Nduka Odizor is a former Nigerian professional tennis player who reached career-high rankings of world No. 52 in singles and No. 20 in doubles in 1984. He won the 1983 Taipei Grand Prix singles title, captured seven ATP doubles titles, represented Nigeria in the Davis Cup from 1986–1993, and competed at the 1988 Seoul Olympics.",
  },
  {
    name: "Mr William (Bill) Ogene",
    role: "Head Tennis Professional",
    image: member1,
    description:
      "Experienced tennis professional responsible for overseeing player development programs and coaching initiatives aimed at elevating the standard of tennis training.",
  },
  {
    name: "Mr Michael-Ann Russell JCC (North Miami Beach, FL)",
    role: "Technical Director",
    image: member3,
    description:
      "Former African junior tennis champion and multi‑time District Tennis Professional of the Year. 2018 inductee, Southern University Baton Rouge Sports Hall of Fame. Coached Gabriella Paz and Nathan Rosenfeld to the finals of the U.S. Open Junior Open." 
     },
      {
    name: "Mr Julius Sunday Adeleke",
    role: "Lead Tennis Coach",
    image: member4,
    description:
        "Julius S. Adeleke, founder of Adeleke Tennis Academy, is a two-time All Secondary Schools Champion (2008 & 2009) and an Eko 2012 doubles bronze medalist."
  },
  {
    name: "Mr Friday Otabor",
    role: "Elite Tennis Coach & Academy Director",
    image: member5,
    description:
          "Friday Otabor is a former Nigerian National Junior Champion and the owner and director of Spring Woodlands Tennis Academy in Spring, Texas, where he focuses on developing high-performance players." 
 },
 {
    name: "Mr Philip Nwajaei",
    role: "Elite Tennis Coach & High-Performance Director",
    image: member6,
    description:
          "He is an experienced high-performance tennis coach and academy director dedicated to developing competitive players through modern training techniques, strategic match preparation, and long-term athlete development programs." 
 },
];

export default function Board() {
  return (
    <div className="w-full">

      {/* SEO */}
      <Helmet>
        <title>Board | Nigerian Tennis Development Forum LCC</title>

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
        className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BoardOfDirectors})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Board of Directors
            </h1>
            <p className="text-gray-200 mt-3 text-lg max-w-2xl mx-auto">
              Meet the leaders guiding the development and growth of tennis in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-green-900">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-green-800 rounded-2xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400">
                    {member.name}
                  </h3>

                  <p className="text-white font-semibold mt-1">
                    {member.role}
                  </p>

                  <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                    {member.description}
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