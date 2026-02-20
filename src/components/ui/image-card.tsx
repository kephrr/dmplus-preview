import { useState } from "react";
import { Play, Star, TrendingUp, Check } from "lucide-react";

interface ImageCardProps {
  athleteImage?: string;
  shoeImage?: string;
  price?: number;
  showPrice?: boolean;
}

export default function ImageCard({
  athleteImage = "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80",
  shoeImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&q=80",
  price = 849.99,
  showPrice = true,
}: ImageCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      
    >
      <div className="relative w-[340px] h-[520px]">
        {/* Main card with athlete photo */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(160deg, #e05c2a 0%, #c94a1a 100%)" }}
        >
          {/* Athlete image placeholder */}
          <div className="w-full h-full relative">
            <img
              src={athleteImage}
              alt="Athlete"
              className="w-full h-full object-cover object-top"
              style={{ filter: "brightness(0.9)" }}
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                <Play
                  size={22}
                  className="text-orange-500 ml-1"
                  fill="#f97316"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Sales badge – top right */}
        <div
          className="absolute top-4 right-4 rounded-2xl px-4 py-3 text-right"
          style={{
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          }}
        >
          <div className="flex items-center gap-1 mb-0.5">
            <TrendingUp size={10} className="text-gray-400" strokeWidth={2.5} />
            <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
              Up to
            </span>
          </div>
          <div
            className="text-4xl font-black leading-none"
            style={{ fontFamily: "'Georgia', serif", color: "#111" }}
          >
            60%
          </div>
          <p className="text-[11px] text-gray-500 font-medium mt-0.5 leading-tight">
            More sales<br />this week
          </p>
        </div>

        {/* Checkbox pills – left side */}
        <div className="absolute top-10 left-4 flex flex-col gap-2">
          {[
            { label: "How is the fit?", checked: true, color: "#ef4444" },
            { label: "Do you like the design?", checked: true, color: "#3b82f6" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full px-3 py-2"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            >
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: item.color }}
              >
                <Check size={11} color="white" strokeWidth={3} />
              </div>
              <span className="text-[12px] font-semibold text-gray-700 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Product card – bottom right */}
        <div
          className="absolute bottom-5 right-4 left-12 rounded-2xl p-3 flex items-center gap-3"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          {/* Shoe image */}
          <div
            className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
            style={{ background: "#f5f5f5" }}
          >
            <img
              src={shoeImage}
              alt="Nike Jordan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold text-gray-800 leading-tight">
              Nike Shoes<br />Jordan
            </p>
            {showPrice && (
              <p
                className="text-xl font-black mt-0.5 leading-none"
                style={{ color: "#111", fontFamily: "'Georgia', serif" }}
              >
                ${price.toFixed(2)}
              </p>
            )}
            <div className="flex items-center gap-1 mt-1">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: "#f97316" }}
              >
                <Star size={11} fill="white" color="white" />
              </div>
              <span className="text-[12px] font-bold text-gray-700">4.6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}