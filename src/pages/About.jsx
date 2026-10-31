import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Local asset imports
import founder2Local from "../assets/founder2.jpeg";
import judaLakeTrailImg from "../assets/juda-lake-trail.jpeg";

export default function About() {
  return (
    <main className="min-h-screen bg-sky-50/60 pb-16 sm:pb-24 pt-16 sm:pt-24 font-sans text-slate-800">
      <Navbar />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* BREADCRUMB */}
        <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500">
          <Link to="/" className="hover:text-[#142957] transition">
            Home
          </Link>
          <span>/</span>
          <span className="font-extrabold text-[#142957]">About Us</span>
        </div>

        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-sky-200/80 bg-[#142957] shadow-xl">
          <div className="relative min-h-[360px] sm:min-h-[460px] w-full overflow-hidden p-6 sm:p-14 flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1800&q=85"
              alt="NandaPath Wilderness Expedition"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142957]/95 via-[#142957]/60 to-transparent" />

            <div className="relative z-10 space-y-3 sm:space-y-4 text-white max-w-3xl">
              <span className="rounded-full bg-amber-400 text-[#142957] px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-xs inline-block">
                NANDAPATH • BRAND STORY
              </span>
              <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                Find Your Path <br />
                In The Wild.
              </h1>
              <p className="text-base sm:text-xl font-bold text-sky-100 leading-relaxed pt-1 max-w-2xl">
                Connecting people with the wild beauty of the mountains through safe, meaningful, and deeply enriching Himalayan trekking experiences.
              </p>
            </div>
          </div>
        </div>

        {/* BRAND MANIFESTO & REAL GROUP PHOTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* MANIFESTO LETTER - ENLARGED FONT SIZES */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 bg-sky-100/70 p-6 sm:p-12 rounded-3xl border border-sky-200 shadow-sm">
            <div>
              <span className="text-xs sm:text-sm font-black text-sky-800 uppercase tracking-wider bg-sky-200/80 px-3.5 py-1.5 rounded-md border border-sky-300 inline-block">
                OUR PURPOSE &amp; ETHOS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#142957] mt-3 tracking-tight">
                More Than Reaching A Summit
              </h2>
            </div>

            {/* ENLARGED TEXT SIZE FOR EASY READING */}
            <div className="space-y-5 text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-semibold">
              <p>
                Our purpose at <strong className="text-[#142957] font-black">NandaPath</strong> is to connect people with the wild beauty of the mountains and to offer safe, meaningful, and enriching trekking experiences. We aim to inspire individuals to step beyond their comfort zones, discover their inner strength, build confidence, overcome challenges, and deepen their connection with nature.
              </p>

              <p>
                We believe that every mountain journey is an opportunity for personal growth, self-discovery, and a fresh perspective on life. Through our treks across the breathtaking landscapes of <strong className="text-[#142957] font-black">Uttarakhand, Himachal Pradesh, and Kashmir</strong>, we strive to bring people closer to nature, foster meaningful connections, and help them discover what they are truly capable of achieving.
              </p>

              <blockquote className="my-6 border-l-4 border-sky-600 bg-sky-200/60 p-5 sm:p-6 rounded-r-3xl text-[#142957] font-extrabold text-base sm:text-xl leading-snug shadow-xs">
                “The mountains are not just places we visit; they become a part of who we are and the stories we carry throughout our lives.”
              </blockquote>

              <p>
                Beyond the journey itself, we aspire to create lifelong memories that become a valuable part of every traveller’s story. The photographs they capture, the videos they record, the friendships they build, and the challenges they overcome will serve as timeless reminders of their courage, achievements, and unforgettable experiences.
              </p>

              <p>
                Years later, as they look back on these moments while moving forward in life, we want them to relive the joy, pride, and sense of accomplishment they felt in the mountains. We believe that a trek should leave every traveller with lasting memories, a stronger mindset, meaningful relationships, and a renewed appreciation for life and nature.
              </p>
            </div>

            <div className="pt-5 border-t border-sky-200 flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#142957]">NANDAPATH</p>
                <p className="text-xs font-bold text-slate-600">Expedition &amp; Wilderness Guides</p>
              </div>
              <span className="text-3xl">🏔️</span>
            </div>
          </div>

          {/* REAL GROUP PHOTO & BRAND MOTTO */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:sticky top-28">
            <div className="overflow-hidden rounded-3xl border border-sky-200 bg-sky-100/80 p-3.5 shadow-sm">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-square">
                <img
                  src={judaLakeTrailImg}
                  alt="NandaPath Trekkers Community at Juda Ka Talab"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142957]/90 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="bg-emerald-600 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider w-max mb-2">
                    Verified Trail Moments
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-snug text-slate-100">
                    Real NandaPath batch pausing near Juda Ka Talab alpine lake glades.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#142957] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-sky-300/30 space-y-4 relative overflow-hidden">
              <span className="bg-amber-400 text-[#142957] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
                THE NANDAPATH PROMISE
              </span>

              <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
                The mountains may challenge you, the journey may change you, but the memories will stay with you forever.
              </h3>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block bg-amber-400 hover:bg-amber-300 text-[#142957] font-black text-xs sm:text-sm px-7 py-3.5 rounded-2xl transition shadow-md"
                >
                  Start Your Journey &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* MEET OUR LEADERSHIP */}
        <div className="space-y-8">
          <div className="border-b border-sky-200 pb-5 max-w-3xl space-y-2">
            <span className="text-xs sm:text-sm font-black text-sky-800 uppercase tracking-wider bg-sky-200/80 px-3.5 py-1.5 rounded-md border border-sky-300 inline-block">
              MEET OUR LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#142957] tracking-tight">
              The Vision Behind NandaPath
            </h2>
            <p className="text-sm sm:text-lg font-bold text-slate-700 leading-relaxed">
              Combining world-class hospitality standards with deep Himalayan terrain expertise to redefine modern adventure travel.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* ROW 1: FOUNDER 1 */}
            <div className="bg-sky-100/80 rounded-3xl border border-sky-200 p-6 sm:p-10 shadow-sm hover:border-sky-300 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-2xl border border-sky-200 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85"
                  alt="Co-Founder"
                  className="h-72 sm:h-96 w-full object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#142957]">
                    Co-Founder
                  </h3>
                  <span className="text-xs font-black text-sky-900 bg-sky-200 px-3 py-1 rounded-full border border-sky-300">
                    Himalayan Mountaineer
                  </span>
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">
                  Driven by a lifelong passion for high-altitude exploration and alpine safety. Dedicated to creating sustainable, safety-first trekking routes across Garhwal, Kumaon, Himachal, and Kashmir.
                </p>

                <div className="pt-4 border-t border-sky-200 bg-sky-200/50 p-4 sm:p-5 rounded-2xl border border-sky-300/60">
                  <p className="text-xs sm:text-base italic font-extrabold text-[#142957] leading-relaxed">
                    "Every mountain pass teaches us humility, endurance, and deep respect for the wild."
                  </p>
                  <p className="mt-2 text-xs font-black text-sky-900 uppercase tracking-wider">
                    — NandaPath • Find Your Path In The Wild
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2: FOUNDER 2 */}
            <div className="bg-sky-100/80 rounded-3xl border border-sky-200 p-6 sm:p-10 shadow-sm hover:border-sky-300 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
              <div className="md:col-span-7 space-y-4 order-2 md:order-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#142957]">
                    Co-Founder
                  </h3>
                  <span className="text-xs font-black text-amber-900 bg-amber-200/80 px-3 py-1 rounded-full border border-amber-300">
                    Ex-JW Marriott &amp; Hyatt Regency
                  </span>
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">
                  I have professional experience in the hospitality industry, including working with renowned brands such as JW Marriott and Hyatt Regency. Driven by my passion for travel, adventure, and the Himalayas, I co-founded NandaPath Trekking Company with a vision to bring people closer to the breathtaking beauty of Uttarakhand.
                </p>

                <div className="pt-4 border-t border-amber-200 bg-amber-100/60 p-4 sm:p-5 rounded-2xl border border-amber-200">
                  <p className="text-xs sm:text-base italic font-extrabold text-[#142957] leading-relaxed">
                    "Trekking is more than just reaching a destination; it's about discovering yourself, embracing challenges, connecting with nature, and creating lifelong memories. NandaPath — Find your path in the wild."
                  </p>
                  <p className="mt-2 text-xs font-black text-amber-950 uppercase tracking-wider">
                    — NandaPath • Find Your Path In The Wild
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 overflow-hidden rounded-2xl border border-sky-200 shadow-xs order-1 md:order-2">
                <img
                  src={founder2Local}
                  alt="Co-Founder"
                  className="h-72 sm:h-96 w-full object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* THE 4 PILLARS */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs sm:text-sm font-black text-sky-800 uppercase tracking-wider bg-sky-200/80 px-3.5 py-1.5 rounded-md border border-sky-300 inline-block">
              WHAT WE STAND FOR
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142957] tracking-tight">
              The Four Pillars of Every Expedition
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-sky-100/80 rounded-3xl border border-sky-200 p-6 sm:p-7 shadow-2xs hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-2xl bg-sky-200 text-[#142957] text-2xl flex items-center justify-center font-bold mb-4 group-hover:bg-[#142957] group-hover:text-white transition">
                🌲
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#142957]">Personal Growth</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-700 mt-2 leading-relaxed">
                Stepping beyond comfort zones to build confidence, resilience, and discover true inner strength.
              </p>
            </div>

            <div className="bg-sky-100/80 rounded-3xl border border-sky-200 p-6 sm:p-7 shadow-2xs hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-200 text-emerald-900 text-2xl flex items-center justify-center font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
                🛡️
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#142957]">Uncompromised Safety</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-700 mt-2 leading-relaxed">
                Expedition-grade gear, certified Himalayan mountaineers, medical oxygen, and tested safety protocols.
              </p>
            </div>

            <div className="bg-sky-100/80 rounded-3xl border border-sky-200 p-6 sm:p-7 shadow-2xs hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-950 text-2xl flex items-center justify-center font-bold mb-4 group-hover:bg-amber-500 group-hover:text-white transition">
                🤝
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#142957]">Meaningful Connections</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-700 mt-2 leading-relaxed">
                Fostering lifelong friendships, shared courage, and community on high-altitude trails.
              </p>
            </div>

            <div className="bg-sky-100/80 rounded-3xl border border-sky-200 p-6 sm:p-7 shadow-2xs hover:shadow-lg transition group">
              <div className="w-12 h-12 rounded-2xl bg-purple-200 text-purple-950 text-2xl flex items-center justify-center font-bold mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                📸
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#142957]">Timeless Memories</h3>
              <p className="text-xs sm:text-sm font-bold text-slate-700 mt-2 leading-relaxed">
                Capturing moments, achievements, and stories that you will relive pridefully years into the future.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="bg-[#142957] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-300/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to discover your path?</h3>
            <p className="text-xs sm:text-base text-sky-100 font-medium">
              Explore upcoming departure dates across Garhwal, Kumaon, Himachal, and Kashmir.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
            <Link
              to="/uttarakhand"
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white font-black text-xs sm:text-sm px-8 py-3.5 rounded-2xl shadow-md transition"
            >
              Explore Treks &rarr;
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs sm:text-sm px-7 py-3.5 rounded-2xl transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}