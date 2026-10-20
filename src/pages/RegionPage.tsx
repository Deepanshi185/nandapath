import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import frozenTrailImg from "../assets/frozen-trail.jpeg";
// Master Database for All 4 Himalayan Regions
const regionDataMap = {
  // ... uttarakhand, himachal, kashmir ...

  ladakh: {
    title: "Trek in Leh-Ladakh",
    subtitle: "Land of High Passes & Cold Desert Trails",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1920&q=85",
    description: "Leh Ladakh is blessed with awe-inspiring natural beauty, rugged terrains, serene high-altitude lakes, ancient Buddhist monasteries, and world-famous winter expeditions like the Chadar Frozen River Trek.",
    treks: [
      {
        id: "chadar-trek",
        name: "Chadar Frozen River Trek",
        duration: "9 Days",
        altitude: "11,150 Ft",
        price: "₹22,500",
        discount: "15% OFF",
        image: frozenTrailImg, // Using your frozen stream photo here!
        link: "/chadar-trek",
      },
      {
        id: "markha-valley",
        name: "Markha Valley Trek",
        duration: "7 Days",
        altitude: "17,060 Ft",
        price: "₹16,800",
        discount: "18% OFF",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        link: "/markha-valley",
      },
      {
        id: "stok-kangri",
        name: "Stok Kangri Trek",
        duration: "8 Days",
        altitude: "20,180 Ft",
        price: "₹24,000",
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        link: "/stok-kangri",
      },
    ],
  },
};
const otherRegionsList = [
  { id: "uttarakhand", name: "Uttarakhand Trek", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80", route: "/uttarakhand" },
  { id: "himachal", name: "Himachal Trek", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", route: "/himachal" },
  { id: "kashmir", name: "Kashmir Trek", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80", route: "/kashmir" },
  { id: "ladakh", name: "Ladakh Tour", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80", route: "/region/ladakh" },
];

export default function RegionPage({ regionOverride }) {
  const { region } = useParams();
  
  const activeKey = regionOverride || region || "uttarakhand";
  const currentRegion = regionDataMap[activeKey] || regionDataMap["uttarakhand"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative pt-24 bg-[#0F172A] text-white">
        <div className="relative min-h-[380px] flex items-center">
          <img
            src={currentRegion.heroImage}
            alt={currentRegion.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {currentRegion.subtitle}
            </span>
            <h1 className="mt-3 text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
              {currentRegion.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {currentRegion.description}
            </p>
          </div>
        </div>
      </section>

      {/* TREKS GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 border-b border-slate-200 pb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Featured Expeditions</p>
          <h2 className="text-2xl font-bold text-[#142957]">Choose Your Trek</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentRegion.treks.map((trek) => (
            <div
              key={trek.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute top-3 right-3 bg-rose-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm">
                  {trek.discount}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold uppercase tracking-wide leading-tight drop-shadow-sm mb-1">
                    {trek.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-medium text-slate-200">
                    <span>⏱ {trek.duration}</span>
                    <span>🏔 {trek.altitude}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">From</span>
                  <span className="text-lg font-extrabold text-[#142957]">{trek.price}</span>
                </div>

                <Link
                  to={trek.link}
                  className="bg-[#142957] hover:bg-sky-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-xs"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALSO CHECK / EXPLORE OTHER REGIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-t border-slate-200">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600">More Destinations</p>
          <h2 className="text-2xl font-bold text-[#142957]">Also Check</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherRegionsList
            .filter((r) => r.id !== activeKey)
            .map((reg) => (
              <Link
                key={reg.id}
                to={reg.route}
                className="group relative rounded-2xl overflow-hidden h-40 border border-slate-200 shadow-sm transition hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={reg.image}
                  alt={reg.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-sm uppercase tracking-wider">{reg.name}</h3>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1d3b] text-slate-300 text-center py-8 text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} NandaPath Adventures. All rights reserved.</p>
      </footer>
    </main>
  );
}