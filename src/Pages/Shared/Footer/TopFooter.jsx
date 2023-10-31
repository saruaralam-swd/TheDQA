import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SiGooglemaps } from "react-icons/si";

const TopFooter = () => {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-7 my-10">
        <div className="bg-[#03082D] p-5 overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <p className="bg-orange-500 p-2 rounded-md">
                <PhoneIcon className="w-5 h-5" />
              </p>
              <div>
                <p className="font-medium">+8801797093279 / +8801719251254</p>
                <p className="text-xs">Give us a call</p>
              </div>
            </div>

            <PhoneIcon className="w-10 h-10 text-[#181C3C] inline-block" />
          </div>
        </div>

        <div className="bg-[#03082D] p-5 overflow-hidden my-5 md:my-0">
          <div className="flex justify-between items-center gap-20">
            <div className="flex items-center gap-4">
              <p className="bg-orange-500 p-2 rounded-md">
                <EnvelopeIcon className="w-5 h-5" />
              </p>
              <div>
                <p className="font-medium">info@thedqa.com</p>
                <p className="text-xs">Drop a line</p>
              </div>
            </div>

            <EnvelopeIcon className="w-10 h-10 text-[#181C3C] inline-block" />
          </div>
        </div>

        <div className="bg-[#03082D] p-5 overflow-hidden">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <p className="bg-orange-500 p-2 rounded-md">
                <SiGooglemaps className="w-5 h-5" />
              </p>
              <div>
                <p className="font-medium">
                  Holding No: 1117-07, Professor Para (Noyapara 3 Matha),
                  Sherpur, Bogura-5840
                </p>
                <p className="text-xs">Bangladesh</p>
              </div>
            </div>

            <SiGooglemaps className="w-10 h-10 text-[#181C3C] inline-block" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFooter;
