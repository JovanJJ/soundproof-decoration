import React from 'react';
import { RevealUp } from './ui/MotionWrappers';

const features = [
  "Modern Minimal Design",
  "Easy Installation",
  "Acoustic Comfort",
  "Premium Materials"
];

export default function Trust() {
  return (
    <div className="w-full py-12 bg-[#C08552]/5 border-y border-[#C08552]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <RevealUp key={index} delay={index * 0.1}>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#C08552] to-[#C1785A] flex items-center justify-center p-1.5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base tracking-wide">
                  {feature}
                </span>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </div>
  );
}
