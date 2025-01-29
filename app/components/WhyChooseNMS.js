"use client";
import React from 'react';
import { Card } from './ui/card';

export default function WhyChooseNMS(){
  const benefits = [
    {
      title: "Expertise in Sustainability Frameworks",
      description: "Deep knowledge of GHG Protocol, Verra, BRSR, GRI, and SASB standards ensures your reporting meets global and regional requirements",
      position: "left-32 top-10"
    },
    {
      title: "Financial Benefits",
      description: "Unlock revenue through carbon credits and attract investment with strong ESG performance",
      position: "right-32 top-10"
    },
    {
      title: "Customized Solutions",
      description: "Tailored strategies and services align with your organization's unique sustainability goals for maximum impact",
      position: "left-32 top-1/4"
    },
    {
      title: "Data-Driven Insights",
      description: "Accurate data collection and analysis provide comprehensive insights for reducing emissions and improving operations",
      position: "right-32 top-1/4"
    },
    {
      title: "Commitment to Quality",
      description: "High standards in reporting, data accuracy, and transparency ensure reliable and impactful sustainability outcomes",
      position: "left-32 top-1/2"
    },
    {
      title: "Enhanced Stakeholder Engagement",
      description: "Communicate your sustainability achievements clearly to investors, customers, and other stakeholders, building trust and credibility",
      position: "right-32 top-1/2"
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive assistance from initial assessment and data collection to carbon credit trading and ongoing compliance",
      position: "left-32 bottom-10"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure guidance and stay informed on environmental regulations, avoiding penalties and maintaining a positive reputation",
      position: "right-32 bottom-10"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-16 tracking-tight">
        WHY TO CHOOSE <span className="text-green-500">NMS</span> ?
      </h1>
      
      <div className="relative min-h-[800px]">
        {/* Center illustration */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-green-50/50 rounded-lg flex items-center justify-center">
            <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Person with chart/screen illustration */}
              <rect x="60" y="40" width="80" height="100" rx="4" fill="#E5E7EB"/>
              <path d="M90 80 L110 60 L130 90 L150 70" stroke="#22C55E" strokeWidth="2"/>
              <rect x="85" y="140" width="30" height="50" fill="#4B5563"/>
              <circle cx="100" cy="30" r="15" fill="#4B5563"/>
              <path d="M70 90 L80 100 L90 80" stroke="#22C55E" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Benefit boxes */}
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`absolute ${benefit.position} w-80`}
          >
            <Card className="bg-green-50/70 border-0 p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{benefit.description}</p>
            </Card>
          </div>
        ))}

        {/* Connector lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#22C55E" strokeWidth="1" fill="none">
            {benefits.map((_, index) => (
              <line
                key={index}
                x1="50%"
                y1="50%"
                x2={index % 2 === 0 ? "30%" : "70%"}
                y2={`${(index + 1) * 12.5}%`}
                className="opacity-90"
                strokeDasharray="4 4"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};
