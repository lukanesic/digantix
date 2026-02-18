"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const contentVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]"
            onClick={onClose}
          />

          {/* Side Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 z-50 bg-white w-[35%] min-w-100 shadow-2xl overflow-y-auto"
          >
            <motion.div variants={contentVariants} className="h-full">
              <div className="px-8 py-24">
                {/* Menu Label */}
                <p className="text-sm text-gray-500 mb-12">Menu</p>

                {/* Main Links */}
                <div className="space-y-6 mb-16">
                  <a
                    href="/about-us"
                    className="block text-4xl font-light hover:text-[#C388F8] transition-colors duration-300"
                    style={{ letterSpacing: -0.5 }}
                    onClick={onClose}
                  >
                    About us
                  </a>
                  <a
                    href="/services"
                    className="block text-4xl font-light hover:text-[#C388F8] transition-colors duration-300"
                    style={{ letterSpacing: -0.5 }}
                    onClick={onClose}
                  >
                    Services
                  </a>
                  <a
                    href="/projects"
                    className="block text-4xl font-light hover:text-[#C388F8] transition-colors duration-300"
                    style={{ letterSpacing: -0.5 }}
                    onClick={onClose}
                  >
                    Projects
                  </a>

                  <div className="pt-6 flex gap-3">
                    <a
                      href="mailto:info@digantix.com"
                      className="px-4 py-2 border-2 border-black text-black rounded-full text-lg font-medium hover:bg-[#C388F8] hover:border-[#C388F8] hover:text-white transition-colors duration-300"
                    >
                      info@digantix.com
                    </a>
                    <a
                      href="tel:+381111234567"
                      className="px-4 py-2 border-2 border-black text-black rounded-full text-lg font-medium hover:bg-[#C388F8] hover:border-[#C388F8] hover:text-white transition-colors duration-300"
                    >
                      +381 11 123 4567
                    </a>
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-10">
                  {/* Development */}
                  <div>
                    <p
                      className="text-xs text-gray-500 tracking-wider mb-3"
                      style={{ letterSpacing: -0.25 }}
                    >
                      Development
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Mobile Apps",
                        "iOS Apps",
                        "Android Apps",
                        "Web Development",
                        "React JS",
                        "Next.js",
                        "WordPress",
                      ].map((item) => (
                        <a
                          key={item}
                          href={`/services/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="px-3 py-1.5 border border-gray-300 rounded-full text-xs hover:border-[#C388F8] hover:text-[#C388F8] transition-colors duration-300"
                          onClick={onClose}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Design */}
                  <div>
                    <p
                      className="text-xs text-gray-500 tracking-wider mb-3"
                      style={{ letterSpacing: -0.25 }}
                    >
                      Design
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "UI/UX Design",
                        "Identity & Branding",
                        "Design Concept",
                      ].map((item) => (
                        <a
                          key={item}
                          href={`/services/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="px-3 py-1.5 border border-gray-300 rounded-full text-xs hover:border-[#C388F8] hover:text-[#C388F8] transition-colors duration-300"
                          onClick={onClose}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  {/* <div>
                    <p
                      className="text-xs text-gray-500 tracking-wider mb-3"
                      style={{ letterSpacing: -0.25 }}
                    >
                      Industries
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "E-Learning",
                        "Fintech",
                        "Healthcare",
                        "Web3",
                        "Social Platforms",
                        "SaaS",
                        "Real Estate",
                        "Gaming",
                        "E-Commerce",
                      ].map((item) => (
                        <a
                          key={item}
                          href={`/industries/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="px-3 py-1.5 border border-gray-300 rounded-full text-xs hover:border-[#C388F8] hover:text-[#C388F8] transition-colors duration-300"
                          onClick={onClose}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
