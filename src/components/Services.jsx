import { Code, Smartphone, Globe, Megaphone, Settings, Paintbrush, PenTool, Search, ChevronRight } from "lucide-react"

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Business Portal Development",
    description:
      "We build mobile-compliant portals using frameworks like WordPress, Drupal, Magento, AngularJS, and more.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Application Development",
    description:
      "From productivity to entertainment, we create Android apps across various domains with exceptional UI/UX.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Website Development",
    description:
      "Visually appealing, SEO-friendly websites with smooth navigation and responsive layouts to attract users.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Connect with customers using social media, email, search engines, mobile apps, and online campaigns.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Custom Software",
    description:
      "Tailored software solutions designed, deployed, and maintained for specific user needs without compromising quality.",
  },
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "Graphic Designing",
    description:
      "Visually engaging content crafted to help brands communicate effectively and connect with their target audience.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "App Design",
    description:
      "Complete UX/UI design solutions from ideation to polished product, ensuring an intuitive and stunning experience.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Top-tier SEO services to help your website rank higher, boost traffic, and increase online visibility.",
  },
]

const Services = () => {
  return (
    <section className="bg-[#f7f5f2] py-24 relative overflow-hidden" id="services">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0061ff] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0061ff] opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-6">Our Services</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Nationwide service, local expertise. We offer the latest software and solutions to our customers.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0061ff] opacity-5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="mb-6 p-3 bg-blue-50 rounded-lg inline-block relative z-10">
                <div className="text-[#0061ff]">{service.icon}</div>
              </div>

              <h3 className="text-xl font-semibold text-[#1e1919] mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>

              <div className="flex items-center text-[#0061ff] font-medium text-sm group-hover:underline relative z-10">
                Learn more <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#0061ff] text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
            View all services
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
