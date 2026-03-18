import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactPage from "./pages/Contact";
import BackToTop from "./components/BacktoTop";
import PageLoader from "./components/PageLoader";

/* ─────────────────────────────────────────────────────────
   RouteLoader — lives INSIDE BrowserRouter so it can read
   useLocation(). Mounts a fresh PageLoader on every route
   change, including the very first one.
───────────────────────────────────────────────────────── */
const RouteLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Every time the pathname changes → show the loader again
  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  if (!loading) return null;

  return <PageLoader onDone={() => setLoading(false)} />;
};

/* ─────────────────────────────────────────────────────────
   App — clean, no stray useState outside BrowserRouter
───────────────────────────────────────────────────────── */
const App = () => {
  return (
    <BrowserRouter>

      {/* Route-aware loader — fires on every page transition */}
      <RouteLoader />

      <Navbar />

      <Routes>
        <Route path="/native-bounty-frontend" element={<Home />} />
        <Route path="/about"                  element={<About />} />
        <Route path="/services"               element={<Services />} />
        <Route path="/network"                element={<div>Network</div>} />
        <Route path="/contact"                element={<ContactPage />} />
      </Routes>

      <BackToTop />
      <Footer />

    </BrowserRouter>
  );
};

export default App;