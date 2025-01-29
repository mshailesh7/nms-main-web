"use client";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Recognised from "./components/Recognised";
import ServiceHomePage from "./components/ServiceHomePage";

export default function HomePage() {
  return (
    <>
    <title>NatureMark Systems</title>
    <div className="">
      <Hero />
      <Recognised/>
      <div id="services"><ServiceHomePage/></div>
      <Pricing/>
    </div>
    </>
  );
}

