import React from "react";
import { Link } from "react-router-dom";
import { RxPerson, RxCalendar } from "react-icons/rx";
import { BiCommentDots } from "react-icons/bi";
import newsUpdateLeft from "../../assets/HomePage/newsUpdateLeft.webp";
import people1 from "../../assets/HomePage/people-1.webp";
import people2 from "../../assets/HomePage/people-2.webp";
import people3 from "../../assets/HomePage/people-3.webp";
import "./SlideCss/HomeServices.css";

const HomeNewsUpdate = () => {
  return (
    <section className="px-10 py-8">
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        News Update
      </h6>
      <h6>
        <h2 className="text-3xl font-semibold mb-5 text-center">
          Blog News & Update
        </h2>
      </h6>

      <div className="md:grid grid-cols-2 gap-5">
        {/* left side news update */}
        <div className="border border-gray-100 rounded-sm  custom-shadow p-3 space-y-3 mb-10 md:mb-0">
          <img
            src={newsUpdateLeft}
            className="w-full object-cover border"
            alt="Customer support image "
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <RxPerson className="w-4 h-4 text-green-500" />
              <p className="text-xs">By John</p>
            </div>
            <div className="flex items-center gap-1">
              <RxCalendar className="w-4 h-4 text-green-500" />
              <p className="text-xs">16 April</p>
            </div>
            <div className="flex items-center gap-1">
              <BiCommentDots className="w-4 h-4 text-green-500" />
              <p className="text-xs">3 Comments</p>
            </div>
          </div>
          <h5 className="text-xl font-semibold">
            Why You Need Business Process Outsourcing (BPO) for Your Company
          </h5>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
            temporibus.
          </p>
          <p>
            <Link className="text-orange-500 font-bold">Read More</Link>
          </p>
        </div>

        {/* Right side news update */}
        <div>
          <div className="grid grid-cols-4 custom-shadow border rounded-sm p-1">
            <img src={people1} className="w-full" alt="image" />
            <div className="col-span-3 p-2 space-y-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <RxPerson className="w-4 h-4 text-green-500" />
                  <p className="text-xs">By John</p>
                </div>
                <div className="flex items-center gap-1">
                  <RxCalendar className="w-4 h-4 text-green-500" />
                  <p className="text-xs">16 April</p>
                </div>
                <div className="flex items-center gap-1">
                  <BiCommentDots className="w-4 h-4 text-green-500" />
                  <p className="text-xs">3 Comments</p>
                </div>
              </div>

              <h5 className="font-semibold">
                10 Things to Outsource To a Busness Process Outsourcing (BPO)
              </h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <Link className="text-orange-500 font-bold">Read More</Link>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 custom-shadow border rounded-sm p-1 my-5">
            <img src={people2} className="w-full " alt="image" />
            <div className="col-span-3 p-2 space-y-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <RxPerson className="w-4 h-4 text-green-500" />
                  <p className="text-xs">By Jeason</p>
                </div>
                <div className="flex items-center gap-1">
                  <RxCalendar className="w-4 h-4 text-green-500" />
                  <p className="text-xs">18 April</p>
                </div>
                <div className="flex items-center gap-1">
                  <BiCommentDots className="w-4 h-4 text-green-500" />
                  <p className="text-xs">7 Comments</p>
                </div>
              </div>

              <h5 className="font-semibold">
                5 work flow Automation Tips for Your Team
              </h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <Link className="text-orange-500 font-bold">Read More</Link>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 custom-shadow border rounded-sm p-1">
            <img src={people3} className="w-full" alt="image" />
            <div className="col-span-3 p-2 space-y-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <RxPerson className="w-4 h-4 text-green-500" />
                  <p className="text-xs">By Smith</p>
                </div>
                <div className="flex items-center gap-1">
                  <RxCalendar className="w-4 h-4 text-green-500" />
                  <p className="text-xs">20 April</p>
                </div>
                <div className="flex items-center gap-1">
                  <BiCommentDots className="w-4 h-4 text-green-500" />
                  <p className="text-xs">1 Comments</p>
                </div>
              </div>

              <h5 className="font-semibold">
                How to use virtually Assistant effectively
              </h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <Link className="text-orange-500 font-bold">Read More</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsUpdate;
