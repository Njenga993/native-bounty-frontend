import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/native-bounty-frontend" element={<Home/>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/network" element={<div>Network</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;