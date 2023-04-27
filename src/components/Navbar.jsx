import React from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header id="navbar" className="bg-gray-800 md:sticky top:0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl">
            Harsh
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" to="/projects">
            Projects
          </Link>
          <Link className="mr-5 hover:text-white" to="/skills">
            Skills
          </Link>
          <Link className="mr-5 hover:text-white" to="/certifications">
            Certifications
          </Link>
          <Link className="mr-5 hover:text-white" to="/contact">
            Contact Me
          </Link>
        </nav>
        <div className="flex border-box px-2 rounded-xl py-2 bg-white-500 text-lg">
          <a
            href="./resume.pdf"
            download="Harsh_CV"
            style={{ display: "flex", flexDirection: "row" }}
          >
            Download Resume&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            {/* <ArrowDownIcon className="w-4 h-4 ml-1"></ArrowDownIcon> */}
          </a>
        </div>
        <div className="flex border-box px-2 rounded-xl py-2 bg-white-500">
          <a
            href="https://www.linkedin.com/in/harsh-934894124/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-500 fill-current"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/harsh3698" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              style={{ color: "#fff" }}
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Get in touch
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
      </div>
    </header>
  );
}

export default Navbar;
