import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection"; 
import summitShrineImg from "../assets/summit-shrine.jpeg";
import campMealImg from "../assets/camp-meal.jpeg";
import trailActionImg from "../assets/trail-action.jpeg";
import sankriSunsetImg from "../assets/sankri-sunset.jpeg";
import basecampImg from "../assets/basecamp.jpeg";
import groupBatchImg from "../assets/group-batch.jpeg";
import campsiteMealImg from "../assets/campsite-meal.jpeg";
import judaGroupImg from "../assets/juda-group.jpeg";

const trekking =
  "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85";

const homestay =
  "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85";

// Category Icons
const TrekkingIcon = () => (
  <svg className="h-7 w-7 text-[#142957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const CampingIcon = () => (
  <svg className="h-7 w-7 text-[#142957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3L2 21h20L12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v18" />
  </svg>
);

const BedVenturingIcon = () => (
  <svg className="h-7 w-7 text-[#142957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 21V12h6v9" />
  </svg>
);

// CONSULTATION & BOOKING FORM SECTION
function BookingConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    budget: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName}! Your enquiry has been sent successfully.`);
  };

  return (
    <section className="py-10 sm:py-16 bg-white font-sans text-slate-800 border-t border-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT COLUMN: HERO PHOTO CARD */}
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full flex flex-col justify-between p-5 sm:p-10 text-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85"
              alt="Himalayan Wilderness Expedition"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736]/95 via-[#0B1736]/75 to-[#0B1736]/40" />

            <div className="relative z-10 space-y-2 sm:space-y-3">
              <span className="bg-amber-400 text-[#0B1736] text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider inline-block">
                NANDAPATH SUPPORT
              </span>
              <h2 className="text-xl sm:text-4xl font-sans font-bold text-white leading-tight tracking-tight">
                Plan Your Dream Expedition
              </h2>
              <p className="text-[11px] sm:text-sm text-slate-200 leading-relaxed font-normal pt-0.5">
                Connect with our Himalayan trek experts for customized itineraries, seasonal advice, and group estimates.
              </p>
            </div>

            <div className="relative z-10 space-y-2 sm:space-y-3 my-4 sm:my-6">
              <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/15 flex items-center gap-2.5 sm:gap-3">
                <span className="text-amber-300 text-sm sm:text-base">⚡</span>
                <p className="text-[11px] sm:text-xs font-semibold text-white">Free Consultation & Estimate within 1 Hour</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/15 flex items-center gap-2.5 sm:gap-3">
                <span className="text-sky-300 text-sm sm:text-base">🛡️</span>
                <p className="text-[11px] sm:text-xs font-semibold text-white">100% Certified Guides & Safe Equipment</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/15 flex items-center gap-2.5 sm:gap-3">
                <span className="text-emerald-300 text-sm sm:text-base">⛰️</span>
                <p className="text-[11px] sm:text-xs font-semibold text-white">Customized Dates & Private Group Batches</p>
              </div>
            </div>

            <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/15 flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-200">
              <span>💬 Direct Enquiry: <strong className="text-white">+91 98765 43210</strong></span>
              <span className="text-base sm:text-lg">🏔️</span>
            </div>
          </div>

          {/* RIGHT COLUMN: ENQUIRY FORM */}
          <div className="lg:col-span-7 p-5 sm:p-12 space-y-4 sm:space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                GET A FREE CONSULTATION & ESTIMATE
              </span>
              <h3 className="text-xl sm:text-3xl font-sans font-bold text-[#142957] mt-2 tracking-tight">
                Start Your Himalayan Journey
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Select Your Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#142957] focus:bg-white transition cursor-pointer"
                  >
                    <option value="">Select a trek...</option>
                    <option value="Kedarkantha">Kedarkantha Trek (Uttarakhand)</option>
                    <option value="Har Ki Dun">Har Ki Dun Trek (Uttarakhand)</option>
                    <option value="Bali Pass">Bali Pass Trek (Uttarakhand)</option>
                    <option value="Hampta Pass">Hampta Pass (Himachal Pradesh)</option>
                    <option value="Tarsar Marsar">Tarsar Marsar (Kashmir)</option>
                    <option value="Custom Trek">Other / Custom Trek Route</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Estimated Budget (Per Person)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#142957] focus:bg-white transition cursor-pointer"
                  >
                    <option value="">Select budget range...</option>
                    <option value="5k-10k">₹5,000 – ₹10,000</option>
                    <option value="10k-20k">₹10,000 – ₹20,000</option>
                    <option value="20k+">₹20,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Comments / Special Requirements
                </label>
                <textarea
                  name="comments"
                  rows="3"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell us about expected travel dates, group size, or custom route requirements..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#142957] hover:bg-sky-900 text-white font-bold text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl shadow-md transition cursor-pointer"
              >
                Send Enquiry & Get Estimate &rarr;
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// KEY INCLUSIONS STRIP
function KeyInclusionsStrip() {
  const inclusions = [
    {
      icon: "⛺",
      title: "Trekking & Camping",
      desc: "Dome tents, sleeping bags & mats provided",
    },
    {
      icon: "🥗",
      title: "Fresh Organic Food",
      desc: "Nutritious, hot vegetarian meals on trail",
    },
    {
      icon: "🚙",
      title: "Base Camp Transport",
      desc: "Pick-up & drop from key transit hubs",
    },
    {
      icon: "🩺",
      title: "Certified Guides & Safety",
      desc: "Oximeters, oxygen cylinders & first-aid",
    },
    {
      icon: "📞",
      title: "24x7 Trail Support",
      desc: "Dedicated expedition coordination team",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-b border-slate-100 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-slate-100 gap-4">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              THE NANDAPATH STANDARD
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-sans text-[#142957] mt-2 tracking-tight">
              What Every Expedition Package Includes
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Zero hidden charges. Transparent, safety-first Himalayan expeditions managed by certified mountaineers.
            </p>
          </div>

          <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-full border border-amber-200/80 w-max shrink-0">
            ✨ All-Inclusive Packages
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 text-center hover:border-sky-300 hover:bg-white hover:shadow-md transition duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-sm font-bold text-[#142957] mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// SAFETY PROTOCOL SECTION
function SafetySection() {
  const safetyPillars = [
    {
      icon: (
        <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 003 9c0 5.591 3.824 10.29 9 11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Daily O2 Health Checks",
      desc: "Mandatory morning and evening pulse oximeter monitoring.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3L2 21h20L12 3z" />
        </svg>
      ),
      title: "Certified Mountain Guides",
      desc: "Led by WFR & NIM certified leaders with 10+ years trail experience.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Medical O2 & Oxygen Gear",
      desc: "Medical oxygen cylinders and emergency first-aid carried on all batches.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Strict 1:6 Guide Ratio",
      desc: "Small batch sizes ensure personalized safety supervision on high passes.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0B1736] text-white font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-8 sm:mb-10 text-left space-y-2">
          <span className="text-[10px] sm:text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 px-3 py-1 rounded-md border border-sky-800/80 inline-block">
            UNCOMPROMISED SAFETY
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            The NandaPath Trail Safety Protocol
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            High-altitude trekking requires meticulous preparation. We combine expedition-grade safety gear with certified wilderness medical specialists on every route.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {safetyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-sky-400/50 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 bg-white/10 rounded-xl w-max mb-3 border border-white/10">
                  {pillar.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// TRAIL STORIES
function TrekkerStoriesSection() {
  const stories = [
    {
      id: 1,
      image: groupBatchImg,
      trek: "Kedarkantha Expedition Batch",
      quote: "Unforgettable group experience with NandaPath! The trek leaders made sure everyone stayed safe, hydrated, and motivated up to the summit.",
      author: "Rahul & Autumn Batch",
      location: "Sankri - Juda Ka Talab Trail",
    },
    {
      id: 2,
      image: trailActionImg,
      trek: "Himalayan Ridge Trail Approach",
      quote: "Pacing our steps along pristine alpine meadows with our backpacks. The sense of freedom and quiet mountain focus is unmatchable.",
      author: "Aman & Trail Team",
      location: "Garhwal Alpine Meadow",
    },
    {
      id: 3,
      image: campMealImg,
      trek: "Hygienic Mountain Campsite Meals",
      quote: "Hot, nutritious meals served right at trail camps. The team ensures fresh ingredients, warm tea, and great hospitality throughout.",
      author: "Expedition Kitchen Team",
      location: "Himalayan Trail Camp",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
            REAL TREKKERS, REAL MEMORIES
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#142957] mt-1 tracking-tight">
            Trail Stories & Batch Memories
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Moments captured on Himalayan summits, high-altitude passes, and cozy campsites with our NandaPath batches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.trek}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#142957] shadow-xs">
                    {story.location}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#142957]">
                    {story.trek}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 italic leading-relaxed font-normal">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-sky-700">
                  — {story.author}
                </span>
                <span className="text-[10px] font-extrabold bg-sky-50 text-sky-800 px-2.5 py-1 rounded-full">
                  Verified Experience
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const popularDestinations = [
  {
    name: "Kedarkantha Trek",
    tagline: "12,500 ft Snow Summit",
    image: summitShrineImg,
    link: "/kedarkantha",
  },
  {
    name: "Garhwal Village Sunset",
    tagline: "High Passes & Sacred Summits",
    image: sankriSunsetImg,
    link: "/garhwal",
  },
  {
    name: "Kumaon Region",
    tagline: "Trishul & Pindari Glacier Trails",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "/kumaon",
  },
  {
    name: "Rishikesh Transit",
    tagline: "Rafting & Expedition Pickups",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    link: "/uttarakhand",
  },
];

const bestUttarakhandTreks = [
  {
    id: "kedarkantha",
    path: "/kedarkantha",
    name: "Kedarkantha Trek",
    region: "Garhwal Region",
    duration: "5 Days / 4 Nights",
    altitude: "12,500 ft / 3,810 m",
    difficulty: "Easy - Moderate",
    rating: "4.9",
    price: "₹6,500",
    image: summitShrineImg,
    description: "India's top winter snow summit trek featuring 360° views and the sacred summit shrine.",
  },
  {
    id: "bali-pass",
    path: "/bali-pass",
    name: "Bali Pass Trek",
    region: "Garhwal Region",
    duration: "8 Days / 7 Nights",
    altitude: "16,207 ft / 4,940 m",
    difficulty: "Difficult",
    rating: "4.9",
    price: "₹16,800",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "A dramatic crossover trek offering breathtaking, front-row vistas of Mount Trishul, Swargarohini, and Black Peak.",
  },
  {
    id: "har-ki-dun",
    path: "/har-ki-dun",
    name: "Har Ki Dun Trek",
    region: "Garhwal Region",
    duration: "7 Days / 6 Nights",
    altitude: "11,600 ft / 3,535 m",
    difficulty: "Easy - Moderate",
    rating: "4.8",
    price: "₹10,500",
    image: trekking,
    description: "Cradle-shaped Himalayan valley with ancient wooden villages and alpine meadows.",
  },
  {
    id: "pindari-glacier",
    path: "/pindari-glacier",
    name: "Pindari Glacier Trek",
    region: "Kumaon Region",
    duration: "7 Days / 6 Nights",
    altitude: "12,300 ft / 3,749 m",
    difficulty: "Moderate",
    rating: "4.8",
    price: "₹12,200",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    description: "Famous Kumaon glacier expedition leading straight to Zero Point with towering views of Mount Nanda Kot.",
  },
];

const regionsData = [
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    title: "UTTARAKHAND",
    subtitle: "Alpine lakes, lush valleys, timeless trails.",
    treksCount: "18+ Treks",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    link: "/uttarakhand",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "himachal",
    name: "Himachal",
    title: "HIMACHAL PRADESH",
    subtitle: "Snow-capped passes, pine forests, ancient temples.",
    treksCount: "14+ Treks",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    link: "/himachal",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3L2 21h20L12 3z" />
      </svg>
    ),
  },
  {
    id: "kashmir",
    name: "Jammu & Kashmir",
    title: "JAMMU & KASHMIR",
    subtitle: "Pristine alpine tarns, meadows, idyllic valleys.",
    treksCount: "9+ Treks",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    link: "/kashmir",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 003 9c0 5.591 3.824 10.29 9 11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "ladakh",
    name: "Ladakh",
    title: "LADAKH",
    subtitle: "High-altitude cold deserts, mountain passes, monasteries.",
    treksCount: "11+ Treks",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    link: "/region/ladakh",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
      </svg>
    ),
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center font-sans px-4">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
        {eyebrow}
      </p>

      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#142957]">
        {title}
      </h2>

      <p className="mt-2.5 leading-relaxed text-slate-600 text-xs sm:text-sm">{description}</p>
    </div>
  );
}

export default function Home() {
  const [activeRegionTab, setActiveRegionTab] = useState(0);

  const activeRegion = regionsData[activeRegionTab];
  const otherRegions = regionsData.filter((_, index) => index !== activeRegionTab);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-800 font-sans pt-20 md:pt-0 w-full max-w-full">
      <Navbar />
      
      {/* HERO CAROUSEL */}
      <HeroSlider />

      {/* FLOATING CATEGORY BAR */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 md:-mt-12 mb-10 sm:mb-12 z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <Link
            to="/uttarakhand"
            className="group flex items-center gap-3.5 hover:opacity-80 transition p-1 sm:p-0"
          >
            <div className="p-2.5 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition shrink-0">
              <TrekkingIcon />
            </div>
            <div>
              <h3 className="font-bold text-[#142957] text-sm sm:text-base">Trekking</h3>
              <p className="text-xs text-slate-500 font-medium">
                Explore Mountain Trails
              </p>
            </div>
          </Link>

          <a
            href="#experiences"
            className="group flex items-center gap-3.5 hover:opacity-80 transition border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 pl-0 md:pl-6"
          >
            <div className="p-2.5 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition shrink-0">
              <CampingIcon />
            </div>
            <div>
              <h3 className="font-bold text-[#142957] text-sm sm:text-base">Camping</h3>
              <p className="text-xs text-slate-500 font-medium">
                Wilderness Stays
              </p>
            </div>
          </a>

          <a
            href="#homestays"
            className="group flex items-center gap-3.5 hover:opacity-80 transition border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 pl-0 md:pl-6"
          >
            <div className="p-2.5 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition shrink-0">
              <BedVenturingIcon />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[#142957] text-sm sm:text-base">Bed Venturing</h3>
                <span className="bg-amber-100 text-amber-800 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Soon
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Resorts & Homestays
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* POPULAR DESTINATIONS SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-12 sm:my-16 bg-white w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-10">
          
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-sky-600 bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              UTTARAKHAND TREK HUBS
            </span>
            <h2 className="text-2xl sm:text-5xl font-sans font-bold text-[#142957] tracking-tight leading-tight">
              Popular Destinations & Basecamps
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
              From the historic wooden chalets of Sankri to the high glacial valleys of Garhwal and Kumaon, explore our premier basecamps offering certified trek leaders, seamless transport, and zero-compromise safety.
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-bold text-[#142957]">
              <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs">
                🏔️ 18+ Active Routes
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs">
                Direct Pickup Support
              </span>
            </div>
          </div>

          {/* MAIN FLAGSHIP CARD - HIDDEN ON MOBILE TO PREVENT EXTRA SCROLL GAPS */}
          <div className="hidden md:block lg:col-span-6">
            <Link
              to="/kedarkantha"
              className="group relative block h-60 sm:h-80 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={basecampImg}
                alt="Sankri Basecamp Hub"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
          </div>

        </div>

        {/* 4 UNIQUE SMALL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {popularDestinations.map((dest) => (
            <Link
              key={dest.name}
              to={dest.link}
              className="group relative h-44 sm:h-48 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-end p-4"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="relative z-10 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-amber-300 block mb-0.5">
                    {dest.tagline}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-sans leading-tight">
                    {dest.name}
                  </h3>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md transition-all group-hover:bg-amber-400 group-hover:text-[#142957] shrink-0 ml-2">
                  &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST OF UTTARAKHAND SECTION - MOBILE OPTIMIZED SLIDER */}
      <section id="best-uttarakhand" className="px-4 sm:px-10 lg:px-12 py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Flagship Expeditions"
            title="Best of Uttarakhand"
            description="Handpicked Himalayan adventures across Garhwal and Kumaon valleys, pristine glaciers, and winter snow peaks."
          />

          <div className="flex sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 scrollbar-none">
            {bestUttarakhandTreks.map((trek) => (
              <div
                key={trek.id}
                className="min-w-[85%] sm:min-w-0 snap-center group rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={trek.image}
                      alt={trek.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                      {trek.region}
                    </span>

                    <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-slate-700">
                      ★ {trek.rating}
                    </span>

                    <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold">
                      {trek.duration}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-medium mb-1">
                      <span className="text-sky-700 font-semibold">{trek.altitude}</span>
                      <span className="rounded-md bg-sky-50 px-1.5 py-0.5 text-[#142957] font-semibold">
                        {trek.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#142957]">{trek.name}</h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2 font-normal">
                      {trek.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Package</p>
                    <p className="text-sm sm:text-base font-extrabold text-[#142957]">{trek.price}</p>
                  </div>

                  <Link
                    to={trek.path}
                    className="rounded-xl bg-[#142957] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-sky-800"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL EXPLORE SECTION - BASELINE ALIGNED FIXED GRID */}
      <section className="w-full bg-white text-slate-800 py-12 sm:py-20 my-6 sm:my-10 border-t border-b border-slate-100 font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-12">
          
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              EXPLORE THE REGIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-[#142957] mt-2 tracking-tight">
              FEEL THE ADVENTURE
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-md">
              From snow-capped peaks to high-altitude deserts, choose your next destination and start your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[460px]">
            
            {/* LEFT COLUMN: 4 REGION BUTTONS */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-3 h-full">
              {regionsData.map((region, index) => {
                const isActive = activeRegionTab === index;
                return (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegionTab(index)}
                    className={`w-full flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold text-left transition cursor-pointer border ${
                      isActive
                        ? "bg-[#142957] text-white shadow-md border-[#142957]"
                        : "bg-slate-50 text-slate-700 hover:text-[#142957] hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg transition-colors ${
                        isActive ? "bg-sky-500 text-white" : "bg-sky-50 text-[#142957]"
                      }`}
                    >
                      {region.icon}
                    </div>
                    <span className="font-semibold truncate">{region.name}</span>
                  </button>
                );
              })}
            </div>

            {/* CENTER COLUMN: ACTIVE SHOWCASE CARD */}
            <Link
              to={activeRegion.link}
              className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[320px] lg:min-h-0 h-full group shadow-lg border border-slate-200 block flex flex-col justify-between p-6"
            >
              <img
                src={activeRegion.image}
                alt={activeRegion.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              <div className="relative z-10 flex justify-end">
                <span className="bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#142957] shadow-sm">
                  {activeRegion.treksCount}
                </span>
              </div>

              <div className="relative z-10 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-3xl font-bold font-sans text-white tracking-wide underline underline-offset-8 decoration-sky-400">
                    {activeRegion.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-xs font-normal pt-1">
                    {activeRegion.subtitle}
                  </p>
                </div>

                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#142957] group-hover:bg-amber-400 transition-all duration-300 group-hover:scale-110 shadow-xl shrink-0 ml-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* RIGHT COLUMN: 3 MINI CARDS STRETCHED FLUSH AT BOTTOM BASELINE */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-3 h-full">
              {otherRegions.map((region) => {
                const originalIndex = regionsData.findIndex((r) => r.id === region.id);
                return (
                  <div
                    key={region.id}
                    onClick={() => setActiveRegionTab(originalIndex)}
                    className="relative flex-1 h-full rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-slate-200/90 flex items-end p-3.5"
                  >
                    <img
                      src={region.image}
                      alt={region.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors" />

                    <div className="relative z-10 text-white">
                      <span className="text-xs font-bold tracking-wide font-sans drop-shadow-md truncate block">
                        {region.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* REAL TRAIL MOMENTS GALLERY */}
      <section id="real-moments" className="bg-[#f5f9fc] px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="AUTHENTIC EXPEDITION GALLERY"
            title="Real Trail Moments"
            description="Genuine batch memories, high-altitude campsites, and freshly cooked meals captured live on Himalayan routes."
          />

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. JUDA KA TALAB BATCH */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition duration-300">
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={judaGroupImg}
                  alt="Juda Ka Talab Stopover"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[#142957] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                  📍 Juda Ka Talab • 9,100 ft
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#142957]">High-Altitude Lake Stopover</h3>
                <p className="text-xs text-slate-500 mt-1">Real batch pausing beside alpine lake glades on Day 2 ascent.</p>
              </div>
            </div>

            {/* 2. KEDARKANTHA BASECAMP */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition duration-300">
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={basecampImg}
                  alt="Kedarkantha Basecamp"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[#142957] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                  📍 Basecamp • 11,250 ft
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#142957]">Wilderness Dome Encampment</h3>
                <p className="text-xs text-slate-500 mt-1">Dome tent setups set against pine forest glades and mountain ridges.</p>
              </div>
            </div>

            {/* 3. CAMPSITE MEALS */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition duration-300">
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={campsiteMealImg}
                  alt="Campsite Dining"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[#142957] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                  📍 Trail Dining • Hot Organic Food
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#142957]">Hot Campsite Meals</h3>
                <p className="text-xs text-slate-500 mt-1">Freshly prepared hot vegetarian meals served right at trail camps.</p>
              </div>
            </div>

            {/* 4. TRAIL GROUP BATCH */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition duration-300">
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={groupBatchImg}
                  alt="Expedition Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[#142957] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                  📍 Garhwal Trail Approach
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-[#142957]">Guided Group Batches</h3>
                <p className="text-xs text-slate-500 mt-1">Certified leaders ensuring pace, safety, and team spirit on every route.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESORTS & BED VENTURING SECTION */}
      <section
        id="homestays"
        className="scroll-mt-24 bg-slate-50 px-4 sm:px-8 lg:px-12 py-12 sm:py-16 border-t border-slate-200 font-sans w-full overflow-hidden"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <span>⏳</span>
              <span>Feature Coming Soon</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-[#142957] font-sans">
              Bed Venturing
              <span className="block text-slate-500">& Homestay Stays.</span>
            </h2>

            <p className="mt-3 sm:mt-4 max-w-xl leading-relaxed text-slate-600 text-xs sm:text-base">
              We are carefully selecting authentic mountain homestays, eco-resorts, and serene mountain stays across Uttarakhand and Himachal Pradesh. Stay tuned as we launch our verified bed venturing directory!
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => alert("Bed Venturing & Stays booking is opening soon! Stay tuned.")}
                className="inline-flex items-center gap-3 rounded-full bg-[#142957] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-sky-900 cursor-pointer"
              >
                <span>Enquire About Stays</span>
                <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[9px] font-black uppercase text-slate-950">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group shadow-lg border border-slate-200">
            <img
              src={homestay}
              alt="A peaceful mountain resort and homestay"
              loading="lazy"
              className="h-60 sm:h-96 w-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
              <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-extrabold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-2xl tracking-widest uppercase flex items-center gap-2">
                <span>🔒</span>
                <span>Launching Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY INCLUSIONS STRIP */}
      <KeyInclusionsStrip />

      {/* TESTIMONIALS & REVIEWS SECTION */}
      <TestimonialsSection />

      {/* TRAIL STORIES SECTION */}
      <TrekkerStoriesSection />

      {/* NANDAPATH TRAIL SAFETY PROTOCOL SECTION */}
      <SafetySection />

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <FaqSection />

      {/* CONSULTATION & BOOKING FORM SECTION */}
      <BookingConsultationForm />

      {/* FOOTER */}
      <footer className="bg-[#0b1d3b] text-slate-300 pt-12 sm:pt-16 pb-8 px-4 sm:px-10 lg:px-12 border-t border-slate-800 font-sans w-full overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
            
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="bg-white/10 text-white px-4 py-2 rounded-xl font-bold tracking-widest text-sm sm:text-base inline-block">
                NANDAPATH ADVENTURES
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Your premier Himalayan guide service based in Uttarakhand. Managed by Rahul Jaraut with 15+ years of experience creating safe, memorable trekking and camping expeditions.
              </p>
              <div className="pt-2 flex flex-col gap-1 text-xs text-slate-400 font-medium">
                <span>📍 Dehradun, Uttarakhand, India</span>
                <span>📞 +91 98765 43210</span>
                <span>✉️ info@nandapathadventures.com</span>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Garhwal Treks</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
                <li><Link to="/kedarkantha" className="hover:text-white transition">Kedarkantha Trek</Link></li>
                <li><Link to="/har-ki-dun" className="hover:text-white transition">Har Ki Dun Trek</Link></li>
                <li><Link to="/bali-pass" className="hover:text-white transition">Bali Pass Trek</Link></li>
                <li><Link to="/gaumukh-tapovan" className="hover:text-white transition">Gaumukh Tapovan</Link></li>
                <li><Link to="/kwari-pass" className="hover:text-white transition">Kwari Pass Trek</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Regions & Destinations</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
                <li><Link to="/uttarakhand" className="hover:text-white transition">Uttarakhand Treks</Link></li>
                <li><Link to="/himachal" className="hover:text-white transition">Himachal Treks</Link></li>
                <li><Link to="/kashmir" className="hover:text-white transition">Jammu & Kashmir</Link></li>
                <li><Link to="/pindari-glacier" className="hover:text-white transition">Pindari Glacier Trek</Link></li>
                <li><Link to="/roopkund" className="hover:text-white transition">Roopkund Trek</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Stay Connected</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Subscribe to get upcoming batch dates, winter trek offers, and trail guides.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
                <button className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs py-2 rounded-lg transition cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} NandaPath Adventures. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition underline">
                Privacy Policy
              </Link>
              <span>•</span>
              <p>Explore responsibly. Respect nature.</p>
            </div>
          </div>
        </div>  
      </footer>
    </main>
  );
}