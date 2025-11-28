"use client";

import * as motion from "motion/react-client";
import { Target, Eye, Shield, Lightbulb, Globe } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className='py-8 bg-zinc-50 dark:bg-zinc-950 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Section header */}
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <span className='inline-flex items-center gap-2 text-sm font-semibold text-dawan-600 uppercase tracking-wider mb-4'>
              What Drives Us
            </span>
            <h2 className='text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100'>
              Our Purpose
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
            {/* Mission */}
            <motion.div
              className='group relative'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className='absolute inset-0 bg-dawan-600 rounded-3xl rotate-1 group-hover:rotate-2 transition-transform duration-300' />
              <div className='relative bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-10 h-full'>
                <div className='flex items-start gap-4 mb-6'>
                  <div className='p-3 bg-dawan-600 rounded-2xl shrink-0'>
                    <Target className='h-7 w-7 text-white' />
                  </div>
                  <div>
                    <span className='text-dawan-400 text-sm font-medium uppercase tracking-wider'>
                      Our Mission
                    </span>
                    <h3 className='text-xl lg:text-3xl font-bold text-white mt-1'>
                      Inform. Elevate. Connect.
                    </h3>
                  </div>
                </div>
                <p className='text-zinc-300 text-lg leading-relaxed'>
                  To deliver reliable, fact-based journalism in the languages
                  our audiences speak —{" "}
                  <span className='text-white font-medium'>Somali</span>,{" "}
                  <span className='text-white font-medium'>Arabic</span>, and{" "}
                  <span className='text-white font-medium'>English</span> —
                  while elevating the voices often excluded from mainstream
                  media.
                </p>
                <div className='mt-8 flex items-center gap-4'>
                  <div className='h-px flex-1 bg-zinc-700' />
                  <span className='text-zinc-500 text-sm'>Truth First</span>
                  <div className='h-px flex-1 bg-zinc-700' />
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className='group relative'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <div className='absolute inset-0 bg-dawan-500 rounded-3xl -rotate-1 group-hover:-rotate-2 transition-transform duration-300' />
              <div className='relative bg-linear-to-br from-dawan-600 to-dawan-700 rounded-3xl p-6 sm:p-8 lg:p-10 h-full'>
                <div className='flex items-start gap-4 mb-6'>
                  <div className='p-3 bg-white/20 backdrop-blur rounded-2xl shrink-0'>
                    <Eye className='h-7 w-7 text-white' />
                  </div>
                  <div>
                    <span className='text-dawan-200 text-sm font-medium uppercase tracking-wider'>
                      Our Vision
                    </span>
                    <h3 className='text-xl lg:text-3xl font-bold text-white mt-1'>
                      Africa&apos;s Trusted Voice
                    </h3>
                  </div>
                </div>
                <p className='text-white/90 text-lg leading-relaxed'>
                  To be Africa&apos;s most trusted multilingual media network —
                  known for{" "}
                  <span className='text-white font-semibold'>integrity</span>,{" "}
                  <span className='text-white font-semibold'>innovation</span>,
                  and <span className='text-white font-semibold'>impact</span>.
                </p>
                <div className='mt-8 grid grid-cols-3 gap-4 text-center'>
                  <div>
                    <div className='w-10 h-10 mx-auto bg-white/20 rounded-xl flex items-center justify-center'>
                      <Shield className='w-5 h-5 text-white' />
                    </div>
                    <div className='text-xs text-white/70 mt-2'>Integrity</div>
                  </div>
                  <div>
                    <div className='w-10 h-10 mx-auto bg-white/20 rounded-xl flex items-center justify-center'>
                      <Lightbulb className='w-5 h-5 text-white' />
                    </div>
                    <div className='text-xs text-white/70 mt-2'>Innovation</div>
                  </div>
                  <div>
                    <div className='w-10 h-10 mx-auto bg-white/20 rounded-xl flex items-center justify-center'>
                      <Globe className='w-5 h-5 text-white' />
                    </div>
                    <div className='text-xs text-white/70 mt-2'>Impact</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
