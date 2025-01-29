"use client";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";

export default function About() {
  const [selectedPhase, setSelectedPhase] = useState("Ideation");

  const phaseDetails = {
    Ideation: {
      image: "/images/esg-services.gif",
      year: "2023",
      month: "May",
      description:
        "The idea for ArborTag is born during a Healthcare Innovation Hackathon by MSc. Biomedical Sciences students Saif Hasmani and Shivakiran Alva. They aim to solve challences in tree data collection for carbon",
    },
    Conceptualization: {
      image: "/images/ghg-services.gif",
      year: "2023",
      month: "August",
      description:
        "NatureMark Systems is officially incorporated under DPIIT, Government of India, with a focus on carbon sequestration analysis and carbon credit verification, expanding ArborTag's technology into a broader corporate sustainability framework..",
    },
    Formation: {
      image: "/images/carbon-credit-services.gif",
      year: "2024",
      month: "January",
      description:
        "The first ArborTag prototype is successfully tested, signaling a major product milestone for NatureMark Systems",
    },
    Future: {
      image: "/images/carbon-trading-services.gif",
      year: "2024",
      month: "Mid",
      description:
        "Expansion of NatureMark Systems' platform, integrating advanced analytics and emerging technologies like Al for enhancing corporate sustainability reporting.",
    },
  };

  const phases = Object.keys(phaseDetails);

  return (
    <>
      <title>About</title>
      <main className="min-h-screen px-4 md:px-20 py-8 md:py-10">
        {/* Vision and Mission Sections */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-16">
          {/* Vision Section */}
          <article className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-4 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17]">
              Vision
            </h2>
            <p className="text-[#102F17] leading-relaxed text-sm md:text-base">
              NatureMark Systems aims to revolutionize corporate sustainability
              in India by becoming the most trusted partner for seamless,
              technology-driven sustainability reporting. We empower businesses
              to lead with transparency, accountability, and a deep commitment
              to building a more sustainable future.
            </p>
          </article>

          {/* Mission Section */}
          <article className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-4 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17]">
              Mission
            </h2>
            <p className="text-[#102F17] leading-relaxed text-sm md:text-base">
              At NatureMark Systems, our mission is to enable corporates in
              India to navigate the complexities of sustainability reporting
              with ease. We leverage cutting-edge technology and a team of
              experts to deliver accurate, transparent, and actionable insights
              that drive sustainable practices and long-term environmental
              impact.
            </p>
          </article>
        </div>

        {/* History Section */}
        <article className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-4 md:mb-6 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17] text-center">
            History
          </h2>
          <div className="flex flex-wrap justify-center items-center mb-6 md:mb-10 gap-2 md:gap-4">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-center">
                <button
                  className={`px-3 py-1 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-lg transition-all ${
                    selectedPhase === phase
                      ? "bg-green-800 text-white"
                      : "bg-[#B0C4B1] text-[#102F17]"
                  }`}
                  onClick={() => setSelectedPhase(phase)}
                >
                  {phase}
                </button>
                {index < phases.length - 1 && (
                  <span className="text-green-900 mx-1 md:mx-2">
                    <GoChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Selected Phase Image with Hover Overlay */}
          <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="group relative overflow-hidden rounded-xl shadow-md">
              <img
                src={phaseDetails[selectedPhase].image}
                alt={selectedPhase}
                className="w-full h-48 md:h-64 object-cover rounded-xl transition-all duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex flex-col bg-black/70 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 text-center">
                  {phaseDetails[selectedPhase].year}
                </h3>
                <p className="text-white text-sm md:text-base text-center mb-2 md:mb-4">
                  {phaseDetails[selectedPhase].month}
                </p>
                <div className="text-white text-xs md:text-sm text-center leading-tight md:leading-normal">
                  {phaseDetails[selectedPhase].description}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
