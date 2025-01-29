"use client";

import { Button } from "../components/ui/button";
import Link from "next/link"; // Import the Link component from Next.js

export default function Services() {
  const services = [
    {
      title: "ESG Reporting",
      icon: "/images/esg-services.gif",
      startJourneyText: "Start Journey",
      buyServiceText: "Buy Service",
      link: "/services/esg-reporting", // Dynamic route to ESG Reporting
    },
    {
      title: "GHG Reporting",
      icon: "/images/ghg-services.gif",
      startJourneyText: "Start Journey",
      buyServiceText: "Buy Service",
      link: "/services/ghg-reporting", // Dynamic route to GHG Reporting
    },
    {
      title: "Carbon Credit",
      icon: "/images/carbon-credit-services.gif",
      startJourneyText: "Start Journey",
      buyServiceText: "Buy Service",
      link: "/services/carbon-credit", // Dynamic route to Carbon Credit
    },
    {
      title: "Carbon Trading",
      icon: "/images/carbon-trading-services.gif",
      startJourneyText: "Start Journey",
      buyServiceText: "Buy Service",
      link: "/services/carbon-trading", // Dynamic route to Carbon Trading
    },
  ];

  return (
    <>
    <title>Services</title>
    <div className="content-item py-20 mt-6 text-center">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-5xl mt-4 mb-12 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17]">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-10">
          {services.map((service, index) => (
            <div
            key={index}
            className="flex flex-col items-center bg-white shadow-[-6px_0_0_4px_rgba(0,0,0,0.4)] hover:shadow-none transition-all duration-700 rounded-3xl border border-white p-6"
            >
              {/* GIF Icon */}
              <div className="w-full h-48">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-full h-full object-contain rounded-lg"
                  />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center text-[#102F17] mt-4 mb-2">
                {service.title}
              </h3>

              {/* Start Journey Link */}
              <Link
                href={service.link}
                className="text-sm mt-10 font-medium underline hover:text-orange-500"
                >
                {service.startJourneyText}
              </Link>

              {/* Buy Service Button */}
              <Button
                className="w-full bg-green-900 text-white hover:bg-green-500 px-6 rounded-lg font-bold transition-all duration-300 mt-2"
                >
                {service.buyServiceText} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
}
