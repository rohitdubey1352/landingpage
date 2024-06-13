import Advantages from "./components/Advantages";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Customizable from "./components/Fully_customizable";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Button from "./components/BottomToTop";
import Gradient from "./assets/Images/Gradient.png";
import Star1 from "./assets/Images/Star 1.png";
import Star2 from "./assets/Images/Star.png";

const App = () => {
  return (
    <>
      <div className="main_screen">
        <Navbar />
        <Hero />
        <Features />
        <Advantages />
        <Customizable />
        <Testimonial />
        <FAQ />
        <Subscribe />
        <Footer />
        <Button />
        <img src={Star1} className="star1" alt="star1" />
        <img src={Star2} className="star2" alt="star2" />
        <img src={Star2} className="star3" alt="star2" />
        <img src={Star2} className="star4" alt="star2" />
        <img src={Gradient} className="gradient1" alt="gradient" />
      </div>
    </>
  );
};

export default App;
