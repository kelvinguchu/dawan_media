"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Dawan Africa",
    language: "English",
    url: "https://dawan.africa",
    description:
      "Pan-African coverage for global audiences, featuring in-depth reporting on politics, economy, culture, and development across the continent.",
    logo: "/dawan-africa.png",
    gradient: "from-[#2aaac6] to-[#1d8a9e]",
    bgGradient:
      "from-[#2aaac6]/10 via-[#2aaac6]/5 to-[#2aaac6]/10 dark:from-[#2aaac6]/20 dark:via-[#2aaac6]/10 dark:to-[#2aaac6]/20",
    shadowColor: "shadow-[#2aaac6]/20",
    brandColor: "#2aaac6",
  },
  {
    name: "Dawan TV",
    language: "Somali (Af-Soomaali)",
    url: "https://dawan.so",
    description:
      "Local news and community journalism for Somali-speaking audiences, covering Somalia, the diaspora, and the greater Horn of Africa region.",
    logo: "/dawan-tv.png",
    gradient: "from-[#b01c14] to-[#8a150f]",
    bgGradient:
      "from-[#b01c14]/10 via-[#b01c14]/5 to-[#b01c14]/10 dark:from-[#b01c14]/20 dark:via-[#b01c14]/10 dark:to-[#b01c14]/20",
    shadowColor: "shadow-[#b01c14]/20",
    brandColor: "#b01c14",
  },
  {
    name: "Bawaba Africa",
    language: "Arabic (العربية)",
    url: "https://bawaba.africa",
    description:
      "Arabic-language platform covering African affairs for Arabic-speaking audiences across Africa and the Middle East.",
    logo: "/bawaba-africa.png",
    gradient: "from-[#2a4497] to-[#1e3270]",
    bgGradient:
      "from-[#2a4497]/10 via-[#2a4497]/5 to-[#2a4497]/10 dark:from-[#2a4497]/20 dark:via-[#2a4497]/10 dark:to-[#2a4497]/20",
    shadowColor: "shadow-[#2a4497]/20",
    brandColor: "#2a4497",
  },
  {
    name: "Dawan App",
    language: "All Languages",
    url: "#",
    description:
      "Access all Dawan Media content on the go. Available on iOS and Android with personalized news feeds, offline reading, and push notifications.",
    logo: "/dawan-tv.png",
    gradient: "from-violet-500 to-purple-600",
    bgGradient:
      "from-violet-50 via-purple-50 to-violet-100 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-violet-900/40",
    shadowColor: "shadow-violet-500/20",
    comingSoon: true,
  },
];

export function PlatformsSection() {
  return (
    <section
      id='platforms'
      className='py-8 bg-zinc-50 dark:bg-zinc-900 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <span className='text-sm font-semibold text-dawan-600 uppercase tracking-wider'>
              Our Platforms
            </span>
            <h2 className='text-3xl md:text-5xl font-bold mt-4 mb-4 text-zinc-900 dark:text-zinc-100'>
              Three Languages,{" "}
              <span className='text-dawan-600'>One Mission</span>
            </h2>
            <p className='text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto'>
              We believe language should never be a barrier to quality
              journalism. Our platforms serve diverse communities in their
              native tongues.
            </p>
          </motion.div>

          {/* Platform Cards */}
          <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group'>
                <div
                  className={`relative h-full rounded-3xl bg-linear-to-br ${platform.bgGradient} p-1 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <div className='h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-[22px] p-5 sm:p-6 lg:p-8'>
                    {/* Header with logo */}
                    <div className='flex items-start justify-between mb-6'>
                      <div className='relative'>
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${platform.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                        />
                        <div className='relative w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg flex items-center justify-center p-2'>
                          <Image
                            src={platform.logo}
                            alt={platform.name}
                            width={48}
                            height={48}
                            className='object-contain'
                          />
                        </div>
                      </div>
                      {platform.comingSoon && (
                        <span className='text-xs font-semibold text-violet-600 bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400 px-3 py-1.5 rounded-full'>
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className='mb-6'>
                      <h3 className='text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1'>
                        {platform.name}
                      </h3>
                      <p className='text-sm font-medium text-zinc-500 dark:text-zinc-400'>
                        {platform.language}
                      </p>
                    </div>

                    <p className='text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed'>
                      {platform.description}
                    </p>

                    {/* CTA */}
                    {platform.comingSoon ? (
                      <div className='flex items-center justify-center gap-2 py-3 text-zinc-400 dark:text-zinc-500'>
                        <span className='text-sm font-medium'>
                          Available Soon on iOS & Android
                        </span>
                      </div>
                    ) : (
                      <Button
                        className={`w-full bg-linear-to-r ${platform.gradient} text-white hover:opacity-90 transition-opacity group/btn`}
                        asChild>
                        <a
                          href={platform.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center justify-center gap-2'>
                          Visit Platform
                          <ArrowUpRight className='w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform' />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
