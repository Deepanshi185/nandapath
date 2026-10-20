import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "kedarkantha-guide",
    title: "Complete Kedarkantha Winter Trek Guide 2026",
    excerpt: "Everything you need to know about preparing for winter snow, gear checklist, and summit day.",
    date: "October 2026",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "himalayan-camping-safety",
    title: "10 Essential Safety Tips for High-Altitude Camping",
    excerpt: "Stay warm, hydrated, and safe on trails above 10,000 ft with guidance from certified leaders.",
    date: "September 2026",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-[#142957] mb-2">Our Blog & Trail Stories</h1>
        <p className="text-sm text-slate-600 mb-10">Trekking tips, expedition stories, and Himalayan guides.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold text-sky-600">{post.date}</span>
                <h2 className="text-xl font-bold text-[#142957] mt-1">{post.title}</h2>
                <p className="text-xs text-slate-600 mt-2">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
