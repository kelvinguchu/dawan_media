"use client";

import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import {
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoTiktok,
  BiLogoTelegram,
  BiLogoInstagram,
} from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";

const socialLinks = [
  {
    icon: BiLogoWhatsapp,
    href: "https://whatsapp.com/channel/0029Va7QXRTHltYIpNUtRv32",
    label: "WhatsApp Channel",
  },
  {
    icon: BiLogoTelegram,
    href: "https://t.me/Dawan_Africa",
    label: "Telegram",
  },
  {
    icon: IoNewspaperOutline,
    href: "https://news.google.com/publications/CAAqJggKIiBDQklTRWdnTWFnNEtER1JoZDJGdUxtRm1jbWxqWVNnQVAB?ceid=KE:en&oc=3",
    label: "Google News",
  },
  {
    icon: BiLogoYoutube,
    href: "https://youtube.com/@dawanafrica?si=MeDNmWJDGkFWiF45",
    label: "YouTube",
  },
  {
    icon: BiLogoTwitter,
    href: "https://x.com/Dawan_tv",
    label: "X (Twitter)",
  },
  {
    icon: BiLogoFacebook,
    href: "https://www.facebook.com/Dawantv/",
    label: "Facebook",
  },
  {
    icon: BiLogoTiktok,
    href: "https://www.tiktok.com/@dawan_tv",
    label: "TikTok",
  },
  {
    icon: BiLogoInstagram,
    href: "https://www.instagram.com/dawantv_/?hl=en",
    label: "Instagram",
  },
];

const platforms = [
  { name: "Dawan Africa", href: "https://dawan.africa" },
  { name: "Dawan TV", href: "https://dawan.so" },
  { name: "Bawaba Africa", href: "https://bawaba.africa" },
];

const company = [
  { name: "About Us", href: "#about" },
  { name: "Our Team", href: "#team" },
  { name: "Contact", href: "#contact" },
  { name: "Careers", href: "mailto:info@dawan.so" },
];

export function Footer() {
  return (
    <footer className='bg-zinc-950 text-zinc-300 overflow-hidden'>
      {/* Main Footer */}
      <div className='container mx-auto px-4 py-8 md:py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 mb-10'>
            {/* Logo & Description */}
            <motion.div
              className='md:col-span-5'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <Link href='/' className='inline-block mb-4'>
                <Image
                  src='/dawan-tv.png'
                  alt='Dawan Media'
                  width={200}
                  height={30}
                  className='h-[30px] w-auto'
                />
              </Link>
              <p className='text-sm mb-6 max-w-sm leading-relaxed text-zinc-200'>
                Independent, multilingual journalism serving the Horn of Africa
                and beyond. Headquartered in Mogadishu, Somalia.
              </p>

              {/* Social Links */}
              <div className='flex items-center gap-2'>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.label}
                      className='p-2 rounded-lg bg-zinc-800/80 hover:bg-dawan-600 text-zinc-300 hover:text-white transition-colors'
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}>
                      <Icon className='w-4 h-4' />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Platforms */}
            <motion.div
              className='md:col-span-3'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <h4 className='font-semibold text-white mb-4 text-sm uppercase tracking-wider'>
                Platforms
              </h4>
              <ul className='space-y-3'>
                {platforms.map((platform) => (
                  <li key={platform.name}>
                    <a
                      href={platform.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm hover:text-white transition-colors inline-flex items-center gap-2 group'>
                      <span className='w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-dawan-500 transition-colors' />
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              className='md:col-span-2'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <h4 className='font-semibold text-white mb-4 text-sm uppercase tracking-wider'>
                Company
              </h4>
              <ul className='space-y-3'>
                {company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm hover:text-white transition-colors inline-flex items-center gap-2 group'>
                      <span className='w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-dawan-500 transition-colors' />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter / Contact CTA */}
            <motion.div
              className='md:col-span-2'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <h4 className='font-semibold text-white mb-4 text-sm uppercase tracking-wider'>
                Get in Touch
              </h4>
              <p className='text-sm mb-3'>info@dawan.so</p>
              <p className='text-sm mb-3'>+252 62 8881171</p>
              <p className='text-xs text-zinc-200'>
                Marinio Street
                <br />
                Mogadishu, Somalia
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-zinc-800'>
        <div className='container mx-auto px-4 py-6'>
          <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-zinc-200'>
              &copy; {new Date().getFullYear()} Dawan Media. All rights
              reserved.
            </p>
            <p className='text-xs text-zinc-300 italic'>
              &quot;Dawan&quot; means &quot;Dawn&quot; — A new era in African
              journalism.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
