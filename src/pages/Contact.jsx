import { useState } from "react";
// Import real local asset image from src/assets
import winterExpeditionGroupImg from "../assets/winter-expedition-group.jpeg";

export default function BookingConsultationForm() {
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
    <section className="py-12 sm:py-16 bg-sky-50/70 font-sans text-slate-800 border-t border-sky-200/80 w-full overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-100/90 rounded-3xl border border-sky-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT SIDE SHOWCASE PANEL WITH REAL LOCAL ASSET PHOTO */}
          <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[480px] lg:min-h-full flex flex-col justify-between p-7 sm:p-10 text-white overflow-hidden">
            <img
              src={winterExpeditionGroupImg}
              alt="Himalayan Winter Expedition Group"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736]/98 via-[#0B1736]/80 to-[#0B1736]/45" />

            <div className="relative z-10 space-y-3">
              <span className="bg-amber-400 text-[#0B1736] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
                NANDAPATH SUPPORT
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Plan Your Dream Expedition
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
                Connect with our Himalayan trek experts for customized itineraries, seasonal advice, and group estimates.
              </p>
            </div>

            <div className="relative z-10 space-y-3 my-4 sm:my-6">
              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center gap-3">
                <span className="text-amber-300 text-lg">⚡</span>
                <p className="text-xs sm:text-sm font-extrabold text-white">Free Consultation &amp; Estimate within 1 Hour</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center gap-3">
                <span className="text-sky-300 text-lg">🛡️</span>
                <p className="text-xs sm:text-sm font-extrabold text-white">Certified Guides &amp; Field Equipment</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 flex items-center gap-3">
                <span className="text-emerald-300 text-lg">🏕️</span>
                <p className="text-xs sm:text-sm font-extrabold text-white">Customized Dates &amp; Private Group Batches</p>
              </div>
            </div>

            {/* ENLARGED CONTACT INFO AREA AT THE BOTTOM */}
            <div className="relative z-10 pt-4 border-t border-white/25 space-y-2 text-sm sm:text-base font-extrabold text-slate-100">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span><strong>Office:</strong> Dehradun, Uttarakhand, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span><strong>Phone / WhatsApp:</strong> +91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <span><strong>Email:</strong> info@nandapathadventures.com</span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM CONTAINER */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 bg-sky-50">
            <div>
              <span className="text-xs sm:text-sm font-black text-sky-900 uppercase tracking-wider bg-sky-200/80 px-3.5 py-1 rounded-md border border-sky-300">
                GET A FREE CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#142957] mt-2 tracking-tight">
                Get in Touch with NandaPath
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-white border border-sky-200 rounded-2xl px-4 py-3.5 text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@gmail.com"
                    className="w-full bg-white border border-sky-200 rounded-2xl px-4 py-3.5 text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-white border border-sky-200 rounded-2xl px-4 py-3.5 text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-1">
                  Select Your Destination
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full bg-white border border-sky-200 rounded-2xl px-4 py-3.5 text-sm sm:text-base font-bold text-slate-800 focus:outline-none focus:border-[#142957] transition cursor-pointer"
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
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700 mb-1">
                  Comments / Special Requirements
                </label>
                <textarea
                  name="comments"
                  rows="3"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell us about expected travel dates, group size, or custom route requirements..."
                  className="w-full bg-white border border-sky-200 rounded-2xl px-4 py-3.5 text-sm sm:text-base font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142957] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#142957] hover:bg-sky-900 text-white font-black text-sm sm:text-base py-4 rounded-2xl shadow-md transition cursor-pointer"
              >
                Send Enquiry &amp; Get Estimate &rarr;
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}