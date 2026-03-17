import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Board from "./pages/Board";
import Programs from "./pages/Programs";
import History from "./pages/History";
import HallOfFame from "./pages/HallOfFame";
import Tournaments from "./pages/Tournaments";
import Contact from "./pages/Contact";
import WhatsappButton from "./components/WhatsappButton.jsx";

function App() {
  return (
    <div>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/history" element={<History />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer at the bottom */}
      <Footer />
      <WhatsappButton />
    </Router>
    </div>
  );
}

export default App;