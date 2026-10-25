import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import winterPineTrailImg from "../assets/winter-pine-trail.jpeg";

const searchDatabase = [
  { name: "Kedarkantha Trek", region: "Uttarakhand", type: "Trek", link: "/kedarkantha" },
  { name: "Har Ki Dun Trek", region: "Uttarakhand", type: "Trek", link: "/har-ki-dun" },
  { name: "Bali Pass Trek", region: "Uttarakhand", type: "Trek", link: "/bali-pass" },
  { name: "Gaumukh Tapovan Trek", region: "Uttarakhand", type: "Trek", link: "/gaumukh-tapovan" },
  { name: "Pindari Glacier Trek", region: "Kumaon", type: "Trek", link: "/pindari-glacier" },
  { name: "Kashmir Great Lakes", region: "Jammu & Kashmir", type: "Trek", link: "/kashmir-great-lakes" },
  { name: "Hampta Pass Trek", region: "Himachal", type: "Trek", link: "/hampta-pass" },
];

const slideItems = [
  {
    id: 0,
    tagline: "ADVENTURE • NATURE • EXPLORATION",
    heading: "Mountains Call, \nWe Guide",
    description: "Discover breathtaking treks, wilderness camping, and cozy stays in the heart of the Himalayas.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=85", // Nanda Devi Summit, Uttarakhand
  },
  {
    id: 1,
    tagline: "WINTER PASSAGES • GARHWAL HIMALAYAS",
    heading: "Snowy Ridges & \nWinter Trails",
    description: "Ascend pristine snow slopes through pine glades with certified local leaders and full high-altitude gear support.",
    image: winterPineTrailImg, // Real Hand-Clicked Winter Trail, Uttarakhand
  },
  {
    id: 2,
    tagline: "EXPEDITION SAFETY • CERTIFIED LEADERS",
    heading: "Safety Means \nNandaPath",
    description: "Behind every high-altitude trek lies a rock-solid system built on certified Himalayan mountaineers, medical oxygen gear, and safety protocols.",
    // REPLACED WITH VERIFIED UTTARAKHAND PEAKS
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1920&q=85", 
  },
  {
    id: 3,
    tagline: "GARHWAL & KUMAON • CUSTOM GROUP DEPARTURES",
    heading: "Custom Trails & \nPrivate Expeditions",
    description: "Planning a group trek or private departure? We design customized Himalayan routes with dedicated guides and camp support.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=85", // Garhwal Valley, Uttarakhand
  },
];

export default function HeroSlider() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (isSearching) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideItems.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [isSearching]);

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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slideItems.length - 1 : prev - 1));

  return (
    <section id="home" className="relative min-h-[500px] sm:min-h-[620px] lg:min-h-[680px] w-full overflow-hidden bg-slate-900 font-sans">
      
      {slideItems.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/60 to-transparent" />

            <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-12 lg:px-16 pt-8 sm:pt-14 pb-16 sm:pb-24 h-full flex flex-col justify-center">
              <div className="max-w-xl text-left space-y-2.5 sm:space-y-4">
                
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-600">
                  {slide.tagline}
                </p>

                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-sans font-extrabold leading-snug sm:leading-tight tracking-tight text-[#142957] whitespace-pre-line">
                  {slide.heading}
                </h1>

                <p className="max-w-md text-xs sm:text-base leading-relaxed text-slate-700 font-medium">
                  {slide.description}
                </p>

                <div className="pt-1 flex flex-wrap gap-2.5 sm:gap-3 relative z-30">
                  <Link
                    to="/uttarakhand"
                    className="rounded-full bg-amber-400 hover:bg-amber-300 text-[#142957] px-5 py-2.5 sm:px-7 sm:py-3 text-xs font-extrabold shadow-md transition flex items-center gap-1.5 cursor-pointer border border-amber-500/20"
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

                {/* SEARCH BAR (SLIDE 1 ONLY) */}
                {index === 0 && (
                  <div className="pt-2 relative w-full z-30" ref={searchRef}>
                    <div className="flex items-center overflow-hidden rounded-xl bg-white/80 sm:bg-white/50 backdrop-blur-md border border-white/80 shadow-lg transition-all focus-within:bg-white focus-within:border-sky-500">
                      <input
                        type="text"
                        value={searchQuery}
                        onFocus={() => setIsSearching(true)}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setIsSearching(true);
                        }}
                        placeholder="Search Your Destination..."
                        className="w-full bg-transparent px-3.5 sm:px-5 py-3 sm:py-3.5 text-[#142957] placeholder-slate-500 text-xs sm:text-sm font-semibold focus:outline-none"
                      />

                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="text-slate-600 hover:text-slate-900 text-xs font-bold px-2.5 cursor-pointer shrink-0"
                        >
                          ✕
                        </button>
                      )}

                      <button
                        onClick={() => setIsSearching(true)}
                        className="bg-[#142957] hover:bg-sky-900 text-white p-3 sm:p-4 flex items-center justify-center shrink-0 transition cursor-pointer shadow-md"
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
                )}

              </div>
            </div>
          </div>
        );
      })}

      {/* LEFT CAROUSEL ARROW */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-[#142957] backdrop-blur-md border border-slate-200 shadow-md transition hover:bg-white cursor-pointer"
      >
        &#10094;
      </button>

      {/* RIGHT CAROUSEL ARROW */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-[#142957] backdrop-blur-md border border-slate-200 shadow-md transition hover:bg-white cursor-pointer"
      >
        &#10095;
      </button>

      {/* BOTTOM SLIDE INDICATORS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2">
        {slideItems.map((_, idx) => (
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