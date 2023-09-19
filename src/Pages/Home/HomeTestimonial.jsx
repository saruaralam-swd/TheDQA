import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideCss/HomeServices.css";
import userImage from "../../../src/assets/user.jpg";
import icon from "../../../src/assets/icon.jpg";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const HomeTestimonial = () => {
  const slides = [
    {
      _id: 1,
      title: `Social Media Marking`,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
      image: userImage,
      commentIcon: icon,
    },
    {
      _id: 2,
      title: "Content Writing",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
      image: userImage,
      commentIcon: icon,
    },
    {
      _id: 3,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
      image: userImage,
      commentIcon: icon,
    },
    {
      _id: 4,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
      image: userImage,
      commentIcon: icon,
    },
    {
      _id: 5,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
      image: userImage,
      commentIcon: icon,
    },
    {
      _id: 6,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
      image: userImage,
      commentIcon: icon,
    },
    {
      _id: 7,
      title: "Social Media Marking",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident numquam placeat impedit maxime, sit distinctio atque nobis tenetur suscipit debitis.",
      image: userImage,
      commentIcon: icon,
    },
  ];

  return (
    <section className="md:min-h-[450px] px-10 py-8 bg-gray-100">
      <div className="flex justify-between items-center">
        <h6 className="font-xs text-green-500">Testimonial</h6>
        <div className="flex gap-3">
          <span className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm">
            <ArrowLongLeftIcon className="w-5 h-5" />
          </span>
          <span className="bg-gray-100 hover:bg-gray-200 p-3 rounded-sm">
            <ArrowLongRightIcon className="w-5 h-5" />
          </span>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-5">
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
        // navigation={true}
        freeMode={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Navigation, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide
            className="bg-white pl-5 pr-20 md:px-5 py-4 rounded-md"
            key={slide._id}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="w-9">
                  <img
                    className="w-full rounded-full"
                    src={slide.image}
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{slide.title}</h4>
                  <p className="text-xs text-orange-500">Developer</p>
                </div>
              </div>

              <div className="w-10">
                <img className="w-full" src={slide.commentIcon} alt="" />
              </div>
            </div>

            <p className="my-4">{slide.text}</p>
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
