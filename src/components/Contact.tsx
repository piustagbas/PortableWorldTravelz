"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Facebook = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-[#25D366]" />,
      title: "WhatsApp",
      description: "Chat with us instantly",
      action: "Chat Now",
      href: "https://wa.me/2348037116571",
      bgClass: "hover:bg-[#25D366]/10",
    },
    {
      icon: <Mail className="w-8 h-8 text-accent-orange" />,
      title: "Email",
      description: "Send us a detailed inquiry",
      action: "Email Us",
      href: "mailto:rossyworldtravels85@gmail.com",
      bgClass: "hover:bg-accent-orange/10",
    },
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: "Phone",
      description: "Call our support team",
      action: "Call Us",
      href: "tel:+2348037116571",
      bgClass: "hover:bg-accent/10",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-orange font-bold uppercase tracking-wider">Reach Out</span>
          <h2 className="text-4xl font-extrabold mt-2 text-primary">Contact Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ready to plan your next adventure? Get in touch with our team today and let's craft the perfect itinerary for you.
          </p>
          <div className="mt-8 text-gray-700 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto flex flex-col gap-3">
            <p><strong>Office address:</strong> BLK B, shop D67, Army Operational Command Signal Barracks Mile 2, Mammy Market Plaza Suru Bus stop Off Ojo Road</p>
            <p className="text-accent-orange font-medium mt-1">Our Working hours is 9am-5pm (Mon-Fri).</p>
            <p className="text-sm">We only attend to enquiries during working hours. Physical consultations will incur a fee.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.title === "WhatsApp" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-colors ${method.bgClass}`}
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{method.title}</h3>
              <p className="text-gray-500 mb-6">{method.description}</p>
              <span className="text-primary font-semibold underline decoration-2 underline-offset-4 decoration-accent">
                {method.action}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center space-x-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
