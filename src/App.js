import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';

import AboutUs from './components/About/AboutUs';
import FAQs from './components/Faqs/FAQs';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import Landing from './components/landing/Landing';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';

const Home = () => (
  <>
    <div className="side-banner left">
      <div className="banner-text stroke-text">
        | COSTA CF  | COSTA CF  | COSTA CF  | COSTA CF  |
      </div>
    </div>
    <div className="side-banner right">
      <div className="banner-text stroke-text">
        | COSTA CF  | COSTA CF  | COSTA CF  | COSTA CF  |
      </div>
    </div>

    <div className="App">
      <Hero />
      <AboutUs />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <FAQs />
      <Join />
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
