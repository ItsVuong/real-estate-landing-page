import React, { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Intro } from "../components/intro";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Location } from "../components/location";
import JsonData from "../data/data.json";
import "../App.css";
import { TongThe } from "../components/TongThe";
import { TienIch } from "../components/TienIch";
import UuDiem from "../components/UuDiem";

const HomePage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Location />
      <TongThe />
      <Services />
      <TienIch />
      <UuDiem/>
    </div>
  );
};

export default HomePage;
