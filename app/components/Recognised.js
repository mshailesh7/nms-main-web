import React from "react";
import Image from "next/image";

export default function Recognised() {
  const logos = [
    {
      title: "Confederation of Indian Industry",
      src: "/images/Group-115.svg",
      alt: "Confederation of Indian Industry logo",
    },
    {
      title: "IISWBM",
      src: "/images/IISWBM-main.svg",
      alt: "IISWBM logo",
    },
  ];

  return (
    <main className="text-center content-item pt-10">
      <h2 className="text-2xl md:text-4xl font-black underline underline-offset-8 decoration-orange-500 text-[#102F17]">
        RECOGNISED BY
      </h2>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-10 items-center mt-10">
        {logos.map((logo, index) => (
          <div key={index} className="text-center w-32 md:w-48">
            <div className="relative w-full h-32 md:h-48">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-2 rounded-md"
              />
            </div>
            <p className="text-lg flex justify-center font-medium text-[#102F17] text-nowrap">
              {logo.title}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
