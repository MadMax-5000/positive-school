"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Heart, Users } from "lucide-react";

const AboutUs = () => {
  const [contactFeedback, setContactFeedback] = useState("");
  const [partnerFeedback, setPartnerFeedback] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Append your Web3Forms passkey
    formData.append("access_key", "bd21ed17-126c-4ebd-90ec-bbac37588d15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        // Set confirmation message and clear the form fields
        if (form.id === "contactForm") {
          setContactFeedback(
            "Thank you for contacting us! Your message has been sent successfully."
          );
        } else if (form.id === "partnerForm") {
          setPartnerFeedback(
            "Thank you for reaching out to us! We will get back to you soon."
          );
        }
        form.reset();
      } else {
        console.error("Submission failed", res);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const moroccanCities = [
    {
      name: "Casablanca",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.19969933974!2d-7.527670799999999!3d33.574163899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd66ea9da873%3A0x7d64f73e6d34e017!2sPOSITIVE%20SCHOOL!5e0!3m2!1sfr!2sma!4v1742983971599!5m2!1sfr!2sma",
    },
    {
      name: "Marrakech",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2584176908904!2d-7.9911375!3d31.6267742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefc6a523a28f%3A0xf10960002d698596!2sLes%20%C3%89toiles%20de%20Jamaa%20El%20Fna!5e0!3m2!1sfr!2sma!4v1742984207690!5m2!1sfr!2sma",
    },
    {
      name: "Fes",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.391386304093!2d-4.978262699999999!3d34.0594799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff5574e93215b%3A0xc0b761761df44e89!2sCentre%20culturel%20les%20%C3%A9toiles%20de%20la%20M%C3%A9dina!5e0!3m2!1sfr!2sma!4v1742984263011!5m2!1sfr!2sma",
    },
    {
      name: "Agadir",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.3377171888083!2d-9.5664149!3d30.3981588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7459f9a0e21%3A0x789eb5ed43add04c!2sCentre%20Culturel%20Les%20%C3%89toiles%20du%20Souss%20Agadir!5e0!3m2!1sfr!2sma!4v1742984300975!5m2!1sfr!2sma",
    },
    {
      name: "Tangier",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.4956161891632!2d-5.811745800000001!3d35.7632001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b80ca24279d23%3A0xa8f24212959ee03c!2z2KfZhNmF2LHZg9iyINin2YTYq9mC2KfZgdmKINmG2KzZiNmFINin2YTYqNmI2LrYp9iyIC0gQ2VudHJlIEN1bHR1cmVsIGxlcyBFdG9pbGVzIGR1IERldHJvaXQ!5e0!3m2!1sen!2sma!4v1749861313333!5m2!1sen!2sma",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold font-robert-medium text-center mb-16 tracking-wide">
          ABOUT US
        </h1>

        {/* Locations Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center font-mono text-gray-300">
            OUR LOCATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moroccanCities.map((city, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-lg overflow-hidden hover:border-white transition-colors duration-300"
              >
                <div className="h-48 w-full map-container">
                  <iframe
                    src={city.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${city.name}`}
                    className="grayscale-map"
                  ></iframe>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-white mr-2" />
                    <h3 className="text-lg font-medium">{city.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="mb-24">
          <h2 className="text-2xl font-semibold mb-12 text-center tracking-tight">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-md focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-md focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-md focus:outline-none focus:border-white transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-zinc-200 transition-colors duration-300"
                >
                  Send Message
                </button>
                {contactFeedback && (
                  <p className="mt-4 text-green-400 text-center">
                    {contactFeedback}
                  </p>
                )}
              </form>
            </div>

            {/* Partner With Us Section */}
            <div className="relative p-8 rounded-lg bg-black subtle-gradient-border">
              <div className="relative z-10">
                <h3 className="text-xl font-medium mb-2">Partner With Us</h3>
                <p className="text-zinc-400 text-sm mb-8">
                  Join our exclusive network of partners
                </p>
                <form id="partnerForm" onSubmit={onSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium mb-2 text-white"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="contactPerson"
                      className="block text-sm font-medium mb-2 text-white"
                    >
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="partnerEmail"
                      className="block text-sm font-medium mb-2 text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="partnerEmail"
                      name="email"
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                  >
                    Become a Partner
                  </button>
                  {partnerFeedback && (
                    <p className="mt-4 text-green-400 text-center">
                      {partnerFeedback}
                    </p>
                  )}
                </form>
                <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                  <p className="text-xs text-zinc-500">
                    Premium partners receive priority support and exclusive
                    benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section className="mb-24 text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-5xl font-semibold text-black mb-4 font-robert-medium">
            SUPPORT OUR MISSION
          </h2>
          <p className="text-gray-900 mb-6 max-w-3xl mx-auto text-2xl tracking-tight font-circular-web mt-10">
            Your support helps us continue our work and make a greater impact.
            Every contribution, big or small, brings us closer to our goals.
          </p>
          <a
            href="https://paypal.me/flackflame?country.x=MA&locale.x=fr_XC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-zinc-900 transition duration-200"
          >
            Donate with PayPal
          </a>
        </section>

        {/* Contact Information */}
        <section className="text-center mb-16 border-t border-zinc-800 pt-16">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-400 text-lg mb-14  mx-auto">
            Have questions or want to work together? Reach out to us!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xl font-light">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-white mr-3" />
              <a
                href="mailto:contact@positivesch2ol.com"
                className="text-zinc-300 hover:text-white transition-colors"
              >
                contact@positivesch2ol.com
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="h-6 w-6 text-white mr-3" />
              <a
                href="tel:+212769372140"
                className="text-zinc-300 hover:text-white transition-colors"
              >
                +212 769 372 140
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* CSS for the subtle gradient border and grayscale maps */}
      <style jsx>{`
        .subtle-gradient-border {
          position: relative;
          border-radius: 0.5rem;
        }
        .subtle-gradient-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 0.5rem;
          padding: 1px;
          background: linear-gradient(
            90deg,
            rgba(100, 100, 255, 0.3),
            rgba(200, 100, 255, 0.3),
            rgba(255, 100, 200, 0.3),
            rgba(100, 100, 255, 0.3)
          );
          background-size: 300% 100%;
          animation: subtleGradient 15s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 0;
        }
        @keyframes subtleGradient {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 300% 0%;
          }
        }
        .map-container {
          position: relative;
          overflow: hidden;
        }
        .grayscale-map {
          filter: grayscale(100%) contrast(1.1) brightness(0.9);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
