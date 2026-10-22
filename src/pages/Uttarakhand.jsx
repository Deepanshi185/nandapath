import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import greenValleyGroupImg from "../assets/green-valley-group.jpg";

const uttarakhandTreks = [
  {
    id: "kedarkantha",
    name: "Kedarkantha Trek",
    region: "Garhwal Region",
    duration: "5 Days / 4 Nights",
    altitude: "12,500 Ft",
    discount: "Seasonal Special",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    description:
      "India's premier winter summit trek offering a 360-degree panorama of Swargarohini, Bandarpoonch, and Black Peak.",
    link: "/kedarkantha",
  },
  {
    id: "bali-pass",
    name: "Bali Pass Trek",
    region: "Garhwal Region",
    duration: "8 Days / 7 Nights",
    altitude: "16,207 Ft",
    discount: "Seasonal Special",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description:
      "A thrilling high-altitude crossover trek connecting the ancient Har Ki Dun valley to the sacred Yamunotri shrine.",
    link: "/bali-pass",
  },
  {
    id: "har-ki-dun",
    name: "Har Ki Dun Trek",
    region: "Garhwal Region",
    duration: "7 Days / 6 Nights",
    altitude: "11,600 Ft",
    discount: "Seasonal Special",
    image: greenValleyGroupImg,
    description:
      "Traverse through 2,000-year-old wooden architecture, alpine meadows, and serene riverside campsites in the Valley of Gods.",
    link: "/har-ki-dun",
  },
  {
    id: "pindari-glacier",
    name: "Pindari Glacier Trek",
    region: "Kumaon Region",
    duration: "7 Days / 6 Nights",
    altitude: "12,300 Ft",
    discount: "Seasonal Special",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    description:
      "The legendary gem of Kumaon leading trekkers alongside the roaring Pindar river straight to Zero Point glacier snout.",
    link: "/pindari-glacier",
  },
  {
    id: "gaumukh-tapovan",
    name: "Gaumukh Tapovan Trek",
    region: "Garhwal Region",
    duration: "8 Days / 7 Nights",
    altitude: "14,600 Ft",
    discount: "Seasonal Special",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    description:
      "Journey to the sacred source of the Ganges River and camp on the high-altitude Tapovan meadows right beneath Mt Shivling.",
    link: "/gaumukh-tapovan",
  },
  {
    id: "kwari-pass",
    name: "Kuari Pass Trek",
    region: "Garhwal Region",
    duration: "6 Days / 5 Nights",
    altitude: "12,516 Ft",
    discount: "Seasonal Special",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    description:
      "Lord Curzon's historic route offering front-row vistas of India's highest mountain peaks, including Mt Nanda Devi.",
    link: "/kwari-pass",
  },
  {
    id: "roopkund",
    name: "Roopkund Trek",
    region: "Garhwal / Kumaon Border",
    duration: "8 Days / 7 Nights",
    altitude: "15,750 Ft",
    discount: "Seasonal Special",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description:
      "Cross the magnificent twin alpine lawns of Ali and Bedni Bugyal to reach the high-altitude mystery lake at Mt Trishul.",
    link: "/roopkund",
  },
];

export default function Uttarakhand() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialRegion = searchParams.get("region") || "All";

  const [selectedFilter, setSelectedFilter] = useState(initialRegion);

  const filteredTreks =
    selectedFilter === "All"
      ? uttarakhandTreks
      : uttarakhandTreks.filter((t) => t.region.includes(selectedFilter));

  return (
    <main className="min-h-screen bg-stone-50/50 text-slate-800 font-sans pb-16">
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative pt-24 bg-[#0F172A] text-white">
        <div className="relative min-h-[420px] flex items-center">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=85"
            alt="Uttarakhand Nanda Devi Range"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest">
              Devbhoomi &bull; Land of the Gods
            </span>
            <h1 className="mt-3 text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
              Uttarakhand Expeditions
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Explore soar mountain ridges, sacred glacial origins, ancient pine trails, and untouched alpine bugyals guided by native Himalayan experts.
            </p>
          </div>
        </div>
      </section>

      {/* ENLARGED REGIONAL FILTER TABS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Select Destination Region
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#142957] mt-1">
              Choose Your Trek Region
            </h2>
          </div>

          {/* PROMINENT BIGGER BUTTON TABS */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-md">
            {[
              { id: "All", label: "All Regions" },
              { id: "Garhwal", label: "Garhwal Region" },
              { id: "Kumaon", label: "Kumaon Region" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-5 py-3 text-xs sm:text-sm font-extrabold rounded-xl transition duration-300 cursor-pointer shadow-xs ${
                  selectedFilter === tab.id
                    ? "bg-[#142957] text-white shadow-lg scale-102"
                    : "text-slate-700 hover:text-[#142957] hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TREKS CARDS GRID (PRICES REMOVED) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreks.map((trek) => (
            <div
              key={trek.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Top Badges */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-[#142957] shadow-sm">
                    {trek.region}
                  </span>

                  <span className="absolute top-3 right-3 bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm">
                    {trek.discount}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between text-white text-xs font-medium">
                    <span>⏱ {trek.duration}</span>
                    <span>🏔 {trek.altitude}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-bold text-[#142957]">
                    {trek.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {trek.description}
                  </p>
                </div>
              </div>

              {/* Action Link (Price Hidden For Seasonal Variance) */}
              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Seasonal Custom Rates
                  </span>
                  <span className="text-xs font-bold text-sky-700">
                    Enquire For Dates
                  </span>
                </div>

                <Link
                  to={trek.link}
                  className="bg-[#142957] hover:bg-sky-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition"
                >
                  View Itinerary &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 bg-[#0b1d3b] text-slate-300 text-center py-8 text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} NandaPath Adventures. All rights reserved.</p>
      </footer>
    </main>
  );
}