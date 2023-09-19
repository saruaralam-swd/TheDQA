import React from "react";
import img from "../../assets/whoChoseUs.png";
import customerService from "../../assets/customer-service.png";
import document from "../../assets/document.png";
import clock from "../../assets/clock.png";
import "./SlideCss/HomeServices.css";

const HomeWhoChoseUs = () => {
  return (
    <section className="min-h-[500px] px-10 py-8">
      <h6 className="font-xs text-green-500 text-center">News Update</h6>
      <h6>
        <h2 className="text-3xl font-semibold mb-5 text-center">
          Blog News & Update
        </h2>
      </h6>

      <div className="md:grid grid-cols-3 ">
        <div className="flex items-center justify-center md:block">
          <img src={img} alt="" />
        </div>

        <div className="col-span-2">
          <div className="md:grid grid-cols-2 gap-4">
            <div className="p-5 bg-gray-100 my-2">
              <div>
                <div className="flex justify-between">
                  <h4 className="text-xl font-semibold">
                    Top Customer Services
                  </h4>
                  <img className="" src={customerService} alt="" />
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, placeat.
                </p>
              </div>
            </div>

            <div className="p-5 bg-gray-100 my-2">
              <div>
                <div className="flex justify-between">
                  <h4 className="text-xl font-semibold">Highly Personalized</h4>
                  <img className="" src={document} alt="" />
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, placeat.
                </p>
              </div>
            </div>

            <div className="p-5 bg-gray-100 my-2">
              <div>
                <div className="flex justify-between">
                  <h4 className="text-xl font-semibold">Passionate Talent</h4>
                  <img className="" src={clock} alt="" />
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, placeat.
                </p>
              </div>
            </div>

            <div className="p-5 bg-gray-100 my-2">
              <div>
                <div className="flex justify-between">
                  <h4 className="text-xl font-semibold">Quick Response Team</h4>
                  <img className="" src={clock} alt="" />
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhoChoseUs;