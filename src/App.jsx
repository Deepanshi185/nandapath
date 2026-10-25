import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TrekDetail from "./pages/TrekDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Dynamic Trek Routes (Gaumukh Tapovan, Kedarkantha, Bali Pass, etc.) */}
        <Route path="/:slug" element={<DynamicTrekWrapper />} />
        <Route path="/uttarakhand/:slug" element={<DynamicTrekWrapper />} />
        <Route path="/garhwal/:slug" element={<DynamicTrekWrapper />} />
        <Route path="/kumaon/:slug" element={<DynamicTrekWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}