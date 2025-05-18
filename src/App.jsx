import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainTeam from "./components/MainTeam";
import NavBar from "./components/NavBar";
import OurClients from "./components/OurClients";
import ReviewsCarousel from "./components/ReviewsCarousel";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-[#f7f5f2]">
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
      <MainTeam />
      <ReviewsCarousel />
      <OurClients />
      <Footer />
    </div>
  );
}

export default App;