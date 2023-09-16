import React from "react";

const HomeServices = () => {
  return (
    <section className="min-h-[600px] bg-gray-200 px-10 py-8 border-2 border-orange-900">
      <div className="flex justify-between">
        <h6 className="font-xs text-green-500 mb-3">About Us</h6>
        <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md">
          View Details
        </button>
      </div>

      <h2 className="text-3xl font-semibold">
        We Provide Best <br /> business Process <br />
        Outsourcing (BPO) <br /> Services
      </h2>

      <div className="grid grid-cols-3 gap-3 mt-10">
        <div className="min:h-[200px] bg-white text-black px-8 py-4">
          <h4 className="text-xl font-semibold">Social Media Marking</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            numquam placeat impedit maxime, sit distinctio atque nobis tenetur
            suscipit debitis.
          </p>
          <button className="bg-gray-100 px-4 py-2 rounded-sm">
            Read More
          </button>
        </div>

        <div className="min:h-[200px] bg-white text-black px-8 py-4">
          <h4 className="text-xl font-semibold">Content Writing</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            numquam placeat impedit maxime, sit distinctio atque nobis tenetur
            suscipit debitis.
          </p>
          <button className="bg-gray-100 px-4 py-2 rounded-sm">
            Read More
          </button>
        </div>

        <div className="min:h-[200px] bg-white text-black px-8 py-4">
          <h4 className="text-xl font-semibold">Social Media Marking</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            numquam placeat impedit maxime, sit distinctio atque nobis tenetur
            suscipit debitis.
          </p>
          <button className="bg-gray-100 px-4 py-2 rounded-sm">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
