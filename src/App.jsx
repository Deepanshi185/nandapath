import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import RegionDetail from "./pages/RegionDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Helper wrapper to handle dynamic slug routing for all treks
function DynamicTrekRoute() {
  const { slug } = useParams();
  return <RegionDetail slug={slug} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Region & Trek Specific Routes */}
        <Route path="/:slug" element={<DynamicTrekRoute />} />
        <Route path="/uttarakhand/:slug" element={<DynamicTrekRoute />} />
        <Route path="/garhwal/:slug" element={<DynamicTrekRoute />} />
        <Route path="/kumaon/:slug" element={<DynamicTrekRoute />} />
      </Routes>
    </BrowserRouter>
  );
}