"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Languages, Users, Shield } from "lucide-react";

const stats = [
  { label: "News Platforms", value: "3", icon: Languages },
  { label: "Languages", value: "3", icon: Users },
  { label: "Since", value: "2018", icon: Shield },
];

export function AboutSection() {
  return (
    <section
      id='about'
      className='py-8 bg-zinc-50 dark:bg-zinc-900 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
            {/* Content - Shows first on mobile */}
            <motion.div
              className='order-1'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <span className='inline-block text-sm font-semibold text-dawan-600 uppercase tracking-wider mb-4'>
                Who We Are
              </span>
              <h2 className='text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-100'>
                Pioneering African
                <br />
                <span className='text-dawan-600'>Media Excellence</span>
              </h2>
              <p className='text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed'>
                Dawan Media is an{" "}
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  independent, multilingual media company
                </strong>{" "}
                headquartered in Mogadishu, Somalia. Operating across three
                digital news platforms and a dedicated mobile app, we produce
                trusted news, analysis, and storytelling that reflects the lived
                realities of African communities.
              </p>
              <p className='text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed'>
                Our name,{" "}
                <span className='text-dawan-600 font-semibold'>
                  &quot;Dawan,&quot;
                </span>{" "}
                means{" "}
                <span className='text-dawan-600 font-semibold'>
                  &quot;dawn&quot;
                </span>{" "}
                — representing a new era in African-led journalism that
                prioritizes accuracy, ethics, and community trust.
              </p>

              {/* Stats - Horizontal pill design */}
              <div className='flex flex-wrap gap-3'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='inline-flex items-center gap-2 bg-white dark:bg-zinc-800 pl-2 pr-4 py-2 rounded-full shadow-sm border border-zinc-100 dark:border-zinc-700'>
                    <div className='w-8 h-8 rounded-full bg-dawan-600 flex items-center justify-center'>
                      <stat.icon className='w-4 h-4 text-white' />
                    </div>
                    <div className='flex items-baseline gap-1.5'>
                      <span className='text-lg font-bold text-zinc-900 dark:text-zinc-100'>
                        {stat.value}
                      </span>
                      <span className='text-sm text-zinc-500'>
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Africa Map Visual - Shows second on mobile */}
            <motion.div
              className='relative order-2 max-w-md mx-auto lg:max-w-none w-full'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              {/* Glow effect behind the map */}
              <div className='absolute inset-0 bg-dawan-500/20 rounded-full blur-3xl scale-75' />

              {/* Outer ring */}
              <motion.div
                className='absolute inset-0 border-2 border-dawan-200 dark:border-dawan-800 rounded-full'
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* Africa map container */}
              <div className='relative aspect-square flex items-center justify-center'>
                {/* Pulsing circle behind map */}
                <motion.div
                  className='absolute w-3/4 h-3/4 bg-dawan-100 dark:bg-dawan-900/40 rounded-full'
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Africa image */}
                <motion.div
                  className='relative z-10 w-4/5 h-4/5'
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}>
                  <Image
                    src='/africa.png'
                    alt='Africa'
                    fill
                    className='object-contain drop-shadow-2xl'
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
