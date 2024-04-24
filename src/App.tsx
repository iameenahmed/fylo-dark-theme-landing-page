import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-primary font-OpenSans text-sm leading-relaxed text-white">
      <Header />
      <main className="bg-main">
        <Hero />
        <Features />
        <StayProductive />
        <Testimonials />
        <SignUp />
      </main>
      <Footer />
    </div>
  );
};
export default App;
