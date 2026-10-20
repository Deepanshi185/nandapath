import { useState } from "react";

export default function PackingGuideSection() {
  const [activeTab, setActiveTab] = useState("clothing");

  const categories = {
    clothing: {
      title: "Essential Clothing",
      items: [
        { name: "Full Trekking Pants", desc: "Quick-dry, stretchable material", icon: "👖" },
        { name: "Puffer Down Jacket", desc: "Rated for -5°C to -10°C sub-zero nights", icon: "🧥" },
        { name: "Thermal Top & Bottom", desc: "Merino wool or synthetic thermal layer", icon: "👕" },
        { name: "Fleece Jacket & Baselayers", desc: "Mid-layer breathable insulation", icon: "🥼" },
        { name: "Waterproof Outer Layer", desc: "Windproof rain jacket with hood", icon: "🌧️" },
      ],
    },
    gear: {
      title: "Gear & Footwear",
      items: [
        { name: "Ankle-Support Trekking Boots", desc: "Water-resistant with good rubber grip", icon: "🥾" },
        { name: "50L-60L Main Backpack", desc: "With waterproof rain cover", icon: "🎒" },
        { name: "10L-20L Summit Daypack", desc: "For carrying water & jacket on summit day", icon: "🎒" },
        { name: "Trekking Poles (Pair)", desc: "Reduces knee impact by 20% on downhills", icon: "🦯" },
        { name: "LED Headlamp", desc: "Essential for night summit pushes (with extra batteries)", icon: "🔦" },
      ],
    },
    accessories: {
      title: "Accessories & Hygiene",
      items: [
        { name: "UV Protection Sunglasses", desc: "Category 3/4 protection against snow glare", icon: "🕶️" },
        { name: "Thermal Gloves & Inner Fleece", desc: "Waterproof outer gloves + fleece inner", icon: "🧤" },
        { name: "Woolen Beanie & Neck Gaiter", desc: "Protects against cold alpine winds", icon: "🧢" },
        { name: "Sunscreen & Lip Balm", desc: "SPF 50+ sunscreen & SPF lip balm", icon: "🧴" },
        { name: "Quick-Dry Towel & Wet Wipes", desc: "Lightweight and eco-friendly", icon: "🧻" },
      ],
    },
    medical: {
      title: "Medical & Documents",
      items: [
        { name: "Govt ID & Medical Certificate", desc: "Aadhaar Card/Passport + Fitness Form", icon: "📄" },
        { name: "Hydration Bottles (2 Liters)", desc: "Insulated or thermos flask recommended", icon: "🥤" },
        { name: "Power Bank (10,000–20,000 mAh)", desc: "Cold drains phone batteries quickly", icon: "🔋" },
        { name: "Personal First Aid & ORS", desc: "Diamox, personal meds, band-aids, ORS sachets", icon: "🩹" },
      ],
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-10 text-left border-b border-slate-100 pb-6">
          <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
            PREPARATION GUIDE
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#142957] mt-3 tracking-tight">
            The Essential Himalayan Trek Packing Guide
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal max-w-2xl">
            High altitude weather can change rapidly. Here is everything you need to pack for a safe, comfortable, and warm expedition.
          </p>
        </div>

        {/* CATEGORY TAB SELECTOR */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 pb-4">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeTab === key
                  ? "bg-[#142957] text-white shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {categories[key].title}
            </button>
          ))}
        </div>

        {/* PACKING ITEMS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition flex items-start gap-4"
            >
              <div className="text-2xl p-2.5 bg-sky-50 rounded-xl border border-sky-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#142957]">{item.name}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DOWNLOAD CHECKLIST FOOTER */}
        <div className="mt-10 p-6 rounded-2xl bg-sky-50/60 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="text-2xl">📋</span>
            <div>
              <h4 className="text-sm font-semibold text-[#142957]">Need a printable packing PDF?</h4>
              <p className="text-xs text-slate-500">Carry this checklist while preparing your rucksack.</p>
            </div>
          </div>
          <button
            onClick={() => alert("Downloading NandaPath Packing Checklist PDF...")}
            className="bg-[#142957] hover:bg-sky-900 text-white font-semibold text-xs px-6 py-3 rounded-xl transition shadow-xs shrink-0 cursor-pointer"
          >
            Download PDF Checklist ↓
          </button>
        </div>

      </div>
    </section>
  );
}