import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/llogo.png";

const FooterLink = [
  { id: 1, title: "Home", link: "/#" },
  { id: 2, title: "About", link: "/#about" },
  { id: 3, title: "Contact", link: "/#contact" },
  { id: 4, title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 ml-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="flex justify-center md:justify-start mb-5"
            >
              <img src={Logo} alt="Company Logo" className="w-36" />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-gray-600 leading-relaxed mb-6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae voluptatum.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex justify-center md:justify-start"
            >
              <button class="animated-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text">E N T R Y</span>
                <span class="circle"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {FooterLink.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="text-gray-600 hover:text-green-600 transition"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Contact Us
            </h2>
            <div className="space-y-2 text-gray-600 mb-6">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>contact@company.com</p>
              <p>(123) 456-7890</p>
            </div>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl text-gray-600 hover:text-pink-600 transition" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl text-gray-600 hover:text-blue-600 transition" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-800 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        data-aos="zoom-out"
        data-aos-delay="200"
        className="bg-gray-100 py-4"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p className="mb-2 md:mb-0">© 2025 All rights reserved Inc.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Accessibility
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
