import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Kumaon() {
  const kumaonTreks = [
    {
      id: "pindari-glacier",
      name: "Pindari Glacier Trek",
      altitude: "12,300 ft",
      duration: "7 Days",
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "Walk through legendary Kumaon valleys to the snout of the majestic Pindari Glacier flanked by Nanda Kot and Changuch peaks.",
      link: "/pindari-glacier",
    },
    {
      id: "roopkund",
      name: "Roopkund Mystery Lake Trek",
      altitude: "15,750 ft",
      duration: "8 Days",
      difficulty: "Hard",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      desc: "High-altitude expedition passing through pristine Bedni Bugyal alpine meadows up to the mysterious skeleton lake.",
      link: "/roopkund",
    },
    {
      id: "sundardunga",
      name: "Sundardunga Glacier Trek",
      altitude: "14,200 ft",
      duration: "9 Days",
      difficulty: "Moderate - Hard",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      desc: "The 'Valley of Beautiful Stones' in Kumaon offers intimate views of Maiktoli and Mt. Trishul towers.",
      link: "/sundardunga-glacier",
    },
    {
      id: "ranthang-kharak",
      name: "Ranthang Kharak Trek",
      altitude: "13,100 ft",
      duration: "6 Days",
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      desc: "Offbeat Kumaon trail weaving through ancient oak ridges, riverside camps, and undisturbed shepherd meadows.",
      link: "/ranthang-kharak",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20">
      <Navbar />

      {/* KUMAON HERO BANNER */}
      <section className="relative h-[380px] sm:h-[450px] bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85"
          alt="Kumaon Himalayas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300 bg-amber-900/40 border border-amber-500/30 px-3 py-1 rounded-full w-fit">
            Kumaon Himalayas • Uttarakhand
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight">
            Kumaon Wilderness & Glacial Valleys
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-2xl leading-relaxed">
            Home to Trishul Parvat, Nanda Kot, and legendary glaciated passes. Kumaon offers tranquil, uncrowded Himalayan trails for true expedition lovers.
          </p>
        </div>
      </section>

      {/* TREKS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">FEATURED EXPEDITIONS</p>
          <h2 className="text-3xl font-serif font-bold text-[#142957] mt-1">Explore Kumaon Trekking Routes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kumaonTreks.map((trek) => (
            <div
              key={trek.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#142957]">
                    {trek.duration}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white backdrop-blur-xs px-2.5 py-0.5 rounded-md text-[10px] font-bold">
                    {trek.altitude}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-sm">
                    {trek.difficulty}
                  </span>
                  <h3 className="text-base font-bold text-[#142957] font-serif pt-1">
                    {trek.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {trek.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to={trek.link}
                  className="block text-center rounded-xl bg-[#142957] hover:bg-sky-900 text-white text-xs font-bold py-2.5 transition shadow-xs"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}