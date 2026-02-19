'use client';

import { motion, useMotionValue, useAnimationFrame } from 'motion/react';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Button from '@/components/ui/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Digital Innovation",
    image: "/projects/1c32e3e31282227a286ee62c987eb613.jpg",
    link: "/projects/alpha"
  },
  {
    id: 2,
    title: "Project Beta",
    category: "Brand Experience",
    image: "/projects/3fc0293123fc87d41e49dffa19244e48.jpg",
    link: "/projects/beta"
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "E-commerce Platform",
    image: "/projects/43e0f22469512c040b79710a4f3bcdd9.jpg",
    link: "/projects/gamma"
  },
  {
    id: 4,
    title: "Project Delta",
    category: "Mobile Application",
    image: "/projects/4aeb07b15c492b11c4b096dd60786feb.jpg",
    link: "/projects/delta"
  },
  {
    id: 5,
    title: "Project Epsilon",
    category: "Web Development",
    image: "/projects/4ceb74fafa77d9e9a4d97eec05ca901d.jpg",
    link: "/projects/epsilon"
  },
  {
    id: 6,
    title: "Project Zeta",
    category: "UI/UX Design",
    image: "/projects/53fbc914f36f1e8ec162851adb32c133.jpg",
    link: "/projects/zeta"
  },
  {
    id: 7,
    title: "Project Eta",
    category: "Creative Solutions",
    image: "/projects/69f5adbac6fbabda41bd1bb007edd13e.jpg",
    link: "/projects/eta"
  },
  {
    id: 8,
    title: "Project Theta",
    category: "Digital Strategy",
    image: "/projects/89a6c93bac770b136d138d57f3c346cf.jpg",
    link: "/projects/theta"
  },
  {
    id: 9,
    title: "Project Iota",
    category: "Product Development",
    image: "/projects/8dfcdd6773ee52368e4a2defc3aae039.jpg",
    link: "/projects/iota"
  },
  {
    id: 10,
    title: "Project Kappa",
    category: "Marketing Campaign",
    image: "/projects/b8f83a1454ffe739e837f7da2e88fbe5.jpg",
    link: "/projects/kappa"
  },
  {
    id: 11,
    title: "Project Lambda",
    category: "Brand Identity",
    image: "/projects/e0bd41a9918d532fbb11c226cc0cc499.jpg",
    link: "/projects/lambda"
  }
];

export default function ProjectsSectionAutoScroll() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects, ...projects];

  useAnimationFrame((t, delta) => {
    if (!isPaused && containerRef.current) {
      const speed = 1; // pixels per frame
      const cardWidth = 392; // 390 + 2 (card width + gap)
      const setWidth = cardWidth * projects.length;
      
      // Continuously move left
      const currentX = x.get() - speed;
      
      // Wrap seamlessly when we've scrolled one full set
      const wrappedX = currentX <= -setWidth ? currentX + setWidth : currentX;
      
      x.set(wrappedX);
    }
  });

  return (
    <section className="py-12 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto w-[100%] lg:w-[85%] mb-8 sm:mb-16 px-0 sm:px-4 lg:px-8" style={{ maxWidth: '1500px' }}>
        <div className="flex flex-col gap-4 px-4 sm:px-0">
          <h2 className="text-5xl sm:text-6xl font-regular text-black">
            Our projects
          </h2>
          <p className="text-[16px] leading-relaxed text-black max-w-2xl font-light">
            Discover our latest work and creative solutions
          </p>
          <div className="mt-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => {
                window.location.href = '/projects';
              }}
            >
              View all projects
            </Button>
          </div>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative" ref={containerRef}>
        <motion.div
          className="flex gap-2"
          style={{ x }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedProjects.map((project, index) => (
            <a
              key={`${project.id}-${index}`}
              href={project.link}
              className="flex-shrink-0 w-[390px] cursor-pointer group"
            >
              {/* Project Image Container */}
              <div className="relative w-[390px] h-[576px] sm:h-[480px] rounded-[5px] overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Hover Overlay - belkasti/sivi */}
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Below Image */}
              <div className="px-2">
                <p className="text-base text-black">
                  <span className="font-semibold">{project.title}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="font-light text-gray-600">{project.category}</span>
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
