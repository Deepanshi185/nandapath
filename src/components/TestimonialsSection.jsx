import { useState } from "react";
import judaGroupDanceImg from "../assets/juda-group-dance.jpeg";
import groupMonsoonImg from "../assets/group-monsoon.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "School Teacher",
    location: "Bangalore, India",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    trek: "Kedarkantha Winter Trek",
    tag: "Trek #12",
    title: "NandaPath helped me reconnect with my inner resilience",
    snippet:
      "Anyone can arrange basic logistics for a mountain trip, but NandaPath focuses on the human experience. Their expedition leaders didn't just guide us; they taught us how to pace our breath on icy trails...",
    fullStory:
      "Anyone can arrange basic logistics for a mountain trip, but NandaPath focuses on the human experience. Their expedition leaders didn't just guide us; they taught us how to pace our breath, navigate icy trails, and embrace cold nights with confidence.",
  },
  {
    id: 2,
    name: "Aman Verma & Batch",
    role: "Trekkers Batch",
    location: "Pune & Mumbai, India",
    avatar: judaGroupDanceImg,
    trek: "Juda Ka Talab Stopover",
    tag: "Batch Memory",
    title: "You start the trek as strangers and leave as a family",
    snippet:
      "Laughter, music, and spontaneous group dances by the frozen shores of Juda Ka Talab! The warmth of the NandaPath leaders made our winter expedition completely unforgettable...",
    fullStory:
      "Laughter, music, and spontaneous group dances by the frozen shores of Juda Ka Talab! The warmth of the NandaPath leaders made our winter expedition unforgettable. NandaPath handles every tiny detail on the trail.",
    isRealPhoto: true,
  },
  {
    id: 3,
    name: "Monsoon Trekkers Team",
    role: "Expedition Batch",
    location: "Dehradun & Delhi, India",
    avatar: groupMonsoonImg,
    trek: "Valley Rain Expedition",
    tag: "Trail Family",
    title: "Rain or shine, NandaPath guides ensured safety and pure joy!",
    snippet:
      "Trekking through heavy Himalayan downpours with our colorful rain gear! NandaPath's team provided proper waterproof arrangements, hot tea stops, and non-stop energy throughout the trail...",
    fullStory:
      "Trekking through heavy Himalayan downpours with our colorful rain gear! NandaPath's team provided proper waterproof arrangements, hot tea stops, and non-stop energy throughout the trail.",
    isRealPhoto: true,
  },
];

export default function TestimonialsSection() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="py-12 sm:py-18 px-4 sm:px-6 lg:px-8 bg-sky-50/70 border-t border-sky-200/80 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        
        {/* SECTION HEADER */}
        <div className="mb-8 sm:mb-12 text-left border-b border-sky-200 pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-sky-800 uppercase tracking-wider bg-sky-200/80 px-3 py-1 rounded-md border border-sky-300 inline-block">
              VOICES FROM THE WILD
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142957] mt-2 tracking-tight">
              Read Why Trekkers Love Our Transformative Treks
            </h2>
          </div>
        </div>

        {/* 3-CARD SPACIOUS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex-1 relative flex flex-col justify-between rounded-3xl border border-sky-200 bg-white/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-sky-400 transition duration-300"
            >
              <div className="space-y-4">
                
                {/* AUTHOR AVATAR & INFO */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-sky-200 shadow-xs"
                      />
                      {item.isRealPhoto && (
                        <span className="absolute -bottom-1 -right-1 bg-amber-400 text-[10px] p-1 rounded-full shadow-xs" title="Authentic Trail Photo">
                          📸
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-[#142957] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 leading-tight pt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-black text-sky-900 bg-sky-100 border border-sky-200 px-2.5 py-1 rounded-lg uppercase shrink-0">
                    {item.tag}
                  </span>
                </div>

                {/* VERIFIED TREK BADGE */}
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-sky-100/80 border border-sky-200 text-[#142957] px-3 py-1 rounded-xl text-xs font-black">
                    <span>🏔️</span>
                    <span>{item.trek}</span>
                  </span>
                </div>

                {/* TITLE & SNIPPET - ENLARGED FONT */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-base sm:text-lg font-black text-[#142957] leading-snug">
                    "{item.title}"
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                    {item.snippet}
                  </p>
                </div>
              </div>

              {/* READ FULL STORY ACTION */}
              <div className="pt-4 mt-5 border-t border-sky-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedStory(item)}
                  className="text-xs sm:text-sm font-black text-[#142957] hover:text-sky-600 cursor-pointer transition flex items-center gap-1.5"
                >
                  <span>Read Full Story</span>
                  <span>&rarr;</span>
                </button>
                <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                  Verified
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* POPUP MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-sky-200 space-y-5 max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 text-base font-black p-2 cursor-pointer transition rounded-full bg-sky-100"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 pr-8">
              <img
                src={selectedStory.avatar}
                alt={selectedStory.name}
                className="h-14 w-14 rounded-full object-cover border-2 border-sky-200 shadow-xs shrink-0"
              />
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#142957]">{selectedStory.name}</h3>
                <p className="text-xs sm:text-sm font-bold text-slate-500">{selectedStory.role} &bull; {selectedStory.location}</p>
                <p className="text-xs sm:text-sm font-black text-sky-800 mt-0.5">Trek: {selectedStory.trek}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-sky-100">
              <h4 className="text-base sm:text-lg font-black text-[#142957] mb-2 leading-snug">
                "{selectedStory.title}"
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                {selectedStory.fullStory}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="w-full sm:w-auto rounded-2xl bg-[#142957] px-6 py-3 text-xs sm:text-sm font-black text-white transition hover:bg-sky-900 cursor-pointer"
              >
                Close Story
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}