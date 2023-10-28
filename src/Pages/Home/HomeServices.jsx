import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideCss/HomeServices.css";
import x from "../../assets/HomePage/HomeServicesBg.webp";
import { Link } from "react-router-dom";
import webApplication from "../../assets/Services/app-development.svg";
import mobileApplication from "../../assets/Services/monitor-mobbile.svg";
import qualityAssurance from "../../assets/Services/Quality-Assurance.svg";

const HomeServices = () => {
  const servicesArray = [
    {
      _id: 1,
      name: "1.	Software Development",
      description:
        "a.	Web and Mobile App Development: We specialize in developing web and mobile applications tailored to the unique needs of startups, ensuring innovation and scalability.",
    },
    {
      _id: 2,
      name: "Data Entry and Management",
      description:
        "Streamline data processes, reduce errors, and increase efficiency with our precise data ",
    },
    {
      _id: 3,
      name: "Tech Support",
      description:
        "Solve technical issues swiftly with our expert tech support, keeping your systems and customers running smoothly.",
    },
    {
      _id: 4,
      name: "Virtual Assistance",
      description:
        "Delegate administrative tasks to our skilled virtual assistants, allowing you to focus on core business functions.",
    },
    {
      _id: 5,
      name: "Content Moderation",
      description:
        "Maintain a safe online environment by monitoring and moderating user-generated content.",
    },
    {
      _id: 6,
      name: "Market Research",
      description:
        "Gain valuable insights into market trends, consumer behavior, and competitors through comprehensive market research.",
    },
    {
      _id: 7,
      name: "Order Processing",
      description:
        "Optimize order fulfillment, inventory management, and shipping processes to meet customer demands effectively.",
    },
    {
      _id: 8,
      name: "Finance and Accounting",
      description:
        "Ensure accurate financial records and timely transactions with our proficient finance and accounting services.",
    },
    {
      _id: 9,
      name: "Human Resources Outsourcing",
      description:
        "Simplify HR processes, from recruitment to payroll, to attract and retain top talent.",
    },
    {
      _id: 10,
      name: "Lead Generation",
      description:
        "Generate high-quality leads to fuel your sales pipeline and drive business growth and management services.",
    },
  ];

  const OurServices = [
    {
      _id: 1,
      icon: mobileApplication,
      title: "Web applications",
      des: "Create stunning, fast, and secure web apps tailored to attract & retain your clients and generate new revenue streams with a consistent UI on all platforms",
      target: "",
    },
    {
      _id: 2,
      icon: webApplication,
      title: "Mobile App development",
      des: "State-of-the-art, AI-enabled, robust, and smart software solutions at your disposal where the latest technologies are leveraged for unprecedented organization growth",
      target: "",
    },
    {
      _id: 3,
      icon: qualityAssurance,
      title: "Quality assurance",
      des: "Our QA engineering team makes your product bug-free, bulletproof and performance-driven throughout both automatic and manual testing.",
      target: "",
    },
  ];

  return (
    <section className="min-h-[500px] p-5 md:p-10 my-12 border bg-no-repeat bg-cover bg-left-top bg-[#121316] text-white">
      <div className="text-center">
        <h6 className="font-xs text-[#00FF9F] my-3 font-semibold">
          Our Services
        </h6>
        <h2 className="text-2xl md:text-3xl font-semibold">
          We Provide Best Business Process Outsourcing (BPO) Services
        </h2>
        <p className="text-sm text-[#8d8f98] mt-5 mb-10">
          Planning and designing your tech solution is just the beginning.{" "}
          <br /> With our full-scale design and development services, we stay by
          your side till you reach your digital goals and beyond
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {OurServices.map((service) => (
          <div className="bg-[#1b1c20] hover:bg-[#202124] transition-bg duration-500 rounded-2xl p-7 hover:text-[#00FF9F] flex flex-col justify-between min-h-[280px]">
            <img
              className="w-[50px] h-[50px] mb-5"
              src={service.icon}
              alt={`${service.title} icon`}
            />
            <Link className="text-xl font-semibold inline-block mb-5">
              {service.title}
            </Link>
            <p className="text-sm text-[#8d8f98] h-[100px]">
              {service.des.length > 2000
                ? service.des.slice(0, 3000)
                : service.des}
            </p>
            <Link className="inline-block text-sm">
              View {service?.title}
              <span> > </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
