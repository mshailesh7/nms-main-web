import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

export default function FAQs() {
  return (
    <div className="p-6 sm:p-10 m-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#102F17] mb-6">
        Frequently Asked Questions (FAQ's)
      </h1>
      <div className="bg-[#B0C4B1] p-4 rounded-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center text-left text-[#102F17]">
              <FaLeaf className="text-[#102F17] mr-2" />
              What is carbon offsetting?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
              Carbon offsetting is compensating for your carbon emissions by funding projects that reduce or remove an equivalent amount of CO2 from the atmosphere, like reforestation or renewable energy initiatives.
              </p>
            </AccordionContent>
          </AccordionItem>
          <div className="border-b-2 border-[#102F17]"></div>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex items-center text-left text-[#102F17]">
              <FaLeaf className="text-[#102F17] mr-2" />
              What is a carbon credit market?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
              A carbon credit market is a trading system where carbon credits (certificates representing 1 ton of CO2 reduced/removed) can be bought and sold. These carbon credits can then be retired to offset the emissions by an organization.
              </p>
            </AccordionContent>
          </AccordionItem>
          <div className="border-b-2 border-[#102F17]"></div>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex items-center text-left text-[#102F17]">
              <FaLeaf className="text-[#102F17] mr-2" />
              Why should you de carbonize?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
              Decarbonizing will allow you to reduce operational costs while meeting growing regulatory standards. As carbon regulations evolve, beginning your de-carbonization journey early will prepare you for future carbon pricing.
              </p>
            </AccordionContent>
          </AccordionItem>
          <div className="border-b-2 border-[#102F17]"></div>
          <AccordionItem value="item-4">
            <AccordionTrigger className="flex items-center text-left text-[#102F17]">
              <FaLeaf className="text-[#102F17] mr-2" />
              How does being Carbon neutral benefit me?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
              Being Carbon neutral will enhance your brand value and solidify customer trust giving you a competitive advantage in an environmentally conscious market. Mitigating risks against future regulations and the potential of new business opportunities in sustainability markets are other major benefits of going carbon neutral.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
