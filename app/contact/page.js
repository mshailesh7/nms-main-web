import React from "react";
import ContactForm from "./components/ContactForm";
import ConnectWithUs from "./components/ConnectWithUs";
import FAQs from "./components/FAQs";

export default function Page() {
  return (
    <>
    <title>Contact Us</title>
    <div className="p-6 navbar-md:p-10 flex flex-col items-center justify-center">

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
