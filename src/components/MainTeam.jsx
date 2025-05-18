import React from "react";
import { motion } from "framer-motion";
import { Users, Linkedin, Facebook, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Brajesh Kumar Jaiswal",
    position: "Co-Founder",
    image: "global/brajesh.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/namrata-universal/",
      facebook: "https://www.facebook.com/namratauniversal01/",
      twitter: "https://twitter.com/NamrataUni",
    },
  },
  {
    name: "Preeti",
    position: "CEO & Founder",
    image: "global/preeti.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/namrata-universal/",
      facebook: "https://www.facebook.com/namratauniversal01/",
      twitter: "https://twitter.com/NamrataUni",
    },
  },
  {
    name: "Saurabh Mahawar",
    position: "Co-Founder",
    image: "global/saurabh.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/namrata-universal/",
      facebook: "https://www.facebook.com/namratauniversal01/",
      twitter: "https://twitter.com/NamrataUni",
    },
  },
];

const MainTeam = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <Users className="text-indigo-600 w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-[#1e1919]">Main Team of Namrata Universal</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Our team comprises passionate individuals from various backgrounds—creative designers,
            meticulous engineers, and skilled marketers—working synergistically to deliver
            innovative solutions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition duration-300 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-100"
              />
              <h3 className="text-xl font-semibold text-[#1e1919]">{member.name}</h3>
              <p className="text-indigo-600 mt-1 mb-3">{member.position}</p>

              <motion.div
                className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  <Twitter size={20} />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTeam;
