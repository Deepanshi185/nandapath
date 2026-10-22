import { useState } from "react";
import { Link } from "react-router-dom";
import rockGroupImg from "../assets/rock-group.jpeg";

const homeFaqs = [
  {
    q: "How do I choose the right trek for my fitness level?",
    a: "We offer Easy, Moderate, and Difficult Himalayan routes. Beginners can start with Kedarkantha or Har Ki Dun, while experienced trekkers can attempt high-pass crossover treks like Bali Pass.",
  },
  {
    q: "What safety protocols does NandaPath follow on high passes?",
    a: "Every batch carries pulse oximeters, medical oxygen cylinders, and emergency first-aid kits led by NIM and WFR certified leaders.",
  },
  {
    q: "What gear and meals are included in expedition packages?",
    a: "Packages include high-altitude dome tents, sleeping bags, insulated mats, fresh organic vegetarian meals cooked daily, and basecamp transport options.",
  },
  {
    q: "How can I request customized travel dates or private group batches?",
    a: "You can fill out our consultation form or chat directly with our Dehradun team on WhatsApp to arrange custom dates for your family or friends group.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-10 sm:py-16 bg-sky-50/50 border-t border-b border-sky-100/60 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 2-COLUMN GRID STRETCHED TO MATCH PERFECTLY AT TOP AND BOTTOM BASELINES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: HEADER & FAQS (SPAN 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/80 px-3 py-1 rounded-md border border-sky-200 inline-block">
                GOT QUESTIONS?
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#142957] mt-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Everything you need to know about preparing for your Himalayan adventure with NandaPath.
              </p>
            </div>

            <div className="space-y-3 my-2">
              {homeFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left font-bold text-xs sm:text-sm text-[#142957] hover:text-sky-700 cursor-pointer"
                    >
                      <span className="pr-2">{faq.q}</span>
                      <span className="text-base font-bold text-sky-600 shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                to="/faqs"
                className="inline-flex items-center gap-2 bg-[#142957] hover:bg-sky-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition cursor-pointer"
              >
                <span>View All Frequently Asked Questions</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: FULL-HEIGHT STRETCHED BATCH SHOWCASE CARD (SPAN 5) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[320px] sm:min-h-[400px] lg:min-h-full h-full flex flex-col justify-between p-6 sm:p-8 text-white block">
            <img
              src={rockGroupImg}
              alt="NandaPath Group Batch Resting on Mountain Trail"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/10" />

            <div className="relative z-10 flex justify-end">
              <span className="bg-amber-400 text-[#142957] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                100% Verified Batches
              </span>
            </div>

            <div className="relative z-10 space-y-2 pt-20 sm:pt-0">
              <span className="text-xs text-amber-300 font-bold block">
                📍 Garhwal Pine Forest Trail
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans leading-tight">
                Safety First, Memories Always
              </h3>
              <p className="text-xs text-slate-200 font-normal leading-relaxed">
                Our certified local leaders ensure every trekker ascends safely at a natural pace while creating lifelong Himalayan friendships.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}