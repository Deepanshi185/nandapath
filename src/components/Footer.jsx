import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/nanda-path1.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#142957] text-white pt-16 pb-12 font-sans border-t border-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* BRAND INFO */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="NandaPath Adventures"
              className="h-16 w-auto object-contain rounded-lg bg-white p-1"
            />
          </Link>
          <p className="text-xs text-sky-200 leading-relaxed font-medium">
            Certified Himalayan trekking company operating across Garhwal, Kumaon, Himachal, and Kashmir.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">Popular Regions</h4>
          <ul className="space-y-2 text-xs font-semibold text-sky-100">
            <li><Link to="/uttarakhand" className="hover:text-amber-300 transition">Uttarakhand Treks</Link></li>
            <li><Link to="/offbeat" className="hover:text-amber-300 transition">Offbeat Trails</Link></li>
            <li><Link to="/himachal" className="hover:text-amber-300 transition">Himachal Treks</Link></li>
            <li><Link to="/kashmir" className="hover:text-amber-300 transition">Jammu & Kashmir</Link></li>
          </ul>
        </div>

        {/* TOP TREKS */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">Featured Treks</h4>
          <ul className="space-y-2 text-xs font-semibold text-sky-100">
            <li><Link to="/kedarkantha" className="hover:text-amber-300 transition">Kedarkantha Trek</Link></li>
            <li><Link to="/har-ki-dun" className="hover:text-amber-300 transition">Har Ki Dun Trek</Link></li>
            <li><Link to="/pindari-glacier" className="hover:text-amber-300 transition">Pindari Glacier Trek</Link></li>
            <li><Link to="/bali-pass" className="hover:text-amber-300 transition">Bali Pass Expedition</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">Contact Us</h4>
          <p className="text-xs text-sky-100 font-medium">📍 Dehradun, Uttarakhand, India</p>
          <p className="text-xs text-sky-100 font-medium">📞 +91 98765 43210</p>
          <p className="text-xs text-sky-100 font-medium">✉️ info@nandapathadventures.com</p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mt-10 border-t border-sky-900/60 text-center text-xs text-sky-300 font-medium">
        © {new Date().getFullYear()} NandaPath Adventures. All rights reserved.
      </div>
    </footer>
  );
}