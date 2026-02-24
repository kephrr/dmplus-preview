import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import senyone from "@/assets/senyone.svg";
import keurMarie from "@/assets/keur-marie.jfif";
import comIn from "@/assets/com-in.jpg"
import saerGroup from "@/assets/saer-group.jpeg"
import deoya from "@/assets/deoya.png"

interface Logo {
  name: string;
  svg: React.ReactNode;
}

const logos: Logo[] = [
  {
    name: "Senyone",
    svg: (
      <img className="h-10 w-auto md:h-12 md:w-auto" src={senyone} alt="senyone" />
    ),
  },
  {
    name: "Ferme Keur-Marie",
    svg: (
      <img className="h-10 w-auto md:h-12 md:w-auto" src={keurMarie} alt="keur-marie" />
    ),
  },
  {
    name: "Com'In",
    svg: (
      <img className="h-10 w-auto md:h-12 md:w-auto" src={comIn} alt="com-in" />
    ),
  },
  {
    name: "Saer Group",
    svg: (
      <img className="h-10 w-auto md:h-12 md:w-auto" src={saerGroup} alt="saer-group" />
    ),
  },
  {
    name: "Deoya",
    svg: (
      <img className="h-10 w-auto md:h-12 md:w-auto" src={deoya} alt="saer-group" />
    ),
  }
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