import { useState } from "react";
import { Link } from "react-router-dom";
import nandaPathLogo from "../assets/nanda-path1.jpg";

export default function Navbar() {
  const [isUttarakhandOpen, setIsUttarakhandOpen] = useState(false);
  const [isHimachalOpen, setIsHimachalOpen] = useState(false);
  const [isKashmirOpen, setIsKashmirOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (menuName) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menuName ? null : menuName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all font-sans">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3 py-1 shrink-0">
          <img
            src={nandaPathLogo}
            alt="NandaPath Adventures"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain rounded-lg transition-transform duration-200 hover:scale-105 mix-blend-multiply bg-transparent"
          />
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm lg:text-[15px] font-extrabold text-[#142957]">
          <Link to="/" className="hover:text-sky-600 transition">
            Home
          </Link>

          {/* 1. UTTARAKHAND DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsUttarakhandOpen(true)}
            onMouseLeave={() => setIsUttarakhandOpen(false)}
          >
            <Link
              to="/uttarakhand"
              className="flex items-center gap-1 hover:text-sky-600 py-6 transition cursor-pointer"
            >
              <span>Uttarakhand</span>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {isUttarakhandOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-sky-50 rounded-2xl shadow-xl border border-sky-200/80 p-5 grid grid-cols-2 gap-6 z-50">
                {/* GARHWAL REGION */}
                <div>
                  <div className="border-b border-sky-200 pb-2 mb-2.5">
                    <Link 
                      to="/garhwal" 
                      className="text-xs font-black uppercase tracking-wider text-sky-800 hover:text-[#142957] flex items-center justify-between transition"
                    >
                      <span>Garhwal Region</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                  <ul className="space-y-2 text-xs font-bold text-slate-800">
                    <li><Link to="/kedarkantha" className="hover:text-sky-600 hover:underline">Kedarkantha Trek</Link></li>
                    <li><Link to="/har-ki-dun" className="hover:text-sky-600 hover:underline">Har Ki Dun Trek</Link></li>
                    <li><Link to="/valley-of-flowers" className="hover:text-sky-600 hover:underline">Valley of Flowers (Phoolon Ki Ghati)</Link></li>
                    <li><Link to="/brahmatal" className="hover:text-sky-600 hover:underline">Brahmatal Trek</Link></li>
                    <li><Link to="/bali-pass" className="hover:text-sky-600 hover:underline">Bali Pass Trek</Link></li>
                    <li><Link to="/gaumukh-tapovan" className="hover:text-sky-600 hover:underline">Gaumukh Tapovan Trek</Link></li>
                    <li><Link to="/kwari-pass" className="hover:text-sky-600 hover:underline">Kwari Pass Trek</Link></li>
                    <li><Link to="/roopkund" className="hover:text-sky-600 hover:underline">Roopkund Trek</Link></li>
                  </ul>
                </div>

                {/* KUMAON REGION */}
                <div>
                  <div className="border-b border-sky-200 pb-2 mb-2.5">
                    <Link 
                      to="/kumaon" 
                      className="text-xs font-black uppercase tracking-wider text-sky-800 hover:text-[#142957] flex items-center justify-between transition"
                    >
                      <span>Kumaon Region</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                  <ul className="space-y-2 text-xs font-bold text-slate-800">
                    <li><Link to="/pindari-glacier" className="hover:text-sky-600 hover:underline">Pindari Glacier Trek</Link></li>
                    <li><Link to="/milam-glacier" className="hover:text-sky-600 hover:underline">Milam Glacier Trek</Link></li>
                    <li><Link to="/sundardunga-glacier" className="hover:text-sky-600 hover:underline">Sundardunga Glacier Trek</Link></li>
                    <li><Link to="/ranthang-kharak" className="hover:text-sky-600 hover:underline">Ranthang Kharak Trek</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 2. HIMACHAL DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsHimachalOpen(true)}
            onMouseLeave={() => setIsHimachalOpen(false)}
          >
            <Link
              to="/himachal"
              className="flex items-center gap-1 hover:text-sky-600 py-6 transition cursor-pointer"
            >
              <span>Himachal</span>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {isHimachalOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[460px] bg-sky-50 rounded-2xl shadow-xl border border-sky-200/80 p-5 grid grid-cols-2 gap-6 z-50">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-sky-800 mb-2.5 border-b border-sky-200 pb-1.5">
                    High Pass Trails
                  </h4>
                  <ul className="space-y-2 text-xs font-bold text-slate-800">
                    <li><Link to="/pin-parvati-pass" className="hover:text-sky-600 hover:underline">Pin Parvati Pass</Link></li>
                    <li><Link to="/buran-ghati" className="hover:text-sky-600 hover:underline">Buran Ghati Trek</Link></li>
                    <li><Link to="/hampta-pass" className="hover:text-sky-600 hover:underline">Hampta Pass Trek</Link></li>
                    <li><Link to="/rupin-pass" className="hover:text-sky-600 hover:underline">Rupin Pass Trek</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-sky-800 mb-2.5 border-b border-sky-200 pb-1.5">
                    Valley & Lake Treks
                  </h4>
                  <ul className="space-y-2 text-xs font-bold text-slate-800">
                    <li><Link to="/bhirgu-lake" className="hover:text-sky-600 hover:underline">Bhirgu Lake Trek</Link></li>
                    <li><Link to="/pin-bhaba-pass" className="hover:text-sky-600 hover:underline">Pin Bhaba Pass</Link></li>
                    <li><Link to="/parashar-lake" className="hover:text-sky-600 hover:underline">Parashar Lake Trek</Link></li>
                    <li><Link to="/sar-pass" className="hover:text-sky-600 hover:underline">Sar Pass Trek</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 3. JAMMU & KASHMIR DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsKashmirOpen(true)}
            onMouseLeave={() => setIsKashmirOpen(false)}
          >
            <Link
              to="/kashmir"
              className="flex items-center gap-1 hover:text-sky-600 py-6 transition cursor-pointer"
            >
              <span>Jammu & Kashmir</span>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {isKashmirOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[270px] bg-sky-50 rounded-2xl shadow-xl border border-sky-200/80 p-5 z-50">
                <h4 className="text-xs font-black uppercase tracking-wider text-sky-800 mb-2.5 border-b border-sky-200 pb-1.5">
                  Alpine Lake Expeditions
                </h4>
                <ul className="space-y-2 text-xs font-bold text-slate-800">
                  <li><Link to="/kashmir-great-lakes" className="hover:text-sky-600 hover:underline">Kashmir Great Lakes</Link></li>
                  <li><Link to="/tarsar-marsar" className="hover:text-sky-600 hover:underline">Tarsar Marsar Trek</Link></li>
                  <li><Link to="/gangabal-lake" className="hover:text-sky-600 hover:underline">Gangabal Lake Trek</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* 4. OUR TOURS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsToursOpen(true)}
            onMouseLeave={() => setIsToursOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-sky-600 py-6 transition cursor-pointer">
              <span>Our Tours</span>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {isToursOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-sky-50 rounded-2xl shadow-xl border border-sky-200/80 p-5 z-50">
                <h4 className="text-xs font-black uppercase tracking-wider text-sky-800 mb-2.5 border-b border-sky-200 pb-1.5">
                  Pilgrimage & Yatra Tours
                </h4>
                <ul className="space-y-2.5 text-xs font-bold text-slate-800">
                  <li><Link to="/kedarnath-yatra" className="hover:text-sky-600 hover:underline block">Kedarnath Yatra</Link></li>
                  <li><Link to="/kedarnath-badrinath-yatra" className="hover:text-sky-600 hover:underline block">Kedarnath & Badrinath Yatra</Link></li>
                  <li><Link to="/char-dham-yatra" className="hover:text-sky-600 hover:underline block">Char Dham Yatra</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* MORE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-sky-600 py-6 transition cursor-pointer">
              <span>More</span>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {isMoreOpen && (
              <div className="absolute top-full right-0 w-[200px] bg-sky-50 rounded-2xl shadow-xl border border-sky-200/80 p-4 z-50">
                <ul className="space-y-2 text-xs font-bold text-slate-800">
                  <li><Link to="/blog" className="hover:text-sky-600 hover:underline block py-0.5">Our Blog</Link></li>
                  <li><Link to="/faqs" className="hover:text-sky-600 hover:underline block py-0.5">FAQs</Link></li>
                  <li><Link to="/about" className="hover:text-sky-600 hover:underline block py-0.5">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-sky-600 hover:underline block py-0.5">Contact</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* RESORTS LINK */}
          <a href="#homestays" className="hover:text-sky-600 transition flex items-center gap-1.5">
            <span>Resorts</span>
            <span className="bg-amber-300 text-slate-900 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
              Soon
            </span>
          </a>
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="rounded-full bg-[#142957] hover:bg-sky-900 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold text-white shadow-xs hover:shadow-md transition transform hover:-translate-y-0.5 shrink-0"
          >
            Let's Talk
          </Link>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-200 text-[#142957] hover:bg-sky-50 transition cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-sky-50 border-b border-sky-200 px-6 py-5 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          <Link to="/" onClick={closeMobileMenu} className="block font-extrabold text-[#142957] text-sm py-2 border-b border-sky-200">
            Home
          </Link>

          {/* MOBILE UTTARAKHAND */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("uttarakhand")}
              className="w-full flex items-center justify-between font-extrabold text-[#142957] text-sm py-2 border-b border-sky-200 cursor-pointer"
            >
              <span>Uttarakhand Treks</span>
              <span>{activeMobileSubmenu === "uttarakhand" ? "−" : "+"}</span>
            </button>
            {activeMobileSubmenu === "uttarakhand" && (
              <div className="pl-3 py-2 space-y-2 text-xs font-bold text-slate-800 bg-sky-100/80 rounded-xl mt-2 p-3 border border-sky-200">
                <p className="font-black text-sky-800 uppercase text-[10px] tracking-wider">Garhwal Region</p>
                <Link to="/kedarkantha" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Kedarkantha Trek</Link>
                <Link to="/har-ki-dun" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Har Ki Dun Trek</Link>
                <Link to="/valley-of-flowers" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Valley of Flowers</Link>
                <Link to="/brahmatal" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Brahmatal Trek</Link>
                <Link to="/bali-pass" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Bali Pass Trek</Link>
                <Link to="/gaumukh-tapovan" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Gaumukh Tapovan Trek</Link>
                <Link to="/kwari-pass" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Kwari Pass Trek</Link>
                <Link to="/roopkund" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Roopkund Trek</Link>

                <p className="font-black text-sky-800 uppercase text-[10px] tracking-wider pt-2 border-t border-sky-200">Kumaon Region</p>
                <Link to="/pindari-glacier" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Pindari Glacier Trek</Link>
                <Link to="/milam-glacier" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Milam Glacier Trek</Link>
                <Link to="/sundardunga-glacier" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Sundardunga Glacier Trek</Link>
                <Link to="/ranthang-kharak" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Ranthang Kharak Trek</Link>
              </div>
            )}
          </div>

          {/* MOBILE HIMACHAL */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("himachal")}
              className="w-full flex items-center justify-between font-extrabold text-[#142957] text-sm py-2 border-b border-sky-200 cursor-pointer"
            >
              <span>Himachal Treks</span>
              <span>{activeMobileSubmenu === "himachal" ? "−" : "+"}</span>
            </button>
            {activeMobileSubmenu === "himachal" && (
              <div className="pl-3 py-2 space-y-2 text-xs font-bold text-slate-800 bg-sky-100/80 rounded-xl mt-2 p-3 border border-sky-200">
                <p className="font-black text-sky-800 uppercase text-[10px] tracking-wider">High Pass Trails</p>
                <Link to="/pin-parvati-pass" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Pin Parvati Pass</Link>
                <Link to="/buran-ghati" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Buran Ghati Trek</Link>
                <Link to="/hampta-pass" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Hampta Pass Trek</Link>
                <Link to="/rupin-pass" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Rupin Pass Trek</Link>

                <p className="font-black text-sky-800 uppercase text-[10px] tracking-wider pt-2 border-t border-sky-200">Valley & Lake Treks</p>
                <Link to="/bhirgu-lake" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Bhirgu Lake Trek</Link>
                <Link to="/pin-bhaba-pass" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Pin Bhaba Pass</Link>
                <Link to="/parashar-lake" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Parashar Lake Trek</Link>
                <Link to="/sar-pass" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Sar Pass Trek</Link>
              </div>
            )}
          </div>

          {/* MOBILE JAMMU & KASHMIR */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("kashmir")}
              className="w-full flex items-center justify-between font-extrabold text-[#142957] text-sm py-2 border-b border-sky-200 cursor-pointer"
            >
              <span>Jammu & Kashmir</span>
              <span>{activeMobileSubmenu === "kashmir" ? "−" : "+"}</span>
            </button>
            {activeMobileSubmenu === "kashmir" && (
              <div className="pl-3 py-2 space-y-2 text-xs font-bold text-slate-800 bg-sky-100/80 rounded-xl mt-2 p-3 border border-sky-200">
                <p className="font-black text-sky-800 uppercase text-[10px] tracking-wider">Alpine Lake Expeditions</p>
                <Link to="/kashmir-great-lakes" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Kashmir Great Lakes</Link>
                <Link to="/tarsar-marsar" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Tarsar Marsar Trek</Link>
                <Link to="/gangabal-lake" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Gangabal Lake Trek</Link>
              </div>
            )}
          </div>

          {/* MOBILE TOURS */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("tours")}
              className="w-full flex items-center justify-between font-extrabold text-[#142957] text-sm py-2 border-b border-sky-200 cursor-pointer"
            >
              <span>Our Tours & Yatras</span>
              <span>{activeMobileSubmenu === "tours" ? "−" : "+"}</span>
            </button>
            {activeMobileSubmenu === "tours" && (
              <div className="pl-3 py-2 space-y-2 text-xs font-bold text-slate-800 bg-sky-100/80 rounded-xl mt-2 p-3 border border-sky-200">
                <p className="font-black text-sky-800 uppercase text-[10px] tracking-wider">Pilgrimage Tours</p>
                <Link to="/kedarnath-yatra" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Kedarnath Yatra</Link>
                <Link to="/kedarnath-badrinath-yatra" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Kedarnath & Badrinath Yatra</Link>
                <Link to="/char-dham-yatra" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Char Dham Yatra</Link>
              </div>
            )}
          </div>

          {/* MOBILE MORE */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("more")}
              className="w-full flex items-center justify-between font-extrabold text-sky-800 text-sm py-2 border-b border-sky-200 cursor-pointer"
            >
              <span>More Links</span>
              <span>{activeMobileSubmenu === "more" ? "−" : "+"}</span>
            </button>
            {activeMobileSubmenu === "more" && (
              <div className="pl-3 py-2 space-y-2 text-xs font-bold text-slate-800 bg-sky-100/80 rounded-xl mt-2 p-3 border border-sky-200">
                <Link to="/blog" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Our Blog</Link>
                <Link to="/faqs" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">FAQs</Link>
                <Link to="/about" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">About Us</Link>
                <Link to="/contact" onClick={closeMobileMenu} className="block hover:text-sky-600 py-0.5">Contact</Link>
              </div>
            )}
          </div>

          {/* RESORTS ITEM */}
          <a href="#homestays" onClick={closeMobileMenu} className="flex items-center justify-between font-extrabold text-[#142957] text-sm py-2">
            <span>Resorts</span>
            <span className="bg-amber-300 text-slate-900 text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Soon
            </span>
          </a>
        </div>
      )}
    </header>
  );
}