import React from "react";
import img from "../../assets/HomePage/HomeHowToWork.webp";

const HomeHowItWork = () => {
  const slides = [
    {
      _id: 1,
      title: "Tell us About Your Ideal Assistant",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo provident quod, unde aspernatur nostrum!",
    },
    {
      _id: 2,
      title: "Meet & Approval Your Assistant",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo provident quod, unde aspernatur nostrum!",
    },
    {
      _id: 3,
      title: "Launch And Track",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo provident quod, unde aspernatur nostrum!",
    },
  ];

  return (
    <section className="min-h-[600px] p-5 md:p-10 my-12 border">
      <div className="md:grid grid-cols-2">
        <div className="md:h-[600px] flex items-center">
          <div>
            <h6 className="font-xs text-green-500 mb-3 font-semibold">
              How It Work:
            </h6>
            <h6>
              <h2 className="text-3xl font-semibold my-4">
                How Thief Personalized Approach
              </h2>
            </h6>

            {slides.map((slide, i) => (
              <div className="flex gap-5 my-5">
                <div>
                  <div className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold">
                    {i + 1}
                  </div>
                </div>
                <div className="space-y-1">
                  <h5 className="font-semibold text-xl">{slide.title}</h5>
                  <p className="text-sm">{slide.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mt-10 md:mt-0">
            <img src={img} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWork;
