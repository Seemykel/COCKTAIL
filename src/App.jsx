import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar';
import Search from './search';
import Footer from './footer';
import Blog from './blog';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
