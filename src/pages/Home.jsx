import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection"; 
import BlogVideoSection from "../components/BlogVideoSection";

// Local Asset Imports
import basecampImg from "../assets/basecamp.jpeg";
import groupBatchImg from "../assets/group-batch.jpeg";
import campsiteMealImg from "../assets/campsite-meal.jpeg";
import judaGroupImg from "../assets/juda-group.jpeg";
import greenValleyGroupImg from "../assets/green-valley-group.jpg";
import riverWaterfallImg from "../assets/river-waterfall-action.jpeg";
import kedarkanthaSummitImg from "../assets/kedarkantha-summit-group.jpeg";
import blueDomeTentImg from "../assets/blue-dome-tent.jpeg";
import trailActionImg from "../assets/trail-action.jpeg";
import campMealImg from "../assets/camp-meal.jpeg";
import rockGroupImg from "../assets/rock-group1.jpeg"; // Kotgaon Base Camp 1 photo

const homestay =
  "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85";

const nandaDeviImg =
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80";

// SVG Category Icons
const TrekkingIcon = () => (
  <svg className="h-6 w-6 text-[#142957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const CampingIcon = () => (
  <svg className="h-6 w-6 text-[#142957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3L2 21h20L12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v18" />
  </svg>
);

const BedVenturingIcon = () => (
  <svg className="h-6 w-6 text-[#142957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 21V12h6v9" />
  </svg>
);

// FLOATING WHATSAPP BUTTON COMPONENT
function WhatsAppWidget() {
  const phone = "919876543210";
  const message = encodeURIComponent("Hello NandaPath Adventures! I want to enquiry about upcoming Himalayan trek dates.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NandaPath Trek Leaders on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-300/60 cursor-pointer"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
      <span className="hidden sm:inline-block">Enquire on WhatsApp</span>
    </a>
  );
}

// CONSULTATION & BOOKING FORM SECTION
function BookingConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
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
    <section className="py-10 sm:py-14 bg-sky-50/60 font-sans text-slate-800 border-t border-sky-100/80 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full flex flex-col justify-between p-6 sm:p-10 text-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85"
              alt="Himalayan Wilderness Expedition"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736]/95 via-[#0B1736]/75 to-[#0B1736]/40" />

            <div className="relative z-10 space-y-2">
              <span className="bg-amber-400 text-[#0B1736] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                NANDAPATH SUPPORT
              </span>
              <h2 className="text-xl sm:text-3xl font-sans font-bold text-white leading-tight">
                Plan Your Dream Expedition
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Connect with our Himalayan trek experts for customized itineraries, seasonal advice, and group estimates.
              </p>
            </div>

            <div className="relative z-10 space-y-2.5 my-4 sm:my-6">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center gap-3">
                <span className="text-amber-300 text-sm sm:text-base">⚡</span>
                <p className="text-xs font-semibold text-white">Free Consultation & Estimate within 1 Hour</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center gap-3">
                <span className="text-sky-300 text-sm sm:text-base">🛡️</span>
                <p className="text-xs font-semibold text-white">Certified Mountaineering Guides & Field Logistics</p>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-medium text-slate-200">
              <span>💬 Direct Enquiry: <strong className="text-white">+91 98765 43210</strong></span>
              <span className="text-base">🏔️</span>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4 bg-white">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                GET A FREE CONSULTATION
              </span>
              <h3 className="text-xl sm:text-3xl font-sans font-bold text-[#142957] mt-2 tracking-tight">
                Start Your Himalayan Journey
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Select Your Destination
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-[#142957] focus:bg-white transition cursor-pointer"
                >
                  <option value="">Select a trek...</option>
                  <option value="Kedarkantha Trek">Kedarkantha Trek (Garhwal)</option>
                  <option value="Kuari Pass Trek">Kuari Pass Trek (Garhwal)</option>
                  <option value="Gaumukh Tapovan Expedition">Gaumukh Tapovan Expedition</option>
                  <option value="Pindari Glacier Trek">Pindari Glacier Trek (Kumaon)</option>
                  <option value="Custom Trek Route">Other / Custom Trek Route</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Comments / Travel Dates / Group Size
                </label>
                <textarea
                  name="comments"
                  rows="3"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Expected travel month, group size, or special requirements..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] focus:bg-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#142957] hover:bg-sky-900 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition cursor-pointer"
              >
                Send Enquiry & Get Detailed Itinerary &rarr;
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
      image: blueDomeTentImg,
      title: "Expedition Dome Tents",
      desc: "All-weather tents, insulated sleeping bags & thick foam mats.",
    },
    {
      image: campsiteMealImg,
      title: "Hot Organic Trail Food",
      desc: "Fresh, hygienic, hot vegetarian meals cooked daily at high camps.",
    },
    {
      image: riverWaterfallImg,
      title: "Basecamp Pickup & Approach",
      desc: "Seamless vehicle transfers & guided approach along river valleys.",
    },
    {
      image: groupBatchImg,
      title: "Certified Guide Supervision",
      desc: "Led by certified mountaineering leaders with full safety gear.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-amber-50/40 border-t border-b border-amber-100/60 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-amber-200/60 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100/80 px-3 py-1 rounded-md border border-amber-200">
              THE NANDAPATH STANDARD
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-sans text-[#142957] mt-2 tracking-tight">
              What Every Expedition Includes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Transparent, high-altitude safety standards and unmatched local Himalayan hospitality.
            </p>
          </div>

          <span className="bg-[#142957] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs w-max shrink-0">
            ✨ All-Inclusive Field Services
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 sm:h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-[#142957] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// TRAIL STORIES SECTION
function TrekkerStoriesSection() {
  const stories = [
    {
      id: 1,
      image: kedarkanthaSummitImg,
      trek: "Kedarkantha Summit Batch",
      quote: "Unforgettable group summit experience with NandaPath! The trek leaders made sure everyone stayed safe, hydrated, and motivated up to the 12,500 ft summit shrine.",
      author: "Rahul & Winter Batch",
      location: "Kedarkantha Summit • 12,500 ft",
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
    <section className="py-10 sm:py-14 bg-stone-50/80 border-t border-stone-200/60 font-sans w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 sm:h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.trek}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#142957] shadow-xs">
                    {story.location}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#142957]">
                    {story.trek}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 italic leading-relaxed font-normal">
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

// POPULAR DESTINATIONS
const popularDestinations = [
  {
    name: "Kedarkantha Trek",
    tagline: "12,500 ft Winter Snow Summit",
    image: kedarkanthaSummitImg,
    link: "/kedarkantha",
  },
  {
    name: "Gaumukh Tapovan Expedition",
    tagline: "Sacred Ganges Origin & Mt. Shivling",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    link: "/gaumukh-tapovan",
  },
  {
    name: "Pindari Glacier Trek",
    tagline: "Kumaon Valley Glacier Snout",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    link: "/pindari-glacier",
  },
  {
    name: "Kuari Pass Trek",
    tagline: "Lord Curzon Trail & Nanda Devi Vistas",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "/kwari-pass",
  },
];

// RESTORED 4 REGIONS DATASET
const regionsData = [
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    title: "UTTARAKHAND",
    subtitle: "Sacred Nanda Devi peaks, alpine bugyals, timeless trails.",
    treksCount: "18+ Treks",
    image: nandaDeviImg,
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
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-800 font-sans pt-0 w-full max-w-full">
      <Navbar />
      
      {/* HERO CAROUSEL */}
      <HeroSlider />

      {/* FLOATING CATEGORY BAR */}
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8 mt-4 md:-mt-12 mb-8 sm:mb-10 z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <Link
            to="/uttarakhand"
            className="group flex items-center gap-3.5 hover:opacity-80 transition p-1 sm:p-0"
          >
            <div className="p-2.5 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition shrink-0">
              <TrekkingIcon />
            </div>
            <div>
              <h3 className="font-bold text-[#142957] text-sm sm:text-base">Trekking Expeditions</h3>
              <p className="text-xs text-slate-500 font-medium">
                Explore Mountain Routes
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
              <h3 className="font-bold text-[#142957] text-sm sm:text-base">High-Altitude Camping</h3>
              <p className="text-xs text-slate-500 font-medium">
                Wilderness Dome Stays
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
                <h3 className="font-bold text-[#142957] text-sm sm:text-base">Bed Venturing & Stays</h3>
                <span className="bg-amber-100 text-amber-800 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Soon
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Resorts & Local Homestays
              </p>
            </div>
          </a>

        </div>
      </div>

      {/* POPULAR COURSES / DESTINATIONS SHOWCASE */}
      <section className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8 my-8 sm:my-12 bg-white w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
          
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-sky-600 bg-sky-50 px-3 py-1 rounded-md border border-sky-100">
              TRIPOTUDE
            </span>
            <h2 className="text-2xl sm:text-5xl font-sans font-bold text-[#142957] tracking-tight leading-tight">
              Popular Routes & Courses
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
              Explore our top-rated Himalayan trekking courses across Garhwal and Kumaon valleys, led by certified guides with complete safety logistics.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 text-xs font-bold text-[#142957]">
              <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs">
                🏔️ 18+ Active Routes
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs">
                Direct Pickup Support
              </span>
            </div>
          </div>

          {/* MAIN FLAGSHIP CARD */}
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

        {/* 4 SELECTED POPULAR TREKS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {popularDestinations.map((dest) => (
            <Link
              key={dest.name}
              to={dest.link}
              className="group relative h-48 sm:h-52 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-end p-4"
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

      {/* BEST OF UTTARAKHAND SECTION */}
      <section id="best-uttarakhand" className="px-3 sm:px-6 lg:px-8 py-10 sm:py-14 bg-sky-50/60 border-t border-sky-100/80">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="REGIONAL EXPEDITION GATEWAYS"
            title="Best of Uttarakhand"
            description="Explore our complete Himalayan catalog categorized by region. Click any region to browse all authentic expeditions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            
            <Link
              to="/uttarakhand?region=Garhwal"
              className="group relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-md hover:shadow-2xl transition duration-500 min-h-[320px] sm:min-h-[380px] flex flex-col justify-between p-6 sm:p-8 block"
            >
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
                alt="Garhwal Region Treks"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />

              <div className="relative z-10 flex justify-between items-center">
                <span className="bg-sky-500 text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Garhwal Region
                </span>
                <span className="bg-white/90 backdrop-blur-md text-[#142957] text-xs font-bold px-3 py-1 rounded-full">
                  12+ Treks
                </span>
              </div>

              <div className="relative z-10 text-white space-y-2">
                <h3 className="text-2xl sm:text-4xl font-extrabold font-sans">
                  Garhwal Expeditions
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-md leading-relaxed">
                  Home to Kedarkantha, Har Ki Dun, Bali Pass, and Kuari Pass. Sacred alpine valleys and high winter summits.
                </p>

                <div className="pt-3 flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition duration-300">
                  <span>Explore All Garhwal Treks &rarr;</span>
                </div>
              </div>
            </Link>

            <Link
              to="/uttarakhand?region=Kumaon"
              className="group relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-md hover:shadow-2xl transition duration-500 min-h-[320px] sm:min-h-[380px] flex flex-col justify-between p-6 sm:p-8 block"
            >
              <img
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
                alt="Kumaon Region Treks"
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />

              <div className="relative z-10 flex justify-between items-center">
                <span className="bg-emerald-600 text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Kumaon Region
                </span>
                <span className="bg-white/90 backdrop-blur-md text-[#142957] text-xs font-bold px-3 py-1 rounded-full">
                  6+ Treks
                </span>
              </div>

              <div className="relative z-10 text-white space-y-2">
                <h3 className="text-2xl sm:text-4xl font-extrabold font-sans">
                  Kumaon Expeditions
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal max-w-md leading-relaxed">
                  Glacial snout expeditions like Pindari Glacier, Kafni Glacier, and serene views of Trishul & Nanda Kot.
                </p>

                <div className="pt-3 flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition duration-300">
                  <span>Explore All Kumaon Treks &rarr;</span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* RESTORED 4-REGION INTERACTIVE SELECTOR SECTION */}
      <section className="w-full bg-white text-slate-800 py-10 sm:py-16 my-4 border-t border-b border-slate-100 font-sans">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
          
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

            {/* RIGHT COLUMN: 3 MINI CARDS STRETCHED FLUSH */}
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
<section id="real-moments" className="bg-[#f8fafc] px-3 sm:px-6 lg:px-8 py-10 sm:py-14 border-t border-slate-200/80">
  <div className="mx-auto max-w-[1400px]">
    <SectionHeading
      eyebrow="AUTHENTIC EXPEDITION GALLERY"
      title="Real Trail Moments"
      description="Genuine batch memories, high-altitude campsites, and freshly cooked meals captured live on Himalayan routes."
    />

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      
      {/* 1. SANKRI BASECAMP GROUP BATCH */}
      <div className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between">
        <div className="h-40 sm:h-56 overflow-hidden relative">
          <img
            src={groupBatchImg}
            alt="Sankri Basecamp Batch"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <span className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md text-[#142957] text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
            📍 Sankri Basecamp • 6,400 ft
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xs sm:text-sm font-bold text-[#142957] leading-snug">Sankri Basecamp Team</h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">Complete NandaPath expedition batch gathered at Sankri basecamp hub.</p>
        </div>
      </div>

      {/* 2. JUDA KA TALAB STOP OVER */}
      <div className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between">
        <div className="h-40 sm:h-56 overflow-hidden relative">
          <img
            src={judaGroupImg}
            alt="Juda Ka Talab Stopover"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <span className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md text-[#142957] text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
            📍 Juda Ka Talab • 9,100 ft
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xs sm:text-sm font-bold text-[#142957] leading-snug">High-Altitude Lake Stopover</h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">Real batch pausing beside alpine lake glades on Day 2 ascent.</p>
        </div>
      </div>

      {/* 3. KOTGAON BASECAMP 1 */}
      <div className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between">
        <div className="h-40 sm:h-56 overflow-hidden relative">
          <img
            src={rockGroupImg}
            alt="Kotgaon Basecamp 1 Batch"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <span className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md text-[#142957] text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
            📍 Kotgaon Basecamp 1
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xs sm:text-sm font-bold text-[#142957] leading-snug">Kotgaon Base Camp Hub</h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">Expedition team brief and certificate award before summit climb.</p>
        </div>
      </div>

      {/* 4. CAMPSITE MEALS */}
      <div className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between">
        <div className="h-40 sm:h-56 overflow-hidden relative">
          <img
            src={campsiteMealImg}
            alt="Campsite Dining"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <span className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md text-[#142957] text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
            📍 Trail Dining
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xs sm:text-sm font-bold text-[#142957] leading-snug">Hot Campsite Meals</h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">Freshly prepared hot vegetarian meals served right at trail camps.</p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* RESORTS, BED VENTURING & HOMESTAYS SECTION */}
      <section
        id="homestays"
        className="scroll-mt-24 bg-stone-50/80 px-3 sm:px-6 lg:px-8 py-10 sm:py-14 border-t border-slate-200 font-sans w-full overflow-hidden"
      >
        <div className="mx-auto max-w-[1400px] grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <span>⏳</span>
              <span>Exclusive Directory Opening Soon</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-[#142957] font-sans">
              Bed Venturing, Resorts
              <span className="block text-sky-700">& Mountain Homestays.</span>
            </h2>

            <p className="mt-3 sm:mt-4 max-w-xl leading-relaxed text-slate-600 text-xs sm:text-base">
              We are handpicking boutique mountain resorts, heritage wooden chalets, and local eco-homestays across Garhwal and Kumaon valleys. Experience authentic mountain living after your trek.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => alert("Bed Venturing, Resorts & Homestays directory opening soon! Stay tuned.")}
                className="inline-flex items-center gap-3 rounded-full bg-[#142957] px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-sky-900 cursor-pointer"
              >
                <span>Enquire About Mountain Stays</span>
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
              className="h-60 sm:h-96 w-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
              <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-extrabold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-2xl tracking-widest uppercase flex items-center gap-2">
                <span>🔒</span>
                <span>Directory Launching Soon</span>
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

      {/* BLOG & VLOG SECTION */}
      <BlogVideoSection />

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <FaqSection />

      {/* CONSULTATION & BOOKING FORM SECTION */}
      <BookingConsultationForm />

      {/* FLOATING WHATSAPP WIDGET */}
      <WhatsAppWidget />

      {/* FOOTER */}
      <footer className="bg-[#0b1d3b] text-slate-300 pt-12 sm:pt-16 pb-8 px-3 sm:px-6 lg:px-8 border-t border-slate-800 font-sans w-full overflow-hidden">
        <div className="mx-auto max-w-[1400px]">
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
                <li><Link to="/gaumukh-tapovan" className="hover:text-white transition">Gaumukh Tapovan</Link></li>
                <li><Link to="/kwari-pass" className="hover:text-white transition">Kuari Pass Trek</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Regions & Destinations</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
                <li><Link to="/uttarakhand" className="hover:text-white transition">Uttarakhand Treks</Link></li>
                <li><Link to="/pindari-glacier" className="hover:text-white transition">Pindari Glacier Trek</Link></li>
                <li><Link to="/himachal" className="hover:text-white transition">Himachal Treks</Link></li>
                <li><Link to="/kashmir" className="hover:text-white transition">Jammu & Kashmir</Link></li>
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