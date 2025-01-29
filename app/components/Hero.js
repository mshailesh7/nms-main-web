import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <main className="bg-[#F1F1F1] relative">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="w-full content-item relative"
          style={{
            height: "clamp(300px, 90vh, 900px)",
          }}
        >
          <img
            src="/images/tree.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Positioned at Bottom Left */}
        <div
          className="absolute bottom-0 left-0 right-0 text-left px-4 py-8 sm:left-6 lg:left-16 lg:py-12"
        >
          <h1
            className="font-extrabold content-item text-[#102F17]"
            style={{
              fontSize: "clamp(2.5rem, 3vw, 4rem)",
              lineHeight: "1.2",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <Typewriter
              words={["Accelerating Sustainable Transformation"]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </h1>
          <p
            className="mt-2 content-item text-[#102F17]"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              lineHeight: "1",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            We provide eco-friendly engineering solutions for sustainable development
          </p>
          <Button
            className="bg-orange-500 content-item text-white mt-4 p-5"
            style={{
              fontSize: "clamp(0.875rem, 1vw, 1.25rem)",
            }}
          >
            Go Net Zero!
          </Button>
        </div>
      </div>
    </main>
  );
}
