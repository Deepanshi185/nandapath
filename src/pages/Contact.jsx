import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
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
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20 sm:pt-24 pb-12 sm:pb-16 w-full overflow-x-hidden">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT COLUMN: HERO PHOTO CARD */}
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full flex flex-col justify-between p-6 sm:p-10 text-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85"
              alt="Himalayan Wilderness Expedition"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736]/95 via-[#0B1736]/70 to-[#0B1736]/40" />

            <div className="relative z-10 space-y-2 sm:space-y-3">
              <span className="bg-amber-400 text-[#0B1736] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                NANDAPATH SUPPORT
              </span>
              <h1 className="text-2xl sm:text-4xl font-sans font-bold text-white leading-tight tracking-tight">
                Plan Your Dream Expedition
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Connect with our Himalayan trek experts for customized itineraries, seasonal advice, and group estimates.
              </p>
            </div>

            <div className="relative z-10 space-y-2.5 my-4 sm:my-6">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center gap-3">
                <span className="text-amber-300 text-sm sm:text-base">⚡</span>
                <p className="text-[11px] sm:text-xs font-semibold text-white">Free Consultation & Estimate within 1 Hour</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center gap-3">
                <span className="text-sky-300 text-sm sm:text-base">🛡️</span>
                <p className="text-[11px] sm:text-xs font-semibold text-white">Certified Guides & Field Equipment</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center gap-3">
                <span className="text-emerald-300 text-base">⛰️</span>
                <p className="text-[11px] sm:text-xs font-semibold text-white">Customized Dates & Private Group Batches</p>
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-white/15 space-y-1 text-xs font-medium text-slate-200">
              <p>📍 <strong>Office:</strong> Dehradun, Uttarakhand, India</p>
              <p>📞 <strong>Phone / WhatsApp:</strong> +91 98765 43210</p>
              <p>✉️ <strong>Email:</strong> info@nandapathadventures.com</p>
            </div>
          </div>

          {/* RIGHT COLUMN: ENQUIRY FORM */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                GET A FREE CONSULTATION
              </span>
              <h2 className="text-xl sm:text-3xl font-sans font-bold text-[#142957] mt-2 tracking-tight">
                Get in Touch with NandaPath
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                  <option value="Kedarkantha">Kedarkantha Trek (Garhwal)</option>
                  <option value="Har Ki Dun">Har Ki Dun Trek (Garhwal)</option>
                  <option value="Bali Pass">Bali Pass Trek (Garhwal)</option>
                  <option value="Gaumukh Tapovan">Gaumukh Tapovan Trek (Garhwal)</option>
                  <option value="Pindari Glacier">Pindari Glacier Trek (Kumaon)</option>
                  <option value="Kuari Pass">Kuari Pass Trek (Garhwal)</option>
                  <option value="Custom Trek">Other / Custom Trek Route</option>
                </select>
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
                className="w-full bg-[#142957] hover:bg-sky-900 text-white font-bold text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl shadow-md transition cursor-pointer mt-2"
              >
                Send Enquiry & Get Estimate &rarr;
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}