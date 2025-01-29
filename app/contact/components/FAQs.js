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
              Who are we?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
                We are a company dedicated to helping organizations achieve sustainability goals through carbon offsetting, environmental strategies, and carbon credits.
              </p>
            </AccordionContent>
          </AccordionItem>
          <div className="border-b-2 border-[#102F17]"></div>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex items-center text-left text-[#102F17]">
              <FaLeaf className="text-[#102F17] mr-2" />
              What is the Carbon Credit Market?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
                The carbon credit market allows companies and individuals to purchase carbon credits to offset their emissions. These credits are linked to projects that reduce or remove carbon from the atmosphere.
              </p>
            </AccordionContent>
          </AccordionItem>
          <div className="border-b-2 border-[#102F17]"></div>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex items-center text-left text-[#102F17]">
              <FaLeaf className="text-[#102F17] mr-2" />
              Why should you De-Carbonize?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
                De-carbonizing helps mitigate climate change, reduces the negative environmental impact of your business, and can lead to long-term savings through energy efficiency and sustainable practices.
              </p>
            </AccordionContent>
          </AccordionItem>
          <div className="border-b-2 border-[#102F17]"></div>
          <AccordionItem value="item-4">
            <AccordionTrigger className="flex items-center text-left text-[#102F17]">
              <FaLeaf className="text-[#102F17] mr-2" />
              How does being Carbon Net Zero benefit me?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#102F17]">
                Achieving Carbon Net Zero reduces your environmental impact, improves your brand's reputation, and can attract more customers who are environmentally conscious. It also prepares your business for future sustainability regulations.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
