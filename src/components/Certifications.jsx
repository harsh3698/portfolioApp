import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { certifications } from "../data";
import Navbar from "./Navbar";

function Certifications() {
  return (
    <div style={{ height: "150vh" }}>
      <section id="certifications">
        <Navbar />
        <div className="container mx-auto px-10 py-10">
          <div className="text-center mb-20">
            <ChipIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Certifications & Papers Published
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              I have undertaken certifications in the field of data science and
              front end web development and also have a research paper published
              under my name
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {certifications.map((certification) => (
              <div key={certification} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center opacity-60 hover:opacity-100">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {certification}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certifications;
