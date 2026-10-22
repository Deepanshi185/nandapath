import { useState } from "react";
import Navbar from "../components/Navbar";

const faqCategories = [
  {
    category: "Safety & Guides",
    questions: [
      {
        q: "What safety equipment is carried on NandaPath expeditions?",
        a: "Every batch is equipped with pulse oximeters, medical oxygen cylinders, stretchers, and extensive wilderness first-aid kits. Our team conducts daily morning and evening health checks.",
      },
      {
        q: "Are the trek leaders certified?",
        a: "Yes. All NandaPath expedition leaders hold certifications from renowned mountaineering institutes (such as NIM or HMI) and are trained in Wilderness First Response (WFR).",
      },
      {
        q: "How do you manage altitude sickness (AMS)?",
        a: "Our itineraries include gradual altitude gain and acclimatization walks. If a trekker shows AMS symptoms, our certified leaders follow strict protocols, including immediate descent if required.",
      },
    ],
  },
  {
    category: "Booking & Payments",
    questions: [
      {
        q: "Why are prices not listed statically on the website?",
        a: "Trek package pricing varies based on season, batch size, pickup points, and customization options. Contact us via form or WhatsApp for exact current quotes.",
      },
      {
        q: "How do I confirm my batch booking?",
        a: "You can send an enquiry through our booking form or connect directly on WhatsApp. A small advance deposit reserves your slot.",
      },
      {
        q: "What is the cancellation and batch rollover policy?",
        a: "If you need to cancel due to emergency, we offer flexible batch rollover options to future dates depending on notice period.",
      },
    ],
  },
  {
    category: "Food, Accommodation & Facilities",
    questions: [
      {
        q: "What kind of food is served on high-altitude trails?",
        a: "We serve fresh, hot, organic vegetarian meals (breakfast, lunch, evening snacks, and dinner) cooked daily by our high-altitude kitchen crew.",
      },
      {
        q: "What camping gear is provided by NandaPath?",
        a: "We provide 3-season/4-season dome tents, thick insulated sleeping mats, clean sleeping bags, and dining tents with camping stools.",
      },
      {
        q: "Are toilet tents available at campsites?",
        a: "Yes, dry pit toilet tents are set up at all wilderness campsites following leave-no-trace eco-principles.",
      },
    ],
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-stone-50/50 text-slate-800 font-sans pb-16">
      <Navbar />

      {/* HERO BANNER */}
      <section className="pt-28 pb-16 bg-[#0B1736] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Help Center
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Everything you need to know about preparation, safety, food, camping equipment, and booking with NandaPath Adventures.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-12 space-y-10">
        {faqCategories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-4">
            <h2 className="text-xl font-bold text-[#142957] border-b border-slate-200 pb-2">
              {cat.category}
            </h2>

            <div className="space-y-3">
              {cat.questions.map((item, qIdx) => {
                const uniqueId = `${catIdx}-${qIdx}`;
                const isOpen = openIdx === uniqueId;

                return (
                  <div
                    key={uniqueId}
                    className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleFaq(uniqueId)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#142957] hover:text-sky-700 cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <span className="text-lg font-bold ml-2">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-20 bg-[#0b1d3b] text-slate-300 text-center py-8 text-xs border-t border-slate-800">
        <p>© {new Date().getFullYear()} NandaPath Adventures. All rights reserved.</p>
      </footer>
    </main>
  );
}