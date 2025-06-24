import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Abanner from "./Components/AboutBanner/Abanner";
import OurMenu from "./Components/OurMenu/OurMenu";
import FeedBack from "./Components/Feedbacks/FeedBack";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Abanner />
      <OurMenu />
      <FeedBack />
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;
