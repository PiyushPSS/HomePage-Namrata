import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Send,
  Link,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">About Us</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About us",
                "Contact Us",
                "Client",
                "Portfolio",
                "Pricing",
                "Service",
                "Team",
                "Skill",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#0061ff] transition-colors duration-200"
                >
                  <a href="#" className="inline-flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {[
                "Technology",
                "Digital Marketing",
                "SEO Service",
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#0061ff] transition-colors duration-200"
                >
                  <a href="#" className="inline-flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-white mb-2">Head Office:</p>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#0061ff] mt-1 flex-shrink-0" />
                  <p>
                    3C, A1 Sector 10, Noida
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">
                  New Branch Office:
                </p>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#0061ff] mt-1 flex-shrink-0" />
                  <p>
                    2nd floor plot no.-64 Block-F, Sector-8 Noida
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">Branch Office:</p>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#0061ff] mt-1 flex-shrink-0" />
                  <p>
                    Plot No-827 1st Floor Shalimar Garden
                    <br />
                    Extension-1 Ghaziabad, UP
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-[#0061ff] mt-1 flex-shrink-0" />
                <p>+918506922777, +918506944777</p>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-[#0061ff] mt-1 flex-shrink-0" />
                <p>Landline: 01203174973</p>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-[#0061ff] mt-1 flex-shrink-0" />
                <div>
                  <p>Email: info@namratauniversal.com</p>
                  <p>Email: namratauniversal@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Subscription</h3>
            <p className="mb-4">Join Our Newsletter</p>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0061ff] focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0061ff] hover:text-white">
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#0061ff] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#0061ff] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#0061ff] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#0061ff] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8">
              <img src="/images/mainlogo.png" alt="Logo" className="w-10 h-10 mb-2" />
              <h4 className="text-white font-bold text-lg">
                Namrata Universal
              </h4>
              <p className="text-sm mt-2">
                Delivering excellence in IT services and solutions since 2013.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            Copyright © 2025 Namrata Universal All Rights Reserved.
          </p>
          <p className="text-sm mt-2 md:mt-0">
            Design by{" "}
            <a
              href="https://www.instagram.com/__piyush.18_"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#0061ff] transition-colors duration-200"
            >
              Piyush
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
