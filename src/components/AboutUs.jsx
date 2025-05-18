const AboutUs = () => {
  return (
    <div className="py-16 md:py-24 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e1919] leading-tight">
            👋 Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#0061ff]">
              Namrata Universal
            </span>
            , we deliver with a focus on{" "}
            <span className="font-medium">quality, integrity</span>, and
            long-term partnerships.
          </p>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Trusted by the world's best organizations, for 12 years and running,
            it has been delivering smiles to hundreds of IT advisors,
            developers, users, and business owners.
            <br /> <br />
            Our ability to cater to any business segments & needs. Our
            experience enables us create unique products. High volume of our
            work makes us provide value added services with wallet friendly
            charges.
          </p>
          <button className="bg-[#0061ff] text-white font-medium px-5 py-3 rounded-md flex items-center hover:bg-blue-700 mt-4">
            Learn more about us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0061ff] opacity-10 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0061ff] opacity-10 rounded-full"></div>
          <img
            src="global/about.png"
            alt="About Us"
            className="w-full h-[300px] object-cover rounded-lg shadow-xl border border-gray-100 relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
