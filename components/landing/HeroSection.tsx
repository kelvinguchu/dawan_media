"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950' />

      {/* Subtle gradient orbs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-dawan-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-dawan-600/10 rounded-full blur-3xl' />

      {/* Content */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Tagline */}
          <div className='mb-8'>
            <div className='flex flex-wrap justify-center gap-3 text-sm font-medium text-zinc-500 dark:text-zinc-400'>
              <span className='flex items-center gap-2'>
                <span className='text-dawan-600'>●</span>
                <span>Independent</span>
              </span>
              <span className='w-px h-4 bg-zinc-300 dark:bg-zinc-700' />
              <span className='flex items-center gap-2'>
                <span className='text-dawan-600'>●</span>
                <span>Multilingual</span>
              </span>
              <span className='w-px h-4 bg-zinc-300 dark:bg-zinc-700' />
              <span className='flex items-center gap-2'>
                <span className='text-dawan-600'>●</span>
                <span>African-Led</span>
              </span>
            </div>
          </div>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-zinc-100'>
            Africa tells its story
            <br />
            <span className='text-dawan-600'>in its own voice.</span>
          </h1>

          <p className='text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed max-w-3xl mx-auto'>
            An independent, multilingual media company redefining how the Horn
            of Africa is represented — through accurate, ethical, and
            African-led journalism.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='text-lg px-8 h-14 bg-dawan-600 hover:bg-dawan-700 text-white shadow-lg shadow-dawan-600/25 hover:shadow-dawan-600/40 transition-all duration-300'
              asChild>
              <a href='#platforms'>Explore Our Platforms</a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 h-14 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300'
              asChild>
              <a href='#about'>Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
