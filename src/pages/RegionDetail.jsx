import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const regionDatabase = {
  garhwal: {
    title: "Garhwal Himalayas",
    subtitle: "Land of Sacred Peaks, Glacial Basins & High Alpine Passes",
    heroImage:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85",
    description:
      "Garhwal forms the western region of Uttarakhand, celebrated for towering summit massifs like Nanda Devi, Swargarohini, and Trishul. Home to ancient oak trails, glacial lakes, and legendary pilgrimage valleys, Garhwal offers India's most iconic alpine trekking routes.",
    identityHighlights: [
      {
        icon: "🏔️",
        title: "Summit Massifs",
        desc: "Home to Nanda Devi (25,645 ft), Swargarohini, and Kamet.",
      },
      {
        icon: "🌊",
        title: "Glacial Origins",
        desc: "Birthplace of sacred rivers Bhagirathi, Alaknanda, and Yamuna.",
      },
      {
        icon: "🌲",
        title: "Govind Sanctuary",
        desc: "Dense pine, rhododendron, and bugyal (alpine meadow) ecosystems.",
      },
    ],
    treks: [
      {
        slug: "kedarkantha",
        name: "Kedarkantha Trek",
        duration: "5 Days / 4 Nights",
        altitude: "12,500 ft",
        difficulty: "Easy to Moderate",
        price: "₹6,500",
        originalPrice: "₹8,500",
        image:
          "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
        tagline: "India's premier winter snow summit expedition.",
      },
      {
        slug: "har-ki-dun",
        name: "Har Ki Dun Trek",
        duration: "7 Days / 6 Nights",
        altitude: "11,600 ft",
        difficulty: "Easy to Moderate",
        price: "₹10,500",
        originalPrice: "₹13,500",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        tagline: "Cradle of Gods featuring 2,000-year-old wooden villages.",
      },
      {
        slug: "bali-pass",
        name: "Bali Pass Trek",
        duration: "8 Days / 7 Nights",
        altitude: "16,207 ft",
        difficulty: "Challenging",
        price: "₹18,500",
        originalPrice: "₹22,000",
        image:
          "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
        tagline: "High-altitude cross-over pass connecting Har Ki Dun to Yamunotri.",
      },
    ],
  },

  kumaon: {
    title: "Kumaon Himalayas",
    subtitle: "Realm of Glaciers, Pristine Lakes & Majestic Frontier Peaks",
    heroImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    description:
      "Kumaon encompasses the eastern division of Uttarakhand, bounded by Tibet to the north and Nepal to the east. Renowned for its tranquil oak forests, panoramic views of the Panchachuli peaks, and historical glacial valleys like Pindari and Kafni.",
    identityHighlights: [
      {
        icon: "🌄",
        title: "Panchachuli Massif",
        desc: "Dramatic views of five legendary snow peaks rising above Darma Valley.",
      },
      {
        icon: "🧊",
        title: "Glacial Trails",
        desc: "Gateway to Pindari, Kafni, and Milam glacier systems.",
      },
      {
        icon: "🏡",
        title: "Heritage Villages",
        desc: "Rich Kumaoni culture, stone architecture, and serene pine forests.",
      },
    ],
    treks: [
      {
        slug: "pindari-glacier",
        name: "Pindari Glacier Trek",
        duration: "7 Days / 6 Nights",
        altitude: "12,300 ft",
        difficulty: "Moderate",
        price: "₹11,500",
        originalPrice: "₹14,500",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        tagline: "Classic trek into the zero point of Pindari Glacier.",
      },
      {
        slug: "kafni-glacier",
        name: "Kafni Glacier Trek",
        duration: "7 Days / 6 Nights",
        altitude: "12,664 ft",
        difficulty: "Moderate",
        price: "₹12,000",
        originalPrice: "₹15,000",
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        tagline: "Tranquil valley trail surrounded by Nandakot peaks.",
      },
      {
        slug: "khaliya-top",
        name: "Khaliya Top Trek",
        duration: "4 Days / 3 Nights",
        altitude: "11,500 ft",
        difficulty: "Easy",
        price: "₹6,800",
        originalPrice: "₹8,800",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        tagline: "Panoramic summit meadow overlooking Munsiyari and Panchachuli.",
      },
    ],
  },
};

export default function RegionDetail() {
  const { region } = useParams();
  const regionKey = region?.toLowerCase() || "garhwal";
  const data = regionDatabase[regionKey] || regionDatabase.garhwal;

  return (
    <main className="min-h-screen bg-slate-50/70 pb-24 pt-24 font-sans text-slate-800">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#142957]">Home</Link>
          <span>/</span>
          <Link to="/uttarakhand" className="hover:text-[#142957]">Uttarakhand</Link>
          <span>/</span>
          <span className="font-bold text-[#142957]">{data.title}</span>
        </div>

        {/* REGIONAL HERO BANNER */}
        <div className="relative mb-12 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-[#0B1736] shadow-xl">
          <div className="relative min-h-[400px] sm:min-h-[460px] w-full overflow-hidden p-8 sm:p-14 flex flex-col justify-end">
            <img
              src={data.heroImage}
              alt={data.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736]/95 via-[#0B1736]/60 to-transparent" />

            <div className="relative z-10 space-y-3 text-white max-w-3xl">
              <span className="rounded-full bg-sky-500/90 backdrop-blur-md px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                Uttarakhand Destination Guide
              </span>
              <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-md">
                {data.title}
              </h1>
              <p className="text-base sm:text-lg font-medium text-sky-200">
                {data.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-2">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* REGIONAL IDENTITY HIGHLIGHTS */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Regional Identity
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#142957] mt-0.5">
              Why Expeditioners Choose {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.identityHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:border-sky-300 transition"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#142957]">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TREKS SECTION FOR THIS REGION */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
              Explore Routes
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#142957] mt-0.5">
              Featured Treks in {data.title}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Handpicked expeditions with certified guides and complete equipment support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.treks.map((trek) => (
              <div
                key={trek.slug}
                className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={trek.image}
                      alt={trek.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white">
                      {trek.difficulty}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#142957] group-hover:text-sky-600 transition">
                      {trek.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {trek.tagline}
                    </p>

                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 pt-2 border-t border-slate-100">
                      <span>⏱ {trek.duration}</span>
                      <span>•</span>
                      <span>⛰ {trek.altitude}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Starting</span>
                    <p className="text-lg font-extrabold text-[#142957]">{trek.price}</p>
                  </div>

                  <Link
                    to={`/${trek.slug}`}
                    className="bg-[#142957] hover:bg-sky-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}