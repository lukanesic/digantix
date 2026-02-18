'use client';

import Button from '@/components/ui/Button';
import { Waves } from '@/components/ui/wave-background';
import { motion } from 'motion/react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref = '#contact',
}: HeroSectionProps) {
  return (
    <section className="relative px-6 lg:px-8 pt-32 pb-20">
      <div className="mx-auto w-[85%]" style={{ maxWidth: '1500px' }}>
        {/* Content Container */}
        <div className="flex flex-col items-start max-w-4xl my-30 ">
          {/* Main Heading */}
          <motion.h1 
            className="font-normal leading-tight tracking-tight text-black mb-6" 
            style={{ fontSize: '80px', letterSpacing:'-.3rem' }}
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
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-light" 
            style={{ fontSize: '18px' }}
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
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ 
              opacity: 0,
              clipPath: 'inset(0 0 0 100%)'
            }}
            animate={{ 
              opacity: 1,
              clipPath: 'inset(0 0 0 0%)'
            }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (ctaHref.startsWith('#')) {
                  const element = document.querySelector(ctaHref);
                  element?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = ctaHref;
                }
              }}
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wave Background - Full Width Container */}
      <div className="mx-auto mt-50 relative px-6 lg:px-8 w-[90%]" style={{ maxWidth: '1700px', height: '500px' }}>
        <Waves className="h-full w-full rounded-3xl" />
      </div>
    </section>
  );
}
