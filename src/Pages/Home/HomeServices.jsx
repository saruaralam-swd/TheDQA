import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideCss/HomeServices.css";

const HomeServices = () => {
  const slides = [
    {
      _id: 1,
      title: `Social Media Marking`,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
    },
    {
      _id: 2,
      title: "Content Writing",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
    },
    {
      _id: 3,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
    },
    {
      _id: 4,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
    },
    {
      _id: 5,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
    },
    {
      _id: 6,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
    },
  ];

  return (
    <section className="min-h-[500px] p-5 md:p-10 my-12 border">
      <div className="flex justify-between items-center">
        <h6 className="font-xs text-green-500 mb-3 font-semibold">Services</h6>
        <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md">
          View Details
        </button>
      </div>

      <h2 className="text-3xl font-semibold mb-5">
        We Provide Best <br /> business Process <br />
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
        {slides.map((slide) => (
          <SwiperSlide
            className="bg-white md:px-8 md:py-5 rounded-md"
            key={slide._id}
          >
            <h4 className="text-xl font-semibold">{slide.title}</h4>
            <p className="my-4">{slide.text}</p>
            <button className="text-orange-500 bg-gray-200 px-4 py-2 rounded-md">
              Read More
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeServices;
