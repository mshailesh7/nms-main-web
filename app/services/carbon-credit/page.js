"use client";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function CarbonCredit() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animateIndex, setAnimateIndex] = useState(null);

  const benefits = [
    {
      text: "Financial Savings and Revenue Generation",
      details:
        "Reduce your operational costs and generate new revenue streams through carbon credit markets.",
    },
    {
      text: "Regulatory Compliance",
      details: "Meet evolving environmental regulations and avoid penalties.",
    },
    {
      text: "Environmental Impact",
      details:
        "Contribute to a cleaner planet by reducing your carbon footprint and mitigating climate change.",
    },
    {
      text: "Corporate Social Responsibility (CSR)",
      details:
        "Enhance your brand image and demonstrate your commitment to sustainability.",
    },
    {
      text: "Competitive Advantage",
      details:
        "Gain a competitive edge by showcasing your environmental leadership and attracting customers and investors.",
    },
    {
      text: "Risk Management",
      details: "Identify and mitigate climate-related risks to your business.",
    },
    {
      text: "Expert Guidance",
      details:
        "Benefit from our team's expertise in carbon credit development and trading.",
    },
    {
      text: "Employee Engagement",
      details:
        "Boost employee morale and attract top talent by demonstrating your commitment to sustainability.",
    },
    {
      text: "Global Impact",
      details:
        "Contribute to global efforts to combat climate change by supporting sustainable projects around the world.",
    },
    {
      text: "Enhanced Reporting and Transparency",
      details:
        "Improve your data transparency and reporting practices related to your emissions and sustainability performance.",
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
      <title>Carbon Credit</title>
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none hidden md:block"
          style={{
            backgroundImage:
              "url('/images/carbon-credit/background-services.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "30%",
            zIndex: 0,
          }}
        ></div>

        {/* Header Section */}
        <div className="relative z-10">
          <img
            src="/images/carbon-credit/credit-header.svg"
            alt="Background with gears and nature"
            className="w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Heading */}
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
                        src="/images/ghg-reporting/dropdown-leaf.svg"
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
                        src="/images/ghg-reporting/dropdown-coin.svg"
                        alt="Right icon"
                        className="w-12 object-cover h-12 cursor-pointer"
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
          <div className="mt-20 pb-20 flex justify-center items-center">
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex flex-col py-6 rounded-lg shadow-md bg-white items-center justify-between w-full sm:w-64">
                <img
                  src="/images/carbon-credit/credit-cctsfinal.gif"
                  alt="CCTS Logo"
                  className="w-32 sm:w-48 mb-4"
                />
                <span className="text-center text-lg sm:text-xl mt-auto font-bold">
                  CCTS
                </span>
              </div>
              <div className="flex flex-col py-6 rounded-lg shadow-md bg-white items-center justify-between w-full sm:w-64">
                <img
                  src="/images/carbon-credit/credit-verra.gif"
                  alt="Verra Logo"
                  className="w-32 sm:w-48 mb-4"
                />
                <span className="text-center text-lg sm:text-xl mt-auto font-bold">
                  Verra Registration and Consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
