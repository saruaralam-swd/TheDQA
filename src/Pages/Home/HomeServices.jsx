import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideCss/HomeServices.css";
import x from "../../assets/HomePage/HomeServicesBg.webp";

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

  return (
    <section className="min-h-[500px] p-5 md:p-10 my-12 border bg-no-repeat bg-cover bg-left-top">
      <div className="text-center">
        <h6 className="font-xs text-green-500 mb-3 font-semibold">
          Our Services
        </h6>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5">
          We Provide Best Business Process Outsourcing (BPO) Services
        </h2>
        <p>
          Planning and designing your tech solution is just the beginning. With
          our full-scale design and development services, we stay by your side
          till you reach your digital goals and beyond
        </p>
      </div>
    </section>
  );
};

export default HomeServices;
