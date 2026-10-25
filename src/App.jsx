import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TrekDetail from "./pages/TrekDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Uttarakhand from "./pages/Uttarakhand";
import Kumaon from "./pages/Kumaon";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Wrapper component to pass the URL parameter as a prop
function DynamicTrekWrapper() {
  const { slug } = useParams();
  return <TrekDetail slug={slug} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core Static Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Fixed FAQ Routes (Handles both singular and plural URLs) */}
        <Route path="/faqs" element={<Faq />} />
        <Route path="/faq" element={<Faq />} />
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Region & Sub-Region Hub Pages */}
        <Route path="/uttarakhand" element={<Uttarakhand />} />
        <Route path="/kumaon" element={<Kumaon />} />
        <Route path="/garhwal" element={<Uttarakhand />} />
        <Route path="/himachal" element={<Uttarakhand />} />
        <Route path="/kashmir" element={<Uttarakhand />} />

        {/* Dynamic Trek Routes */}
        <Route path="/:slug" element={<DynamicTrekWrapper />} />
        <Route path="/uttarakhand/:slug" element={<DynamicTrekWrapper />} />
        <Route path="/garhwal/:slug" element={<DynamicTrekWrapper />} />
        <Route path="/kumaon/:slug" element={<DynamicTrekWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}