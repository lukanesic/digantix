'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import { LetsWorkTogether } from '@/components/ui/lets-work-section';
import { motion, AnimatePresence } from 'motion/react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Digital Innovation",
    image: "/projects/1c32e3e31282227a286ee62c987eb613.jpg",
    link: "/projects/alpha",
    tags: ["featured", "web"]
  },
  {
    id: 2,
    title: "Project Beta",
    category: "Brand Experience",
    image: "/projects/3fc0293123fc87d41e49dffa19244e48.jpg",
    link: "/projects/beta",
    tags: ["featured", "branding"]
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "E-commerce Platform",
    image: "/projects/43e0f22469512c040b79710a4f3bcdd9.jpg",
    link: "/projects/gamma",
    tags: ["featured", "web"]
  },
  {
    id: 4,
    title: "Project Delta",
    category: "Mobile Application",
    image: "/projects/4aeb07b15c492b11c4b096dd60786feb.jpg",
    link: "/projects/delta",
    tags: ["featured", "mobile"]
  },
  {
    id: 5,
    title: "Project Epsilon",
    category: "Web Development",
    image: "/projects/4ceb74fafa77d9e9a4d97eec05ca901d.jpg",
    link: "/projects/epsilon",
    tags: ["featured","web"]
  },
  {
    id: 6,
    title: "Project Zeta",
    category: "UI/UX Design",
    image: "/projects/53fbc914f36f1e8ec162851adb32c133.jpg",
    link: "/projects/zeta",
    tags: ["featured", "web", "mobile"]
  },
  {
    id: 7,
    title: "Project Eta",
    category: "Creative Solutions",
    image: "/projects/69f5adbac6fbabda41bd1bb007edd13e.jpg",
    link: "/projects/eta",
    tags: ["featured","branding"]
  },
  {
    id: 8,
    title: "Project Theta",
    category: "Digital Strategy",
    image: "/projects/89a6c93bac770b136d138d57f3c346cf.jpg",
    link: "/projects/theta",
    tags: ["featured","web", "branding"]
  },
  {
    id: 9,
    title: "Project Iota",
    category: "Product Development",
    image: "/projects/8dfcdd6773ee52368e4a2defc3aae039.jpg",
    link: "/projects/iota",
    tags: ["featured","mobile"]
  },
  {
    id: 10,
    title: "Project Kappa",
    category: "Marketing Campaign",
    image: "/projects/b8f83a1454ffe739e837f7da2e88fbe5.jpg",
    link: "/projects/kappa",
    tags: ["featured","branding"]
  },
  {
    id: 11,
    title: "Project Lambda",
    category: "Brand Identity",
    image: "/projects/e0bd41a9918d532fbb11c226cc0cc499.jpg",
    link: "/projects/lambda",
    tags: ["featured","branding"]
  }
];

type FilterType = 'featured' | 'web' | 'mobile' | 'branding';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('featured');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact-section');
      const contactSectionRect = contactSection?.getBoundingClientRect();
      
      // If contact section is at or near the top, switch to dark mode
      if (contactSectionRect && contactSectionRect.top <= 100) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = projects.filter(project => 
    project.tags.includes(activeFilter)
  );

  const filters: { label: string; value: FilterType }[] = [
    { label: 'Featured', value: 'featured' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Branding', value: 'branding' }
  ];

  return (
    <>
      <Header dark={isDark} />
      
      <div className="min-h-screen bg-white lg:mb-37.5">
        {/* Hero Section */}
        <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%] pt-24 sm:pt-32 pb-12 sm:pb-16" style={{ maxWidth: '1500px' }}>
          <motion.p 
            className="text-gray-400 text-sm sm:text-sm mb-4 sm:mb-6 px-4 sm:px-0"
            initial={{ 
              opacity: 0,
              clipPath: 'inset(0 0 0 100%)'
            }}
            animate={{ 
              opacity: 1,
              clipPath: 'inset(0 0 0 0%)'
            }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            Our works
          </motion.p>
          
          <motion.h1 
            className="font-normal leading-tight mb-8 sm:mb-12 max-w-5xl text-black text-[44px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] px-4 sm:px-0" 
            style={{ letterSpacing: '-0.05em' }}
            initial={{ 
              opacity: 0,
              clipPath: 'inset(0 0 0 100%)'
            }}
            animate={{ 
              opacity: 1,
              clipPath: 'inset(0 0 0 0%)'
            }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
          >
            Creating digital solutions. Building lasting impact.
          </motion.h1>

          {/* Filter Tabs */}
          <div className="flex gap-4 sm:gap-6 lg:gap-8 border-b border-gray-200 overflow-x-auto scrollbar-hide px-4 sm:px-0">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                style={{cursor:'pointer'}}
                className={`pb-3 sm:pb-4 text-sm sm:text-base lg:text-lg whitespace-nowrap transition-colors duration-300 ${
                  activeFilter === filter.value
                    ? 'text-black font-medium border-b-2 border-black'
                    : 'text-gray-400 font-light hover:text-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%] pt-6 sm:pt-12 pb-12 sm:pb-16" style={{ maxWidth: '1000px' }}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.2,
                ease: "easeInOut"
              }}
            >
              {filteredProjects.map((project, index) => {
                // Only right column gets offset on desktop
                const isRightColumn = index % 2 === 1;
                
                return (
                  <a
                    key={project.id}
                    href={project.link}
                    className={`cursor-pointer group ${isRightColumn ? 'md:mt-[150px]' : ''}`}
                  >
                    <div className="w-full">
                      {/* Project Image Container */}
                      <div className="relative w-full aspect-4/5 rounded-[5px] overflow-hidden mb-4 sm:mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Info */}
                    <div className="px-1 sm:px-2">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">{project.category}</p>
                      <h3 className="text-xl sm:text-2xl font-normal text-black group-hover:text-[#C388F8] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </a>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="min-h-screen bg-black text-white">
        <LetsWorkTogether />
      </div>
    </>
  );
}
