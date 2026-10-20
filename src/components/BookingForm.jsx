import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    chosenTrek: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNo || !formData.chosenTrek) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70">
      <div className="mx-auto max-w-5xl">
        
        {/* MAIN RECTANGLE CARD CONTAINER */}
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT COLUMN: BRANDING & HIGHLIGHTS */}
            <div className="lg:col-span-5 bg-[#142957] p-8 sm:p-10 text-white flex flex-col justify-between space-y-8">
              <div>
                <span className="rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider">
                  NandaPath Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-4 leading-tight">
                  Plan Your Dream Expedition
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Connect with our Himalayan trek experts for customized itineraries, seasonal advice, and group estimates.
                </p>
              </div>

              <div className="space-y-4 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <span className="text-sky-400 text-base">⚡</span>
                  <span>Free Consultation & Estimate within 1 Hour</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <span className="text-emerald-400 text-base">🛡️</span>
                  <span>100% Certified Guides & Safe Equipment</span>
                </div>

                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <span className="text-amber-400 text-base">⛰️</span>
                  <span>Customized Dates & Private Group Batches</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400">
                <p>💬 Direct Enquiry: <span className="text-white font-bold">+91 98765 43210</span></p>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM INPUTS */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-sky-600">
                  Get a Free Consultation & Estimate
                </p>
                <h2 className="text-3xl font-serif font-bold text-[#142957] mt-1">
                  Defeat The <span className="uppercase text-sky-600">“ADVENTURE”</span>
                </h2>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-emerald-800 border border-emerald-200 space-y-2">
                  <p className="text-base font-bold">Thank you, {formData.fullName}!</p>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Our trek specialist will contact you at <strong>{formData.phoneNo}</strong> shortly to discuss your <strong>{formData.chosenTrek}</strong> itinerary.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-emerald-800 underline cursor-pointer"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  
                  {/* FULL NAME */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#142957] focus:bg-white focus:outline-none transition"
                      required
                    />
                  </div>

                  {/* PHONE NO */}
                  <div>
                    <label htmlFor="phoneNo" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      id="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#142957] focus:bg-white focus:outline-none transition"
                      required
                    />
                  </div>

                  {/* CHOOSE TREK DROPDOWN */}
                  <div>
                    <label htmlFor="chosenTrek" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Select Your Destination
                    </label>
                    <div className="relative">
                      <select
                        name="chosenTrek"
                        id="chosenTrek"
                        value={formData.chosenTrek}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 focus:border-[#142957] focus:bg-white focus:outline-none appearance-none cursor-pointer"
                        required
                      >
                        <option value="" disabled>
                          Select a trek...
                        </option>
                        <option value="Kedarkantha Trek">Kedarkantha Trek (Uttarakhand)</option>
                        <option value="Har Ki Dun Trek">Har Ki Dun Trek (Uttarakhand)</option>
                        <option value="Bali Pass Trek">Bali Pass Trek (Uttarakhand)</option>
                        <option value="Pindari Glacier Trek">Pindari Glacier Trek (Kumaon)</option>
                        <option value="Hampta Pass Trek">Hampta Pass Trek (Himachal)</option>
                        <option value="Kashmir Great Lakes">Kashmir Great Lakes (J&K)</option>
                      </select>

                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#142957] hover:bg-sky-900 text-white font-bold text-xs py-4 transition shadow-md cursor-pointer"
                    >
                      Send Enquiry & Get Estimate &rarr;
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}