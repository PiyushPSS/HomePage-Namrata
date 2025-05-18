import { ChevronRight } from "lucide-react";
import Lottie from "react-lottie";
import animationData from "../dotlottie.json"

const defaultOptions = {
      loop: true,
      autoplay: true,

      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

const Hero = () => {
  return (
    <div className="flex flex-col h-[80vh]">
      <main className="flex-1 px-4 pb-12 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm mb-4">
              <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded-full mr-2">
                New
              </span>
              We now create IOS apps for your business 😍
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">
              Create world-class
              <br />
              digital presence with us 🤙
            </h1>
            <p className="text-gray-600 mb-4 max-w-lg">
              We create the best apps and websites tailored for your business
              needs. Our expert team delivers innovative, high-quality digital
              solutions to help you grow, engage your audience, and stand out in
              today's competitive market.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0061ff] text-white font-medium px-5 py-3 rounded-md flex items-center hover:bg-blue-700" onClick={() => {
                window.location.href = "#services";
              }}>
                Check out our services <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="text-[#0061ff] font-medium px-5 py-3 flex items-center hover:underline">
                Reach out to us <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Lottie
              options={defaultOptions}
              width={710}
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
      </main>
      <div className="bg-black mt-4 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
          <div className="flex items-center space-x-3 animate-fade-in-up">
            <span className="bg-blue-700 text-white rounded-full p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div>
              <div
                className="text-white text-3xl font-bold animate-count"
                style={{ animationDelay: "0.1s" }}
              >
                56
              </div>
              <div className="text-gray-300 text-sm">Our Staffs</div>
            </div>
          </div>
          <div
            className="flex items-center space-x-3 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-green-600 text-white rounded-full p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-2a4 4 0 0 0-4-4h-10a4 4 0 0 0-4 4v2A2.5 2.5 0 0 0 5.5 21z" />
              </svg>
            </span>
            <div>
              <div
                className="text-white text-3xl font-bold animate-count"
                style={{ animationDelay: "0.2s" }}
              >
                5200
              </div>
              <div className="text-gray-300 text-sm">Our Clients</div>
            </div>
          </div>
          <div
            className="flex items-center space-x-3 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="bg-yellow-500 text-white rounded-full p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </span>
            <div>
              <div
                className="text-white text-3xl font-bold animate-count"
                style={{ animationDelay: "0.3s" }}
              >
                3811
              </div>
              <div className="text-gray-300 text-sm">Completed Projects</div>
            </div>
          </div>
          <div
            className="flex items-center space-x-3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="bg-red-600 text-white rounded-full p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <div>
              <div
                className="text-white text-3xl font-bold animate-count"
                style={{ animationDelay: "0.4s" }}
              >
                24*7
              </div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
          <style>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
                }
                .animate-count {
                    animation: countup 1.2s ease-in;
                }
                @keyframes countup {
                    from { opacity: 0; transform: scale(0.8);}
                    to { opacity: 1; transform: scale(1);}
                }
            `}</style>
        </div>
      </div>
    </div>
  );
};

export default Hero;
