"use client";

import { useState, useEffect, use } from "react";
import Header from "@/components/layout/Header";
import { motion } from "motion/react";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import Image from "next/image";
import Link from "next/link";

// Project data structure - Centralized for easy maintenance
const projectsData: { [key: string]: any } = {
  alpha: {
    title: "Project Alpha",
    subtitle: "Digital Innovation",
    client: "Tech Innovations Inc.",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "Brand Strategy"],
    heroImage: "/projects/1c32e3e31282227a286ee62c987eb613.jpg",
    description:
      "A revolutionary digital platform that transforms how enterprises manage their innovation pipeline and collaborate with startups.",
    challenge:
      "The client needed a comprehensive platform to streamline their innovation process, connecting internal teams with external startups while maintaining security and intellectual property protection.",
    solution:
      "We developed an enterprise-grade platform with advanced matching algorithms, secure collaboration spaces, and real-time analytics. The system integrates seamlessly with existing enterprise tools while providing an intuitive interface for all users.",
    images: [
      "/projects/3fc0293123fc87d41e49dffa19244e48.jpg",
      "/projects/43e0f22469512c040b79710a4f3bcdd9.jpg",
      "/projects/4aeb07b15c492b11c4b096dd60786feb.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "Supabase",
      "Vercel",
      "GSAP",
    ],
    results: [
      { metric: "300%", label: "Increase in collaboration" },
      { metric: "50%", label: "Faster innovation cycles" },
      { metric: "95%", label: "User satisfaction rate" },
    ],
    nextProject: {
      slug: "beta",
      title: "Project Beta",
      category: "Brand Experience",
    },
  },
  beta: {
    title: "Project Beta",
    subtitle: "Brand Experience",
    client: "Creative Studios",
    year: "2025",
    services: ["Branding", "Motion Design", "Digital Strategy"],
    heroImage: "/projects/3fc0293123fc87d41e49dffa19244e48.jpg",
    description:
      "A complete brand transformation and digital experience redesign for a leading creative studio looking to elevate their market position.",
    challenge:
      "The studio's brand identity had become outdated and no longer reflected their innovative approach to creative work. They needed a fresh, modern brand that would resonate with Fortune 500 clients.",
    solution:
      "We crafted a bold new visual identity, including logo design, color system, typography, and motion language. The rebrand was rolled out across all touchpoints, from website to pitch presentations.",
    images: [
      "/projects/43e0f22469512c040b79710a4f3bcdd9.jpg",
      "/projects/4aeb07b15c492b11c4b096dd60786feb.jpg",
      "/projects/1c32e3e31282227a286ee62c987eb613.jpg",
    ],
    techStack: [
      "Figma",
      "After Effects",
      "React",
      "Framer Motion",
      "Three.js",
      "GSAP",
      "Adobe Creative Suite",
    ],
    results: [
      { metric: "250%", label: "Brand recognition increase" },
      { metric: "40%", label: "New client acquisition" },
      { metric: "100%", label: "Client satisfaction" },
    ],
    nextProject: {
      slug: "gamma",
      title: "Project Gamma",
      category: "E-commerce Platform",
    },
  },
  gamma: {
    title: "Project Gamma",
    subtitle: "E-commerce Platform",
    client: "Retail Innovations",
    year: "2025",
    services: ["E-commerce", "Web Development", "UX Research"],
    heroImage: "/projects/43e0f22469512c040b79710a4f3bcdd9.jpg",
    description:
      "A next-generation e-commerce platform built to scale, featuring personalized shopping experiences and seamless checkout flows.",
    challenge:
      "High cart abandonment rates and complex checkout process were hindering conversion. The client needed a modern, mobile-first solution that could handle high traffic volumes.",
    solution:
      "We built a blazingly fast e-commerce platform with intelligent product recommendations, one-click checkout, and progressive web app capabilities for offline shopping.",
    images: [
      "/projects/4aeb07b15c492b11c4b096dd60786feb.jpg",
      "/projects/4ceb74fafa77d9e9a4d97eec05ca901d.jpg",
      "/projects/53fbc914f36f1e8ec162851adb32c133.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "Shopify",
      "Supabase",
      "Stripe",
      "Framer Motion",
      "Vercel",
    ],
    results: [
      { metric: "180%", label: "Conversion rate increase" },
      { metric: "65%", label: "Faster checkout" },
      { metric: "45%", label: "Mobile sales growth" },
    ],
    nextProject: {
      slug: "delta",
      title: "Project Delta",
      category: "Mobile Application",
    },
  },
  delta: {
    title: "Project Delta",
    subtitle: "Mobile Application",
    client: "FinTech Solutions",
    year: "2025",
    services: ["Mobile Development", "UI/UX Design", "Product Strategy"],
    heroImage: "/projects/4aeb07b15c492b11c4b096dd60786feb.jpg",
    description:
      "A secure, user-friendly mobile banking app that makes financial management intuitive and accessible for everyone.",
    challenge:
      "Traditional banking apps are complex and intimidating. The client wanted to create a mobile-first experience that would appeal to younger demographics while maintaining security.",
    solution:
      "We designed and developed a beautiful, intuitive mobile app with biometric authentication, real-time notifications, and AI-powered financial insights.",
    images: [
      "/projects/4ceb74fafa77d9e9a4d97eec05ca901d.jpg",
      "/projects/53fbc914f36f1e8ec162851adb32c133.jpg",
      "/projects/69f5adbac6fbabda41bd1bb007edd13e.jpg",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "iOS",
      "Android",
      "Supabase",
      "Firebase",
      "Expo",
    ],
    results: [
      { metric: "500K+", label: "Active users" },
      { metric: "4.8★", label: "App store rating" },
      { metric: "70%", label: "Daily active users" },
    ],
    nextProject: {
      slug: "epsilon",
      title: "Project Epsilon",
      category: "Web Development",
    },
  },
  epsilon: {
    title: "Project Epsilon",
    subtitle: "Web Development",
    client: "Healthcare Connect",
    year: "2025",
    services: ["Web Development", "HIPAA Compliance", "Patient Portal"],
    heroImage: "/projects/4ceb74fafa77d9e9a4d97eec05ca901d.jpg",
    description:
      "A HIPAA-compliant patient portal that streamlines healthcare communication and improves patient outcomes.",
    challenge:
      "Healthcare providers struggled with fragmented communication channels and outdated patient portals. They needed a modern, secure solution.",
    solution:
      "We built a comprehensive patient portal with secure messaging, appointment scheduling, prescription management, and telehealth integration.",
    images: [
      "/projects/53fbc914f36f1e8ec162851adb32c133.jpg",
      "/projects/69f5adbac6fbabda41bd1bb007edd13e.jpg",
      "/projects/89a6c93bac770b136d138d57f3c346cf.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Twilio",
      "HIPAA Compliance",
      "Vercel",
    ],
    results: [
      { metric: "90%", label: "Patient satisfaction" },
      { metric: "60%", label: "Reduced no-shows" },
      { metric: "40%", label: "Support ticket reduction" },
    ],
    nextProject: {
      slug: "zeta",
      title: "Project Zeta",
      category: "UI/UX Design",
    },
  },
  zeta: {
    title: "Project Zeta",
    subtitle: "UI/UX Design",
    client: "Global Tech Corp",
    year: "2025",
    services: ["UI/UX Design", "Product Strategy", "Design System"],
    heroImage: "/projects/53fbc914f36f1e8ec162851adb32c133.jpg",
    description:
      "A comprehensive design system and UI overhaul for a global SaaS platform serving millions of users.",
    challenge:
      "The product suffered from inconsistent design patterns, poor user flows, and a dated interface that didn't scale across platforms.",
    solution:
      "We created a comprehensive design system from the ground up, redesigned key user flows, and implemented a modern, accessible interface that works seamlessly across web and mobile.",
    images: [
      "/projects/69f5adbac6fbabda41bd1bb007edd13e.jpg",
      "/projects/89a6c93bac770b136d138d57f3c346cf.jpg",
      "/projects/8dfcdd6773ee52368e4a2defc3aae039.jpg",
    ],
    techStack: [
      "Figma",
      "Storybook",
      "React",
      "Framer Motion",
      "Design Tokens",
      "Tailwind CSS",
      "TypeScript",
    ],
    results: [
      { metric: "85%", label: "Task completion increase" },
      { metric: "50%", label: "Support inquiries down" },
      { metric: "98%", label: "Accessibility score" },
    ],
    nextProject: {
      slug: "eta",
      title: "Project Eta",
      category: "Creative Solutions",
    },
  },
  eta: {
    title: "Project Eta",
    subtitle: "Creative Solutions",
    client: "Artisan Collective",
    year: "2025",
    services: ["Branding", "Web Design", "Content Strategy"],
    heroImage: "/projects/69f5adbac6fbabda41bd1bb007edd13e.jpg",
    description:
      "A vibrant digital presence for an artisan marketplace connecting creators with conscious consumers.",
    challenge:
      "The marketplace needed to stand out in a crowded space while conveying authenticity, craftsmanship, and sustainability values.",
    solution:
      "We developed a warm, authentic brand identity and an immersive web experience that celebrates artisan stories through rich media and interactive elements.",
    images: [
      "/projects/89a6c93bac770b136d138d57f3c346cf.jpg",
      "/projects/8dfcdd6773ee52368e4a2defc3aae039.jpg",
      "/projects/b8f83a1454ffe739e837f7da2e88fbe5.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "WordPress",
      "GSAP",
      "Three.js",
      "Framer Motion",
      "Cloudinary",
    ],
    results: [
      { metric: "425%", label: "Organic traffic growth" },
      { metric: "3.2K", label: "New artisans onboarded" },
      { metric: "92%", label: "User engagement rate" },
    ],
    nextProject: {
      slug: "theta",
      title: "Project Theta",
      category: "Digital Strategy",
    },
  },
  theta: {
    title: "Project Theta",
    subtitle: "Digital Strategy",
    client: "Enterprise Solutions Ltd",
    year: "2025",
    services: ["Digital Strategy", "Web Development", "Marketing"],
    heroImage: "/projects/89a6c93bac770b136d138d57f3c346cf.jpg",
    description:
      "A complete digital transformation strategy and execution for a B2B enterprise looking to modernize their online presence.",
    challenge:
      "The company's digital presence was fragmented across multiple outdated platforms, resulting in poor lead generation and brand inconsistency.",
    solution:
      "We developed a unified digital strategy, built a modern website with integrated CRM, and implemented marketing automation to nurture leads effectively.",
    images: [
      "/projects/8dfcdd6773ee52368e4a2defc3aae039.jpg",
      "/projects/b8f83a1454ffe739e837f7da2e88fbe5.jpg",
      "/projects/e0bd41a9918d532fbb11c226cc0cc499.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "WordPress",
      "Supabase",
      "HubSpot",
      "Google Analytics",
      "Vercel",
    ],
    results: [
      { metric: "320%", label: "Lead generation increase" },
      { metric: "55%", label: "Conversion rate growth" },
      { metric: "80%", label: "Marketing efficiency" },
    ],
    nextProject: {
      slug: "iota",
      title: "Project Iota",
      category: "Product Development",
    },
  },
  iota: {
    title: "Project Iota",
    subtitle: "Product Development",
    client: "StartUp Ventures",
    year: "2025",
    services: ["Product Strategy", "Mobile App", "Cloud Infrastructure"],
    heroImage: "/projects/8dfcdd6773ee52368e4a2defc3aae039.jpg",
    description:
      "Taking a startup from concept to launch with a full-featured mobile product and scalable backend infrastructure.",
    challenge:
      "The startup had an innovative idea but lacked technical expertise and needed to move quickly to capitalize on market opportunity.",
    solution:
      "We provided end-to-end product development, from market validation and MVP scoping to full product launch with analytics and growth infrastructure.",
    images: [
      "/projects/b8f83a1454ffe739e837f7da2e88fbe5.jpg",
      "/projects/e0bd41a9918d532fbb11c226cc0cc499.jpg",
      "/projects/1c32e3e31282227a286ee62c987eb613.jpg",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "iOS",
      "Android",
      "Supabase",
      "Expo",
      "Stripe",
    ],
    results: [
      { metric: "100K", label: "Downloads in 6 months" },
      { metric: "$2M", label: "Seed funding raised" },
      { metric: "4.7★", label: "Average user rating" },
    ],
    nextProject: {
      slug: "kappa",
      title: "Project Kappa",
      category: "Marketing Campaign",
    },
  },
  kappa: {
    title: "Project Kappa",
    subtitle: "Marketing Campaign",
    client: "Fashion Forward",
    year: "2025",
    services: ["Digital Marketing", "Social Media", "Content Creation"],
    heroImage: "/projects/b8f83a1454ffe739e837f7da2e88fbe5.jpg",
    description:
      "An integrated digital marketing campaign that drove brand awareness and sales for a sustainable fashion brand.",
    challenge:
      "Breaking through the noise in the competitive fashion industry while staying true to sustainability values and reaching the right audience.",
    solution:
      "We created a multi-channel campaign with compelling storytelling, influencer partnerships, and data-driven targeting that resonated with conscious consumers.",
    images: [
      "/projects/e0bd41a9918d532fbb11c226cc0cc499.jpg",
      "/projects/1c32e3e31282227a286ee62c987eb613.jpg",
      "/projects/3fc0293123fc87d41e49dffa19244e48.jpg",
    ],
    techStack: [
      "Meta Ads",
      "Google Ads",
      "Next.js",
      "React",
      "Shopify",
      "WordPress",
      "Framer Motion",
    ],
    results: [
      { metric: "800%", label: "ROI on ad spend" },
      { metric: "250K", label: "New followers gained" },
      { metric: "175%", label: "Sales increase" },
    ],
    nextProject: {
      slug: "alpha",
      title: "Project Alpha",
      category: "Digital Innovation",
    },
  },
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [isDark, setIsDark] = useState(false);
  const project = projectsData[slug] || projectsData.alpha;

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact-section");
      const contactSectionRect = contactSection?.getBoundingClientRect();

      if (contactSectionRect && contactSectionRect.top <= 100) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header dark={isDark} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="mx-auto w-[85%] pt-32 pb-16" style={{ maxWidth: "1500px" }}>
          <motion.p
            className="text-gray-400 text-sm mb-6"
            initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {project.subtitle}
          </motion.p>

          <motion.h1
            className="font-normal leading-tight mb-12 text-black"
            style={{ fontSize: "80px", letterSpacing: "-.3rem" }}
            initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-gray-600 font-light leading-relaxed text-xl max-w-3xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          {/* Hero Image */}
          <motion.div
            className="relative w-full h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Project Info Grid */}
        <div className="mx-auto w-[85%] py-24" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-4 gap-16">
            <div>
              <p className="text-sm text-gray-400 mb-3">CLIENT</p>
              <p className="text-xl text-black font-light">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-3">YEAR</p>
              <p className="text-xl text-black font-light">{project.year}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-400 mb-3">SERVICES</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-gray-300 rounded-full text-sm text-black"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Challenge & Solution Section */}
        <div className="mx-auto w-[85%] py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-2 gap-16">
            {/* Left Side - Sticky Content */}
            <div className="sticky top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-8 text-black"
                style={{ fontSize: "55px", letterSpacing: "-.2rem" }}
              >
                The challenge.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed"
                style={{ fontSize: "18px" }}
              >
                {project.challenge}
              </p>
            </div>

            {/* Right Side - Content */}
            <div>
              <h3
                className="font-normal leading-tight mb-8 text-black"
                style={{ fontSize: "40px", letterSpacing: "-.15rem" }}
              >
                Our solution.
              </h3>
              <p
                className="text-gray-600 font-light leading-relaxed mb-12"
                style={{ fontSize: "18px" }}
              >
                {project.solution}
              </p>

              {/* Tech Stack */}
              <div className="mt-16">
                <p className="text-sm text-gray-400 mb-6">TECHNOLOGY STACK</p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech: string, index: number) => {
                    // Map tech names to their icon slugs for Simple Icons
                    const techIconMap: { [key: string]: string } = {
                      "Next.js": "nextdotjs",
                      "React": "react",
                      "React Native": "react",
                      "TypeScript": "typescript",
                      "Framer Motion": "framer",
                      "Supabase": "supabase",
                      "Vercel": "vercel",
                      "GSAP": "greensock",
                      "Figma": "figma",
                      "After Effects": "adobeaftereffects",
                      "Three.js": "threedotjs",
                      "Adobe Creative Suite": "adobe",
                      "Shopify": "shopify",
                      "Stripe": "stripe",
                      "iOS": "apple",
                      "Android": "android",
                      "Firebase": "firebase",
                      "Expo": "expo",
                      "Twilio": "twilio",
                      "HIPAA Compliance": "security",
                      "Storybook": "storybook",
                      "Design Tokens": "figma",
                      "Tailwind CSS": "tailwindcss",
                      "WordPress": "wordpress",
                      "Cloudinary": "cloudinary",
                      "HubSpot": "hubspot",
                      "Google Analytics": "googleanalytics",
                      "Meta Ads": "meta",
                      "Google Ads": "googleads",
                    };
                    
                    const iconSlug = techIconMap[tech] || "default";
                    
                    return (
                      <span
                        key={index}
                        className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm text-black font-light flex items-center gap-2.5"
                      >
                        <img
                          src={`https://cdn.simpleicons.org/${iconSlug}/000000`}
                          alt={tech}
                          width="18"
                          height="18"
                          className="object-contain"
                        />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mx-auto w-[85%] py-16" style={{ maxWidth: "1500px" }}>
          <div className="space-y-8">
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="relative w-full h-[700px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mx-auto w-[85%] py-32" style={{ maxWidth: "1500px" }}>
          <h2
            className="font-normal leading-tight mb-16 text-black text-center"
            style={{ fontSize: "55px", letterSpacing: "-.2rem" }}
          >
            Impact & results.
          </h2>
          <div className="grid grid-cols-3 gap-16">
            {project.results.map((result: any, index: number) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className="font-normal mb-4 bg-gradient-to-r from-[#C388F8] to-[#9b59b6] bg-clip-text text-transparent"
                  style={{ fontSize: "72px", letterSpacing: "-.2rem" }}
                >
                  {result.metric}
                </div>
                <p className="text-gray-600 text-lg font-light">
                  {result.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Project CTA */}
        <div className="mx-auto w-[85%] py-32 border-t border-gray-200" style={{ maxWidth: "1500px" }}>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400 mb-4">NEXT PROJECT</p>
              <h3
                className="font-normal leading-tight text-black"
                style={{ fontSize: "48px", letterSpacing: "-.2rem" }}
              >
                {project.nextProject.title}
              </h3>
              <p className="text-gray-600 text-lg mt-2">
                {project.nextProject.category}
              </p>
            </div>
            <Link
              href={`/projects/${project.nextProject.slug}`}
              className="group flex items-center gap-4"
            >
              <span className="text-lg text-black font-light group-hover:text-[#C388F8] transition-colors duration-300">
                View project
              </span>
              <div className="w-16 h-16 rounded-full border-2 border-black group-hover:border-[#C388F8] group-hover:bg-[#C388F8] flex items-center justify-center transition-all duration-300">
                <svg
                  className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
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
