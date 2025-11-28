"use client";

import * as motion from "motion/react-client";
import { Crown, Settings, Newspaper, Video } from "lucide-react";

const departments = [
  {
    name: "Leadership",
    icon: Crown,
    roles: ["Board of Directors", "Chief Executive Officer (CEO)"],
  },
  {
    name: "Management",
    icon: Settings,
    roles: [
      "Editor-in-Chief",
      "Finance & Administration Officer",
      "Marketing & Sales Executive",
    ],
  },
  {
    name: "Editorial",
    icon: Newspaper,
    roles: [
      "News Editor",
      "Security & Defence Editor",
      "Business Editor",
      "Politics Editor",
    ],
  },
  {
    name: "Production & Digital",
    icon: Video,
    roles: [
      "Reporters / Journalists",
      "Photographers / Videographers",
      "Social Media & Digital Content Manager",
    ],
  },
];

export function TeamSection() {
  return (
    <section
      id='team'
      className='py-8 bg-zinc-50 dark:bg-zinc-900 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className='inline-flex items-center gap-2 mb-4'>
              <span className='text-sm font-semibold uppercase tracking-wider text-dawan-600'>
                Our Team
              </span>
            </div>
            <h2 className='text-2xl md:text-4xl font-bold mb-4'>
              Professional <span className='text-dawan-600'>Structure</span>
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Founded by senior Somali journalists with experience at BBC, Al
              Jazeera, and Reuters — our team ensures editorial independence,
              credibility, and consistent content quality.
            </p>
          </motion.div>

          {/* Department Cards - 2x2 Grid */}
          <motion.div
            className='grid sm:grid-cols-2 gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}>
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className='group'>
                  <div className='bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-700 h-full hover:shadow-md transition-shadow'>
                    {/* Header */}
                    <div className='flex items-center gap-3 mb-4'>
                      <div className='p-2.5 rounded-xl bg-dawan-100 dark:bg-dawan-900/30 group-hover:bg-dawan-500 transition-colors'>
                        <Icon className='w-5 h-5 text-dawan-600 group-hover:text-white transition-colors' />
                      </div>
                      <h3 className='text-lg font-bold'>{dept.name}</h3>
                    </div>

                    {/* Roles List */}
                    <ul className='space-y-2'>
                      {dept.roles.map((role) => (
                        <li
                          key={role}
                          className='flex items-center gap-3 text-sm text-muted-foreground group/item hover:text-foreground transition-colors'>
                          <span className='w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 group-hover/item:bg-dawan-500 transition-colors shrink-0' />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Presence Stats */}
          <motion.div
            className='mt-10 p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            <div className='grid sm:grid-cols-2 gap-6 items-center'>
              <div>
                <h4 className='font-semibold text-lg mb-2'>
                  Regional Presence
                </h4>
                <p className='text-sm text-muted-foreground'>
                  Operational offices across the Horn of Africa ensuring
                  comprehensive coverage.
                </p>
              </div>
              <div className='flex flex-wrap gap-2'>
                {[
                  "Mogadishu",
                  "Hargeisa",
                  "Djibouti",
                  "Jigjiga",
                  "Garissa",
                  "Nairobi",
                ].map((city) => (
                  <span
                    key={city}
                    className='px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-700 dark:text-zinc-300'>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
