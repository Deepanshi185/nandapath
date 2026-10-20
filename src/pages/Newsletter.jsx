import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const dispatches = [
    {
      title: "Winter Snow Trekking: What Gear to Pack for Kedarkantha",
      date: "October 2026 Edition",
      category: "Trail Preparation",
      desc: "Detailed breakdown on layering, waterproof gaiters, microspikes, and insulated footwear for sub-zero Himalayan nights.",
      readTime: "4 min read",
    },
    {
      title: "Understanding High Altitude Acclimatization in Garhwal",
      date: "September 2026 Edition",
      category: "Safety & First Aid",
      desc: "Why hydration, steady pacing, and pulse oximeter monitoring matter above 10,000 feet on routes like Bali Pass.",
      readTime: "6 min read",
    },
    {
      title: "Preserving Mountain Eco-Systems: Leave No Trace",
      date: "August 2026 Edition",
      category: "Eco-Trekking",
      desc: "How NandaPath teams manage dry-pit eco-toilets, pack-in pack-out waste systems, and respect local Himalayan villages.",
      readTime: "5 min read",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20">
      <Navbar />

      {/* HERO SUBSCRIBE BANNER */}
      <section className="bg-[#142957] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1.5 rounded-full">
            NANDAPATH DISPATCHES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            The Himalayan Trail Letter
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
            Get early batch announcements, winter trail condition updates, expert safety advice, and field stories delivered straight to your inbox.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubscribe} className="pt-4 max-w-md mx-auto">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                ✓ You're subscribed! Welcome to the NandaPath Community.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-amber-400 hover:bg-amber-300 text-[#142957] font-extrabold text-xs px-6 py-3 transition shrink-0 cursor-pointer shadow-md"
                >
                  Subscribe
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* RECENT DISPATCHES ARCHIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            RECENT EDITIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142957] mt-1">
            Explore Past Dispatches
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dispatches.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-slate-400">{item.date}</span>
                </div>
                <h3 className="text-base font-bold text-[#142957] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>⏱️ {item.readTime}</span>
                <span className="text-[#142957] hover:underline cursor-pointer">
                  Read Issue &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}