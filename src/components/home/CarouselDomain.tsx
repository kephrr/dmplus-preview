import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SubsidiaySlide } from "@/types/subsidiaries";
import { cn } from "@/lib/utils";

interface Props {
  data: SubsidiaySlide[];
  interval?: number;
}

export default function CarouselDomain({
  data,
  interval = 10000,
}: Props) {
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

  const prev = () => {
    resetTimer();
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const next = () => {
    resetTimer();
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <section className="relative w-full overflow-hidden rounded-3xl">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {data.map((slide) => {
          const Icon = slide.icon;

          return (
            <div
              key={slide.id}
              className="min-w-full min-h-[520px] flex items-center"
            >
              
              {/* CONTENT */}
              <div className="max-w-6xl py-4 px-10 mx-auto">
                <h1 className="text-4xl mb-10 max-auto font-bold text-center">
                    {slide.slogan?.map((word, index) => (
                        index === 1 ? <span key={index} className={cn("p-2 fugaz-one-regular", slide.colorClass)}>{word}</span> : <span key={index}>{word}</span>
                    ))}
                </h1> 
                <div className="flex w-full gap-10">
                    <div>
                        <div className="flex">
                            <div>
                                <p className="text-sm uppercase tracking-widest mb-2">
                                {slide.bigTitle}
                                </p>

                                <h2 className={cn("text-xl md:text-2xl font-bold mb-4", slide.colorClass)}>
                                {slide.title}
                                </h2>
                            </div>
                            <img src="" alt="" />
                        </div>

                        <p className="max-w-xl mb-6">
                        {slide.longDescription}
                        </p>

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

                        <button className={cn("inline-flex items-center gap-2 rounded-full text-white px-6 py-3 font-medium transition min-h-[44px]", 
                            slide.bgClass)}>
                            <Icon className="h-5 w-5" />
                            Découvrir
                        </button>
                    </div>
                    <div>
                        <img src={slide.bgImage} alt={slide.title}
                        className="rounded-2xl" />
                    </div>
                </div>
                
                
              </div>
            </div>
          );
        })}
      </div>

      {/* NAVIGATION */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-800/80 p-3 backdrop-blur hover:bg-blue-800  transition-colors duration-200 shadow-lg"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-800/80 p-3 backdrop-blur hover:bg-blue-800  transition-colors duration-200 shadow-lg"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
