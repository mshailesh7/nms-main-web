import Image from "next/image";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <main className="bg-[#F1F1F1] min-h-screen relative w-full">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full content-item relative h-[clamp(300px,90vh,900px)]">
          <Image
            src="/images/tree.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Text Positioned at Bottom Left */}
        <div className="absolute bottom-0 left-0 right-0 text-left px-4 py-8 sm:px-6 lg:px-16 lg:py-12">
          <h1 className="font-black content-item text-[#102F17] text-[clamp(1.4rem,5vw,2.8rem)] leading-[1.2] break-words max-w-[90%] md:max-w-[75%]">
            <Typewriter
              words={["Accelerating Sustainable Transformation"]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </h1>
          <p className="mt-2 content-item text-[#102F17] text-[clamp(0.7rem,2vw,1.2rem)] leading-[1.2] break-words max-w-[90%] md:max-w-[75%]">
            We provide eco-friendly engineering solutions for sustainable development
          </p>
          <Button className="bg-orange-500 content-item text-white mt-4 py-3 px-6 text-[clamp(0.875rem,1.5vw,1.25rem)] rounded-lg">
            Go Net Zero!
          </Button>
        </div>
      </div>
    </main>
  );
}
