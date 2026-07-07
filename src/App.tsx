
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsServices from "./pages/ProductsServicesPage";
import ContactPage from "./pages/Contact";
import BackToTop from "./components/BacktoTop";
import WhatsAppButton from "./components/WhatsAppButton";
import { HelmetProvider } from "react-helmet-async";

/* ─────────────────────────────────────────────────────────
   RouteLoader — lives INSIDE BrowserRouter so it can read
   useLocation(). Mounts a fresh PageLoader on every route
   change, including the very first one.
───────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────
   App — clean, no stray useState outside BrowserRouter
───────────────────────────────────────────────────────── */
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
    

        <Navbar />

        <Routes>
          <Route path="/native-bounty-frontend" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="/network" element={<div>Network</div>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <WhatsAppButton />
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
