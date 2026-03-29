"use client";

import { motion } from "framer-motion";
import { Compass, Shield, HeartHandshake } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Compass className="w-8 h-8 text-accent" />,
      title: "Expert Guidance",
      description: "Our travel experts curate perfect itineraries based on years of experience.",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Safe & Secure",
      description: "Travel with peace of mind knowing your safety is our top priority.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-accent" />,
      title: "24/7 Support",
      description: "We're always here for you, from the moment you book until you return home.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-orange font-bold uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl font-extrabold mt-2 mb-6 text-primary">Your Journey, Our Passion</h2>
          <p className="text-lg text-gray-600">
            At Portable Rosssy World Travels, we believe that traveling is more than just visiting new places—it's about
            creating unforgettable memories. Whether you're seeking a serene beach getaway or a thrilling
            city adventure, our dedicated team will turn your dream vacation into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
