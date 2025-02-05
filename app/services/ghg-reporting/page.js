"use client";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

export default function GHGReporting() {
  const [activeIndex, setActiveIndex] = useState(null);

  const benefits = [
    {
      text: "Regulatory Compliance",
      details: "Meet evolving environmental regulations and avoid penalties.",
    },
    {
      text: "Enhanced Reputation",
      details:
        "Boost brand image and attract environmentally conscious customers.",
    },
    {
      text: "Cost Savings",
      details:
        "Optimize resource use, reduce emissions, and unlock financial benefits.",
    },
    {
      text: "Strategic Insights",
      details: "Gain valuable data to inform sustainable business decisions.",
    },
    {
      text: "Improved Emissions Management",
      details: "Track, measure, and reduce your environmental footprint.",
    },
    {
      text: "Better Access to Capital",
      details: "Attract investors who prioritize ESG performance.",
    },
    {
      text: "Risk Management",
      details: "Identify and mitigate climate-related risks to your business.",
    },
    {
      text: "Supply Chain Engagement",
      details: "Collaborate with suppliers on sustainability initiatives.",
    },
    {
      text: "Employee Engagement",
      details:
        "Boost employee morale and attract top talent by demonstrating your commitment to sustainability.",
    },
  ];

  const logos = [
    {
      src: "/images/ghg-reporting/ghg-protocol.gif",
      alt: "GHG Protocol",
      text: "GHG Protocol",
      link: "/services/ghg-reporting/ghg-protocol",
    },
  ];

  const handleAccordionToggle = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <>
      <title>GHG Reporting</title>
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none hidden md:block"
          style={{
            backgroundImage:
              "url('/images/ghg-reporting/background-services.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "30%",
          }}
        ></div>

        {/* Header Section */}
        <div className="relative z-10">
          <Image
            src="/images/ghg-reporting/ghg-header.svg"
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
                        src="/images/ghg-reporting/dropdown-leaf.svg"
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
                        src="/images/ghg-reporting/dropdown-coin.svg"
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
          <div className="mt-20 pb-20 flex justify-center items-center">
            {logos.map((logo, index) => (
              <Link
                href={logo.link || "#"}
                key={index}
                className="flex flex-col py-6 rounded-lg shadow-md bg-white items-center transition-transform transform hover:scale-105"
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
