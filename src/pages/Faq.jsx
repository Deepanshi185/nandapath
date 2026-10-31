import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Local Asset Import
import groupBatchImg from "../assets/group-batch1.jpeg";

const faqCategories = [
  {
    category: "Safety & Expedition Guides",
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
    category: "Booking & Custom Itineraries",
    questions: [
      {
        q: "Why are prices not listed statically on the website?",
        a: "Trek package pricing varies based on season, batch size, pickup points, and customization options. Contact us via our consultation form or WhatsApp for exact current quotes.",
      },
      {
        q: "How do I confirm my batch booking?",
        a: "You can send an enquiry through our booking form or connect directly on WhatsApp. A small advance deposit reserves your slot.",
      },
      {
        q: "What is the cancellation and batch rollover policy?",
        a: "If you need to cancel due to an emergency, we offer flexible batch rollover options to future dates depending on notice period.",
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
  const [openIdx, setOpenIdx] = useState("0-0");

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-sky-50/60 text-slate-800 font-sans pt-16 sm:pt-20 pb-20 relative">
      <Navbar />

      {/* HERO BANNER - SOFT SKY BLUE / NAVY ACCENT */}
      <section className="bg-[#142957] text-white pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 shadow-inner">
        <div className="mx-auto max-w-5xl text-center space-y-3">
          <span className="bg-sky-500/20 text-sky-300 border border-sky-400/40 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block">
            NANDAPATH HELP CENTER
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-lg text-sky-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to know about preparation, high-altitude safety, meals, camping gear, and booking with NandaPath Adventures.
          </p>
        </div>
      </section>

      {/* FAQ MAIN CONTENT WITH SIDE SHOWCASE PHOTO CARD */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* LEFT COLUMN: FAQ CATEGORIES & EXPANDABLE LIST (SPAN 7) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {faqCategories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-sky-800 bg-sky-200/80 px-3 py-1 rounded-md border border-sky-300">
                    CATEGORY 0{catIdx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#142957]">
                    {cat.category}
                  </h2>
                </div>

                <div className="space-y-3">
                  {cat.questions.map((item, qIdx) => {
                    const uniqueId = `${catIdx}-${qIdx}`;
                    const isOpen = openIdx === uniqueId;

                    return (
                      <div
                        key={uniqueId}
                        className="bg-sky-100/80 rounded-2xl sm:rounded-3xl border border-sky-200/90 shadow-2xs overflow-hidden transition duration-200 hover:border-sky-300"
                      >
                        <button
                          onClick={() => toggleFaq(uniqueId)}
                          className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-extrabold text-base sm:text-lg text-[#142957] hover:text-sky-700 cursor-pointer"
                        >
                          <span className="pr-3 leading-snug">{item.q}</span>
                          <span className="text-xl font-black text-sky-800 shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-base font-semibold text-slate-700 leading-relaxed border-t border-sky-200/60 pt-3">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: STICKY REAL BATCH PHOTO CARD (SPAN 5) */}
          <div className="lg:col-span-5 lg:sticky top-32 space-y-6">
            
            {/* REAL TEAM BATCH PHOTO CARD */}
            <div className="bg-sky-100/90 rounded-3xl overflow-hidden border border-sky-200 shadow-xl flex flex-col justify-between">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={groupBatchImg}
                  alt="NandaPath Group Batch on Mountain Ridge"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#142957] text-xs font-black px-3.5 py-1.5 rounded-full shadow-xs">
                  📍 Garhwal Mountain Ridge
                </span>
                <span className="absolute bottom-4 right-4 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  100% Verified Batches
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-sky-100/70">
                <h3 className="text-xl sm:text-2xl font-black text-[#142957] leading-snug">
                  Safety First, Memories Always
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                  Our certified local leaders ensure every trekker ascends safely at a natural pace while creating lifelong Himalayan friendships on trail.
                </p>
              </div>
            </div>

            {/* DIRECT WHATSAPP / CONTACT CARD */}
            <div className="bg-[#142957] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-sky-300/30">
              <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider inline-block">
                STILL HAVE QUESTIONS?
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Speak With An Expedition Leader
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 font-medium leading-relaxed">
                Need customized batch dates, offloading details, or seasonal gear guidance? Get in touch with our Dehradun base team directly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919876543210?text=Hi%20NandaPath,%20I%20have%20a%20question%20about%20upcoming%20treks."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm py-3.5 rounded-2xl text-center transition shadow-md"
                >
                  💬 WhatsApp Support
                </a>
                <Link
                  to="/contact"
                  className="flex-1 bg-white text-[#142957] hover:bg-sky-50 font-black text-xs sm:text-sm py-3.5 rounded-2xl text-center transition shadow-md"
                >
                  📍 Send Form
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 bg-[#0b1d3b] text-slate-300 text-center py-8 text-xs sm:text-sm font-semibold border-t border-slate-800">
        <p>© {new Date().getFullYear()} NandaPath Adventures. All rights reserved.</p>
      </footer>
    </main>
  );
}