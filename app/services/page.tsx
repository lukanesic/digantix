"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { motion } from "motion/react";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { Scene } from "@/components/ui/neon-raymarcher";

export default function ServicesPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact-section");
      const contactSectionRect = contactSection?.getBoundingClientRect();

      // If contact section is at or near the top, switch to dark mode
      if (contactSectionRect && contactSectionRect.top <= 100) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header dark={isDark} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="mx-auto w-[85%] " style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div>
              <motion.p
                className="text-gray-400 text-sm mb-6"
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 0 0 100%)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0 0 0%)",
                }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                Our services
              </motion.p>

              <motion.h1
                className="font-normal leading-tight mb-12 text-black"
                style={{ fontSize: "80px", letterSpacing: "-.3rem" }}
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 0 0 100%)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0 0 0%)",
                }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
              >
                Transforming ideas into exceptional digital experiences.
              </motion.h1>
            </div>

            {/* Right Side - 3D Element */}
            <div className="flex items-center justify-center">
              <div className="w-full h-175">
                <Scene />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Our Services Section */}
        <div className="mx-auto w-[85%] py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-2 gap-16">
            {/* Left Side - Sticky Content */}
            <div className="sticky top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-8 text-black"
                style={{ fontSize: "55px", letterSpacing: "-.2rem" }}
              >
                Our services.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed mb-6"
                style={{ fontSize: "18px" }}
              >
                We deliver comprehensive digital solutions tailored to your
                unique needs, from concept to execution.
              </p>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontSize: "18px" }}
              >
                Each service is designed to elevate your brand and create
                meaningful connections with your audience.
              </p>
            </div>

            {/* Right Side - Scrolling Timeline */}
            <div className="relative space-y-32">
              {/* Continuous Timeline Line */}
              <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-gray-200"></div>

              {/* Service 1 - Websites and Platforms */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  WEBSITES AND PLATFORMS
                </p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Fast and responsive websites
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  In our team, developers work alongside designers. This is
                  crucial in creating a fast and responsive website that would
                  excite the audience.
                </p>
              </div>

              {/* Service 2 - Mobile Applications */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  MOBILE APPLICATIONS
                </p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Perfectly suited mobile apps
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Digantix doesn&apos;t do cookie-cutter solutions. Every mobile
                  app involves stages of target audience research and prototype
                  testing.
                </p>
              </div>

              {/* Service 3 - Strategy and Branding */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  STRATEGY AND BRANDING
                </p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Get your brand noticed
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  We identify your brand by developing a logo, corporate
                  identity, user manuals, any mockups, and souvenir products.
                </p>
              </div>

              {/* Service 4 - Motion Design */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">MOTION DESIGN</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Engaging animations
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  We bring your brand to life with captivating motion graphics
                  and animations that tell your story in a dynamic way.
                </p>
              </div>

              {/* Service 5 - Content Consulting */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">CONTENT CONSULTING</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Strategic content planning
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  We help you develop your audience and drive meaningful
                  interactions with your brand.
                </p>
              </div>

              {/* Service 6 - Video Editing */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">VIDEO EDITING</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Professional video production
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  From concept to final edit, we create high-quality video
                  content that captures attention and delivers your message
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Development Process Section */}
        <div className="mx-auto w-[85%] py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-2 gap-16">
            {/* Left Side - Sticky Content */}
            <div className="sticky top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-8 text-black"
                style={{ fontSize: "55px", letterSpacing: "-.2rem" }}
              >
                Development process.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed mb-6"
                style={{ fontSize: "18px" }}
              >
                Our approach combines creativity and technical expertise to help
                clients evolve, stand out, and redefine themselves within the
                market and society.
              </p>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontSize: "18px" }}
              >
                Our greatest strength is the confidence our clients place in us.
                Our real accomplishment is seeing them thrive.
              </p>
            </div>

            {/* Right Side - Scrolling Timeline */}
            <div className="relative space-y-32">
              {/* Continuous Timeline Line */}
              <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-gray-200"></div>

              {/* Step 1 */}
              <div className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">Step 1</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Research and Planning
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Defining requirements, conducting market research, identifying
                  target users, and creating a foundational strategy for the
                  project.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">Step 2</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Design and Prototyping
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Creating user interface (UI) and user experience (UX) designs
                  through sketches, wireframes, and interactive prototypes to
                  visualize the application.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">Step 3</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Development
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Building the application using programming languages and
                  frameworks, implementing both frontend and backend
                  functionality.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">Step 4</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Testing and QA
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Conducting thorough testing to identify and fix bugs, ensure
                  functionality, and optimize performance across all platforms.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                </div>

                <p className="text-sm text-gray-400 mb-4">Step 5</p>
                <h3 className="text-3xl font-normal mb-4 text-black">
                  Launch and Support
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Deploying the application to production, monitoring
                  performance, and providing ongoing maintenance and updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mx-auto w-[85%] py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-2 gap-16">
            {/* Left Side - Sticky Content */}
            <div className="sticky top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-8 text-black"
                style={{ fontSize: "55px", letterSpacing: "-.2rem" }}
              >
                Get in touch.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed mb-6"
                style={{ fontSize: "18px" }}
              >
                Ready to start your project? Let&apos;s discuss your ideas and
                create something amazing together.
              </p>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontSize: "18px" }}
              >
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <form className="space-y-12">
                {/* Interests Section */}
                <div>
                  <h3 className="text-2xl font-normal mb-6 text-black">
                    I&apos;m interested in...
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Site from scratch
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      UX/UI design
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Product design
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Webflow site
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Motion design
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Branding
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Mobile development
                    </button>
                  </div>
                </div>

                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Budget Section */}
                <div>
                  <h3 className="text-xl font-normal mb-6 text-black">
                    Project budget (USD)
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      10-20k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      30-40k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      40-50k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      50-100k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      &gt;100k
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="min-h-screen bg-black text-white">
        <LetsWorkTogether />
      </div>
    </>
  );
}
