"use client";
import { useState, useEffect, useCallback } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import Image from "next/image";

export default function About() {
  const [selectedPhase, setSelectedPhase] = useState("Ideation");
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  const phaseDetails = {
    Ideation: {
      image: "/images/esg-services.gif",
      details: [
        {
          year: "2023",
          month: "May",
          description:
            "The idea for ArborTag is born during a Healthcare Innovation Hackathon by MSc. Biomedical Sciences students Saif Hasmani and Shivakiran Alva. They aim to solve challenges in tree data collection for carbon measurement.",
        },
        {
          year: "2023",
          month: "June-July",
          description:
            "ArborTag undergoes initial pre-incubation support from DST-TEC,IIC, and AIC-Nitte, developing the concept further with expert guidance and filing a patent for their technology.",
        },
      ],
    },
    Conceptualization: {
      image: "/images/ghg-services.GIF",
      details: [
        {
          year: "2023",
          month: "August",
          description:
            "NatureMark Systems is officially incorporated under DPIIT, Government of India, with a focus on carbon sequestration analysis and carbon credit verification, expanding ArborTag's technology into a broader corporate sustainability framework.",
        },
        {
          year: "2023",
          month: "October",
          description:
            "The company is selected for Wadhwani Lift off Program , marking the beginning of its incubation journey. This stage emphasizes business model development and exploring the market for carbon reporting solutions. ",
        },
        {
          year: "2023",
          month: "November",
          description:
            "NatureMark joins a two-month Agripreneurship Program at NaaVic Agri-Business Incubation Center, ICAR-Nivedi, further refining its product and service offerings.",
        },
      ],
    },
    Formation: {
      image: "/images/carbon-credit-services.GIF",
      details: [
        {
          year: "2024",
          month: "January",
          description:
            "The first ArborTag prototype is successfully tested, signaling a major product milestone for NatureMark Systems.",
        },
        {
          year: "2024",
          month: "February",
          description:
            "Official launch of ArborTag, focusing on carbon sequestration and carbon credit verification, at an event supported by DST-TEC, IIC and NUCSER.",
        },
        {
          month:
            "NatureMark Systems shifts its strategy, deciding to offer a one-stop solution for carbon reporting and sustainability services.",
          description:
            "Introduces key services such as Carbon Credit Consultation,VERRA Registration, BRSR Reporting and CCTS Reporting.",
        },
        {
          month:"Aims to help corporates with comprehensive sustainability and carbon reporting solutions, leveraging their advanced technology and expert team."
        }
      ],
    },
    Future: {
      image: "/images/carbon-trading-services.GIF",
      details: [
        {
          year: "2025",
          month: "Mid",
          description:
            "Expansion of NatureMark Systems' platform, integrating advanced analytics and emerging technologies like AI for enhancing corporate sustainability reporting.",
        },
      ],
    },
  };

  const phases = Object.keys(phaseDetails);

  const handlePhaseChange = useCallback((phase) => {
    setSelectedPhase(phase);
    setDescriptionIndex(0);
  }, []);

  const handleNextDescription = () => {
    setDescriptionIndex(
      (prevIndex) =>
        (prevIndex + 1) % phaseDetails[selectedPhase].details.length
    );
  };

  const handlePrevDescription = () => {
    setDescriptionIndex((prevIndex) =>
      prevIndex === 0
        ? phaseDetails[selectedPhase].details.length - 1
        : prevIndex - 1
    );
  };

  return (
    <>
      <title>About</title>
      <main className="min-h-screen px-4 md:px-20 py-8 md:py-10">
        {/* Vision & Mission Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-16">
          {["Vision", "Mission"].map((section, index) => (
            <article key={index} className="flex-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-4 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17]">
                {section}
              </h2>
              <p className="text-[#102F17] leading-relaxed text-sm md:text-base">
                {section === "Vision"
                  ? "NatureMark Systems aims to revolutionize corporate sustainability in India by becoming the most trusted partner for seamless, technology-driven sustainability reporting."
                  : "At NatureMark Systems, our mission is to enable corporates in India to navigate the complexities of sustainability reporting with ease, leveraging cutting-edge technology and expert insights."}
              </p>
            </article>
          ))}
        </div>
        <article className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-4 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17] text-center">
            History
          </h2>

          {/* Phase Selection */}
          <div className="flex flex-wrap justify-center items-center mb-6 md:mb-10 gap-2 md:gap-4">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-center">
                <button
                  className={`px-3 py-1 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-lg transition-all ${
                    selectedPhase === phase
                      ? "bg-green-800 text-white"
                      : "bg-[#B0C4B1] text-[#102F17]"
                  }`}
                  onClick={() => handlePhaseChange(phase)}
                >
                  {phase}
                </button>
                {index < phases.length - 1 && (
                  <GoChevronRight className="text-green-900 mx-1 md:mx-2 h-4 w-4 md:h-6 md:w-6" />
                )}
              </div>
            ))}
          </div>

          {/* Selected Phase Details */}
          <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="group relative overflow-hidden rounded-xl shadow-md">
              <Image
                src={phaseDetails[selectedPhase].image}
                alt={`${selectedPhase} phase`}
                width={1920}
                height={1080}
                unoptimized
                className="w-full h-48 md:h-64 object-cover rounded-xl transition-all duration-300"
                priority={selectedPhase === "Ideation"}
              />
              <div className="relative inset-0 flex flex-col bg-black/70 items-center justify-center p-4 md:p-6 ">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 text-center">
                  {phaseDetails[selectedPhase].details[descriptionIndex].year}
                </h3>
                <p className="text-white text-sm md:text-base text-center mb-2 md:mb-4">
                  {phaseDetails[selectedPhase].details[descriptionIndex].month}
                </p>
                <GoChevronLeft
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-2xl md:text-3xl"
                  onClick={handlePrevDescription}
                />
                <div className="text-white text-xs md:text-sm text-center leading-tight md:leading-normal mx-8">
                  {
                    phaseDetails[selectedPhase].details[descriptionIndex]
                      .description
                  }
                </div>
                <GoChevronRight
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer text-2xl md:text-3xl"
                  onClick={handleNextDescription}
                />
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
