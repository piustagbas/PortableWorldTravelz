"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Destinations() {
  const destinations = [
    {
      title: "Santorini, Greece",
      description: "Iconic blue domes and breathtaking sunsets over the Aegean Sea.",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1000&auto=format&fit=crop",
      price: "From $1,200",
    },
    {
      title: "Bali, Indonesia",
      description: "Lush rice terraces, ancient temples, and vibrant culture.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
      price: "From $850",
    },
    {
      title: "Paris, France",
      description: "The city of love, light, and world-class culinary experiences.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000&auto=format&fit=crop",
      price: "From $1,500",
    },
    {
      title: "Maldives",
      description: "Crystal clear waters and luxurious overwater bungalows.",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
      price: "From $2,100",
    },
    {
      title: "Kyoto, Japan",
      description: "Historic shrines, bamboo forests, and traditional tea houses.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
      price: "From $1,800",
    },
    {
      title: "Dubai, UAE",
      description: "Futuristic architecture, luxury shopping, and desert safaris.",
      image: "https://images.unsplash.com/photo-1512453979436-5a5336ce39ce?q=80&w=1000&auto=format&fit=crop",
      price: "From $1,100",
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-gray-50 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-orange font-bold uppercase tracking-wider">Top Locations</span>
          <h2 className="text-4xl font-extrabold mt-2 text-primary">Popular Destinations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-primary text-sm shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {dest.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1 text-accent-orange" />
                  <span>{dest.title}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{dest.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dest.description}</p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <button className="text-accent font-semibold hover:text-primary transition-colors">
                    View Details
                  </button>
                  <button className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
