"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServiceHomePage() {
  const services = [
    {
      title: "ESG Reporting",
      icon: "/images/esg-services.gif",
      buyServiceText: "Explore",
      link: "/services/esg-reporting",
    },
    {
      title: "GHG Reporting",
      icon: "/images/ghg-services.GIF",
      buyServiceText: "Explore",
      link: "/services/ghg-reporting",
    },
    {
      title: "Carbon Credit",
      icon: "/images/carbon-credit-services.GIF",
      buyServiceText: "Explore",
      link: "/services/carbon-credit",
    },
    {
      title: "Carbon Trading",
      icon: "/images/carbon-trading-services.GIF",
      buyServiceText: "Coming Soon...",
      link: "/services",
    },
  ];

  return (
    <>
      <div className="content-item py-16 mt-6 text-center">
        <div className="container mx-auto px-12 lg:px-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl mt-4 mb-12 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17]">
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
                <div className="w-full h-32 md:h-48">
                  <Image
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain rounded-lg"
                    priority={index < 2}
                    unoptimized
                    loading={index >= 2 ? "lazy" : "eager"}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center text-[#102F17] mt-4 mb-2">
                  {service.title}
                </h3>

                {/* Conditional Rendering for Carbon Trading */}
                {service.title === "Carbon Trading" ? (
                  <p className="w-full bg-gray-200 text-gray-600 px-6 py-1 rounded-lg font-bold mt-10">
                    Coming Soon...
                  </p>
                ) : (
                  <Link
                    href={service.link}
                    className="w-full mt-10 bg-green-900 text-white hover:bg-green-700 px-6 py-1 rounded-lg font-bold transition-all duration-300 group"
                  >
                    <span className="inline-flex items-center">
                      {service.buyServiceText}
                      <span className="ml-2 group-hover:animate-bounce-right">
                        →
                      </span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for the animation */}
      <style jsx>{`
        @keyframes bounce-right {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        .group-hover\:animate-bounce-right {
          animation: bounce-right 0.5s infinite;
        }
      `}</style>
    </>
  );
}