import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

// Local Asset Imports
import judaKaTalabImg from "../assets/juda-ka-talab.jpeg";
import summitShrineImg from "../assets/summit-shrine.jpeg"; 
import basecampImg from "../assets/basecamp.jpeg";
import campsiteMealImg from "../assets/campsite-meal.jpeg";
import judaGroupImg from "../assets/juda-group.jpeg";
import groupBatchImg from "../assets/group-batch2.jpeg"; // Authentic Sankri / Mountain Batch Photo

const nandaDeviImg =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80";
const harKiDunBannerImg =
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"; // Authentic Swargarohini & Har Ki Dun Valley

const treksDatabase = {
  "kedarkantha": {
    title: "Kedarkantha Winter Trek",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Kedarkantha is India's top winter snow trek starting from Sankri wooden village, leading to Juda Ka Talab frozen lake and 360-degree summit views.",
    bannerImage: summitShrineImg,
    sideImage: groupBatchImg,
    specifications: [
      { label: "Duration", value: "5 Days / 4 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "12,500 ft / 3,810 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Easy to Moderate", icon: "📈" },
      { label: "Best Season", value: "Dec - April (Snow)", icon: "❄️" },
      { label: "Basecamp Hub", value: "Sankri Village", icon: "📍" },
    ],
    inclusions: [
      "All vegetarian meals during the trek freshly cooked at high camps",
      "Accommodation in all-weather dome tents / Sankri basecamp homestay",
      "Certified Mountaineering Expedition Leader & Local Support Crew",
      "Microspikes, gaiters, safety oxygen gear & pulse oximeter",
      "Forest permits, entry charges & camping permits",
    ],
    exclusions: [
      "Backpack offloading charges",
      "Personal clothing & personal trekking gear",
      "Travel insurance & emergency evacuation charges",
      "Any transport / meal costs incurred outside the itinerary",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Dehradun to Sankri Basecamp",
        distance: "200 km drive (approx 8 hrs)",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Scenic Yamuna river drive & Garhwali homestays.",
        details: "Pick up early morning from Dehradun railway station. Drive through Mussoorie and Purola along the Tons river into Sankri village.",
        image: groupBatchImg,
        caption: "NandaPath expedition batch gathered at Sankri basecamp hub.",
      },
      {
        day: "Day 2",
        title: "Trek from Sankri to Juda Ka Talab",
        distance: "4 km trek (approx 4 hrs)",
        altitude: "9,100 ft / 2,773 m",
        highlights: "Pine forest trail & frozen alpine lake.",
        details: "Trek through dense pine and maple oak glades opening onto the legendary high-altitude lake at Juda Ka Talab.",
        image: judaGroupImg,
        caption: "NandaPath batch pausing beside Juda Ka Talab lake.",
      },
      {
        day: "Day 3",
        title: "Trek from Juda Ka Talab to Kedarkantha Basecamp",
        distance: "4 km trek (approx 3 hrs)",
        altitude: "11,250 ft / 3,429 m",
        highlights: "Open snow ridge walk & clear peak views.",
        details: "Ascend past oak thickets to the open meadows of Kedarkantha Basecamp, set directly under the towering summit peak.",
      },
      {
        day: "Day 4",
        title: "Basecamp to Kedarkantha Summit & descend to Hargaon",
        distance: "6 km trek (approx 7 hrs)",
        altitude: "12,500 ft / 3,810 m (Summit)",
        highlights: "3:00 AM summit push & 360-degree sunrise panorama.",
        details: "Early morning push to the summit shrine at 12,500 ft. Witness sunrise over Swargarohini, Black Peak, and Bandarpoonch, then descend to Hargaon.",
        image: summitShrineImg,
        caption: "Kedarkantha summit shrine national flag moment.",
      },
      {
        day: "Day 5",
        title: "Trek from Hargaon to Sankri & Drive back to Dehradun",
        distance: "6 km trek + 200 km drive",
        altitude: "Dehradun drop",
        highlights: "Valley descent and return transfer.",
        details: "Trek down to Sankri basecamp and board vehicle back to Dehradun for evening drop.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  "har-ki-dun": {
    title: "Har Ki Dun Valley Expedition",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Journey into the cradle of Garhwal culture through ancient wooden villages like Osla and Taluka to reach the amphitheater of Swargarohini peaks.",
    bannerImage: harKiDunBannerImg,
    sideImage: groupBatchImg,
    specifications: [
      { label: "Duration", value: "7 Days / 6 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "11,760 ft / 3,585 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Easy to Moderate", icon: "📈" },
      { label: "Best Season", value: "April - June & Sep - Dec", icon: "☀️" },
      { label: "Basecamp Hub", value: "Sankri / Taluka Village", icon: "📍" },
    ],
    inclusions: [
      "All organic vegetarian meals prepared at base & high camps",
      "Homestay stays in wooden Garhwali houses and dome tents",
      "Certified Mountaineering Expedition Leader & Local Guides",
      "Forest permits, entry passes & sanctuary fees",
    ],
    exclusions: [
      "Backpack offloading fee",
      "Personal clothing, trekking poles & personal boots",
      "Travel & medical insurance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Dehradun to Sankri",
        distance: "200 km drive",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Tons river valley drive.",
        details: "Pick up from Dehradun and drive along Yamuna and Tons rivers to Sankri village.",
      },
      {
        day: "Day 2",
        title: "Drive to Taluka & Trek to Pauni Garaat",
        distance: "12 km drive + 10 km trek",
        altitude: "8,200 ft / 2,500 m",
        highlights: "Supin river trail & wooden bridges.",
        details: "Drive to Taluka trailhead and begin trek along the river bank to Pauni Garaat campsite.",
      },
      {
        day: "Day 3",
        title: "Trek from Pauni Garaat to Kalkattiyadhar",
        distance: "7 km trek",
        altitude: "9,800 ft / 2,987 m",
        highlights: "Osla heritage wooden village views.",
        details: "Climb past the centuries-old Osla village with views of terraced step fields.",
      },
      {
        day: "Day 4",
        title: "Kalkattiyadhar to Har Ki Dun Valley & back",
        distance: "10 km trek",
        altitude: "11,760 ft / 3,585 m",
        highlights: "Swargarohini massif & Jaundhar glacier backdrop.",
        details: "Explore the ancient Har Ki Dun valley sitting under Mt. Swargarohini.",
      },
      {
        day: "Day 5",
        title: "Kalkattiyadhar back to Pauni Garaat",
        distance: "7 km trek",
        altitude: "8,200 ft / 2,500 m",
        highlights: "River trail descent.",
        details: "Descend back through pine glades to Pauni Garaat river campsite.",
      },
      {
        day: "Day 6",
        title: "Trek to Taluka & Drive to Sankri",
        distance: "10 km trek + 12 km drive",
        altitude: "6,400 ft / 1,950 m",
        highlights: "Return to base camp homestay.",
        details: "Trek down to Taluka and drive back to Sankri basecamp.",
      },
      {
        day: "Day 7",
        title: "Drive from Sankri back to Dehradun",
        distance: "200 km drive",
        altitude: "Dehradun drop",
        highlights: "Return journey.",
        details: "Board morning transfer from Sankri back to Dehradun railway station.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110185.03487858632!2d78.1182419!3d31.0664878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908f97e682d3cd5%3A0x6b9d62886f76c5!2sSankri%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  "kwari-pass": {
    title: "Kwari Pass Winter Trek",
    region: "Uttarakhand • Garhwal Himalayas",
    description:
      "Curzon's Trail to Kwari Pass offers unmatched views of Mt. Nanda Devi (25,645 ft), Dronagiri, Kamet, and Trishul through vast oak forests and snow meadows above Auli.",
    bannerImage: nandaDeviImg,
    sideImage: basecampImg,
    specifications: [
      { label: "Duration", value: "6 Days / 5 Nights", icon: "⏱️" },
      { label: "Max Altitude", value: "12,516 ft / 3,815 m", icon: "🏔️" },
      { label: "Trek Grade", value: "Easy to Moderate", icon: "📈" },
      { label: "Best Season", value: "Nov - April (Winter Snow)", icon: "❄️" },
      { label: "Basecamp Hub", value: "Dhak Village / Joshimath", icon: "📍" },
    ],
    inclusions: [
      "Hot vegetarian meals prepared at high camps",
      "Tent dome accommodation & Joshimath stay",
      "Certified Expedition Leader",
    ],
    exclusions: ["Personal gear & insurance", "Backpack offloading"],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive from Haridwar / Dehradun to Joshimath",
        distance: "250 km drive",
        altitude: "6,150 ft / 1,875 m",
        highlights: "Alaknanda river drive.",
        details: "Drive along river confluences into Joshimath hub.",
      },
      {
        day: "Day 2",
        title: "Drive to Dhak Village & Trek to Guling",
        distance: "12 km drive + 6 km trek",
        altitude: "9,600 ft / 2,926 m",
        highlights: "Oak forest trail.",
        details: "Trek from Dhak village to Guling campsite.",
      },
      {
        day: "Day 3",
        title: "Guling to Tali Campsite",
        distance: "5 km trek",
        altitude: "11,070 ft / 3,374 m",
        highlights: "Dronagiri peak view.",
        details: "Climb through snow glades to Tali camp.",
      },
      {
        day: "Day 4",
        title: "Tali to Kwari Pass Summit & back",
        distance: "8 km trek",
        altitude: "12,516 ft / 3,815 m",
        highlights: "Nanda Devi panorama.",
        details: "Summit push to Kwari Pass.",
      },
      {
        day: "Day 5",
        title: "Tali to Auli & Joshimath",
        distance: "8 km trek + drive",
        altitude: "8,200 ft / 2,500 m",
        highlights: "Gorson Bugyal.",
        details: "Descend to Auli ski slopes and drive to Joshimath.",
      },
      {
        day: "Day 6",
        title: "Joshimath to Dehradun",
        distance: "250 km drive",
        altitude: "Return drop",
        highlights: "Return drive.",
        details: "Return drop to Dehradun / Haridwar.",
      },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109820.312948281!2d79.563847!3d30.554271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a79f323be45fbd%3A0xd680be4061a6c0bb!2sJoshimath%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
};

const similarTreksList = [
  { name: "Kedarkantha Trek", region: "Garhwal Himalayas", altitude: "12,500 ft", link: "/kedarkantha", image: summitShrineImg },
  { name: "Har Ki Dun Trek", region: "Garhwal Himalayas", altitude: "11,760 ft", link: "/har-ki-dun", image: harKiDunBannerImg },
  { name: "Kuari Pass Trek", region: "Garhwal Himalayas", altitude: "12,516 ft", link: "/kwari-pass", image: nandaDeviImg },
  { name: "Pindari Glacier", region: "Kumaon Himalayas", altitude: "12,300 ft", link: "/pindari-glacier", image: campsiteMealImg },
];

const commonPackingList = {
  clothing: [
    { name: "Full Trekking Pants (2)", desc: "Quick-dry material", icon: "👖" },
    { name: "Heavy Down Jacket (1)", desc: "Sub-zero rated", icon: "🧥" },
    { name: "Thermal Base Layers", desc: "Merino wool or synthetic", icon: "👕" },
  ],
  gear: [
    { name: "Trekking Boots", desc: "High-ankle waterproof grip", icon: "🥾" },
    { name: "50L Rucksack", desc: "With rain cover", icon: "🎒" },
    { name: "Trekking Poles", desc: "For snow balance", icon: "🦯" },
  ],
  accessories: [
    { name: "UV Sunglasses", desc: "Snow glare protection", icon: "🕶️" },
    { name: "Waterproof Gloves", desc: "Outer + inner fleece", icon: "🧤" },
    { name: "Thermos Bottle", desc: "1L warm water bottle", icon: "🥤" },
  ],
  medical: [
    { name: "Govt ID & Fitness Form", desc: "Essential permits", icon: "📄" },
    { name: "Power Bank", desc: "20,000 mAh for cold protection", icon: "🔋" },
  ],
};

export default function TrekDetail({ slug: propSlug }) {
  const { slug: urlSlug } = useParams();
  const rawSlug = (propSlug || urlSlug || "").toLowerCase();

  const trekData = treksDatabase[rawSlug] || {
    ...treksDatabase["kedarkantha"],
    title: `${rawSlug.replace("-", " ").toUpperCase()} Expedition`,
    region: "Uttarakhand • Himalayan Wilderness",
  };

  const [activeTab, setActiveTab] = useState("itinerary");
  const [activePackingTab, setActivePackingTab] = useState("clothing");
  const [expandedDay, setExpandedDay] = useState(0);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappNumber = "+91 98765 43210";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 pt-20 sm:pt-24 pb-24 relative">
      <Navbar />

      {/* HERO BANNER */}
      <section className="bg-[#142957] text-white py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-400/30">
                TRIPOTUDE EXPEDITION
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-md border border-white/20">
                {trekData.region}
              </span>
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold text-white leading-tight">
              {trekData.title}
            </h1>
            <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              {trekData.description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl aspect-[16/10]">
              <img
                src={trekData.bannerImage}
                alt={trekData.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS - POLISHED FOR MOBILE */}
      <section className="bg-white border-b border-slate-100 py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-slate-50/90 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-700 mb-3 sm:mb-4 pb-2 border-b border-slate-200/80">
              KEY TRIP SPECIFICATIONS
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
              {trekData.specifications.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-2.5 sm:gap-3"
                >
                  <span className="text-xl sm:text-2xl p-1.5 sm:p-2 bg-sky-50 rounded-lg shrink-0">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
                      {item.label}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#142957] leading-tight mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <section className="bg-white border-b border-slate-200 py-2 px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-[#142957] overflow-x-auto">
          {[
            { id: "itinerary", label: "Day by Day Itinerary" },
            { id: "inclusions", label: "Inclusions & Exclusions" },
            { id: "packing", label: "Packing List" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 uppercase tracking-wider border-b-2 sm:border-b-3 transition whitespace-nowrap cursor-pointer ${
                activeTab === tab.id ? "border-[#142957] font-extrabold text-[#142957]" : "border-transparent text-slate-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* TAB CONTENT */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        
        {/* 1. ITINERARY TAB */}
        {activeTab === "itinerary" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 border-l-2 border-sky-200 ml-2.5 sm:ml-4 space-y-5 sm:space-y-8 pl-4 sm:pl-8">
              {trekData.itinerary.map((day, idx) => {
                const isExpanded = expandedDay === idx;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[23px] sm:-left-[39px] top-3 h-5 w-5 sm:h-7 sm:w-7 rounded-full bg-[#142957] text-white text-[10px] sm:text-xs font-bold flex items-center justify-center ring-4 ring-white shadow-xs">
                      {idx + 1}
                    </div>

                    <div
                      onClick={() => setExpandedDay(isExpanded ? null : idx)}
                      className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-xs space-y-3 cursor-pointer hover:border-sky-300 transition"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                            {day.day}
                          </span>
                          <h3 className="text-xs sm:text-base font-bold text-[#142957] leading-snug">
                            {day.title}
                          </h3>
                        </div>
                        <span className="text-sky-600 font-extrabold text-sm sm:text-base">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {day.details}
                      </p>

                      {day.image && isExpanded && (
                        <div className="pt-2 space-y-1">
                          <div className="rounded-xl overflow-hidden h-44 sm:h-56 border border-slate-200">
                            <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
                          </div>
                          {day.caption && <p className="text-[11px] text-slate-500 italic">📷 {day.caption}</p>}
                        </div>
                      )}

                      <div className="text-[11px] sm:text-xs font-semibold text-slate-500 flex flex-wrap gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                        <span>🏔️ {day.altitude}</span>
                        <span>🚶 {day.distance}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SIDEBAR SHOWCASE */}
            <div className="lg:col-span-5 lg:sticky top-28">
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-md space-y-3">
                <span className="text-xs font-bold text-[#142957] uppercase tracking-wider">Featured Batch Photo</span>
                <div className="rounded-xl overflow-hidden h-64 sm:h-80 border border-slate-200">
                  <img
                    src={trekData.sideImage || trekData.bannerImage}
                    alt="Expedition Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-slate-600">Genuine batch photo captured live with our NandaPath team.</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. INCLUSIONS & EXCLUSIONS TAB */}
        {activeTab === "inclusions" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-emerald-50/40 rounded-2xl p-5 border border-emerald-200/80 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-emerald-900 flex items-center gap-2">
                <span>✓</span> What's Included
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {trekData.inclusions?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50/40 rounded-2xl p-5 border border-rose-200/80 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-rose-900 flex items-center gap-2">
                <span>✕</span> What's Excluded
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {trekData.exclusions?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 3. PACKING TAB */}
        {activeTab === "packing" && (
          <div className="space-y-6">
            <div className="flex gap-2 border-b border-slate-100 pb-3 overflow-x-auto">
              {Object.keys(commonPackingList).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePackingTab(key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase transition whitespace-nowrap cursor-pointer ${
                    activePackingTab === key ? "bg-[#142957] text-white" : "bg-slate-50 text-slate-600 border border-slate-200"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonPackingList[activePackingTab].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                  <span className="text-2xl p-2 bg-sky-50 rounded-xl border border-sky-100 shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#142957]">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPLORE SIMILAR TREKS */}
        <section className="pt-8 border-t border-slate-200">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
              DISCOVER MORE ROUTES
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-[#142957] mt-1">Explore Similar Treks</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Other top-rated Himalayan trekking expeditions in Uttarakhand.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {similarTreksList.map((trek) => (
              <Link
                key={trek.name}
                to={trek.link}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 sm:h-44 overflow-hidden relative">
                    <img src={trek.image} alt={trek.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-md text-[#142957] text-[10px] font-black px-2 py-0.5 rounded-full">
                      {trek.altitude}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs sm:text-sm font-bold text-[#142957]">{trek.name}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">{trek.region}</p>
                  </div>
                </div>
                <div className="p-3 pt-0 text-xs font-bold text-sky-700 group-hover:translate-x-1 transition">
                  View Trek &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* MAP */}
        <section className="pt-8 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-[#142957] mb-4">Trek Route Map & Geographic Region</h2>
          <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xs">
            <iframe
              title={`${trekData.title} Map`}
              src={trekData.mapUrl}
              className="w-full h-72 sm:h-96 rounded-xl border border-slate-200"
              loading="lazy"
            />
          </div>
        </section>

      </div>

      {/* MOBILE STICKY FLOATING ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xs border-t border-slate-200 p-2.5 flex gap-2 z-50 shadow-xl">
        <button
          onClick={() => setShowWhatsAppModal(true)}
          className="flex-1 bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5"
        >
          <span>💬</span>
          <span>WhatsApp Inquiry</span>
        </button>
        <Link
          to="/contact"
          className="flex-1 bg-[#142957] text-white font-bold text-xs py-2.5 rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5"
        >
          <span>📍</span>
          <span>Book Expedition</span>
        </Link>
      </div>

      {/* WHATSAPP MODAL */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto">💬</div>
              <h3 className="text-lg font-bold text-[#142957]">Direct WhatsApp Support</h3>
              <p className="text-xs text-slate-500">Connect with our Lead Expedition Manager for instant booking details.</p>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-slate-800">{whatsappNumber}</span>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs bg-[#142957] text-white px-3 py-1.5 rounded-lg font-semibold"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
              <a
                href={`https://wa.me/919876543210?text=Hi%20NandaPath,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(
                  trekData.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl transition"
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