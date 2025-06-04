import './App.css';
import Hero from './components/hero/Hero';
import AboutUs from './components/About/AboutUs';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Plans from './components/plans/Plans';
import Testimonials from './components/testimonials/Testimonials';
import Join from './components/join/Join';
import FAQs from './components/Faqs/FAQs';
import Footer from './components/footer/Footer';

function App() {
  return (
   
   <div>
  {/* Side banners */}
  <div className="side-banner left">
    <div className="banner-text stroke-text">
      |  La Concha CF  |  La Concha CF  |  La Concha CF  |  La Concha CF  |  La Concha CF  |
    </div>
  </div>
  <div className="side-banner right">
    <div className="banner-text stroke-text">
      |  La Concha CF  |  La Concha CF  |  La Concha CF  |  La Concha CF  |  La Concha CF  |
    </div>
  </div>

    <div className="App">
      <Hero/>
      <AboutUs/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <FAQs/>
      <Join/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
