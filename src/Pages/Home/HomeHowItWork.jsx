import React from "react";
import img from "../../assets/HomePage/HomeHowToWork.webp";

const HomeHowItWork = () => {
  const WorksArray = [
    {
      _id: 1,
      title: "Tell us About Your Ideal Assistant",
      des: "We put you in control from the very beginning. Tell us about your ideal assistant, the skills you require, and your specific needs. We understand that a one-size-fits-all approach doesn't work, so we tailor our services to match your unique criteria.",
    },
    {
      _id: 2,
      title: "Meet & Approval Your Assistant",
      des: "We believe in transparency and trust-building. You have the opportunity to meet and approve your assistant before we kickstart the collaboration. This ensures that you are comfortable with the team member who will be supporting you and that they align with your objectives",
    },
    {
      _id: 3,
      title: "Launch And Track",
      des: "We don't just provide a service; we provide a partnership. We handle the launch process efficiently, making sure everything runs smoothly from day one. Moreover, we offer robust tracking and reporting mechanisms, allowing you to monitor progress, measure results, and make data-driven decisions throughout our collaboration",
    },
  ];

  return (
    <section className="min-h-[600px] p-5 md:p-10 my-12">
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

            {WorksArray.map((work, i) => (
              <div className="flex gap-5 my-5">
                <div>
                  <div className="bg-orange-500 w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-semibold">
                    {i + 1}
                  </div>
                </div>
                <div className="space-y-1">
                  <h5 className="font-semibold text-xl">{work.title}</h5>
                  <p className="text-sm">{work.des}</p>
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
