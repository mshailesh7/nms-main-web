"use client";

import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

const plans = [
  {
    title: "Basic Tier: ESG Essentials",
    price: "****",
    features: [
      "ESG Reporting (BRSR for Indian companies)",
      "Basic GHG Protocol carbon footprint analysis",
      "Annual consultation on regulatory compliance",
      "Quarterly ESG performance reports",
      "Basic multi-national ESG reporting support",
    ],
    buttonText: "Buy Basic",
    color: "bg-[#20732C]",
  },
  {
    title: "Standard Tier: Sustainability Growth",
    price: "****",
    features: [
      "All Basic Tier services",
      "Comprehensive GRI Reporting",
      "Detailed carbon footprint analysis with recommendations",
      "Carbon Credit Trading Scheme (CCTS) consultation",
      "Bi-annual stakeholder engagement support",
      "Monthly sustainability performance dashboards",
      "Multi-national ESG reporting and compliance management for up to 3 countries",
    ],
    buttonText: "Buy Standard",
    color: "bg-[#295922]",
  },
  {
    title: "Premium Tier: Sustainability Leadership",
    price: "****",
    features: [
      "All Standard Tier services",
      "Verra Project Registration and Consultation",
      "Advanced carbon credit management and trading support",
      "Customized ESG strategy development",
      "Continuous monitoring and improvement recommendations",
      "Quarterly workshops and training sessions",
      "Dedicated sustainability consultant",
      "Global carbon credit portfolio management",
      "Executive-level sustainability strategy consulting",
      "Impact assessment and reporting for global operations",
    ],
    buttonText: "Buy Premium",
    color: "bg-[#003F31]",
  },
];

export default function Pricing() {
  return (
    <div className="bg-[#F1F1F1] content-item py-10">
      <div className="text-center px-2 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#102F17]">
          Choose your Sustainability Path
        </h1>
        <p className="text-lg md:text-xl tracking-wide font-medium text-[#102F17]">
          Enabling companies to transition towards a greener future
        </p>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col navbar-md:flex-row justify-center items-stretch gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg w-full navbar-md:w-1/3 flex flex-col"
            >
              {/* Tier Header with Dynamic Colors */}
              <div
                className={`${plan.color} text-white p-6 py-10 rounded-t-lg`}
              >
                <h2 className="text-xl font-semibold">{plan.title}</h2>
              </div>
              {/* Features */}
              <div className="p-6 flex-grow">
                <ul className="text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex font-medium items-center mb-2"
                    >
                      {/* Fixed size for FaLeaf with debugging styles */}
                      <FaLeaf
                        className="leaf-icon"
                        style={{
                          color: "#003F31",
                          marginRight: "8px",
                          width: "14px",
                          height: "14px",
                          flexShrink: 0,
                        }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Button at the bottom */}
              <div className="px-6 pb-6">
                <Link href="/contact" passHref>
                  <button
                    className={`bg-[#003F31] text-white py-2 w-full rounded-lg hover:bg-green-700 font-semibold transition duration-300`}
                  >
                    {plan.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="container content-item mx-auto px-6 mt-16">
        <div className="flex flex-col items-center bg-gradient-to-r from-[#003F31] to-[#20732C] p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-white mb-8 text-center max-w-lg">
            Have any questions or need assistance? Our team is here to help you
            take the next step in your sustainability journey.
          </p>
          <Link
            href="/contact"
            className=" bg-white text-[#003F31] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 z-10 transition-all ease-in-out duration-300"
          >
            Contact Us
          </Link>

          {/* Decorative Wave effect */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white opacity-30 rounded-t-full"></div>
        </div>
      </div>

      {/* Add CSS for consistent leaf icon size */}
      <style jsx>{`
        .leaf-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0; /* Prevent the icon from shrinking */
        }
      `}</style>
    </div>
  );
}
