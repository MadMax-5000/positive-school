"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Heart, Users } from "lucide-react"

const AboutUs = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [partnerForm, setPartnerForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
  })

  const [donationAmount, setDonationAmount] = useState("")

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    })
  }

  const handlePartnerChange = (e) => {
    setPartnerForm({
      ...partnerForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", contactForm)
    // Add your form submission logic here
    setContactForm({ name: "", email: "", message: "" })
  }

  const handlePartnerSubmit = (e) => {
    e.preventDefault()
    console.log("Partner form submitted:", partnerForm)
    // Add your form submission logic here
    setPartnerForm({ companyName: "", contactPerson: "", email: "", phone: "" })
  }

  const moroccanCities = [
    {
      name: "Casablanca",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72692335998!2d-7.6684884!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1710892872051!5m2!1sen!2sus",
    },
    {
      name: "Marrakech",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54339.98005392755!2d-8.0300025!3d31.6294723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1710892872051!5m2!1sen!2sus",
    },
    {
      name: "Rabat",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72692335998!2d-6.8498129!3d33.9715904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1710892872051!5m2!1sen!2sus",
    },
    {
      name: "Fes",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72692335998!2d-5.0081807!3d34.0181246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b484d445777%3A0x10e6aaaeedd802ef!2sFez%2C%20Morocco!5e0!3m2!1sen!2sus!4v1710892872051!5m2!1sen!2sus",
    },
    {
      name: "Tangier",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72692335998!2d-5.8224935!3d35.7594651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sus!4v1710892872051!5m2!1sen!2sus",
    },
    {
      name: "Agadir",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72692335998!2d-9.5981072!3d30.4277547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad8d9b%3A0xbcf8d0b77f5b6e91!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sus!4v1710892872051!5m2!1sen!2sus",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 tracking-tight">About Us</h1>

        {/* Locations Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-12 text-center tracking-tight">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-12 text-center tracking-tight">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-md focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-md focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
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
              </form>
            </div>

            {/* Partner With Us Section - Subtle Gradient Border */}
            <div className="relative p-8 rounded-lg bg-black subtle-gradient-border">
              <div className="relative z-10">
                <h3 className="text-xl font-medium mb-2">Partner With Us</h3>
                <p className="text-zinc-400 text-sm mb-8">Join our exclusive network of partners</p>

                <form onSubmit={handlePartnerSubmit}>
                  <div className="mb-6">
                    <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-white">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={partnerForm.companyName}
                      onChange={handlePartnerChange}
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="contactPerson" className="block text-sm font-medium mb-2 text-white">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={partnerForm.contactPerson}
                      onChange={handlePartnerChange}
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="partnerEmail" className="block text-sm font-medium mb-2 text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="partnerEmail"
                      name="email"
                      value={partnerForm.email}
                      onChange={handlePartnerChange}
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={partnerForm.phone}
                      onChange={handlePartnerChange}
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
                </form>

                <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                  <p className="text-xs text-zinc-500">
                    Premium partners receive priority support and exclusive benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-12 text-center tracking-tight">Support Our Mission</h2>
          <div className="max-w-md mx-auto border border-zinc-800 p-8 rounded-lg">
            <div className="flex items-center justify-center mb-8">
              <Heart className="h-5 w-5 text-white mr-2" />
              <h3 className="text-xl font-medium">Donate Today</h3>
            </div>

            <div className="mb-8">
              <p className="text-center mb-6 text-zinc-400">Choose an amount to donate</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["10", "25", "50", "100", "250", "500"].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setDonationAmount(amount)}
                    className={`py-2 rounded-md transition-colors duration-300 ${
                      donationAmount === amount ? "bg-white text-black" : "border border-zinc-800 hover:border-white"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="mb-6">
                <label htmlFor="customAmount" className="block text-sm font-medium mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">$</span>
                  <input
                    type="number"
                    id="customAmount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full pl-8 px-4 py-2 bg-black border border-zinc-800 rounded-md focus:outline-none focus:border-white transition-colors"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            {/* PayPal Button */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  // Replace with actual PayPal integration
                  console.log(`Donating $${donationAmount}`)
                  alert(
                    `Thank you for your donation of $${donationAmount}! This would redirect to PayPal in a real implementation.`,
                  )
                }}
                className="flex items-center justify-center bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-zinc-200 transition-colors duration-300 w-full"
              >
                Donate with PayPal
              </button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center mb-16 border-t border-zinc-800 pt-16">
          <h2 className="text-2xl font-semibold mb-8 tracking-tight">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 mb-4">
            <div className="flex items-center justify-center">
              <Mail className="h-4 w-4 text-white mr-3" />
              <span className="text-zinc-300">contact@yourcompany.com</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-4 w-4 text-white mr-3" />
              <span className="text-zinc-300">+212 5XX-XXXXXX</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="h-4 w-4 text-white mr-3" />
              <span className="text-zinc-300">partners@yourcompany.com</span>
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
          content: '';
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
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
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
  )
}

export default AboutUs

