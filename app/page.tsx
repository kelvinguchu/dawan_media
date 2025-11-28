import {
  Navbar,
  HeroSection,
  AboutSection,
  MissionVisionSection,
  PlatformsSection,
  TeamSection,
  WhyDawanSection,
  ContactSection,
  Footer,
} from "@/components/landing";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dawan Media",
  description:
    "An independent, multilingual media company redefining how the Horn of Africa is represented through accurate, ethical, and African-led journalism.",
  url: "https://dawanmedia.com",
  logo: "https://dawanmedia.com/dawan-tv.png",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marinio Street",
    addressLocality: "Mogadishu",
    addressCountry: "Somalia",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+252-62-8881171",
    contactType: "customer service",
    email: "info@dawan.so",
  },
  sameAs: [
    "https://x.com/Dawan_tv",
    "https://www.facebook.com/Dawantv/",
    "https://youtube.com/@dawanafrica",
    "https://www.instagram.com/dawantv_/",
    "https://www.tiktok.com/@dawan_tv",
    "https://t.me/Dawan_Africa",
  ],
  subOrganization: [
    {
      "@type": "Organization",
      name: "Dawan Africa",
      url: "https://dawan.africa",
    },
    {
      "@type": "Organization",
      name: "Dawan TV",
      url: "https://dawan.so",
    },
    {
      "@type": "Organization",
      name: "Bawaba Africa",
      url: "https://bawaba.africa",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-background'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <PlatformsSection />
        <TeamSection />
        <WhyDawanSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
