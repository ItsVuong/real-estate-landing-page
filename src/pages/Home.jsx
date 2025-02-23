import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Intro } from "../components/intro";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Location } from "../components/location";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import "../App.css";
import { TongThe } from "../components/TongThe";
import { TienIch } from "../components/TienIch";
import { Footer } from "../components/footer";

const HomePage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header/>
      <Intro />
      <About />
      <Location/>
      <TongThe/>
      <Services/>
      <TienIch/>
      <Footer/>
    </div>
  );
};

export default HomePage;
