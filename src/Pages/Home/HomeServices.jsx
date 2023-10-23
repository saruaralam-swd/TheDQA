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
      name: "Customer Support",
      description:
        "Our dedicated team ensures exceptional customer service round the clock, enhancing customer satisfaction and loyalty.",
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
    <section
      className="min-h-[500px] p-5 md:p-10 my-12 border bg-no-repeat bg-cover bg-left-top"
      style={{ backgroundImage: `url(${x})` }}
    >
      <div className="flex justify-between items-center">
        <h6 className="font-xs text-green-500 mb-3 font-semibold">Services</h6>
        <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md">
          View Details
        </button>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold mb-5">
        We Provide Best <br /> Business Process <br />
        Outsourcing (BPO) <br /> Services
      </h2>

      <Swiper
        style={{
          "--swiper-navigation-size": "20px",
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 640,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        freeMode={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Autoplay, Navigation, Keyboard]}
        className="mySwiper"
      >
        {servicesArray.map((service) => (
          <SwiperSlide
            key={service._id}
            className="bg-white px-4 py-5 md:px-8 md:py-5 rounded-md"
          >
            <h4 className="text-xl font-semibold">{service.name}</h4>
            <p className="my-4">{service.description}</p>
            <button className="text-orange-500 bg-gray-200 px-4 py-2">
              Read More
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeServices;
