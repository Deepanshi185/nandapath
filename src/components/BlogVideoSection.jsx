import { Link } from "react-router-dom";
import monsoonMeadowImg from "../assets/monsoon-meadow-batch.jpeg";

export default function BlogVideoSection() {
  return (
    <section className="py-10 sm:py-16 bg-stone-50/80 border-t border-b border-stone-200/80 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-stone-200 gap-3">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              EXPLORE OUR STORIES & VIDEOS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#142957] mt-2 tracking-tight">
              Himalayan Vlogs & Trail Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Watch real trek vlogs, seasonal gear guides, and trail walkthroughs prepared by certified NandaPath expedition leaders.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-[#142957] hover:bg-sky-900 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition cursor-pointer shrink-0 w-max"
          >
            <span>Explore All Blogs & Vlogs</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* 2-COLUMN SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: YOUTUBE TREKKING VIDEO CARD (ADDED pb-12 ON MOBILE TO CLEAR WHATSAPP ICON) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-md flex flex-col justify-between">
            <div className="relative aspect-video w-full bg-slate-900 overflow-hidden group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5qap5aO4i9A?si=NandaPathExpedition"
                title="Himalayan Trekking Documentary & Trail Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Extra padding-bottom on mobile so floating WhatsApp button doesn't block text */}
            <div className="p-5 sm:p-6 pb-12 sm:pb-6 bg-white space-y-2">
              <span className="bg-rose-100 text-rose-800 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                🎥 Featured Expedition Vlog
              </span>
              <h3 className="text-base sm:text-xl font-bold text-[#142957]">
                Kedarkantha Summit & Har Ki Dun Trail Walkthrough
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Experience high-altitude snow ridges, campsites, and daily trail routines live with our NandaPath batches.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: FEATURED BLOG POST CARD */}
          <Link
            to="/blog"
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md min-h-[300px] sm:min-h-[380px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8 text-white group block"
          >
            <img
              src={monsoonMeadowImg}
              alt="Monsoon Valley Trek Batch"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/10" />

            <div className="relative z-10 flex justify-between items-center">
              <span className="bg-emerald-600 text-white font-extrabold text-[10px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Latest Trail Guide
              </span>
              <span className="bg-white/90 backdrop-blur-md text-[#142957] text-[10px] font-bold px-3 py-1 rounded-full">
                5 Min Read
              </span>
            </div>

            <div className="relative z-10 space-y-2">
              <span className="text-xs text-amber-300 font-bold block">
                📍 Garhwal & Kumaon Bugyal Season
              </span>
              <h3 className="text-lg sm:text-2xl font-bold font-sans leading-tight">
                Complete Preparation Guide for Himalayan Valley Treks
              </h3>
              <p className="text-xs text-slate-200 font-normal leading-relaxed line-clamp-2">
                Essential packing tips, high-altitude fitness routines, and weather expectations for first-time Himalayan trekkers.
              </p>

              <div className="pt-2 flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition duration-300">
                <span>Read Full Article On Blog Page &rarr;</span>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}