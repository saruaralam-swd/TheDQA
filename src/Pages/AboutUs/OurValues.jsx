import React from "react";

const OurValues = () => {
  const ourValues = [
    {
      _id: 1,
      title: "Innovations",
      des: "We foster innovation by continually exploring new ideas and technologies to improve our services and solutions.",
    },
    {
      _id: 2,
      title: "Integrity",
      des: "Our business is built on trust, transparency, and ethical practices. ",
    },
    {
      _id: 3,
      title: "Quality",
      des: "We are dedicated to delivering top-quality work that exceeds our client’s expectations. ",
    },
    {
      _id: 4,
      title: "Collaboration",
      des: "We believe that the best results come from working together with our clients as true partners.",
    },
    {
      _id: 5,
      title: "Commitment",
      des: "We are committed to the success of startups and strive to support them in achieving their goals. ",
    },
  ];

  return (
    <section className="bg-[#121316] text-white border-2 border-green-500 my-10 p-5">
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        Our Values
      </h6>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
        Employee benefits & compensations
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ourValues.map((value) => (
          <div
            key={value._id}
            className=" bg-[#191a1d] hover:bg-[#25262b] transition-all duration-200 p-5 rounded-md"
          >
            <h4 className="text-xl font-semibold mb-5">{value.title}</h4>
            <p className="text-sm">{value.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
