import { useState } from "react";
import { Link } from "react-router-dom";

const regionsData = [
  {
    id: "uttarakhand",
    name: "UTTARAKHAND",
    tagline: "Alpine lakes, lush valleys, timeless trails.",
    count: "18+ Treks",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    link: "/uttarakhand",
  },
  {
    id: "himachal",
    name: "HIMACHAL PRADESH",
    tagline: "Snow-capped passes, pine forests, ancient temples.",
    count: "14+ Treks",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    link: "/himachal",
  },
  {
    id: "kashmir",
    name: "JAMMU & KASHMIR",
    tagline: "Paradise of alpine turquoise lakes & high tarns.",
    count: "8+ Treks",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    link: "/kashmir",
  },
  {
    id: "ladakh",
    name: "LADAKH",
    tagline: "High altitude desert passes, Chadar trek & monasteries.",
    count: "6+ Treks",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    link: "/region/ladakh",
  },
];

export default function ExploreRegionsSection() {
  const [activeRegionId, setActiveRegionId] = useState("uttarakhand");

  const activeRegion =
    regionsData.find((r) => r.id === activeRegionId) || regionsData[0];

  return (
    <section className="bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600">
            EXPLORE THE REGIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-[#142957]">
            FEEL THE ADVENTURE
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-md">
            From snow-capped peaks to high-altitude deserts, choose your next destination and start your journey.
          </p>
        </div>

        {/* 3-COLUMN EQUAL-HEIGHT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[460px]">
          
          {/* LEFT COLUMN: 4 BUTTONS */}
          <div className="lg:col-span-3 flex flex-col gap-3 h-full justify-between">
            {regionsData.map((reg) => {
              const isActive = reg.id === activeRegionId;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegionId(reg.id)}
                  className={`w-full flex-1 flex items-center gap-3 px-4 rounded-2xl text-xs sm:text-sm font-bold text-left transition cursor-pointer border ${
                    isActive
                      ? "bg-[#142957] text-white shadow-md border-[#142957]"
                      : "bg-slate-50 text-slate-700 hover:text-[#142957] hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  <span className="text-base">
                    {reg.id === "uttarakhand" && "📈"}
                    {reg.id === "himachal" && "🏔️"}
                    {reg.id === "kashmir" && "🛡️"}
                    {reg.id === "ladakh" && "⛺"}
                  </span>
                  <span>{reg.name}</span>
                </button>
              );
            })}
          </div>

          {/* CENTER COLUMN: MAIN SHOWCASE CARD */}
          <Link
            to={activeRegion.link}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-slate-200 h-full group shadow-lg flex flex-col justify-between p-6 block min-h-[350px] lg:min-h-0"
          >
            <img
              src={activeRegion.image}
              alt={activeRegion.name}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

            <div className="relative z-10 flex justify-end">
              <span className="bg-white/90 backdrop-blur-md text-[#142957] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                {activeRegion.count}
              </span>
            </div>

            <div className="relative z-10 flex items-end justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider">
                  {activeRegion.name}
                </h3>
                <p className="text-xs text-slate-200 font-medium mt-1">
                  {activeRegion.tagline}
                </p>
              </div>

              <div className="w-11 h-11 rounded-full bg-white text-[#142957] group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center transition duration-300 group-hover:scale-110 shadow-lg shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* RIGHT COLUMN: 3 CARDS WITH flex-1 TO FILL EXACT HEIGHT */}
          <div className="lg:col-span-3 flex flex-col gap-3 h-full justify-between">
            {regionsData
              .filter((r) => r.id !== activeRegionId)
              .map((reg) => (
                <Link
                  key={reg.id}
                  to={reg.link}
                  className="relative flex-1 h-full rounded-2xl overflow-hidden border border-slate-200 group shadow-sm hover:shadow-md transition flex items-end p-4 block"
                >
                  <img
                    src={reg.image}
                    alt={reg.name}
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition" />
                  <div className="relative z-10 text-white">
                    <h4 className="font-bold text-xs uppercase tracking-wider">{reg.name}</h4>
                  </div>
                </Link>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}