import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import judaKaTalabImg from '../assets/juda-ka-talab.jpeg';

export default function TrekDetail() {
  const [activeTab, setActiveTab] = useState("itinerary");
  const [activePackingTab, setActivePackingTab] = useState("clothing");
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappNumber = "+91 98765 43210";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const trekData = {
    title: "Kedarkantha Winter Trek",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Kedarkantha is one of the premier winter snow treks in India. Starting from the historic wooden village of Sankri, the trail takes you through pine forests, frozen lakes, and ridge walks leading to a 360-degree panoramic view of Himalayan peaks like Swargarohini, Black Peak, and Bandarpoonch.",

    specifications: [
      { label: "Duration", value: "5 Days / 4 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "12,500 ft / 3,810 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Easy to Moderate", icon: "📈" },
      { label: "Best Season", value: "Dec - April (Snow Season)", icon: "❄️" },
      { label: "Basecamp Hub", value: "Sankri Village (6,400 ft)", icon: "📍" },
    ],

    keyHighlights: [
      "Witness a breathtaking 360-degree sunrise view from the 12,500 ft Kedarkantha summit over Swargarohini & Bandarpoonch.",
      "Camp beside Juda Ka Talab, a high-altitude alpine lake surrounded by dense oak and pine forests that freezes in peak winter.",
      "Trek through ancient Garhwali wooden villages, apple orchards, and pristine snow-laden forest glades.",
      "Ideal for beginners and families seeking an accessible, rewarding winter snow summit experience.",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Dehradun to Sankri Basecamp",
        distance: "200 km drive (approx 8-9 hours)",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Scenic drive along Yamuna & Tons river, historic wooden village arrival, briefing & gear check.",
        details:
          "Assemble at Dehradun Railway Station early morning. The drive winds along river valleys through Mussoorie and Purola into Sankri. Overnight stay in rustic mountain homestays.",
      },
      {
        day: "Day 2",
        title: "Trek from Sankri to Juda Ka Talab",
        distance: "4 km trek (approx 4-5 hours)",
        altitude: "9,100 ft / 2,773 m",
        highlights: "Dense pine & maple forest trail, crossing wooden bridges, camping beside a high-altitude lake.",
        details:
          "Begin your trek past local apple orchards and climb into dense pine forests. Reach Juda Ka Talab, a high-altitude alpine lake surrounded by towering pine trees and dense woods.",
        image: judaKaTalabImg,
        caption: "Campsite View: Juda Ka Talab nestled within dense oak and pine wilderness.",
        locationTag: "Juda Ka Talab • 9,100 ft"
      },
      {
        day: "Day 3",
        title: "Juda Ka Talab to Kedarkantha Basecamp",
        distance: "4 km trek (approx 3-4 hours)",
        altitude: "11,250 ft / 3,429 m",
        highlights: "Open ridge walks, panoramic views of Swargarohini & Bandarpoonch, snow camp night under the stars.",
        details:
          "A gradual steep ascent through open glades and pine ridges. As you reach basecamp, enjoy towering views of snow-capped Himalayan peaks around sunset.",
      },
      {
        day: "Day 4",
        title: "Basecamp to Kedarkantha Summit & Descend to Hargaon",
        distance: "6 km trek (approx 7-8 hours)",
        altitude: "12,500 ft / 3,810 m (Summit)",
        highlights: "Early 3:00 AM summit push, sunrise over Himalayan massifs, 360-degree peak panorama.",
        details:
          "Wake up early for the summit push under starry skies. Climb the snow ridge to reach the summit shrine at 12,500 ft just in time for sunrise. Descend down to Hargaon campsite.",
      },
      {
        day: "Day 5",
        title: "Descend from Hargaon to Sankri & Drive to Dehradun",
        distance: "6 km trek + 200 km drive back",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Final forest descent, certificate distribution at Sankri, evening arrival in Dehradun.",
        details:
          "Trek down through pine forests back to Sankri village. Receive your completion certificates and board the transport back to Dehradun.",
      },
    ],

    packingList: {
      clothing: [
        { name: "Full Trekking Pants (2)", desc: "Quick-dry stretchable material", icon: "👖" },
        { name: "Heavy Down/Puffer Jacket (1)", desc: "Rated for -5°C to -10°C sub-zero nights", icon: "🧥" },
        { name: "Thermal Top & Bottom (2 Pairs)", desc: "Merino wool or synthetic thermal base layer", icon: "👕" },
        { name: "Fleece Jacket / Mid-Layer (1)", desc: "Breathable insulation for day walks", icon: "🥼" },
        { name: "Waterproof Rain Jacket (1)", desc: "Windproof & snow-resistant outer layer", icon: "🌧️" },
      ],
      gear: [
        { name: "Ankle-Support Trekking Boots", desc: "High-ankle grip boots with snow resistance", icon: "🥾" },
        { name: "50L-60L Main Rucksack", desc: "With waterproof rain cover", icon: "🎒" },
        { name: "10L-20L Summit Daypack", desc: "For water & jacket on summit day", icon: "🎒" },
        { name: "Trekking Poles (Pair)", desc: "Essential for snow balance and downhill support", icon: "🦯" },
        { name: "LED Headlamp", desc: "For 3:00 AM summit push (with extra batteries)", icon: "🔦" },
      ],
      accessories: [
        { name: "UV Protection Sunglasses", desc: "Category 3/4 protection against snow glare", icon: "🕶️" },
        { name: "Waterproof Outer Gloves", desc: "Heavy outer gloves + inner fleece gloves", icon: "🧤" },
        { name: "Woolen Beanie & Neck Gaiter", desc: "Protects ears & neck against sub-zero winds", icon: "🧢" },
        { name: "Sunscreen (SPF 50+) & Lip Balm", desc: "Essential for high-altitude UV rays", icon: "🧴" },
        { name: "Insulated Thermos Bottle (1L)", desc: "Keeps drinking water warm at high camps", icon: "🥤" },
      ],
      medical: [
        { name: "Govt ID & Medical Form", desc: "Government ID + Doctor's Fitness Certificate", icon: "📄" },
        { name: "Power Bank (10,000–20,000 mAh)", desc: "Cold drains phone batteries quickly", icon: "🔋" },
        { name: "Personal First Aid & Meds", desc: "Diamox, personal meds, band-aids, ORS sachets", icon: "🩹" },
      ],
    },

    inclusions: [
      "Certified Himalayan Trek Leaders & Support Staff",
      "Dome Tents, Insulated Sleeping Bags & Mats",
      "Nutritious Vegetarian Meals & Evening Tea/Snacks",
      "First Aid Kit, Oxygen Cylinders & Oximeter Monitoring",
      "Forest Permits & Trekking Licences",
    ],
    exclusions: [
      "Transport from Dehradun to Sankri (Available as add-on)",
      "Personal Backpack Offloading Charges",
      "Personal Expenses or Emergency Evacuation",
    ],

    similarTreks: [
      {
        name: "Har Ki Dun Trek",
        region: "Garhwal • Uttarakhand",
        duration: "7 Days",
        altitude: "11,800 ft",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        link: "/har-ki-dun",
      },
      {
        name: "Bali Pass Trek",
        region: "Garhwal • Uttarakhand",
        duration: "8 Days",
        altitude: "16,200 ft",
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=600&q=80",
        link: "/bali-pass",
      },
      {
        name: "Kwari Pass Trek",
        region: "Garhwal • Uttarakhand",
        duration: "6 Days",
        altitude: "12,516 ft",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        link: "/kwari-pass",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 pt-20 pb-24 relative">
      <Navbar />

      {/* HERO BANNER SECTION */}
      <section className="bg-[#142957] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-md border border-white/20">
              {trekData.region}
            </span>
            <h1 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
              {trekData.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal pt-1 max-w-2xl">
              {trekData.description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] sm:aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85"
                alt={trekData.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. KEY TRIP SPECIFICATIONS */}
      <section className="bg-white border-b border-slate-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-4 pb-2 border-b border-slate-200/80">
              KEY TRIP SPECIFICATIONS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {trekData.specifications.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5"
                >
                  <span className="text-2xl p-2 bg-sky-50 rounded-lg shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-xs sm:text-sm font-bold text-[#142957]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED KEY HIGHLIGHTS SECTION */}
      <section className="bg-white border-b border-slate-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              TRAIL EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#142957] mt-2">
              Key Highlights Of This Trek
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {trekData.keyHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 flex items-start gap-3"
              >
                <span className="text-sky-600 text-lg font-bold shrink-0">✨</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RELATIVE NON-STICKY TAB NAVIGATION */}
      <section className="bg-white border-b border-slate-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-base font-bold text-[#142957]">
          {["itinerary", "packing", "inclusions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 uppercase tracking-wider text-xs sm:text-sm border-b-3 transition cursor-pointer ${
                activeTab === tab
                  ? "border-[#142957] text-[#142957] font-extrabold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab === "itinerary" && "Day by Day Itinerary"}
              {tab === "packing" && "Essential Packing List"}
              {tab === "inclusions" && "Inclusions & Exclusions"}
            </button>
          ))}
        </div>
      </section>

      {/* MAIN TABBED CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* TAB 1: DAY BY DAY ITINERARY WITH RIGHT SIDE PHOTO */}
        {activeTab === "itinerary" && (
          <div className="space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
                TRAIL BREAKDOWN
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#142957] mt-2">
                Detailed Day-by-Day Route
              </h2>
            </div>

            {/* FULL GRID FILLING THE ENTIRE CONTAINER WIDTH */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: TIMELINE (7 COLS) */}
              <div className="lg:col-span-7 relative border-l-2 border-sky-200 ml-4 space-y-8 pl-6 sm:pl-8">
                {trekData.itinerary.map((day, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-3 h-7 w-7 rounded-full bg-[#142957] text-white text-xs font-bold flex items-center justify-center ring-4 ring-white shadow-xs">
                      {idx + 1}
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition duration-300 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-md">
                            {day.day}
                          </span>
                          <h3 className="text-base font-sans font-bold text-[#142957]">
                            {day.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {day.details}
                      </p>

                      <div className="text-xs font-semibold text-slate-500 flex gap-4 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200/60">
                        <span>🏔️ Altitude: {day.altitude}</span>
                        <span>🚶 Distance: {day.distance}</span>
                      </div>

                      <div className="text-xs font-medium text-[#142957] bg-sky-50/60 p-3 rounded-xl border border-sky-100">
                        <strong className="text-sky-700">✨ Highlights:</strong> {day.highlights}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN: STICKY PHOTO PREVIEW CARD (5 COLS) */}
              <div className="lg:col-span-5 sticky top-28 space-y-4">
                <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-md">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-xs font-bold text-[#142957] uppercase tracking-wider">
                      Featured Trail View
                    </span>
                    <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      Day 2 Stopover
                    </span>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-slate-200 relative group">
                    <img 
                      src={judaKaTalabImg} 
                      alt="Juda Ka Talab Campsite" 
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 right-3 bg-[#142957]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-md border border-white/20">
                      📍 Juda Ka Talab • 9,100 ft
                    </span>
                  </div>

                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-600 leading-relaxed">
                    <strong>📷 Campsite Highlight:</strong> High-altitude alpine lake surrounded by oak and pine forests. In peak winter, the lake surface turns into solid ice.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: ESSENTIAL PACKING LIST */}
        {activeTab === "packing" && (
          <div className="space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
                WHAT TO PACK
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#142957] mt-2">
                Himalayan Trek Preparation Checklist
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
              {Object.keys(trekData.packingList).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePackingTab(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase transition cursor-pointer ${
                    activePackingTab === key
                      ? "bg-[#142957] text-white shadow-xs"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {trekData.packingList[activePackingTab].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-sky-300 transition flex items-start gap-4"
                >
                  <div className="text-2xl p-2.5 bg-sky-50 rounded-xl border border-sky-100 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#142957]">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INCLUSIONS & EXCLUSIONS */}
        {activeTab === "inclusions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 bg-emerald-50/20 shadow-xs space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-emerald-900 flex items-center gap-2">
                <span>✅</span> What's Included
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                {trekData.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-rose-200/80 bg-rose-50/20 shadow-xs space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-rose-900 flex items-center gap-2">
                <span>❌</span> What's Not Included
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                {trekData.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 4. TREK ROUTE MAP SECTION */}
        <section className="pt-8 border-t border-slate-100">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              GEOGRAPHIC ROUTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#142957] mt-2">
              Trek Route Map & Elevation Profile
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden p-4 shadow-xs">
            <iframe
              title="Kedarkantha Trek Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-80 sm:h-96 rounded-xl border border-slate-200"
              loading="lazy"
            />
            <div className="mt-3 flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold text-slate-600 px-2">
              <span>📍 Route: Sankri → Juda Ka Talab → Basecamp → Summit (12,500 ft) → Hargaon → Sankri</span>
              <span className="text-[#142957]">Total Trail Distance: 20 KM</span>
            </div>
          </div>
        </section>

        {/* 5. EXPLORE SIMILAR TREKS */}
        <section className="pt-8 border-t border-slate-100">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              RELATED EXPEDITIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#142957] mt-2">
              Explore Similar Himalayan Treks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trekData.similarTreks.map((trek, idx) => (
              <Link
                key={idx}
                to={trek.link}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-sky-300 transition flex flex-col justify-between"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#142957] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {trek.duration}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-xs font-bold text-sky-700">{trek.region}</span>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-[#142957] group-hover:text-sky-600 transition">
                    {trek.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Altitude: {trek.altitude}</p>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#142957]">
                  <span>View Itinerary</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-lg border border-emerald-400/30 flex items-center gap-2 transition hover:scale-105 cursor-pointer"
        >
          <span>💬</span>
          <span>WhatsApp Inquiry</span>
        </button>
        <Link
          to="/contact"
          className="bg-[#142957] hover:bg-sky-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg border border-white/20 flex items-center gap-2 transition hover:scale-105"
        >
          <span>📍</span>
          <span>Book Expedition</span>
        </Link>
      </div>

      {/* WHATSAPP CONTACT NUMBER POPUP MODAL */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto">
                💬
              </div>
              <h3 className="text-lg font-bold text-[#142957]">Direct WhatsApp Support</h3>
              <p className="text-xs text-slate-500">
                Connect directly with our Lead Expedition Manager for instant booking details & customized batches.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between mt-4">
                <span className="font-mono text-sm font-bold text-slate-800">{whatsappNumber}</span>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs bg-[#142957] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-sky-900 transition cursor-pointer"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>

              <a
                href={`https://wa.me/919876543210?text=Hi%20NandaPath,%20I%20want%20to%20inquire%20about%20Kedarkantha%20Trek`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl shadow-xs transition mt-2"
              >
                Open WhatsApp Chat &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}