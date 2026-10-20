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
    <section className="bg-[#0B132B] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-400">
            EXPLORE THE REGIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
            FEEL THE ADVENTURE
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md">
            From snow-capped peaks to high-altitude deserts, choose your next destination and start your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT SIDEBAR: REGION SELECTOR TAB BUTTONS */}
          <div className="lg:col-span-3 space-y-2 flex flex-col justify-center">
            {regionsData.map((reg) => {
              const isActive = reg.id === activeRegionId;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegionId(reg.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl text-xs sm:text-sm font-bold text-left transition cursor-pointer ${
                    isActive
                      ? "bg-sky-700/80 text-white shadow-lg border border-sky-500/50"
                      : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <span className="text-base">
                    {reg.id === "uttarakhand" && "🏔️"}
                    {reg.id === "himachal" && "🏔️"}
                    {reg.id === "kashmir" && "🛡️"}
                    {reg.id === "ladakh" && "⛺"}
                  </span>
                  <span>{reg.name}</span>
                </button>
              );
            })}
          </div>

          {/* MAIN CENTER HERO CARD - FULL CARD IS NOW A DIRECT CLICKABLE ROUTE LINK */}
          <Link
            to={activeRegion.link}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 min-h-[380px] group shadow-2xl block"
          >
            <img
              src={activeRegion.image}
              alt={activeRegion.name}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-extrabold px-3 py-1 rounded-full border border-white/10">
              {activeRegion.count}
            </span>

            {/* BOTTOM TITLE & CLICKABLE ARROW BUTTON */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider">
                  {activeRegion.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  {activeRegion.tagline}
                </p>
              </div>

              {/* ARROW CIRCLE BUTTON */}
              <div
                className="w-12 h-12 rounded-full bg-[#1E293B] group-hover:bg-sky-500 group-hover:text-white border border-slate-600 flex items-center justify-center text-white transition duration-300 group-hover:scale-110 shadow-xl shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* RIGHT SIDEBAR: MINI CARDS */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-3">
            {regionsData
              .filter((r) => r.id !== activeRegionId)
              .map((reg) => (
                <Link
                  key={reg.id}
                  to={reg.link}
                  className="relative rounded-xl overflow-hidden h-28 border border-slate-800 group shadow-md block"
                >
                  <img
                    src={reg.image}
                    alt={reg.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition" />
                  <div className="absolute bottom-3 left-3 text-white">
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