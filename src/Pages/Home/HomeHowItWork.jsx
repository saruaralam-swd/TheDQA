import React from "react";
import img from "../../../src/assets/HowToWork.webp";

const HomeHowItWork = () => {
  return (
    <section className="min-h-[600px] px-10 py-8">
      <div className="md:grid grid-cols-2">
        {/* left */}
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

            <div className="flex gap-5">
              <div>
                <div className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold">
                  1
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold text-xl">
                  Tell us About Your Ideal Assistant
                </h5>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque illo provident quod, unde aspernatur nostrum!
                </p>
              </div>
            </div>

            <div className="flex gap-5 my-5">
              <div>
                <div className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold">
                  2
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold text-xl">
                  Meet & Approval Your Assistant
                </h5>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque illo provident quod, unde aspernatur nostrum!
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                <div className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold">
                  3
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold text-xl">Launch And Track</h5>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque illo provident quod, unde aspernatur nostrum!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
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
