"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, Hotel, Map, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PlaneTakeoff className="h-10 w-10 text-white" />,
      title: "Flight Booking",
      description: "Get the best deals on flights worldwide with our airline partners.",
    },
    {
      icon: <Hotel className="h-10 w-10 text-white" />,
      title: "Hotel Reservation",
      description: "Luxurious stays at affordable prices in premier destinations.",
    },
    {
      icon: <Map className="h-10 w-10 text-white" />,
      title: "Guided Tours",
      description: "Immersive local experiences with professional and knowledgeable guides.",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Visa Assistance",
      description: "Hassle-free visa processing and travel documentation support.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent underline decoration-2 underline-offset-8 font-bold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl font-extrabold mt-6 text-white">What We Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer p-8 rounded-2xl bg-primary-light border border-white/10 hover:bg-white transition-all duration-300"
            >
              <div className="w-20 h-20 mb-6 bg-accent rounded-2xl flex items-center justify-center transform group-hover:-translate-y-2 group-hover:rotate-6 transition-transform shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-600 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
