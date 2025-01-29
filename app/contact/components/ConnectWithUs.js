import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ConnectWithUs() {
  return (
    <div className="flex flex-col items-center justify-start min-h-auto p-6 sm:p-8 navbar-md:p-10">
      <h1 className="text-2xl font-bold text-green-900 mb-2 text-center sm:text-3xl">
        Connect with us
      </h1>
      <p className="text-lg text-gray-900 mb-8 text-center sm:text-xl">
        Initiate Your ESG Excellence Journey
      </p>
      <div className="space-y-6 w-full max-w-3xl">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-[#B0C4B1] rounded-full flex items-center justify-center">
              <FaCheck className="text-green-900" />
            </div>
          </div>
          <p className="text-gray-800">
            Our team of ESG experts is here to guide your organization through
            every step of the sustainability transformation.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-[#B0C4B1] rounded-full flex items-center justify-center">
              <FaCheck className="text-green-900" />
            </div>
          </div>
          <p className="text-gray-800">
            Explore our range of services from carbon footprint measurement to
            full ESG strategy development.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-[#B0C4B1] rounded-full flex items-center justify-center">
              <FaCheck className="text-green-900" />
            </div>
          </div>
          <p className="text-gray-800">
            Innovative tools and methodologies for accurate measurement and
            reporting.
          </p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-[#B0C4B1] rounded-full flex items-center justify-center">
              <FaCheck className="text-green-900" />
            </div>
          </div>
          <p className="text-gray-800">
            Let's create a roadmap that turns your environmental commitments
            into measurable achievements.
          </p>
        </div>
      </div>
    </div>
  );
}
