import { useState } from "react";

const faqData = [
  {
    q: "Why is your trek fee higher than other trekking companies?",
    a: "At NandaPath, we never compromise on expedition safety or team ratio. Our fees cover certified Himalayan mountaineering leaders, high-altitude medical equipment (pulse oximeters, oxygen cylinders, first-aid kits), organic trail meals, and fair wages for local porters and staff.",
  },
  {
    q: "Can I join your groups as a solo trekker?",
    a: "Absolutely! Over 60% of NandaPath trekkers join as solo travelers. Our group departures are welcoming, safe, and foster strong bonds across the trail.",
  },
  {
    q: "I'm a solo woman traveler. Is it safe for me?",
    a: "Yes, women safety is our highest priority. We ensure female-friendly camp arrangements, separate tents for female trekkers, and certified expedition staff trained in safety and group ethics.",
  },
  {
    q: "What safety measures do you follow during treks?",
    a: "We conduct daily morning and evening O2/pulse checks, maintain a strict 1:6 guide-to-trekker ratio, carry medical oxygen and stretchers on every route, and rely strictly on Wilderness First Responder (WFR) certified guides.",
  },
  {
    q: "What should I pack for my trekking trip?",
    a: "Essential items include sturdy trekking boots, thermal layers, a waterproof windproof jacket, 2L water bottle, personal first-aid kit, headlamp, and a 40-50L backpack. A detailed packing list is sent upon booking.",
  },
  {
    q: "Why do I have to register so far in advance?",
    a: "Himalayan trek permits, forest permissions, campsite allocations, and equipment preparation require advance logistics. Registering early ensures your preferred batch slot and smooth coordination.",
  },
];

export default function FaqSection() {
  // Set to null so mobile view isn't clogged on initial render
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-white font-sans text-slate-800 border-t border-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: FAQ ACCORDION LIST */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-sans font-bold text-[#142957] mt-2 tracking-tight">
                Got Questions? We Have Answers.
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Everything you need to know about safety, booking procedures, and preparing for your Himalayan expedition.
              </p>
            </div>

            {/* ACCORDION ITEMS */}
            <div className="space-y-3">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "border-sky-400 bg-sky-50/30 shadow-xs"
                        : "border-slate-200/90 bg-slate-50/60 hover:bg-slate-50"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-3.5 sm:p-4.5 text-left font-bold text-xs sm:text-sm text-[#142957] transition cursor-pointer"
                    >
                      <span className="pr-3 leading-snug">{item.q}</span>
                      <span
                        className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border text-xs shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-[#142957] text-white border-[#142957] rotate-180"
                            : "bg-white text-slate-600 border-slate-200"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-3.5 sm:px-4.5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-200/60 leading-relaxed font-normal">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: SUPPORT PHOTO CARD */}
          <div className="lg:col-span-5 relative h-full min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 flex flex-col justify-between p-6 sm:p-8 text-white">
            {/* BACKGROUND PHOTO */}
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
              alt="Himalayan Expedition Guide"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736]/95 via-[#0B1736]/70 to-[#0B1736]/30" />

            {/* TOP BADGE & HEADING */}
            <div className="relative z-10 space-y-2.5 sm:space-y-3">
              <span className="bg-amber-400 text-[#0B1736] text-[9px] sm:text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                EXPERT TEAM SUPPORT
              </span>
              <h3 className="text-xl sm:text-3xl font-sans font-bold text-white tracking-tight leading-tight">
                Still Have <br /> Questions?
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal pt-1">
                Have specific queries about your trail fitness, batch customization, or gear requirements? Speak with our expedition leaders directly.
              </p>
            </div>

            {/* BOTTOM WHATSAPP & SUPPORT CTA */}
            <div className="relative z-10 space-y-3.5 sm:space-y-4 pt-4 sm:pt-6 border-t border-white/20 mt-auto">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">💬</span>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-300">Quick Assistance</p>
                  <p className="text-xs sm:text-sm font-bold text-white">+91 98765 43210</p>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm py-3 sm:py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
              >
                <span>Chat on WhatsApp</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}