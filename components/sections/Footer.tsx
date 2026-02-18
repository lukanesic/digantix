'use client';

import { Instagram, Linkedin, Facebook, Twitter, Github } from 'lucide-react';
import { CloudOrbit, OrbitingImage } from '@/components/ui/cloud-orbit';

interface FooterProps {
  email?: string;
  phone?: string;
  mainOfficeAddress?: string;
  mainOfficeCity?: string;
  secondOfficeAddress?: string;
  secondOfficeCity?: string;
}

const orbitingImagesData = [
  {
    speed: 20,
    radius: 119,
    size: 53,
    startAt: 0.15625,
    images: [
      {
        name: "Deepseek Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/deepseek-logo.webp",
      },
      {
        name: "Drizzle ORM Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/drizzle-orm-logo.webp",
      },
    ],
  },
  {
    speed: 20,
    radius: 118,
    size: 85,
    startAt: 0.25,
    images: [
      {
        name: "Motion Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/motion-logo.webp",
      },
      {
        name: "Deepseek Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/deepseek-logo.webp",
      },
    ],
  },
  {
    speed: 20,
    radius: 130,
    size: 73,
    startAt: 0.4375,
    images: [
      {
        name: "Tailwind Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/tailwindcss-logo.webp",
      },
      {
        name: "Motion Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/motion-logo.webp",
      },
    ],
  },
  {
    speed: 20,
    radius: 120,
    size: 49,
    startAt: 0.61,
    images: [
      {
        name: "Edge Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/edge-logo.webp",
      },
      {
        name: "Tailwind Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/tailwindcss-logo.webp",
      },
    ],
  },
  {
    speed: 20,
    radius: 136,
    size: 40,
    startAt: 0.65625,
    images: [
      {
        name: "Linear Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/linear-logo.webp",
      },
      {
        name: "Edge Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/edge-logo.webp",
      },
    ],
  },
  {
    speed: 20,
    radius: 111,
    size: 87,
    startAt: 0.75,
    images: [
      {
        name: "React Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/react-logo.webp",
      },
      {
        name: "Linear Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/linear-logo.webp",
      },
    ],
  },
  {
    speed: 20,
    radius: 124,
    size: 73,
    startAt: 0.9375,
    images: [
      {
        name: "Drizzle ORM Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/drizzle-orm-logo.webp",
      },
      {
        name: "React Logo",
        url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/react-logo.webp",
      },
    ],
  },
];

export default function Footer({
  email = "info@digantix.com",
  phone = "+381 11 123 4567",
  mainOfficeAddress = "Knez Mihailova 10",
  mainOfficeCity = "Belgrade, 11000",
  secondOfficeAddress = "Innovation Hub",
  secondOfficeCity = "Novi Sad, 21000"
}: FooterProps) {
  return (
    <footer className="relative bg-white py-16 px-6 lg:px-8">
      <div className="mx-auto w-[85%] mb-16" style={{ maxWidth: '1500px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            {/* Email & Phone */}
            <div className="flex flex-col gap-3 items-start">
              <a 
                href={`mailto:${email}`}
                className="px-4 py-2 border-2 border-black text-black rounded-full text-lg font-medium hover:bg-[#C388F8] hover:border-[#C388F8] hover:text-white transition-colors duration-300 w-fit"
              >
                {email}
              </a>
              <a 
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="px-4 py-2 border-2 border-black text-black rounded-full text-lg font-medium hover:bg-[#C388F8] hover:border-[#C388F8] hover:text-white transition-colors duration-300 w-fit"
              >
                {phone}
              </a>
            </div>

            {/* Offices */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">
                  MAIN OFFICE
                </p>
                <p className="text-base text-black font-medium">
                  {mainOfficeAddress}
                </p>
                <p className="text-base text-black">
                  {mainOfficeCity}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">
                  SECOND OFFICE
                </p>
                <p className="text-base text-black font-medium">
                  {secondOfficeAddress}
                </p>
                <p className="text-base text-black">
                  {secondOfficeCity}
                </p>
              </div>
            </div>
          </div>

          {/* Center Section - CloudOrbit */}
          <div className="flex justify-center items-center relative">
            {/* Large background text */}
            <div 
              className="bg-gradient-to-b from-[#C388F8]/10 via-[#C388F8]/5 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-extrabold tracking-tighter pointer-events-none select-none text-center whitespace-nowrap"
              style={{
                fontSize: 'clamp(8rem, 25vw, 18rem)',
                zIndex: 0
              }}
            >
              DIGANTIX
            </div>
            
            <div className="w-[400px] h-[400px] relative z-10">
              <CloudOrbit
                duration={3}
                size={160}
                images={[
                  {
                    name: "Charlie Avatar",
                    url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/avatar-1.webp",
                  },
                  {
                    name: "Tommy Avatar",
                    url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/avatar-2.webp",
                  },
                ]}
              >
                {orbitingImagesData.map((orbit, index) => (
                  <OrbitingImage
                    key={index}
                    speed={orbit.speed}
                    radius={orbit.radius}
                    size={orbit.size}
                    startAt={orbit.startAt}
                    images={orbit.images}
                    duration={3}
                  />
                ))}
              </CloudOrbit>
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <nav className="space-y-4">
              <a href="/services" className="block text-base text-black hover:text-[#C388F8] transition-colors duration-300">
                Services
              </a>
              <a href="/projects" className="block text-base text-black hover:text-[#C388F8] transition-colors duration-300">
                Projects
              </a>
              <a href="/company" className="block text-base text-black hover:text-[#C388F8] transition-colors duration-300">
                Company
              </a>
            </nav>
            <nav className="space-y-4">
              <a href="/blog" className="block text-base text-black hover:text-[#C388F8] transition-colors duration-300">
                Blog
              </a>
              <a href="/workflow" className="block text-base text-black hover:text-[#C388F8] transition-colors duration-300">
                Workflow
              </a>
              <a href="/contacts" className="block text-base text-black hover:text-[#C388F8] transition-colors duration-300">
                Contacts
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[85%]" style={{ maxWidth: '1500px' }}>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
          {/* Copyright */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="/privacy" className="hover:text-black transition-colors duration-300">
              Privacy Policy
            </a>
            <span>2026, Digantix</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C388F8] hover:text-white transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C388F8] hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C388F8] hover:text-white transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C388F8] hover:text-white transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C388F8] hover:text-white transition-all duration-300"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
