"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Amina Abubakar",
      role: "Adventure Enthusiast",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
      text: "Portable Rosssy World Travels organized the most spectacular trip to Bali for me. Every detail was meticulously planned, allowing me to just relax and enjoy my vacation.",
      rating: 5,
    },
    {
      name: "Chinedu Okafor",
      role: "Frequent Flyer",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop",
      text: "Their visa assistance service saved me so much time and stress. They handled everything professionally, and the flight deals were unbeatable.",
      rating: 5,
    },
    {
      name: "Oluwaseun Adeyemi",
      role: "Honeymooner",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=200&auto=format&fit=crop",
      text: "Our honeymoon in the Maldives was an absolute dream, all thanks to this amazing team. Highly recommend them for premium travel experiences.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-orange font-bold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-extrabold mt-2 text-primary">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative"
            >
              <div className="flex text-accent-orange mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 relative z-10">"{review.text}"</p>
              
              <div className="flex items-center mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
