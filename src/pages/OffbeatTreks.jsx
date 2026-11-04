import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const offbeatData = [
  {
    id: "panwali-kantha",
    name: "Panwali Dwar / Kantha Trek",
    region: "Garhwal Region",
    altitude: "3,368 m",
    duration: "4–6 Days",
    difficulty: "Easy–Moderate",
    season: "May–Jun, Oct–Nov, Sep–Nov",
    desc: "High alpine ridge meadow offering panoramic views of Kedarnath, Chaukhamba, and Yamunotri peaks.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    link: "/offbeat/panwali-kantha",
    tag: "High Ridge Meadow",
  },
  {
    id: "satopanth-lake",
    name: "Satopanth Lake Trek",
    region: "Garhwal Region",
    altitude: "4,600 m",
    duration: "8–10 Days",
    difficulty: "Moderate–Hard",
    season: "Jun–Sep, Sep–Nov",
    desc: "A sacred triangular glacial lake located beyond Badrinath under Neelkanth and Chaukhamba peaks.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "/offbeat/satopanth-lake",
    tag: "Sacred Glacial Lake",
  },
  {
    id: "bali-pass",
    name: "Bali Pass Trek",
    region: "Garhwal Region",
    altitude: "4,950 m",
    duration: "9–10 Days",
    difficulty: "Challenging",
    season: "May–Jun, Sep–Oct",
    desc: "An exhilarating alpine pass crossing connecting Har Ki Dun Valley to Yamunotri via Ruinsara Lake.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    link: "/bali-pass",
    tag: "High Altitude Pass",
  },
  {
    id: "kagbhusandi-lake",
    name: "Kagbhusandi Lake Trek",
    region: "Garhwal Region",
    altitude: "4,490 m",
    duration: "6 Days",
    difficulty: "Moderate",
    season: "Jun–Sep",
    desc: "An emerald-green high-altitude lake hidden near Hathi Parbat with rare alpine blooms.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    link: "/offbeat/kagbhusandi-lake",
    tag: "Rare Floral Trail",
  },
  {
    id: "pangarchulla-peak",
    name: "Pangarchulla Peak Trek",
    region: "Garhwal Region",
    altitude: "4,700 m",
    duration: "6–7 Days",
    difficulty: "Moderate–Hard",
    season: "Mar–May, Oct–Nov",
    desc: "A thrilling summit climb near Kuari Pass featuring steep snow ridges and clear Nanda Devi views.",
    image:
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
    link: "/offbeat/pangarchulla-peak",
    tag: "Summit Expedition",
  },
  {
    id: "roopkund",
    name: "Roopkund Mystery Lake",
    region: "Garhwal Region",
    altitude: "4,800 m",
    duration: "6 Nights / 7 Days",
    difficulty: "Moderate–Hard",
    season: "May–Jun, Sep–Oct",
    desc: "The famous Mystery Lake trail passing through Ali and Bedni Bugyal meadows under Trishul Peak.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    link: "/roopkund",
    tag: "Mystery Lake",
  },
  {
    id: "namik-glacier",
    name: "Namik Glacier Trek",
    region: "Kumaon Region",
    altitude: "3,600 m",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    season: "May–Jun, Sep–Nov",
    desc: "A remote wilderness trek in Pithoragarh surrounded by Nanda Kot and Trishul peaks.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    link: "/offbeat/namik-glacier",
    tag: "Kumaon Secret",
  },
  {
    id: "kafni-glacier",
    name: "Kafni Glacier Trek",
    region: "Kumaon Region",
    altitude: "3,853 m",
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    season: "May–Jun, Sep–Oct",
    desc: "East of Pindari Valley, this quiet trek offers expansive meadows and views of Nandakot peak.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "/offbeat/kafni-glacier",
    tag: "Untouched Valley",
  },
];

export default function OffbeatTreks() {
  return (
    <main className="min-h-screen bg-sky-50/50 font-sans text-slate-800">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="bg-[#142957] text-white pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-amber-300 text-[#142957] text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-sm">
            Unexplored Himalayan Routes
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Offbeat Himalayan Expeditions
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-base text-sky-100 font-medium leading-relaxed">
            Discover untouched trails, pristine glacial lakes, and raw alpine passes across Garhwal & Kumaon Himalayas with expert guides.
          </p>
        </div>
      </section>

      {/* TREKS CARDS GRID */}
      <section className="py-10 sm:py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offbeatData.map((trek) => (
            <div
              key={trek.id}
              className="bg-white rounded-3xl overflow-hidden border border-sky-200/80 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* CARD IMAGE CONTAINER */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#142957]/90 backdrop-blur-xs text-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {trek.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#142957] text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
                    {trek.region}
                  </span>
                </div>

                {/* CARD BODY */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-2xl font-black text-[#142957] group-hover:text-sky-600 transition leading-tight">
                    {trek.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {trek.desc}
                  </p>

                  {/* SPECIFICATION DETAILS */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs font-bold">
                    <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100">
                      <span className="block text-[9px] text-sky-800 font-black uppercase">Max Altitude</span>
                      <span className="text-[#142957] text-xs font-black">{trek.altitude}</span>
                    </div>
                    <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100">
                      <span className="block text-[9px] text-sky-800 font-black uppercase">Duration</span>
                      <span className="text-[#142957] text-xs font-black">{trek.duration}</span>
                    </div>
                    <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100">
                      <span className="block text-[9px] text-sky-800 font-black uppercase">Difficulty</span>
                      <span className="text-[#142957] text-xs font-black">{trek.difficulty}</span>
                    </div>
                    <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100">
                      <span className="block text-[9px] text-sky-800 font-black uppercase">Best Season</span>
                      <span className="text-[#142957] text-xs font-black">{trek.season}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD ACTION */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  to={trek.link}
                  className="block w-full text-center rounded-2xl bg-[#142957] hover:bg-sky-900 text-white py-3 text-xs sm:text-sm font-black transition shadow-sm"
                >
                  View Complete Itinerary &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}