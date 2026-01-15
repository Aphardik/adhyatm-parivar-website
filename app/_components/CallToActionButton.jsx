"use client"
import Link from "next/link";
import React from "react";
import HexagonalSvg from "./HexagonalSvg";

const CallToActionButton = ({ heading, content, id, href }) => {
  return (
    <div className="bg-gradient-to-r  from-maroon to-maroon/80 text-whitey shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden p-8 sm:p-12">
      {/* Header */}
      <HexagonalSvg accentColor="rgba(255,255,255,0.1)" />

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-4 sm:gap-6 max-w-7xl mx-auto items-center relative z-10">
        {/* Text Content - 8 columns */}
        <div className="col-span-12 lg:col-span-8">
          <h3 className="text-xl text-center sm:text-2xl font-bold font-heading text-white py-3 px-4 ">
            {heading}
          </h3>
          {content && (
            <div className=" rounded-lg p-4 sm:p-6  border-yellow-200">
              <p className="font-medium text-white  text-center text-base sm:text-lg leading-relaxed">
                {content}
              </p>
            </div>
          )}
        </div>

        {/* Button Section - 4 columns */}
        <div className="col-span-12 flex items-center justify-center lg:col-span-4">
          <div className="text-center lg:text-left">
            <Link
              href={href}
              // target="_blank"
              rel="noopener noreferrer"
              className="bg-whitey font-body text-maroon font-bold py-3 px-8 rounded-4xl shadow-sm transition-all duration-300 transform hover:shadow-xl text-lg inline-flex items-center gap-2"
            >
              {/* Show SVG only if NOT book-cta */}
              {id !== "books-cta" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-..." />
                </svg>
              )}

              {id == "books-cta" ? "देखें →" : "संपर्क करें"}
            </Link>


          </div>
        </div>
      </div>

      {/* Bottom highlight bar */}
    </div>
  );
};

export default CallToActionButton;
