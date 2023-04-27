import React, { useState } from "react";
import Navbar from "./Navbar";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <section id="contact" className="relative">
      <Navbar />
      <div
        className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center"
        style={{ height: "100vh" }}
      >
        <div className="flex lg:w-4/5 sm:mb-2 -mx-40">
          <form
            netlify
            onSubmit={handleSubmit}
            name="contact"
            className="lg:ml-60 sm:-ml-10 md:ml-60 container flex flex-col justify-center"
          >
            <br />
            <h2
              className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font"
              style={{ color: "yellow" }}
            >
              Wanna reach out?
            </h2>
            <p className="leading relaxed mb-5 ">
              Want to work on cool projects with me?
              <br /> Please reach out by filling out this form <br />
              and I will revert back within a business day!
            </p>
            {/* <div className="row" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> */}
            <div className="relative mb-4" style={{ width: "100%" }}>
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4" style={{ width: "100%" }}>
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4" style={{ width: "100%" }}>
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              style={{ width: "100%" }}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 sm:w-5/6 sm:min-w-sm">
          <img
            className="object-cover object-center rounded md:hidden hidden md:block"
            alt="hero"
            src="https://preview.redd.it/zyxtnv0lz0061.jpg?auto=webp&s=bc7711e877bb69624c263b74ec1d0828641baeb2"
          ></img>
        </div> */}
      </div>
      {/* <a href="/" className=" flex justify-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">&nbsp;&nbsp;Go to</a> */}
    </section>
  );
}

export default Contact;
