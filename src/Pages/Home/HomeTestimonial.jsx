import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideCss/HomeServices.css";
import userImage from "../../../src/assets/HomePage/user.jpg";
import icon from "../../../src/assets/HomePage/icon.jpg";
import { StarIcon } from "@heroicons/react/24/solid";

const HomeTestimonial = () => {
  const clientFeedback = [
    {
      _id: 1,
      name: "John Smith",
      position: "CEO",
      feedback:
        "Exceptional service! Our collaboration with Creative Solutions Co. has been a game-changer. Their team's dedication, expertise, and quick response",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 2,
      name: "Alice Johnson",
      position: "Founder",
      feedback:
        "Incredible support! GlobalTech Ventures exceeded our expectations. They've streamlined our operations and delivered outstanding results.",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 3,
      name: "David Miller",
      position: "CTO",
      feedback:
        "Impressive solutions! Precision Analytics Inc. stands out with their innovative approach. Their tech support team swiftly resolves issues, ensuring smooth operations.",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 4,
      name: "Sarah Davis",
      position: "COO",
      feedback:
        "Highly efficient! Quantum Services Ltd. has been a key partner in optimizing our processes. Their dedication and market research insights have been invaluable.",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 5,
      name: "Michael Johnson",
      position: "VP of Technology",
      feedback:
        "Game-changing collaboration! Nexus Innovations Group provides top-tier tech support and strategic guidance. Their solutions have given us a significant competitive edge",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 6,
      name: "Emily White",
      position: "Product Manager",
      feedback:
        "Continual excellence! Stellar Solutions Corp. offers invaluable support, from market insights to efficient task management. An indispensable partner !",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 7,
      name: "James Brown",
      position: "CFO",
      feedback:
        "Efficient and reliable! ProData Systems streamlined our financial records, allowing us to focus on strategic initiatives. A pleasure to work with!",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 8,
      name: "Sophia Clark",
      position: "Marketing Director",
      feedback:
        "Significant impact! Visionary Enterprises has driven lead generation and conversion rates. Their expertise is evident, making them an invaluable part of our team!",
      profileImage: userImage,
      commentIcon: icon,
    },

    {
      _id: 9,
      name: "Daniel Turner",
      position: "HR Manager",
      feedback:
        "Unparalleled support! InnovateX Technologies provides smooth operations with virtual assistants and tech support. Highly recommended for HR solutions!",
      profileImage: userImage,
      commentIcon: icon,
    },
    {
      _id: 10,
      name: "Olivia Martinez",
      position: "Content Manager",
      feedback:
        "Reliable and innovative! InnovateX Technologies maintains a safe online environment with their content moderation services. Their dedication to quality !",
      profileImage: userImage,
      commentIcon: icon,
    },
  ];

  return (
    <section className="md:min-h-[450px] p-5 md:p-10 py-12 bg-[#191A1D]">
      <h6 className="font-xs text-[#00FF85] mb-3 font-semibold">Testimonial</h6>

      <h2 className="text-3xl font-semibold mb-5 text-white">
        What Client's Say About of Us
      </h2>

      <Swiper
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
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        freeMode={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Navigation, Keyboard, Autoplay]}
        className="mySwiper h-[250px]"
      >
        {clientFeedback.map((client) => (
          <SwiperSlide
            className="bg-[#1b1c20] hover:bg-[#202124] text-white border border-gray-700 pl-5 pr-20 md:px-5 py-4 rounded-md"
            key={client._id}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="w-9">
                  <img
                    className="w-full rounded-full"
                    src={client.profileImage}
                    alt="client profile image"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{client.name}</h4>
                  <p className="text-xs text-orange-500">{client.position}</p>
                </div>
              </div>

              <div className="w-10">
                <img className="w-full" src={client.commentIcon} alt="" />
              </div>
            </div>

            <p className="my-4">{client.feedback}</p>
            <StarIcon className="w-4 h-4 text-green-500 inline-block" />
            <StarIcon className="w-4 h-4 text-green-500 inline-block" />
            <StarIcon className="w-4 h-4 text-green-500 inline-block" />
            <StarIcon className="w-4 h-4 text-green-500 inline-block" />
            <StarIcon className="w-4 h-4 text-green-500 inline-block" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeTestimonial;
