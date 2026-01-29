import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_7uowhfz",
        "template_t3nqac2",
        {
          name: formData.name,
          email: formData.email,
          title: formData.message,
        },
        "VKXvu2O_oUsRA2Liq",
      )
      .then(
        () => {
          setSending(false);
          setShowTimer(true);

          // Start 5-second timer
          setTimeout(() => {
            setShowTimer(false);
            setFormData({ name: "", email: "", message: "" }); // clear form
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setSending(false);
          alert("Oops! Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0b0b] via-[#302b63] to-[#24243e] text-white px-4 sm:px-8 md:px-20 py-20 sm:py-28 md:py-32 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.7))]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[-10%] w-[120%] h-px bg-white/10 rotate-[6deg]" />
        <div className="absolute top-1/2 left-[-10%] w-[120%] h-px bg-white/10 -rotate-[6deg]" />
      </div>

      <div className="relative z-10 max-w-3xl w-full flex justify-center">
        {!showTimer ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-purple-900/50 backdrop-blur-md border border-cyan-400/30 rounded-2xl shadow-2xl p-8 flex flex-col gap-5 w-full"
          >
            <h2 className="text-3xl sm:text-4xl font-['Bebas_Neue'] text-cyan-400 text-center mb-6">
              Contact Me
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border border-cyan-400/30 rounded-lg p-3 bg-purple-900/60 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-cyan-400/30 rounded-lg p-3 bg-purple-900/60 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="border border-cyan-400/30 rounded-lg p-3 bg-purple-900/60 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white h-40 resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        ) : (
          // Timer / circle loader
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-purple-900/50 backdrop-blur-md border border-cyan-400/30 rounded-2xl shadow-2xl p-12 flex flex-col items-center gap-6"
          >
            <h2 className="text-3xl sm:text-4xl font-['Bebas_Neue'] text-cyan-400 mb-2">
              Sending...
            </h2>
            {/* Circle loader */}
            <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-white/75">Please wait 5 seconds</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
