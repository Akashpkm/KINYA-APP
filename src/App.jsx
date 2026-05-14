// src/App.jsx
import React, { useEffect ,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WelcomeModal from './components/Modal/Welcome';
import Home from './pages/Home';
import ProductDetail from './pages/Product/ProductDetail';
import Certification from './pages/Certification';
import Products from './pages/Product/Products';
import Video from './pages/Video';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import img from './assets/kinya.png'

function App() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Simulate app loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, []);


 
   return(
 <Router>
  {/* Overlay Loader */}
      {loading && (
        <div className="loader-container">
          <div className="loader"><img src={img} className='loading-image'/></div>        
        </div>
      )}
      <div className="App">
        <WelcomeModal/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/video" element={<Video />} />
           <Route path="/certification" element={<Certification />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    
      </div>
    </Router>

  );
 
 
}

export default App;
