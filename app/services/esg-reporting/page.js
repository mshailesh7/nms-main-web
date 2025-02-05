"use client";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

export default function ESGReporting() {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const logos = [
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
      link: "/services/esg-reporting/sasb"
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
      link: "/services/esg-reporting/gri",
    },
  ];

  const handleAccordionToggle = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

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
          }}
        ></div>

        {/* Header Section */}
        <div className="relative z-10">
          <Image
            src="/images/esg-reporting/esg-header.svg"
            alt="Background with gears and nature"
            width={1800}
            height={400}
            priority
            className="w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
            Key benefits to our clients:
          </h2>

          {/* Benefits List */}
          <ul className="space-y-6">
            {benefits.map((benefit, index) => {
              const bounce = useSpring({
                transform: activeIndex === index ? "scale(1.2)" : "scale(1)",
                config: { tension: 170, friction: 12 },
              });

              return (
                <li key={index} className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center space-x-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/esg-reporting/dropdown-leaf.svg"
                        alt="Leaf icon"
                        width={20}
                        height={20}
                      />
                      <span className="text-[#102F17] text-sm md:text-lg font-bold">
                        {benefit.text}
                      </span>
                    </div>
                    <animated.button
                      onClick={() => handleAccordionToggle(index)}
                      style={bounce}
                    >
                      <Image
                        src="/images/esg-reporting/dropdown-coin.svg"
                        alt="Dropdown icon"
                        width={48}
                        height={48}
                        className="cursor-pointer"
                      />
                    </animated.button>
                  </div>
                  {activeIndex === index && (
                    <div className="mt-2 pl-10 text-[#102F17] font-medium text-sm md:text-lg">
                      {benefit.details}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Logos Section */}
          <div className="mt-12 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {logos.map((logo, index) => (
              <Link
                href={logo.link || "#"}
                key={index}
                className="flex flex-grow flex-col py-6 rounded-lg shadow-md bg-white items-center transition-transform transform hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={150}
                  className="w-48 mb-4"
                />
                <span className="text-center text-lg md:text-xl mt-auto font-bold">
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
