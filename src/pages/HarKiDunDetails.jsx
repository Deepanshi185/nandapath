import { useState } from "react";
import Navbar from "../components/Navbar";

const harKiDunItinerary = [
  {
    day: "Day 1",
    title: "Drive from Dehradun to Kotgaon",
    distance: "195 km",
    altitude: "6,400 ft (Basecamp: Kotgaon)",
    duration: "9-10 hrs",
    description:
      "Pickup for Nandapath trekkers at Prince Chowk, Dehradun (6:30 am). Transport provided from Prince Chowk. Overnight stay at Kotgaon basecamp.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 2",
    title: "Kotgaon to Dharkot & Trek to Gangaad",
    distance: "2.6 km trek",
    altitude: "6,313 ft to 7,753 ft",
    duration: "1.5 hrs drive | 1.5 hrs trek",
    description:
      "Drive from Kotgaon to Dharkot (1.5–2 hrs). Gradual descent trek from Dharkot to Gangaad. Difficulty: Easy-Moderate.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 3",
    title: "Gangaad to Kalkatiyadhar via Osla",
    distance: "8.4 km trek",
    altitude: "5,553 ft to 9,977 ft (Gain)",
    duration: "6 hrs trek",
    description:
      "Trek through ancient wooden villages including Osla. Ascend steadily to Kalkatiyadhar. Difficulty: Easy-Moderate.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 4",
    title: "Kalkatiyadhar to Har Ki Dun to Boslo",
    distance: "10.5 km trek",
    altitude: "9,977 ft to 11,600 ft to 10,412 ft",
    duration: "8 hrs trek",
    description:
      "Tricky ridge walk from Kalkatiyadhar to Boslo, followed by a gradual walk to the ancient Har Ki Dun valley and back to Boslo camp.",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 5",
    title: "Boslo to Devsu Thatch",
    distance: "5.1 km trek",
    altitude: "10,502 ft to 9,878 ft (Descent)",
    duration: "5 hrs trek",
    description:
      "Gradual descent trek through pine meadows and lush thickets from Boslo to Devsu Thatch. Difficulty: Easy-Moderate.",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 6",
    title: "Devsu Thatch to Dharkot & Drive to Kotgaon",
    distance: "10.3 km trek",
    altitude: "9,878 ft to 7,709 ft to 8,265 ft",
    duration: "6-7 hrs trek",
    description:
      "Gradual descent till Gangaad followed by a steep ascent to Dharkot. Drive back to Kotgaon basecamp. Difficulty: Moderate.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    day: "Day 7",
    title: "Drive Kotgaon to Dehradun",
    distance: "195 km drive",
    altitude: "Drop at Dehradun",
    duration: "9-10 hrs drive",
    description:
      "Return drive from Kotgaon to Dehradun. Dropoff for Nandapath trekkers at Prince Chowk, Dehradun by 7:00 PM.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HarKiDunDetails() {
  const [activeTab, setActiveTab] = useState("Itinerary");

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION WITH BLUE CONTAINER HEADER */}
      <section className="relative pt-20">
        <div className="relative min-h-[440px] bg-[#071D3F] text-white overflow-hidden flex items-center">
          {/* Background Mountain Photo Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85')",
            }}
          />

          <div className="relative mx-auto max-w-7xl w-full px-6 py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                HIMALAYAN TREKS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-2">
                Har Ki Dun Trek 2025
              </h1>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Ancient wooden villages, cradle-shaped alpine valleys, and breathtaking views of Swargarohini peaks.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-base">★</span>
                  <span>4.8 (145+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>11,600 ft Max Altitude</span>
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

            {/* Floating Price Card (Right) */}
            <div className="bg-white text-slate-800 rounded-2xl p-6 shadow-2xl w-full sm:w-80 border border-slate-100 shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">From</span>
                  <p className="text-2xl font-black text-[#071D3F]">
                    ₹10,500 <span className="text-xs font-normal text-slate-500">/ person</span>
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
                  <span>Dehradun (Pickup Point)</span>
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

      {/* CONTENT AREA: ITINERARY & SIDEBAR */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Day by Day Timeline */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-[#071D3F]">Day by Day Itinerary</h2>
            <p className="text-xs text-slate-500 mt-1 mb-8">
              A journey through forests, ridges, and ancient mountain villages.
            </p>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-100 space-y-8">
              {harKiDunItinerary.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Circle */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 h-8 w-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-sm">
                    {index + 1}
                  </div>

                  {/* Card Container */}
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

          {/* Right Column: Quick Highlights & Call to Action */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#071D3F] mb-4">Quick Highlights</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Panoramic views of Swargarohini & Jaundhar glacier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Explore 2,000-year-old wooden houses in Osla village</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Pickup & Dropoff at Prince Chowk, Dehradun</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  <span>Campsites in pristine meadows & pine clearings</span>
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 text-center">
              <h3 className="text-lg font-bold text-[#071D3F]">Ready for the adventure?</h3>
              <p className="text-xs text-slate-600 mt-2">
                Book your Har Ki Dun trek today and experience the magic of the Himalayas.
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