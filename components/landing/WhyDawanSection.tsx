"use client";

import * as motion from "motion/react-client";
import {
  Shield,
  Search,
  Languages,
  Globe,
  Smartphone,
  Heart,
  TrendingUp,
  Newspaper,
  Clock,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Independent & Non-Partisan",
    description: "No government or corporate ownership",
  },
  {
    icon: Search,
    title: "Fact-First Journalism",
    description: "Rigorous editorial standards and fact-checking",
  },
  {
    icon: Languages,
    title: "Multilingual Reach",
    description: "Content in English, Somali, and Arabic",
  },
  {
    icon: Globe,
    title: "African Perspective",
    description: "Stories told by Africans, for Africans",
  },
  {
    icon: Smartphone,
    title: "Digital-First",
    description: "Modern platforms optimized for mobile audiences",
  },
  {
    icon: Heart,
    title: "Community Trust",
    description: "Deep roots in the communities we serve",
  },
];

const stats = [
  { icon: Newspaper, value: "3", label: "News Platforms" },
  { icon: Languages, value: "3", label: "Languages" },
  { icon: Users, value: "1M+", label: "Monthly Readers" },
  { icon: Clock, value: "24/7", label: "News Coverage" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const featureVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
} as const;

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
} as const;

export function WhyDawanSection() {
  return (
    <section className='py-8 bg-zinc-50 dark:bg-zinc-950 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header - Centered above both columns */}
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <span className='text-sm font-semibold uppercase tracking-wider text-dawan-600 mb-2 block'>
              What Sets Us Apart
            </span>
            <h2 className='text-2xl md:text-4xl font-bold'>
              Why <span className='text-dawan-600'>Dawan</span> Media?
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8 items-stretch'>
            {/* Impact Card - Left Side */}
            <motion.div
              className='order-2 md:order-1 h-full'
              initial={{ opacity: 0, x: -50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}>
              <div className='relative group h-full'>
                {/* Glow effect */}
                <div className='absolute -inset-1 bg-linear-to-r from-dawan-500 via-dawan-600 to-dawan-700 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500' />

                <div className='relative bg-linear-to-br from-dawan-500 via-dawan-600 to-dawan-700 rounded-2xl p-6 md:p-8 text-white overflow-hidden h-full flex flex-col justify-center'>
                  {/* Background decoration */}
                  <div className='absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2' />
                  <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2' />

                  {/* Header */}
                  <div className='relative flex items-center gap-3 mb-8'>
                    <motion.div
                      className='p-3 bg-white/20 rounded-xl backdrop-blur-sm'
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}>
                      <TrendingUp className='h-6 w-6' />
                    </motion.div>
                    <h3 className='text-2xl font-bold'>Our Impact</h3>
                  </div>

                  {/* Stats Grid */}
                  <motion.div
                    className='relative grid grid-cols-2 gap-4'
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}>
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          variants={statVariants}
                          whileHover={{ scale: 1.05 }}
                          className='text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default'>
                          <Icon className='w-5 h-5 mx-auto mb-2 opacity-80' />
                          <p className='text-3xl md:text-4xl font-bold mb-1'>
                            {stat.value}
                          </p>
                          <p className='text-sm opacity-80'>{stat.label}</p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Features - Right Side */}
            <div className='order-1 md:order-2 relative'>
              {/* Background decorative elements */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-dawan-100/50 dark:bg-dawan-900/20 rounded-full blur-3xl' />
              <div className='absolute bottom-0 right-8 w-24 h-24 bg-dawan-200/30 dark:bg-dawan-800/10 rounded-full blur-2xl' />

              <motion.ul
                className='relative space-y-3 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-2xl p-3 sm:p-4 border border-zinc-100 dark:border-zinc-800'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.li
                      key={feature.title}
                      variants={featureVariants}
                      whileHover={{ x: 8 }}
                      className='group flex items-center justify-between gap-4 p-3 rounded-xl bg-white dark:bg-zinc-800/50 hover:bg-dawan-50 dark:hover:bg-zinc-800 transition-colors cursor-default shadow-sm'>
                      <div className='flex items-start gap-4'>
                        <motion.div
                          className='mt-0.5 p-2 rounded-lg bg-dawan-100 dark:bg-dawan-900/30 group-hover:bg-dawan-500 transition-colors'
                          whileHover={{ rotate: 10 }}>
                          <Icon className='h-4 w-4 text-dawan-600 group-hover:text-white transition-colors' />
                        </motion.div>
                        <div>
                          <h4 className='font-semibold text-foreground mb-0.5'>
                            {feature.title}
                          </h4>
                          <p className='text-sm text-muted-foreground'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      {/* Right side indicator */}
                      <div className='hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <span className='w-1.5 h-1.5 rounded-full bg-dawan-400' />
                        <span className='w-1 h-1 rounded-full bg-dawan-300' />
                        <span className='w-0.5 h-0.5 rounded-full bg-dawan-200' />
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
