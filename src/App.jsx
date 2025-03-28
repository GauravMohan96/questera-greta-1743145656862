import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Rewards from './pages/Rewards';
import Coworking from './pages/Coworking';
import { CartProvider } from './context/CartContext';
import { LoyaltyProvider } from './context/LoyaltyContext';
import { SpaceProvider } from './context/SpaceContext';

const App = () => {
  return (
    <CartProvider>
      <LoyaltyProvider>
        <SpaceProvider>
          <Router>
            <div className="min-h-screen bg-cream">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/coworking" element={<Coworking />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </SpaceProvider>
      </LoyaltyProvider>
    </CartProvider>
  );
};

export default App;