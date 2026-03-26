import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import contactBg from "../assets/contactbg1.webp";
import { Helmet } from "react-helmet";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        "service_br3znnk",
        "template_bp0sk1f",
        form.current,
        "FcBw0s8TKG0r7hG9D"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          setLoading(false);
          setError(true);
          console.log(err.text);
        }
      );
  };

  return (
    <div className="w-full">

      {/* SEO */}
      <Helmet>
        <title>Contact | Nigerian Tennis Development Forum LCC</title>

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

      {/* Hero Background */}
      <section
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      ></section>

      {/* Contact Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="mb-6">
              We welcome inquiries from players, coaches, partners, and tennis enthusiasts.
            </p>

            <div className="space-y-4">
              <p><strong>📍 Address:</strong> Lagos, Nigeria</p>
              <p><strong>📞 Phone:</strong> +1 862-576-4553</p>
              <p><strong>📧 Email:</strong> juliussunday909@gmail.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white shadow-2xl rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Send a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full border p-3 rounded-lg"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-900 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* SUCCESS MESSAGE */}
              {success && (
                <p className="text-green-600 font-medium">
                  ✅ Message sent successfully!
                </p>
              )}

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-500 font-medium">
                  ❌ Failed to send message. Try again.
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-green-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Our Location
          </h2>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}