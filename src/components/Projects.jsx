import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import Navbar from "./Navbar";

function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font min-h-screen">
      <Navbar/>
      <div className="container px-10 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I have worked on
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Over the course of my career I have worked on various projects some
            of which I have worked on are
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.key}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex-relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-60 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <br/>
        <p className="leading-relaxed">And many more &#128521;</p>
      </div>
    </section>
  );
}

export default Projects;
