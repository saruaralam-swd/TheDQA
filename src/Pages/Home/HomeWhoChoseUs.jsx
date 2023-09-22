import React from "react";
import img from "../../assets/HomePage/HomeWhoChoseUs.png";
import talkIcon from "../../assets/HomePage/customer-service.png";
import DocumentIcon from "../../assets/HomePage/document.png";
import ClockIcon from "../../assets/HomePage/clock.png";
import "./SlideCss/HomeServices.css";
import { useLocation } from "react-router-dom";

const HomeWhoChoseUs = () => {
  const location = useLocation();

  const ServiceArray = [
    {
      _id: 1,
      title: "Top Customer Services",
      des: "We prioritize delivering an exceptional customer experience. Our dedicated customer support team is available around the clock to address your concerns and ensure your satisfaction. Your needs are our top priority, and we go the extra mile to exceed your expectations",
      icon: talkIcon,
    },
    {
      _id: 2,
      title: "Highly Personalized",
      des: "We understand that every client is unique, and one-size-fits-all solutions don't work. Our approach is highly personalized to tailor our services to your specific needs. We take the time to understand your goals and challenges, crafting solutions that align perfectly with your vision",
      icon: DocumentIcon,
    },
    {
      _id: 3,
      title: "Passionate Talent",
      des: "Our team is fueled by passion and driven to excel. We don't just provide services; we bring a genuine enthusiasm for what we do. This passion translates into innovative solutions, attention to detail, and a relentless pursuit of excellence in every project we undertake",
      icon: ClockIcon,
    },
    {
      _id: 4,
      title: "Quick Response Team",
      des: "Time is of the essence in today's fast-paced business environment. That's why we've assembled a quick response team that's always ready to spring into action. Whether you have urgent queries or require immediate assistance, our rapid response team ensures that you never face delays in getting the support you need",
      icon: ClockIcon,
    },
  ];

  return (
    <section
      className={
        location.pathname === "/services"
          ? "min-h-[500px] mt-12 mb-32  p-5 md:p-10"
          : "min-h-[500px] my-12  p-5 md:p-10"
      }
    >
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        Who ChoseUs
      </h6>
      <h6>
        <h2 className="text-3xl font-semibold mb-5 text-center">
          Why You Will Give Us Priority
        </h2>
      </h6>

      <div className="md:grid grid-cols-3 ">
        <div className="flex items-center justify-center md:block">
          <img src={img} alt="who chose us img" />
        </div>

        <div className="col-span-2">
          <div
            className={
              location.pathname === "/services"
                ? "md:grid grid-cols-2 gap-4 mb-32"
                : "md:grid grid-cols-2 gap-4"
            }
          >
            {ServiceArray.map((service) => (
              <div key={service._id} className="p-5 bg-gray-100 my-4 md:my-0">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <img className="" src={service.icon} alt="" />
                  </div>
                  <p className="text-sm">{service.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhoChoseUs;
