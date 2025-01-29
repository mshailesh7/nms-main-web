"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function ESGReporting() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animateIndex, setAnimateIndex] = useState(null);

  const benefits = [
    {
      text: "Improved Risk Management",
      details:
        "Identify and mitigate risks more effectively with comprehensive data analysis.",
    },
    {
      text: "Enhanced Transparency and Credibility",
      details:
        "Building trust with stakeholders through clear and accurate reporting.",
    },
    {
      text: "Regulatory Compliance",
      details:
        "Stay ahead of regulatory requirements with expert guidance and support.",
    },
    {
      text: "Better Business Performance",
      details:
        "Achieve cost savings and positive ESG metrics that attract investors and customers.",
    },
    {
      text: "Increased Access to Capital",
      details:
        "Improve your appeal to investors by showcasing strong ESG performance.",
    },
  ];

  const getBounceAnimation = (index) => {
    return useSpring({
      transform: animateIndex === index ? "scale(1.2)" : "scale(1)",
      config: { tension: 170, friction: 12 },
    });
  };

  const handleCoinClick = (index) => {
    setAnimateIndex(index);
    setTimeout(() => {
      setActiveIndex(activeIndex === index ? null : index);
      setAnimateIndex(null);
    }, 300);
  };

  return (
    <>
      <title>ESG Reporting</title>
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none hidden md:block"
          style={{
            backgroundImage:
              "url('/images/esg-reporting/background-services.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "30%",
            zIndex: 0,
          }}
        ></div>

        {/* Header Section */}
        <div className="relative z-10">
          <img
            src="/images/esg-reporting/esg-header.svg"
            alt="Background with gears and nature"
            className="w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Key benefits to our clients:
          </h2>

          {/* Benefits List */}
          <ul className="space-y-6">
            {benefits.map((benefit, index) => {
              const bounce = getBounceAnimation(index);
              return (
                <li key={index} className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center space-x-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/images/esg-reporting/dropdown-leaf.svg"
                        alt="Left icon"
                        className="h-6 w-6"
                      />
                      <span className="text-[#102F17] text-xl font-bold">
                        {benefit.text}
                      </span>
                    </div>
                    <animated.button
                      onClick={() => handleCoinClick(index)}
                      style={bounce}
                    >
                      <img
                        src="/images/esg-reporting/dropdown-coin.svg"
                        alt="Right icon"
                        className="w-12 h-12 cursor-pointer"
                      />
                    </animated.button>
                  </div>
                  {/* Accordion Text */}
                  {activeIndex === index && (
                    <div className="mt-2 pl-10 text-[#102F17] font-medium text-lg">
                      {benefit.details}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Logos Section */}
          <div className="mt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                src: "/images/esg-reporting/esg-brsr.gif",
                alt: "BRSR logo",
                text: "BRSR",
                link: "/services/esg-reporting/brsr",
              },
              {
                src: "/images/esg-reporting/esg-sasb.gif",
                alt: "SASB logo",
                text: "SASB Standards",
              },
              {
                src: "/images/esg-reporting/esg-spcb.gif",
                alt: "SPCB logo",
                text: "SPCB Compliance",
                link: "/services/esg-reporting/spcb",
              },
              {
                src: "/images/esg-reporting/esg-gri.gif",
                alt: "GRI logo",
                text: "GRI Framework",
                link:"/services/esg-reporting/gri",
              },
            ].map((logo, index) => (
              <Link
                href={logo.link || "#"} // Use the correct link or fallback to # if not provided
                key={index}
                className="flex flex-grow flex-col py-6 rounded-lg shadow-md bg-white items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-48 sm:w-full mb-4"
                />
                <span className="text-center text-xl mt-auto font-bold">
                  {logo.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
