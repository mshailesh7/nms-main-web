"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white p-8 rounded-3xl shadow-md mx-auto">
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-bold mb-2">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your first name here"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full p-3 rounded-md ${firstName ? "bg-white border-green-800" : "bg-[#B0C4B1]"} placeholder-[#102F17] border-2 focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your last name here"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full p-3 rounded-md ${lastName ? "bg-white border-green-800" : "bg-[#B0C4B1]"} placeholder-[#102F17] border-2 focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">
            Company Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your company name here"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={`w-full p-3 rounded-md ${companyName ? "bg-white border-green-800" : "bg-[#B0C4B1]"} placeholder-[#102F17] border-2 focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">
            Company Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your company email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 rounded-md ${email ? "bg-white border-green-800" : "bg-[#B0C4B1]"} placeholder-[#102F17] border-2 focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">
            Phone No.<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter your phone no. here"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full p-3 rounded-md ${phone ? "bg-white border-green-800" : "bg-[#B0C4B1]"} placeholder-[#102F17] border-2 focus:outline-none`}
          />
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">
            How can we help you be more sustainable?
          </label>
          <div className="space-y-2">
            <div>
              <input type="checkbox" id="option1" className="mr-2" />
              <label htmlFor="option1">Option 1</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option2"
                className="mr-2 bg-green-900"
              />
              <label htmlFor="option2">Option 2</label>
            </div>
            <div>
              <input type="checkbox" id="option3" className="mr-2 peer" />
              <label htmlFor="option3">Option 3</label>
            </div>
            <div>
              <input type="checkbox" id="option4" className="mr-2 peer" />
              <label htmlFor="option4">Option 4</label>
            </div>
            <div>
              <input type="checkbox" id="option5" className="mr-2 peer" />
              <label htmlFor="option5">Option 5</label>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">
            Tell us more!
          </label>
          <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full p-3 rounded-md ${message ? "bg-white border-green-800" : "bg-[#B0C4B1]"} placeholder-[#102F17] h-32 border-2 focus:outline-none`}
          ></textarea>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-green-900 text-white text-lg font-semibold hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
