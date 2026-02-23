import { useEffect, useRef, useState } from "react";
import type { SubsidiaySlide } from "@/types/subsidiaries";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  data: SubsidiaySlide[];
  interval?: number;
}

export default function OurEntities({ data, interval = 10000 }: Props) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimer();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, interval);
    return resetTimer;
  }, [index, data.length, interval]);

  const handleIconClick = (i: number) => {
    resetTimer();
    setIndex(i);
  };

  const slide = data[index];
  const Icon = slide.icon;

  // Place icons evenly on a circle, starting from the top (–90°)
  const RADIUS = 38; // % of the container width, used as CSS calc
  const getPosition = (i: number, total: number) => {
    const angle = ((i / total) * 2 * Math.PI) - Math.PI / 2;
    // x and y as percentage offsets from center (50%, 50%)
    const x = 50 + RADIUS * Math.cos(angle);
    const y = 50 + RADIUS * Math.sin(angle);
    return { x, y };
  };

  return (
    <section id="expertises" className="relative w-full overflow-hidden rounded-3xl">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center my-20">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block font-montserrat text-foreground">
                Nos expertises
                <p className='text-xl font-normal py-2 max-w-2xl mx-auto'>
                  Des compétences complémentaires, structurées autour d’une même ambition : créer de la valeur durable.
                </p>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-600 rounded-full" />
            </h2>
        </motion.div>
      <div className="max-w-6xl py-6 px-10 mx-auto flex items-center gap-10 min-h-[400px]">

        {/* ── LEFT: slide content ─────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* Slogan */}
          {slide.slogan && (
            <h1 className="text-3xl md:text-4xl mb-8 font-bold">
              {slide.slogan.map((word, wi) =>
                wi === 1 ? (
                  <span key={wi} className={cn("px-2 fugaz-one-regular", slide.colorClass)}>
                    {word}
                  </span>
                ) : (
                  <span key={wi}>{word}</span>
                )
              )}
            </h1>
          )}

          {/* Big title + title */}
          <p className="text-xs uppercase tracking-widest mb-1 text-gray-500">
            {slide.bigTitle}
          </p>
          <h2 className={cn("text-xl md:text-2xl font-bold mb-4", slide.colorClass)}>
            {slide.title}
          </h2>

          {/* Description */}
          <p className="mb-6 text-gray-700 max-w-lg">{slide.longDescription}</p>

          {/* Service tags */}
          <ul className="flex flex-wrap gap-3 mb-8">
            {slide.services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-black/10 px-4 py-1 text-xs"
              >
                {service}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className={cn(
              "inline-flex items-center gap-2 rounded-full text-white px-6 py-3 font-medium transition min-h-[44px]",
              slide.bgClass
            )}
          >
            <Icon className="h-5 w-5" />
            Découvrir
          </button>
        </div>

        {/* ── RIGHT: circular icon navigator ──────────────────────── */}
        <div
          className="relative flex-shrink-0"
          style={{ width: "380px", height: "380px" }}
        >
          {/* Outer decorative ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200"
          />

          {/* Inner subtle circle */}
          <div
            className="absolute rounded-full border border-gray-100"
            style={{ inset: "15%" }}
          />

          {/* Center active icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <img className="w-52 h-auto" src={slide.logo} alt="" />
            </div>
          </div>

          {/* Icons on circular path */}
          {data.map((item, i) => {
            const { x, y } = getPosition(i, data.length);
            const ItemIcon = item.icon;
            const isActive = i === index;

            return (
              <button
                key={item.id}
                onClick={() => handleIconClick(i)}
                title={item.title}
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translate(-50%, -50%) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translate(-50%, -50%) scale(1)";
                }}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 border-2",
                  isActive
                    ? cn("border-transparent text-white", item.bgClass)
                    : "bg-white border-gray-100 text-gray-500 hover:border-gray-300"
                )}
              >
                <ItemIcon className="h-5 w-5" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}