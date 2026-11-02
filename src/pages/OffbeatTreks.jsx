import React from "react";
import { Link } from "react-router-dom";

const offbeatData = [
  {
    id: "namik-glacier",
    name: "Namik Glacier Trek",
    region: "Kumaon Region",
    altitude: "3,600 m",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    season: "May–Jun, Sep–Nov",
    desc: "A pristine wilderness trek in Pithoragarh surrounded by Nanda Devi, Nanda Kot, and Trishul peaks, passing ancient Kumaoni villages.",
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
    desc: "Situated east of the Pindari Valley, this quiet trek offers expansive Himalayan meadows, rhododendron blooms, and views of Nandakot peak.",
    link: "/offbeat/kafni-glacier",
    tag: "Untouched Valley",
  },
  {
    id: "panwali-kantha",
    name: "Panwali Kantha Trek",
    region: "Garhwal Region",
    altitude: "3,368 m",
    duration: "4–6 Days",
    difficulty: "Easy–Moderate",
    season: "May–Jun, Sep–Nov",
    desc: "Famous for high alpine ridge meadows offering panoramic views of Kedarnath, Chaukhamba, and Yamunotri mountain ranges.",
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
    desc: "A sacred triangular glacial lake beyond Badrinath nestled beneath Neelkanth, Chaukhamba, and Swargarohini peaks.",
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
    desc: "An exhilarating alpine pass crossing from Har Ki Dun Valley over to Yamunotri via the pristine Ruinsara Lake.",
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
    desc: "An emerald-green high-altitude lake hidden near Hathi Parbat, carpeted with rare Brahma Kamal flowers during monsoon.",
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
    desc: "A thrilling summit climb near Kuari Pass with exhilarating snow ridges and 360-degree views of Nanda Devi.",
    link: "/offbeat/pangarchulla-peak",
    tag: "Summit Expedition",
  },
  {
    id: "roopkund",
    name: "Roopkund Trek",
    region: "Garhwal Region",
    altitude: "4,800 m",
    duration: "6 Nights / 7 Days",
    difficulty: "Moderate–Hard",
    season: "May–Jun, Sep–Oct",
    desc: "The famous Mystery Lake trail passing through Ali and Bedni Bugyal meadows under the shadow of Trishul Peak.",
    link: "/roopkund",
    tag: "Mystery Lake",
  },
];

export default function OffbeatTreks() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-sky-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <span className="bg-amber-300 text-[#142957] text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-xs">
            Unexplored & Raw Himalayan Trails
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#142957] tracking-tight">
            Offbeat Himalayan Expeditions
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
            Escape overcrowded commercial commercial routes. Journey deep into pristine Garhwal alpine meadows and quiet Kumaon glacial valleys with certified mountain leaders.
          </p>
        </div>

        {/* TREKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offbeatData.map((trek) => (
            <div
              key={trek.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
                    {trek.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{trek.region}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#142957] group-hover:text-sky-600 transition">
                  {trek.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {trek.desc}
                </p>

                {/* STATS TABLE */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100 text-xs font-bold text-slate-700">
                  <div className="bg-sky-50/70 rounded-xl p-2.5">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Max Altitude</span>
                    <span className="text-[#142957]">{trek.altitude}</span>
                  </div>
                  <div className="bg-sky-50/70 rounded-xl p-2.5">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Duration</span>
                    <span className="text-[#142957]">{trek.duration}</span>
                  </div>
                  <div className="bg-sky-50/70 rounded-xl p-2.5">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Difficulty</span>
                    <span className="text-[#142957]">{trek.difficulty}</span>
                  </div>
                  <div className="bg-sky-50/70 rounded-xl p-2.5">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Best Season</span>
                    <span className="text-[#142957]">{trek.season}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to={trek.link}
                  className="block w-full text-center rounded-full bg-[#142957] hover:bg-sky-900 text-white py-3 text-xs sm:text-sm font-black transition shadow-sm"
                >
                  View Complete Itinerary &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}