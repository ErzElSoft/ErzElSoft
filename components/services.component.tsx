import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type ServiceItem = {
  tab: string;
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    tab: 'Web Design & Development',
    title: 'Modern Websites',
    description:
      'We’re known for delivering exceptional, custom-built websites tailored to your unique needs. From strategy and design to full-scale development, we handle every aspect—ensuring your online presence is not just live, but truly impactful',
    image: 'floral.jpg',
  },
  {
    tab: 'Mobile Design & Development',
    title: 'Mobile Apps',
    description:
      'Looking to launch a mobile app for your business on Android and iOS? We design intuitive, user-friendly apps that enhance your brand image and drive engagement.',
    image: 'ZaikaMobApp.jpg',
  },
  {
    tab: 'SaaS Application',
    title: 'Scalable Platforms',
    description:
      'From SaaS product design to development, we craft custom web applications that align with your business goals and maximize user acquisition.',
    image: 'Zaika.jpg',
  },
];

type Service = {
  head: string;
  descriptions: React.ReactNode;
};

type Step = {
  iconClass: string;
  title: string;
  description: React.ReactNode;
};

const Service: Service[] = [
  {
    head: 'At ERZEL Soft, our values guide every interaction, enabling us to deliver exceptional user experiences powered by advanced technologies and dedicated support',
    descriptions: (
      <>
        Our dedicated team of innovative designers and developers combines diverse expertise to craft exceptional digital products, websites, brands, mobile applications, multimedia solutions, and beyond—delivering impactful experiences tailored to your vision.
      </>
    ),
  },
];

const steps: Step[] = [
  {
    iconClass: 'fas fa-tasks',
    title: 'Planning & Analysis',
    description: (
      <>
        <strong>Aligning Goals. Shaping Success. </strong> <br /> We collaborate closely with stakeholders to clearly define objectives, gather detailed requirements, and analyze challenges—laying a solid foundation to guide the entire project toward success.
      </>
    ),
  },
  {
    iconClass: 'fas fa-palette',
    title: 'Design & Prototype',
    description: (
      <>
        <strong>Design that Speaks. Prototypes that Perform.</strong>
        <br />
        We visualize your product with stunning UI/UX design and bring it to life through interactive prototypes—bridging the gap between concept and code.
      </>
    ),
  },
  {
    iconClass: 'fas fa-laptop-code',
    title: 'Implementation / Development',
    description: (
      <>
        <strong>From Design to Code—Seamlessly. </strong> <br /> Our development team transforms approved prototypes into fully functional products, focusing on performance, scalability, and precision at every step.
      </>
    ),
  },
  {
    iconClass: 'fas fa-bug',
    title: 'Testing',
    description: (
      <>
        <strong>Tested to Perfection. </strong>
        <br />
        We validate every detail through comprehensive testing to ensure your product runs flawlessly across all devices and scenarios.
      </>
    ),
  },
  {
    iconClass: 'fas fa-rocket',
    title: 'Deployment',
    description: (
      <>
        <strong>Launch with Confidence. </strong> <br /> We handle deployment with precision, ensuring your product goes live smoothly and is fully optimized for real-world use.
      </>
    ),
  },
  {
    iconClass: 'fas fa-cogs',
    title: 'Operation & Maintenance',
    description: (
      <>
        <strong>Built to Last. Backed for the Future. </strong> <br /> We don’t just launch and leave—we support, maintain, and improve your product to meet evolving user and business needs
      </>
    ),
  },
];

const ServiceSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const bgColors = ['bg-white', 'bg-orange-50', 'bg-blue-50'];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 4000); // reset click after 4 seconds so autoplay resumes
  };

  // Auto play effect - switch tabs every 4 seconds unless hovered or clicked
  useEffect(() => {
    if (isHovering || isClicked) return;

    const interval = setInterval(() => {
      setSelectedTab((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering, isClicked]);

  return (
    <section id="services" className="w-full bg-[#f7f9fb] px-12 py-20">
      {/* Top Intro Text */}
      <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="text-gray-900">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="underline decoration-orange-500 underline-offset-4">Delivering</span>{' '}
            the solutions you need — and{' '}
            <span className="underline decoration-orange-500 underline-offset-4">more</span>, through{' '}
            <span className="underline decoration-orange-500 underline-offset-4">forward-thinking</span>{' '}
            services.
          </h2>
        </div>
        <div className="text-gray-700">
          <p className="text-xl md:text-2xl leading-relaxed">
            Whether you're a startup or an established enterprise, your goal is growth — and as a trusted digital
            agency, we craft the tailored roadmap of services you need to achieve success.
          </p>
        </div>
      </div>

      {/* Service Accordion Section */}
      {/* <div className={`${bgColors[selectedTab]} w-full px-6 py-16 rounded-xl shadow-md transition-colors duration-500`}> */}
        <div className= "w-full px-6 py-16 rounded-xl shadow-md transition-colors duration-500">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Left Side - Accordion */}
    <div className="flex flex-col space-y-6">
      {services.map((service, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <div
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer text-2xl font-semibold flex justify-between items-center transition-colors duration-300 mb-2 ${
              selectedTab === index ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
            }`}
          >
            <span>{service.tab}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform transition-transform duration-300 ${
                selectedTab === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              selectedTab === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <div className="text-gray-600 text-sm mt-2 relative">
              {service.description}
              <a
                href="#"
                className="learn-more-link inline-flex items-center justify-end mt-4 w-full text-orange-500 font-semibold cursor-pointer"
              >
                <span className="line-before mr-2"></span>
                Learn More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Side - Animated Content */}
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900">{services[selectedTab].title}</h3>
          <p className="text-gray-600 text-lg">{services[selectedTab].description}</p>
          <img
            src={`${basePath}/images/${services[selectedTab].image}`}
            alt={services[selectedTab].tab}
            className="rounded-xl shadow-lg border border-gray-200 w-full h-auto"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>

<section className="w-full bg-white px-12 py-20 min-h-[600px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side - Sticky */}
        <div className="flex flex-col justify-center md:sticky md:top-24 md:self-start h-fit">
          {Service.map(({ head, descriptions }, index) => (
            <div key={index}>
              <h2 className="text-3xl font-semibold leading-tight mb-6 text-gray-900">{head}</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">{descriptions}</p>
              <button className="self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition">
                Book Consultancy
              </button>
            </div>
          ))}
        </div>

        {/* Right Side - Steps */}
        <div className="relative">
          <div className="relative pl-0 md:pl-12">
            {/* Centered Vertical Line */}
            <span className="hidden md:block absolute left-5 top-0 bottom-0 w-[2px] bg-orange-300"></span>

            {steps.map(({ iconClass, title, description }, i) => (
              <div key={i} className="mb-16 relative transition-all duration-700 transform">
                {/* Step Card with icon + title in flex row */}
                <div className="bg-white p-6 rounded-xl shadow-md md:ml-10 flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Icon */}
                  <i className={`${iconClass} text-orange-500 text-2xl flex-shrink-0`} />

                  {/* Title and Description */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        [class*='transition-all'] {
          transform: translateY(40px);
        }
      `}</style>
    </section>

    </section>
  );
};

export default ServiceSection;
