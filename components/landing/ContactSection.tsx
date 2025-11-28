"use client";

import * as motion from "motion/react-client";
import { MapPin, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    value: "Marinio Street, Mogadishu, Somalia",
    href: null,
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@dawan.so",
    href: "mailto:info@dawan.so",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+252 62 8881171",
    href: "tel:+25262888117",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.dawanmedia.com",
    href: "https://www.dawanmedia.com",
  },
];

export function ContactSection() {
  return (
    <section
      id='contact'
      className='py-8 bg-zinc-50 dark:bg-zinc-900 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid lg:grid-cols-5 gap-8 items-center'>
            {/* Left side - Text */}
            <motion.div
              className='lg:col-span-2'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <span className='text-sm font-semibold uppercase tracking-wider text-dawan-600 mb-2 block'>
                Contact Us
              </span>
              <h2 className='text-2xl md:text-4xl font-bold mb-4'>
                Let&apos;s Start a Conversation
              </h2>
              <p className='text-muted-foreground mb-6'>
                Whether you&apos;re a journalist, partner, advertiser, or reader
                with feedback — we&apos;re always happy to hear from you.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <Button
                  size='lg'
                  className='bg-dawan-600 hover:bg-dawan-700 group'
                  asChild>
                  <a
                    href='mailto:info@dawan.so'
                    className='inline-flex items-center gap-2'>
                    Get in Touch
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Contact cards */}
            <motion.div
              className='lg:col-span-3'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <div className='bg-white dark:bg-zinc-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-zinc-200 dark:border-zinc-700'>
                <div className='grid sm:grid-cols-2 gap-4'>
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 4 }}
                        className='group flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors cursor-default'>
                        <div className='p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-700 group-hover:bg-dawan-100 dark:group-hover:bg-dawan-900/30 transition-colors'>
                          <Icon className='w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-dawan-600 transition-colors' />
                        </div>
                        <div className='min-w-0 flex-1'>
                          <p className='text-xs text-muted-foreground uppercase tracking-wide mb-0.5'>
                            {item.title}
                          </p>
                          <p className='font-medium text-foreground text-sm sm:text-base wrap-break-words group-hover:text-dawan-600 transition-colors'>
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    );

                    return item.href ? (
                      <a
                        key={item.title}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className='block'>
                        {content}
                      </a>
                    ) : (
                      <div key={item.title}>{content}</div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
