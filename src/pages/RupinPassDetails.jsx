import { useState } from "react";
import Navbar from "../components/Navbar";

const rupinPassItinerary = [
  {
    day: "Day 1",
    title: "Arrival in Bawta",
    distance: "195 km drive",
    altitude: "2,350 m / 7,700 ft",
    duration: "8-9 hrs drive",
    description: "Cloakroom facilities available at Shimla. Stay in a tea house in Bawta.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 2",
    title: "Bawta to Jakha",
    distance: "5 km trek",
    altitude: "2,750 m / 9,000 ft",
    duration: "4 hrs trek",
    description: "Scenic trail leading to the highest village in the region, Jakha. Stay in a tea house.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 3",
    title: "Jakha to Saruwas Thatch",
    distance: "8 km trek",
    altitude: "3,261 m / 10,700 ft",
    duration: "5-6 hrs trek",
    description: "Trek through pine thickets and river beds to the scenic campsite at Saruwas Thatch.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 4",
    title: "Saruwas Thatch to Dandreyash Thatch",
    distance: "3 km trek",
    altitude: "3,550 m / 11,700 ft",
    duration: "2-3 hrs trek",
    description: "Short trek reaching the spectacular meadow campsite facing the upper waterfalls.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 5",
    title: "Dandreyash Thatch to Upper Waterfall",
    distance: "2 km trek",
    altitude: "4,050 m / 13,300 ft",
    duration: "3-4 hrs trek",
    description: "Thrill-filled climbing section along the snow bridges to the Upper Waterfall camp.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 6",
    title: "Upper Waterfall to Ronti Gad via Rupin Pass",
    distance: "12 km trek",
    altitude: "Rupin Pass: 4,700 m / 15,350 ft | Ronti Gad: 3,750 m / 12,300 ft",
    duration: "10-11 hrs trek",
    description: "The big summit pass cross day! Steep snow ascent through the Rupin gully followed by descent to Ronti Gad campsite.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 7",
    title: "Ronti Gad to Sangla & Drive to Shimla",
    distance: "11 km trek | 215 km drive",
    altitude: "Sangla: 2,650 m / 8,700 ft",
    duration: "5-6 hrs trek | 9-10 hrs drive",
    description: "Descend into the Kinnaur valley at Sangla and drive back towards Shimla.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
  },
];

export default function RupinPassDetails() {
  const [activeTab, setActiveTab] = useState("Itinerary");

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-20">
        <div className="relative min-h-[440px] bg-[#071D3F] text-white overflow-hidden flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85')",
            }}
          />

          <div className="relative mx-auto max-w-7xl w-full px-6 py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                HIMALAYAN PASS TREKS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
                Rupin Pass Trek 2025
              </h1>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                A thrilling crossover trek from Uttarakhand to Himachal featuring three-stage waterfalls, snow bridges, and high-altitude views.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-base">★</span>
                  <span>4.9 (112+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>15,350 ft Max Altitude</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  <span>7 Days / 6 Nights</span>
                </div>
              </div>
            </div>

            {/* Price Badge Card */}
            <div className="bg-white text-slate-800 rounded-2xl p-6 shadow-2xl w-full sm:w-80 border border-slate-100 shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">From</span>
                  <p className="text-2xl font-black text-[#071D3F]">
                    ₹14,500 <span className="text-xs font-normal text-slate-500">/ person</span>
                  </p>
                </div>
                <span className="h-10 w-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-sm">
                  %
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>7 Days | 6 Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Shimla (Starting Point)</span>
                </div>
              </div>

              <a
                href="#booking"
                className="mt-6 block w-full text-center bg-[#071D3F] text-white py-3 rounded-full font-bold text-sm shadow-md hover:bg-sky-800 transition"
              >
                Select Dates &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* SUB NAVIGATION TABS */}
        <div className="bg-white border-b border-slate-200 shadow-sm sticky top-16 z-40">
          <div className="mx-auto max-w-7xl px-6 flex items-center gap-8 text-sm font-semibold text-slate-600">
            {["Overview", "Itinerary", "Inclusions", "Cost", "Dates"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 relative transition ${
                  activeTab === tab ? "text-[#071D3F] font-bold" : "hover:text-[#071D3F]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#071D3F] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-[#071D3F]">Day by Day Itinerary</h2>
            <p className="text-xs text-slate-500 mt-1 mb-8">
              A high-pass crossover adventure across snow bridges, gullies, and Kinnaur valley landscapes.
            </p>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-100 space-y-8">
              {rupinPassItinerary.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 h-8 w-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-sm">
                    {index + 1}
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{item.day}</span>
                        <h3 className="text-base font-bold text-[#071D3F] mt-0.5">{item.title}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 shrink-0 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <span>{item.distance}</span>
                        <span>&bull;</span>
                        <span>{item.altitude}</span>
                        <span>&bull;</span>
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="mt-4 rounded-xl overflow-hidden h-36 w-full">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#071D3F] mb-4">Quick Highlights</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Cross from Garhwal, Uttarakhand to Kinnaur, Himachal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>3-stage Rupin waterfall and thrilling snow gully climb</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Tea-house stays in Jakha, the hanging village</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Cloakroom facility available at Shimla</span>
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 text-center">
              <h3 className="text-lg font-bold text-[#071D3F]">Ready for the adventure?</h3>
              <p className="text-xs text-slate-600 mt-2">
                Book your Rupin Pass trek today and experience the high pass crossing.
              </p>
              <a
                href="#booking"
                className="mt-5 inline-block w-full bg-[#071D3F] text-white py-3 rounded-full font-bold text-xs shadow-md hover:bg-sky-800 transition"
              >
                Select Dates &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}