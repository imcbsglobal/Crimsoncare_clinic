import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// Service pages
import LaserProctology from "./pages/LaserProctology";
import GeneralSurgeries from "./pages/GeneralSurgeries";
import Hidradenitis from "./pages/Hidradenitis";
import AnalWartRemoval from "./pages/AnalWartRemoval"; 
import VaricoseVeins from "./pages/VaricoseVeins";
import Circumcisions from "./pages/Circumcisions";
import LumpExcisions from "./pages/LumpExcisions";
import DiabeticFoot from "./pages/DiabeticFoot";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/laser-proctology" element={<LaserProctology />} />
        <Route path="/general-surgeries" element={<GeneralSurgeries />} />
        <Route path="/hidradentitis" element={<Hidradenitis />} />
        <Route path="/anal-wart-removal" element={<AnalWartRemoval />} /> 
        <Route path="/varicose-veins" element={<VaricoseVeins />} />
        <Route path="/circumcisions" element={<Circumcisions />} />
        <Route path="/lump-excisions" element={<LumpExcisions />} />
        <Route path="/diabetic-foot" element={<DiabeticFoot />} />
        <Route path="/book-appointment" element={<BookAppointment />} />





        {/* add all other services here */}
      </Routes>
    </Router>
  );
}

export default App;
