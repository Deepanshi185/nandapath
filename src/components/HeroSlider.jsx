import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../assets/bg.png";

const searchDatabase = [
  { name: "Kedarkantha Trek", region: "Uttarakhand", type: "Trek", link: "/kedarkantha" },
  { name: "Har Ki Dun Trek", region: "Uttarakhand", type: "Trek", link: "/har-ki-dun" },
  { name: "Bali Pass Trek", region: "Uttarakhand", type: "Trek", link: "/bali-pass" },
  { name: "Pindari Glacier Trek", region: "Kumaon", type: "Trek", link: "/pindari-glacier" },
  { name: "Kashmir Great Lakes", region: "Jammu & Kashmir", type: "Trek", link: "/kashmir-great-lakes" },
  { name: "Hampta Pass Trek", region: "Himachal", type: "Trek", link: "/hampta-pass" },
];

export default function HeroSlider() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearching(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = searchDatabase.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectResult = (link) => {
    setIsSearching(false);
    setSearchQuery("");
    navigate(link);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 4);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));

  return (
    <section id="home" className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[700px] w-full overflow-hidden bg-slate-900">
      
      {/* =========================================================================
          SLIDE 1: MAIN HERO
         ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 0 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/70 via-70% sm:via-50% to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-16 pt-10 sm:pt-16 pb-20 sm:pb-28 h-full flex flex-col justify-center">
          <div className="max-w-xl text-left">
            <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-600">
              ADVENTURE • NATURE • EXPLORATION
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight text-[#142957] drop-shadow-xs">
              Mountains Call, <br />
              We Guide
            </h1>

            <p className="mt-2.5 sm:mt-4 max-w-md text-xs sm:text-base leading-relaxed text-slate-700 font-medium">
              Discover breathtaking treks, wilderness camping, and cozy stays in the heart of the Himalayas.
            </p>

            <div className="mt-5 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3 relative z-30">
              <Link
                to="/uttarakhand"
                className="rounded-full bg-amber-400 hover:bg-amber-300 text-[#142957] px-5 py-2.5 sm:px-7 sm:py-3 text-xs font-extrabold shadow-md transition flex items-center gap-1.5 sm:gap-2 cursor-pointer border border-amber-500/20"
              >
                Explore Treks <span>&rarr;</span>
              </Link>

              <a
                href="#homestays"
                className="rounded-full border border-slate-300 bg-white/80 backdrop-blur-md px-5 py-2.5 sm:px-7 sm:py-3 text-xs font-bold text-[#142957] transition hover:bg-white"
              >
                View Stays
              </a>
            </div>

            {/* SEARCH BAR */}
            <div className="mt-5 sm:mt-8 relative w-full z-30" ref={searchRef}>
              <div className="flex items-center overflow-hidden rounded-xl bg-white/60 sm:bg-white/40 backdrop-blur-md border border-white/70 shadow-lg sm:shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all focus-within:bg-white/80 focus-within:border-white">
                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() => setIsSearching(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearching(true);
                  }}
                  placeholder="Search Your Destination..."
                  className="w-full bg-transparent px-3.5 sm:px-5 py-3 sm:py-4 text-[#142957] placeholder-slate-600 text-xs sm:text-base font-semibold focus:outline-none"
                />

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-slate-600 hover:text-slate-900 text-xs font-bold px-2.5 sm:px-3 cursor-pointer"
                  >
                    ✕
                  </button>
                )}

                <button
                  onClick={() => setIsSearching(true)}
                  className="bg-[#142957] hover:bg-sky-900 text-white p-3 sm:p-5 flex items-center justify-center shrink-0 transition cursor-pointer shadow-md"
                  aria-label="Search"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* SEARCH DROPDOWN */}
              {isSearching && searchQuery.trim() !== "" && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#142957]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden max-h-60 sm:max-h-72 overflow-y-auto divide-y divide-white/10 z-50 text-white">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectResult(item.link)}
                        className="w-full px-4 sm:px-5 py-3 text-left hover:bg-sky-600/30 transition flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300">{item.name}</p>
                          <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">{item.region}</p>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/10 text-white group-hover:bg-sky-500 transition">
                          {item.type}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-300 font-medium">
                      No matching treks found. Try searching <span className="text-sky-300 font-semibold">Uttarakhand</span>.
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 2: TRISHUL PARVAT
         ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/50 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-16 pt-10 sm:pt-16 pb-20 sm:pb-28 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-left space-y-2.5 sm:space-y-4">
            
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-600">
              KUMAON HIMALAYAS &bull; 7,120 M
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#142957] leading-[1.15] sm:leading-[1.1]">
              Trishul Parvat <br />
              The Sacred Trident
            </h2>

            <p className="max-w-lg text-xs sm:text-base font-medium text-slate-700 leading-relaxed">
              Experience the majestic three-summit massif guarding the glacial rivers and pristine valleys of Kumaon.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap gap-2.5 sm:gap-3">
              <Link
                to="/kumaon"
                className="rounded-full bg-amber-400 hover:bg-amber-300 text-[#142957] font-extrabold text-xs px-5 py-2.5 sm:px-7 sm:py-3.5 shadow-md transition"
              >
                Explore Kumaon Treks &rarr;
              </Link>
              <Link
                to="/kumaon"
                className="rounded-full border border-slate-300 bg-white/80 backdrop-blur-md text-[#142957] font-bold text-xs px-5 py-2.5 sm:px-7 sm:py-3.5 transition hover:bg-white"
              >
                Learn More
              </Link>
            </div>

            <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs font-bold text-[#142957]">
              <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 shadow-xs">
                🏔️ Height: 7,120 M
              </span>
              <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 shadow-xs">
                📍 Location: Kumaon Border
              </span>
              <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 shadow-xs">
                ⛺ Best Season: May - Oct
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 3: SAFETY MEANS NANDAPATH
         ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 2 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1800&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/70 via-70% sm:via-50% to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-16 pt-10 sm:pt-16 pb-20 sm:pb-28 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-left space-y-2.5 sm:space-y-4">
            
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-600">
              EXPEDITION SAFETY &bull; CERTIFIED LEADERS
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#142957] leading-[1.15] sm:leading-[1.1]">
              Safety Means <br />
              NandaPath
            </h2>

            <p className="max-w-xl text-xs sm:text-base font-medium text-slate-700 leading-relaxed">
              Behind every high-altitude trek lies a rock-solid system built on certified Himalayan mountaineers, medical oxygen gear, and fine-tuned safety protocols.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                to="/uttarakhand"
                className="rounded-full bg-amber-400 hover:bg-amber-300 text-[#142957] font-extrabold text-xs px-5 py-2.5 sm:px-8 sm:py-4 shadow-md transition"
              >
                View Upcoming Treks
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-slate-300 bg-white/80 backdrop-blur-md text-[#142957] font-bold text-xs px-5 py-2.5 sm:px-6 sm:py-4 transition hover:bg-white"
              >
                Safety Guidelines &rarr;
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 4: NANDA KOT & CUSTOM GROUP EXPEDITIONS
         ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 3 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/70 via-70% sm:via-50% to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-16 pt-10 sm:pt-16 pb-20 sm:pb-28 h-full flex flex-col justify-center">
          
          <div className="mb-2 sm:mb-3 relative z-40">
            <div className="relative inline-block">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="bg-[#142957] text-white font-bold text-[11px] sm:text-xs px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/20 shadow-md flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:bg-sky-900 transition"
              >
                <span>Tailored Group Expeditions</span>
                <span className="text-[9px]">▼</span>
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 sm:w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 text-xs font-semibold text-slate-700 space-y-1">
                  <Link to="/contact" className="block px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#142957]">College & Student Batches</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#142957]">Corporate Wellness Trails</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#142957]">Private Family Expeditions</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#142957]">Custom Departure Dates</Link>
                </div>
              )}
            </div>
          </div>

          <div className="max-w-xl text-left space-y-2.5 sm:space-y-4">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-slate-600">
              NANDA KOT BASIN &bull; 6,861 M
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#142957] leading-[1.15] sm:leading-[1.1]">
              Custom Trails & <br />
              Private Expeditions
            </h2>

            <p className="text-xs sm:text-base font-medium text-slate-700 leading-relaxed max-w-lg">
              Planning a group trek or private departure? We design customized Himalayan routes with dedicated guides, camp support, and private transport.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap gap-2.5 sm:gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-amber-400 hover:bg-amber-300 text-[#142957] font-extrabold text-xs px-5 py-2.5 sm:px-7 sm:py-3.5 shadow-md transition"
              >
                Plan Private Expedition &rarr;
              </Link>
              <Link
                to="/pindari-glacier"
                className="rounded-full border border-slate-300 bg-white/80 backdrop-blur-md text-[#142957] font-bold text-xs px-5 py-2.5 sm:px-7 sm:py-3.5 transition hover:bg-white"
              >
                Explore Routes
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* LEFT CAROUSEL ARROW - POSITIONED FLUSH TO EDGE ON MOBILE */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-[#142957] backdrop-blur-md border border-slate-200 shadow-md transition hover:bg-white cursor-pointer"
      >
        &#10094;
      </button>

      {/* RIGHT CAROUSEL ARROW - POSITIONED FLUSH TO EDGE ON MOBILE */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-[#142957] backdrop-blur-md border border-slate-200 shadow-md transition hover:bg-white cursor-pointer"
      >
        &#10095;
      </button>

      {/* BOTTOM SLIDE INDICATORS */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? "w-6 sm:w-8 bg-[#142957]" : "w-2 sm:w-2.5 bg-slate-400/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}