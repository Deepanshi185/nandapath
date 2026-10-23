import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { trekItineraries } from "../data/itineraries";

export default function RegionDetail({ slug: propSlug }) {
  const params = useParams();
  const slugKey = propSlug || params.slug || "kedarkantha";
  
  // Get trek data or default to kedarkantha fallback
  const trek = trekItineraries[slugKey] || trekItineraries["kedarkantha"];
  const [activeTab, setActiveTab] = useState("itinerary");

  // Related treks list for "Explore Similar Treks"
  const similarTreks = [
    {
      slug: "kedarkantha",
      title: "Kedarkantha Trek",
      region: "Uttarakhand · Garhwal",
      duration: "5 Days",
      altitude: "12,500 Ft",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
    },
    {
      slug: "har-ki-dun",
      title: "Har Ki Dun Valley",
      region: "Uttarakhand · Garhwal",
      duration: "7 Days",
      altitude: "11,600 Ft",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
    },
    {
      slug: "pindari-glacier",
      title: "Pindari Glacier Trek",
      region: "Uttarakhand · Kumaon",
      duration: "7 Days",
      altitude: "12,300 Ft",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
    }
  ].filter(t => t.slug !== slugKey);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans pb-28 sm:pb-12">
      <Navbar />

      {/* Clean Premium Light Hero Header */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-24 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wide mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>{trek.region}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-full text-xs">
                {trek.region}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {trek.title}
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                {trek.description}
              </p>
            </div>

            {/* Main Featured Photo Box with Reliable Unsplash Backup */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop" 
                alt={trek.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-5 flex flex-col justify-end">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Authentic Himalayan Expedition</p>
                <p className="text-sm font-semibold text-white">Guided mountain routes led by certified local mountaineers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trip Specifications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Duration</p>
            <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{trek.duration}</p>
          </div>
          <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Max Altitude</p>
            <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{trek.altitude}</p>
          </div>
          <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Grade</p>
            <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{trek.grade}</p>
          </div>
          <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Basecamp Hub</p>
            <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{trek.basecamp}</p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="mb-5">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Trail Experience</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
            Key Highlights Of This Trek
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {trek.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
              <span className="text-emerald-500 text-base mt-0.5">✨</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs & Detailed Itinerary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex border-b border-slate-200 bg-white p-1 rounded-xl shadow-xs mb-6 overflow-x-auto">
          <button 
            onClick={() => setActiveTab("itinerary")}
            className={`px-4 sm:px-5 py-2.5 text-xs font-extrabold rounded-lg transition whitespace-nowrap ${
              activeTab === "itinerary" 
                ? "bg-slate-900 text-white shadow-xs" 
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            DAY BY DAY ITINERARY
          </button>
          <button 
            onClick={() => setActiveTab("packing")}
            className={`px-4 sm:px-5 py-2.5 text-xs font-extrabold rounded-lg transition whitespace-nowrap ${
              activeTab === "packing" 
                ? "bg-slate-900 text-white shadow-xs" 
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ESSENTIAL PACKING LIST
          </button>
          <button 
            onClick={() => setActiveTab("inclusions")}
            className={`px-4 sm:px-5 py-2.5 text-xs font-extrabold rounded-lg transition whitespace-nowrap ${
              activeTab === "inclusions" 
                ? "bg-slate-900 text-white shadow-xs" 
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            INCLUSIONS & EXCLUSIONS
          </button>
        </div>

        {/* Tab Content: Itinerary */}
        {activeTab === "itinerary" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-3.5">
              {trek.days.map((item, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">{item.day}: {item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wide mb-3">Expedition Team & Guides</h4>
                <div className="rounded-xl overflow-hidden mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop" 
                    alt="NandaPath Certified Team Guides" 
                    className="w-full h-56 object-cover"
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Our certified local Garhwali & Kumaoni guides ensure 100% safety, high-altitude gear assistance, and local trail insights on every trip.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Packing */}
        {activeTab === "packing" && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">Recommended Mountain Gear</h3>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-2 font-medium">
              <li>Trekking shoes with high ankle support and microspikes (for winter snow).</li>
              <li>3-layer clothing: Thermal innerwear, fleece jacket, and waterproof down jacket.</li>
              <li>50L - 60L rucksack with rain cover.</li>
              <li>UV protection sunglasses and sunblock lotion (SPF 50+).</li>
            </ul>
          </div>
        )}

        {/* Tab Content: Inclusions */}
        {activeTab === "inclusions" && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-extrabold text-emerald-600 mb-2.5">What's Included</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 font-medium">
                <li>✓ All meals during the trek (Vegetarian).</li>
                <li>✓ Dome tent accommodation on twin/triple sharing.</li>
                <li>✓ Certified wilderness mountaineering lead & support staff.</li>
                <li>✓ Trekking permits and forest entry fees.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-rose-600 mb-2.5">What's Excluded</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 font-medium">
                <li>✕ Transport to/from basecamp (available on request).</li>
                <li>✕ Personal insurance & emergency evacuation expenses.</li>
                <li>✕ Personal porter charges for offloading rucksacks.</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Restored: "Explore Similar Treks" Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">More Expeditions</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              Explore Similar Himalayan Treks
            </h2>
          </div>
          <Link to="/" className="text-xs font-bold text-slate-900 hover:underline hidden sm:block">
            View All Treks →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {similarTreks.map((item) => (
            <Link 
              key={item.slug} 
              to={`/${item.slug}`} 
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {item.duration}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold text-emerald-600 uppercase">{item.region}</p>
                  <h3 className="text-base font-extrabold text-slate-900 mt-0.5 group-hover:text-emerald-600 transition">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Altitude: {item.altitude}</span>
                  <span className="text-slate-900 group-hover:translate-x-0.5 transition">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Phone Optimized Floating Mobile Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 z-50 flex items-center gap-2 sm:hidden shadow-lg">
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-2 rounded-xl flex items-center justify-center gap-1 shadow-xs"
        >
          💬 WhatsApp Inquiry
        </a>
        <Link 
          to="/contact"
          className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-2 rounded-xl flex items-center justify-center gap-1 shadow-xs text-center"
        >
          📍 Book Expedition
        </Link>
      </div>
    </div>
  );
}