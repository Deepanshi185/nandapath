import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Local asset imports
import founder2Local from "../assets/founder2.jpeg";
import judaLakeTrailImg from "../assets/juda-lake-trail.jpeg"; // New authentic Juda Ka Talab trail photo

export default function About() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-24 font-sans text-slate-800">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#142957] transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#142957]">About Us</span>
        </div>

        {/* HERO BANNER */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200/80 bg-[#142957] shadow-lg">
          <div className="relative min-h-[380px] sm:min-h-[440px] w-full overflow-hidden p-8 sm:p-14 flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1800&q=85"
              alt="NandaPath Wilderness Expedition"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142957]/95 via-[#142957]/60 to-transparent" />

            <div className="relative z-10 space-y-3 text-white max-w-3xl">
              <span className="rounded-full bg-amber-400 text-[#142957] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider shadow-xs inline-block">
                NANDAPATH • BRAND STORY
              </span>
              <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-white leading-tight">
                Find Your Path <br />
                In The Wild.
              </h1>
              <p className="text-sm sm:text-lg font-medium text-slate-200 leading-relaxed pt-1 max-w-2xl">
                Connecting people with the wild beauty of the mountains through safe, meaningful, and deeply enriching Himalayan trekking experiences.
              </p>
            </div>
          </div>
        </div>

        {/* BRAND MANIFESTO & REAL GROUP PHOTO */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* MANIFESTO LETTER */}
          <div className="lg:col-span-7 space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xs">
            <div>
              <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
                Our Purpose & Ethos
              </span>
              <h2 className="text-2xl sm:text-4xl font-sans font-semibold text-[#142957] mt-3 tracking-tight">
                More Than Reaching A Summit
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                Our purpose at <strong className="text-[#142957] font-semibold">NandaPath</strong> is to connect people with the wild beauty of the mountains and to offer safe, meaningful, and enriching trekking experiences. We aim to inspire individuals to step beyond their comfort zones, discover their inner strength, build confidence, overcome challenges, and deepen their connection with nature.
              </p>

              <p>
                We believe that every mountain journey is an opportunity for personal growth, self-discovery, and a fresh perspective on life. Through our treks across the breathtaking landscapes of <strong className="text-[#142957] font-semibold">Uttarakhand, Himachal Pradesh, and Kashmir</strong>, we strive to bring people closer to nature, foster meaningful connections, and help them discover what they are truly capable of achieving.
              </p>

              <blockquote className="my-6 border-l-4 border-sky-500 bg-sky-50/60 p-5 rounded-r-2xl text-[#142957] font-medium text-sm sm:text-base leading-snug">
                “The mountains are not just places we visit; they become a part of who we are and the stories we carry throughout our lives.”
              </blockquote>

              <p>
                Beyond the journey itself, we aspire to create lifelong memories that become a valuable part of every traveller’s story. The photographs they capture, the videos they record, the friendships they build, and the challenges they overcome will serve as timeless reminders of their courage, achievements, and unforgettable experiences.
              </p>

              <p>
                Years later, as they look back on these moments while moving forward in life, we want them to relive the joy, pride, and sense of accomplishment they felt in the mountains. We believe that a trek should leave every traveller with lasting memories, a stronger mindset, meaningful relationships, and a renewed appreciation for life and nature.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#142957]">NANDAPATH</p>
                <p className="text-[11px] text-slate-400">Expedition & Wilderness Guides</p>
              </div>
              <span className="text-2xl">🏔️</span>
            </div>
          </div>

          {/* REAL GROUP PHOTO & BRAND MOTTO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-sm">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-square">
                <img
                  src={judaLakeTrailImg}
                  alt="NandaPath Trekkers Community at Juda Ka Talab"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142957]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="bg-emerald-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-2">
                    Verified Trail Moments
                  </span>
                  <p className="text-xs font-semibold leading-snug">
                    Real NandaPath batch pausing near Juda Ka Talab alpine lake glades.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#142957] text-white p-7 rounded-3xl shadow-md border border-white/10 space-y-4 relative overflow-hidden">
              <span className="bg-amber-400 text-[#142957] text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                THE NANDAPATH PROMISE
              </span>

              <h3 className="text-base sm:text-xl font-sans font-semibold text-white leading-snug">
                The mountains may challenge you, the journey may change you, but the memories will stay with you forever.
              </h3>

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-block bg-amber-400 hover:bg-amber-300 text-[#142957] font-extrabold text-xs px-6 py-3 rounded-xl transition shadow-xs"
                >
                  Start Your Journey &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MEET OUR LEADERSHIP */}
        <div className="mb-20">
          <div className="mb-12 text-left border-b border-slate-100 pb-6 max-w-3xl">
            <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              MEET OUR LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-semibold text-[#142957] mt-3 tracking-tight">
              The Vision Behind NandaPath
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Combining world-class hospitality standards with deep Himalayan terrain expertise to redefine modern adventure travel.
            </p>
          </div>

          <div className="space-y-12">
            {/* ROW 1: FOUNDER 1 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs hover:border-sky-200 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85"
                  alt="Co-Founder"
                  className="h-80 sm:h-96 w-full object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#142957]">
                    Co-Founder
                  </h3>
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Himalayan Mountaineer
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Driven by a lifelong passion for high-altitude exploration and alpine safety. Dedicated to creating sustainable, safety-first trekking routes across Garhwal, Kumaon, Himachal, and Kashmir.
                </p>

                <div className="pt-4 border-t border-slate-100 bg-sky-50/50 p-4 rounded-2xl border border-sky-100/60">
                  <p className="text-xs sm:text-sm italic font-medium text-[#142957] leading-relaxed">
                    "Every mountain pass teaches us humility, endurance, and deep respect for the wild."
                  </p>
                  <p className="mt-2 text-[10px] font-semibold text-sky-700 uppercase tracking-wider">
                    — NandaPath • Find Your Path In The Wild
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2: FOUNDER 2 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs hover:border-sky-200 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4 order-2 md:order-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#142957]">
                    Co-Founder
                  </h3>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                    Ex-JW Marriott & Hyatt Regency
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  I have professional experience in the hospitality industry, including working with renowned brands such as JW Marriott and Hyatt Regency. Driven by my passion for travel, adventure, and the Himalayas, I co-founded NandaPath Trekking Company with a vision to bring people closer to the breathtaking beauty of Uttarakhand.
                </p>

                <div className="pt-4 border-t border-slate-100 bg-amber-50/40 p-4 rounded-2xl border border-amber-100/60">
                  <p className="text-xs sm:text-sm italic font-medium text-[#142957] leading-relaxed">
                    "Trekking is more than just reaching a destination; it's about discovering yourself, embracing challenges, connecting with nature, and creating lifelong memories. NandaPath — Find your path in the wild."
                  </p>
                  <p className="mt-2 text-[10px] font-semibold text-amber-800 uppercase tracking-wider">
                    — NandaPath • Find Your Path In The Wild
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 overflow-hidden rounded-2xl border border-slate-100 shadow-sm order-1 md:order-2">
                <img
                  src={founder2Local}
                  alt="Co-Founder"
                  className="h-80 sm:h-96 w-full object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* THE 4 PILLARS */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              What We Stand For
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-[#142957] mt-3 tracking-tight">
              The Four Pillars of Every Expedition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-sky-300 transition group">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#142957] text-xl flex items-center justify-center font-bold mb-4 group-hover:bg-[#142957] group-hover:text-white transition">
                🌲
              </div>
              <h3 className="text-sm font-semibold text-[#142957]">Personal Growth</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Stepping beyond comfort zones to build confidence, resilience, and discover true inner strength.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-sky-300 transition group">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 text-xl flex items-center justify-center font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
                🛡️
              </div>
              <h3 className="text-sm font-semibold text-[#142957]">Uncompromised Safety</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Expedition-grade gear, certified Himalayan mountaineers, medical oxygen, and tested safety protocols.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-sky-300 transition group">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 text-xl flex items-center justify-center font-bold mb-4 group-hover:bg-amber-500 group-hover:text-white transition">
                🤝
              </div>
              <h3 className="text-sm font-semibold text-[#142957]">Meaningful Connections</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Fostering lifelong friendships, shared courage, and community on the high-altitude trails.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-sky-300 transition group">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 text-xl flex items-center justify-center font-bold mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                📸
              </div>
              <h3 className="text-sm font-semibold text-[#142957]">Timeless Memories</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Capturing moments, achievements, and stories that you will relive pridefully years into the future.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="bg-[#142957] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white">Ready to discover your path?</h3>
            <p className="text-xs text-slate-300">
              Explore upcoming departure dates across Garhwal, Kumaon, Himachal, and Kashmir.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/uttarakhand"
              className="bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs px-7 py-3 rounded-xl shadow-xs transition"
            >
              Explore Treks &rarr;
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs px-6 py-3 rounded-xl transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}