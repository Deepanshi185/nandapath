import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Local Real Asset Imports from src/assets
import kedarkanthaSummitImg from "../assets/kedarkantha-summit-group.jpeg";
import judaKaTalabImg from "../assets/juda-ka-talab.jpeg";
import meadowPolesImg from "../assets/meadow-poles-salute.jpeg";
import campsiteMealImg from "../assets/campsite-meal.jpeg";
import sankriSunsetImg from "../assets/sankri-sunset.jpeg";
import monsoonMeadowImg from "../assets/monsoon-meadow-batch.jpeg";

const blogPosts = [
  {
    id: "kedarkantha-guide",
    title: "Complete Kedarkantha Winter Trek Guide 2026",
    excerpt:
      "Everything you need to know about preparing for winter snow, sub-zero clothing layering, gear checklists, and conquering the 12,500 ft summit push.",
    category: "WINTER GUIDE",
    readTime: "6 min read",
    date: "October 2026",
    author: "Rahul Jaraut",
    image: kedarkanthaSummitImg,
    featured: true,
  },
  {
    id: "himalayan-camping-safety",
    title: "10 Essential Safety Tips for High-Altitude Camping",
    excerpt:
      "Stay warm, hydrated, and safe on trails above 10,000 ft with guidance from NIM & WFR certified expedition leaders.",
    category: "EXPEDITION SAFETY",
    readTime: "5 min read",
    date: "September 2026",
    author: "NandaPath Guide Team",
    image: campsiteMealImg,
  },
  {
    id: "juda-ka-talab-legend",
    title: "The Legend & Beauty of Juda Ka Talab Frozen Lake",
    excerpt:
      "Discover the folklore behind Garhwal's famous high-altitude lake and why it makes for one of India's most scenic campsites.",
    category: "TRAIL STORIES",
    readTime: "4 min read",
    date: "August 2026",
    author: "Perna Sharma",
    image: judaKaTalabImg,
  },
  {
    id: "sankri-basecamp-hub",
    title: "Sankri Basecamp Hub: Gateway to Garhwal Wilderness",
    excerpt:
      "A complete guide to Sankri wooden village homestays, local Garhwali food, and preparing your backpack before starting trail day.",
    category: "BASECAMP LIFE",
    readTime: "5 min read",
    date: "July 2026",
    author: "NandaPath Logistics",
    image: sankriSunsetImg,
  },
  {
    id: "meadow-salute-guide",
    title: "High-Altitude Trekking Pole Techniques & Pacing",
    excerpt:
      "Proper pole grip, rhythm, and trail posture to save your knee joints during steep alpine descents and ridge walks.",
    category: "TREK TECHNIQUES",
    readTime: "5 min read",
    date: "June 2026",
    author: "Rahul Jaraut",
    image: meadowPolesImg,
  },
  {
    id: "monsoon-trekking-tips",
    title: "Monsoon Trekking in Himalayan Meadows & Bugyals",
    excerpt:
      "How to choose proper waterproof gear, gaiters, and quick-dry layers for trekking through lush green summer downpours.",
    category: "SEASONAL GUIDE",
    readTime: "4 min read",
    date: "May 2026",
    author: "Expedition Team",
    image: monsoonMeadowImg,
  },
];

export default function Blog() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <main className="min-h-screen bg-slate-50/80 font-sans text-slate-800 pt-20 sm:pt-28 pb-16 sm:pb-24 w-full">
      <Navbar />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* CLEAN RESPONSIVE HEADER */}
        <div className="border-b border-slate-200 pb-6 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-100/80 px-3 py-1 rounded-md border border-sky-200 inline-block">
              JOURNAL &amp; GUIDES
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#142957] tracking-tight leading-tight">
            Our Blog &amp; Trail Stories
          </h1>
          <p className="text-sm sm:text-lg font-medium text-slate-600 max-w-2xl leading-relaxed">
            Trekking tips, expedition stories, gear checklists, and real batch memories from the Garhwal &amp; Kumaon Himalayas.
          </p>
        </div>

        {/* FEATURED HERO POST - RESPONSIBLY STACKED ON MOBILE */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:shadow-xl transition duration-300">
          <div className="lg:col-span-7 aspect-[16/10] sm:h-80 lg:h-auto overflow-hidden relative">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Featured Guide
            </span>
          </div>

          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-500">
                <span className="text-sky-700 font-extrabold uppercase bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                  {featuredPost.category}
                </span>
                <span>&bull;</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#142957] leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>By {featuredPost.author}</span>
              <span className="text-[#142957] font-extrabold group-hover:translate-x-1 transition flex items-center gap-1">
                Read Article &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* GRID ARTICLES - 1 COL ON PHONE, 2 ON TABLET, 3 ON DESKTOP */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#142957]">
            Latest Expedition Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="aspect-[16/10] sm:h-52 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-[#142957] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#142957] leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-2">
                  <span className="text-[11px] font-medium text-slate-500">By {post.author}</span>
                  <span className="text-xs font-bold text-[#142957] group-hover:text-sky-600 transition flex items-center gap-1">
                    Read Story &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}