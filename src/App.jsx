import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uttarakhand from "./pages/Uttarakhand";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import RegionDetail from "./pages/RegionDetail";
import TrekDetail from "./pages/TrekDetail";
import Kumaon from "./pages/Kumaon";
import HarKiDunDetails from "./pages/HarKiDunDetails";
import Newsletter from "./pages/Newsletter";
import RupinPassDetails from "./pages/RupinPassDetails";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uttarakhand" element={<Uttarakhand />} />
          <Route path="/himachal" element={<Uttarakhand />} />
          <Route path="/kashmir" element={<Uttarakhand />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* Dynamic regional routes */}
          <Route path="/region/:region" element={<RegionDetail />} />
          <Route path="/garhwal" element={<RegionDetail />} />
          <Route path="/kumaon" element={<Kumaon />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* INDIVIDUAL TREK ROUTES */}
          <Route path="/har-ki-dun" element={<HarKiDunDetails />} />
          <Route path="/kedarkantha" element={<TrekDetail />} />
          <Route path="/rupin-pass" element={<RupinPassDetails />} />
          <Route path="/:slug" element={<TrekDetail />} />
        </Routes>
      </div>
    </Router>
  );
}