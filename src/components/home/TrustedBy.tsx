import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Logo {
  name: string;
  svg: React.ReactNode;
}

const logos: Logo[] = [
  {
    name: "Rakuten",
    svg: (
      <svg viewBox="0 0 100 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <text x="0" y="22" fontFamily="Georgia, serif" fontWeight="700" fontSize="22" letterSpacing="-0.5">Rakuten</text>
        <rect x="0" y="25" width="55" height="2.5" rx="1" fill="#BF0000"/>
      </svg>
    ),
  },
  {
    name: "NCR",
    svg: (
      <svg viewBox="0 0 80 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <circle cx="12" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="4" y1="8" x2="20" y2="22" stroke="currentColor" strokeWidth="2"/>
        <text x="28" y="21" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="18" letterSpacing="1">NCR</text>
      </svg>
    ),
  },
  {
    name: "monday.com",
    svg: (
      <svg viewBox="0 0 120 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <circle cx="6" cy="19" r="5" fill="#FF3D57"/>
        <circle cx="18" cy="19" r="5" fill="#FFCB00"/>
        <circle cx="30" cy="19" r="5" fill="#00CA72"/>
        <text x="38" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16">monday</text>
        <text x="102" y="22" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="12">.com</text>
      </svg>
    ),
  },
  {
    name: "Disney",
    svg: (
      <svg viewBox="0 0 80 30" className="h-12 w-auto md:h-8 md:w-auto" fill="currentColor">
        <text x="0" y="24" fontFamily="'Brush Script MT', cursive" fontWeight="700" fontSize="28" letterSpacing="1">Disney</text>
      </svg>
    ),
  },
  {
    name: "Dropbox",
    svg: (
      <svg viewBox="0 0 110 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <polygon points="9,2 18,8 9,14 0,8" fill="#0061FF"/>
        <polygon points="18,8 27,2 27,14 18,20" fill="#0061FF"/>
        <polygon points="9,14 18,20 27,14 18,8" fill="#0061FF" opacity="0.7"/>
        <polygon points="18,20 9,26 0,20 9,14" fill="#0061FF" opacity="0.8"/>
        <polygon points="18,20 27,14 27,26 18,26" fill="#0061FF" opacity="0.6"/>
        <text x="33" y="21" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="16">Dropbox</text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 70 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="#6772E5">stripe</text>
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 90 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#96BF48">shopify</text>
      </svg>
    ),
  },
  {
    name: "Notion",
    svg: (
      <svg viewBox="0 0 80 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <rect x="0" y="2" width="20" height="26" rx="3" fill="currentColor"/>
        <rect x="3" y="7" width="5" height="5" rx="1" fill="white"/>
        <rect x="3" y="15" width="14" height="2" rx="1" fill="white"/>
        <rect x="3" y="20" width="10" height="2" rx="1" fill="white"/>
        <text x="26" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20">Notion</text>
      </svg>
    ),
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 75 30" className="h-10 w-auto md:h-7 md:w-auto" fill="currentColor">
        <rect x="2" y="10" width="6" height="10" rx="3" fill="#E01E5A"/>
        <rect x="10" y="2" width="6" height="10" rx="3" fill="#36C5F0" transform="rotate(90 13 7)"/>
        <rect x="14" y="10" width="6" height="10" rx="3" fill="#2EB67D"/>
        <rect x="10" y="18" width="6" height="10" rx="3" fill="#ECB22E" transform="rotate(90 13 23)"/>
        <text x="26" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20">Slack</text>
      </svg>
    ),
  },
];

const VISIBLE_MOBILE = 3;
const VISIBLE_DESKTOP = 4;

export default function TrustedBy() {
  const [index, setIndex] = useState(0);

  const maxIndexMobile = logos.length - VISIBLE_MOBILE;
  const maxIndexDesktop = logos.length - VISIBLE_DESKTOP;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndexDesktop, i + 1));

  const canPrev = index > 0;
  const canNext = index < maxIndexDesktop;

  return (
    <div className="w-full flex flex-col items-center pb-10 md:pb-20 px-4" style={{ background: "#fff" }}>
      {/* Title */}
      <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-center my-20">
                  <h2 className="text-2xl md:text-4xl font-bold relative inline-block font-montserrat text-foreground">
                      Ils nous ont fait confiance
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-600 rounded-full" />
                  </h2>
      </motion.div>

      {/* Carousel row */}
      <div className="w-full max-w-3xl flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={prev}
          disabled={!canPrev}
          className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200"
          style={{
            borderColor: canPrev ? "#222" : "#e0e0e0",
            color: canPrev ? "#222" : "#ccc",
            background: canPrev ? "#fff" : "#fafafa",
            cursor: canPrev ? "pointer" : "not-allowed",
          }}
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        {/* Logos viewport */}
        <div className="flex-1 overflow-hidden">
          {/* Mobile version - 3 logos */}
          <div className="md:hidden">
            <div
              className="flex transition-transform duration-500 
              ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${index * (100 / VISIBLE_MOBILE)}%)` }}
            >
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: `${100 / VISIBLE_MOBILE}%` }}
                >
                  <div
                    className="flex items-center justify-center px-4 py-3 
                    rounded-xl transition-all duration-200 hover:bg-gray-50
                     cursor-pointer"
                    style={{ color: "#222", width: "100%" }}
                    title={logo.name}
                  >
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop version - 4 logos */}
          <div className="hidden md:block">
            <div
              className="flex transition-transform duration-500 
              ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${index * (100 / VISIBLE_DESKTOP)}%)` }}
            >
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: `${100 / VISIBLE_DESKTOP}%` }}
                >
                  <div
                    className="flex items-center justify-center px-4 py-3 
                    rounded-xl transition-all duration-200 hover:bg-gray-50
                     cursor-pointer"
                    style={{ color: "#222", width: "100%" }}
                    title={logo.name}
                  >
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={!canNext}
          className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center 
          justify-center transition-all duration-200"
          style={{
            borderColor: canNext ? "#222" : "#e0e0e0",
            color: canNext ? "#222" : "#ccc",
            background: canNext ? "#fff" : "#fafafa",
            cursor: canNext ? "pointer" : "not-allowed",
          }}
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: maxIndexDesktop + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === index ? 20 : 7,
              height: 7,
              background: i === index ? "#222" : "#ddd",
            }}
          />
        ))}
      </div>
    </div>
  );
}