"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

export default function CarbonTrading() {
 const [activeIndex, setActiveIndex] = useState(null);
 const [animateIndex, setAnimateIndex] = useState(null);

 const benefits = [
   {
     text: "Regulatory Compliance",
     details: "Meet evolving environmental regulations and avoid penalties.",
   },
   {
     text: "Cost Savings",
     details: "Optimize resource use, reduce emissions, and unlock financial benefits.",
   },
   {
     text: "Strategic Insights",
     details: "Gain valuable data to inform sustainable business decisions.",
   },
   {
     text: "Enhanced Reputation",
     details: "Boost brand image and attract environmentally conscious customers.",
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
     <title>Carbon Trading</title>
     <div className="relative overflow-hidden">
       {/* Background Image */}
       <div
         className="absolute bottom-0 right-0 w-full h-full pointer-events-none hidden md:block"
         style={{
           backgroundImage:
             "url('/images/carbon-trading/background-services.svg')",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "bottom right",
           backgroundSize: "30%",
           zIndex: 0,
         }}
       ></div>

       {/* Header Section */}
       <div className="relative z-10">
         <img
           src="/images/carbon-trading/trading-header.svg"
           alt="Background with gears and nature"
           className="w-full object-cover"
         />
       </div>

       {/* Content Section */}
       <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
         {/* Heading */}
         <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
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
                     <span className="text-[#102F17] text-sm md:text-lg font-bold">
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
                   <div className="mt-2 pl-10 text-[#102F17] font-medium text-sm md:text-lg">
                     {benefit.details}
                   </div>
                 )}
               </li>
             );
           })}
         </ul>

         {/* Logos Section */}
         <div className="mt-12 flex justify-center py-44 items-center">
           {/* <div className="flex flex-col items-center p-6">
             <img
               src="/images/ghg-reporting/ghg-protocol.svg"
               alt="GHG Protocol"
               className="w-48 mb-4"
             />
           </div> */}
         </div>
       </div>
     </div>
   </>
 );
}