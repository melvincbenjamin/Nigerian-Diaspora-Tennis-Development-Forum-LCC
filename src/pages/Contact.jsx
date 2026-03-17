import React from "react";
import { motion } from "framer-motion";
import contactBg from "../assets/contactbg1.webp";

export default function Contact() {
  return (
    <div className="w-full">

      {/* Contact Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-200 mb-6 leading-relaxed">
              We welcome inquiries from players, coaches, partners, and tennis
              enthusiasts interested in supporting and developing tennis in Nigeria.
            </p>

            <div className="space-y-4 text-gray-200">
              <p><strong>📍 Address:</strong> Lagos, Nigeria</p>
              <p><strong>📞 Phone:</strong> +234 XXX XXX XXXX</p>
              <p><strong>📧 Email:</strong> info@nigeriantennis.org</p>
            </div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold mb-3">
                Follow Us
              </h3>

              <div className="flex gap-6 text-white">
                <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
                <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
                <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-green-900 mb-6"
            >
              Send a Message
            </motion.h2>

            <form className="space-y-4">

              <motion.input
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />

              <motion.input
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />

              <motion.textarea
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              ></motion.textarea>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                type="submit"
                className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </section>
{/* Google Map */}
<section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
      Our Location
    </h2>

    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>
    </div>
  );
}