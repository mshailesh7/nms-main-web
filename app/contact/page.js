import React from "react";
import ContactForm from "./components/ContactForm";
import ConnectWithUs from "./components/ConnectWithUs";
import FAQs from "./components/FAQs";

export default function Page() {
  return (
    <>
    <title>Contact Us</title>
    <div className="p-6 navbar-md:p-10 flex flex-col items-center justify-center">
      <h2 className="text-4xl navbar-md:text-5xl mt-4 mb-4 font-black underline underline-offset-8 decoration-orange-500 text-[#102F17] text-center">
        Contact Us
      </h2>

      <div className="flex mt-4 flex-col navbar-md:flex-row navbar-md:gap-10 w-full">
        {/* Left Section: Connect With Us and FAQ */}
        <div className="flex flex-col navbar-md:w-1/2 space-y-10">
          <div className="w-full">
            <ConnectWithUs />
          </div>
          <div className="w-full">
            <FAQs />
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="navbar-md:w-1/2 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
    </>
  );
}
