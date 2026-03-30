"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hi there! I'm Rossy, your virtual travel assistant. Before we explore the world, what's your name?" }
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0); 
  const [userData, setUserData] = useState({ name: "", service: "", contact: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate thinking delay
    setTimeout(() => {
      processBotResponse(input);
    }, 600);
  };

  const processBotResponse = (userInput: string) => {
    let nextMessage = "";
    
    if (step === 0) {
      setUserData(prev => ({ ...prev, name: userInput }));
      nextMessage = `Nice to meet you, ${userInput}! What type of service are you looking for today? (e.g. Flights, Visas, Hotels, Tour Packages)`;
      setStep(1);
    } else if (step === 1) {
      setUserData(prev => ({ ...prev, service: userInput }));
      nextMessage = `Excellent choice regarding ${userInput}. To help our experts guide you better, could you provide your phone number or email address?`;
      setStep(2);
    } else if (step === 2) {
      setUserData(prev => ({ ...prev, contact: userInput }));
      // Notice we use the latest input directly because React setState is async and userData.name is based on step 0
      nextMessage = `Thank you, ${userData.name}! Our team has received your request and will contact you shortly about the ${userData.service}. For immediate assistance, feel free to reach us on WhatsApp or call +2348037116571.`;
      setStep(3);
    } else {
      nextMessage = "Thanks again! Feel free to explore our site, and let us know if you need anything else by reaching out to rossyworldtravels85@gmail.com.";
    }

    setMessages(prev => [...prev, { id: Date.now().toString(), sender: "bot", text: nextMessage }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2"
          >
            {/* Attention grabber tooltip */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-2xl rounded-br-none shadow-lg border border-gray-100"
            >
              Chat with Rossy 👋
            </motion.div>
            
            {/* Floating Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              onClick={() => setIsOpen(true)}
              className="bg-primary w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 border-2 border-accent transition-colors hover:bg-primary-light"
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            <div className="bg-primary p-4 flex items-center justify-between text-white flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Rossy AI</h3>
                  <p className="text-xs text-white/80">Virtual Travel Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4 min-h-0">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 border border-transparent rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-800"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
