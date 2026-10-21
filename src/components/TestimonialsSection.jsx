import { useState } from "react";
import judaGroupDanceImg from "../assets/juda-group-dance.jpeg";
import groupMonsoonImg from "../assets/group-monsoon.jpeg";
import rockGroupImg from "../assets/rock-group.jpeg";

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
      "Anyone can arrange basic logistics for a mountain trip, but NandaPath focuses on the human experience. Their expedition leaders didn't just guide us; they taught us how to pace our breath...",
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
      "Laughter, music, and spontaneous group dances by the frozen shores of Juda Ka Talab! The warmth of the NandaPath leaders made our winter expedition unforgettable...",
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
      "Trekking through heavy Himalayan downpours with our colorful rain gear! NandaPath's team provided proper waterproof arrangements, hot tea stops, and non-stop energy...",
    fullStory:
      "Trekking through heavy Himalayan downpours with our colorful rain gear! NandaPath's team provided proper waterproof arrangements, hot tea stops, and non-stop energy throughout the trail.",
    isRealPhoto: true,
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "Content Writer",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    trek: "Kashmir Great Lakes",
    tag: "Trek #25",
    title: "The entire experience on the trail was life-changing",
    snippet:
      "The routes designed by NandaPath give you enough time on the trail to pause, reflect, and process your thoughts. The mountain views were unbelievable...",
    fullStory:
      "The routes designed by NandaPath give you enough time on the trail to pause, reflect, and process your thoughts. Walking past alpine lakes in Kashmir and camping under star-lit skies built high self-confidence.",
  },
  {
    id: 5,
    name: "Summer Expedition Batch",
    role: "Himalayan Trekkers",
    location: "Garhwal Valley, India",
    avatar: rockGroupImg,
    trek: "Har Ki Dun Trail",
    tag: "Summit Smiles",
    title: "Unmatched mountain hospitality and expert local guidance",
    snippet:
      "Navigating rocky trails with trekking poles and an amazing group! NandaPath's guides ensured perfect pacing and endless mountain stories throughout...",
    fullStory:
      "Navigating rocky trails with trekking poles and an amazing group! NandaPath's guides ensured perfect pacing and endless mountain stories throughout our high-altitude journey.",
    isRealPhoto: true,
  },
];

export default function TestimonialsSection() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="mb-8 sm:mb-12 text-left border-b border-slate-100 pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block">
              VOICES FROM THE WILD
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-[#142957] mt-2 tracking-tight">
              Read Why Trekkers Love Our Transformative Treks
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium sm:hidden">
            Swipe left to read more stories &rarr;
          </p>
        </div>

        {/* 5-CARD RESPONSIVE GRID: 1 ON MOBILE (SWIPE), 2 ON TABLET, 3 OR 5 ON DESKTOP */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 scrollbar-none">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[85%] sm:min-w-0 snap-center flex-1 relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-xs hover:shadow-xl hover:border-sky-300 transition duration-300"
            >
              <div className="space-y-3">
                
                {/* AUTHOR AVATAR & INFO */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="relative shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border-2 border-sky-100 shadow-xs"
                      />
                      {item.isRealPhoto && (
                        <span className="absolute -bottom-1 -right-1 bg-amber-400 text-[8px] p-0.5 rounded-full shadow-xs" title="Authentic Trail Photo">
                          📸
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#142957] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 leading-tight pt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-md uppercase shrink-0">
                    {item.tag}
                  </span>
                </div>

                {/* VERIFIED TREK BADGE */}
                <div>
                  <span className="inline-flex items-center gap-1 bg-sky-50 border border-sky-100 text-[#142957] px-2 py-0.5 rounded-md text-[10px] font-semibold">
                    <span>🏔️</span>
                    <span>{item.trek}</span>
                  </span>
                </div>

                {/* TITLE & SNIPPET */}
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#142957] leading-snug">
                    "{item.title}"
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {item.snippet}
                  </p>
                </div>
              </div>

              {/* READ FULL STORY ACTION */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedStory(item)}
                  className="text-[11px] font-bold text-[#142957] hover:text-sky-600 cursor-pointer transition flex items-center gap-1"
                >
                  <span>Read Story</span>
                  <span>&rarr;</span>
                </button>
                <span className="text-[8px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100">
                  Verified
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* POPUP MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-0 sm:p-4">
          <div className="relative w-full max-w-lg rounded-t-3xl sm:rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-sm font-bold p-2 cursor-pointer transition rounded-full bg-slate-100"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 pr-8">
              <img
                src={selectedStory.avatar}
                alt={selectedStory.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-sky-100 shadow-xs shrink-0"
              />
              <div>
                <h3 className="text-sm font-bold text-[#142957]">{selectedStory.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{selectedStory.role} &bull; {selectedStory.location}</p>
                <p className="text-xs font-semibold text-sky-700 mt-0.5">Trek: {selectedStory.trek}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <h4 className="text-xs sm:text-sm font-bold text-[#142957] mb-2 leading-snug">
                "{selectedStory.title}"
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedStory.fullStory}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="w-full sm:w-auto rounded-xl bg-[#142957] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-sky-900 cursor-pointer"
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