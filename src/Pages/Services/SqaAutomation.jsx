import React from "react";

const SqaAutomation = () => {
  const sqaAutomationServices = [
    {
      _id: 1,
      title: "Cypress Studio Expertise",
      des: "Our team has in-depth knowledge of Cypress Studio, making us proficient in creating and executing automated tests for your web applications.",
    },
    {
      _id: 2,
      title: "End-to-End Testing",
      des: "We provide end-to-end testing solutions to cover every aspect of your application, ensuring it performs seamlessly across different browsers and platforms.",
    },
    {
      _id: 3,
      title: "Custom Test Script Development",
      des: "Tailored to your specific requirements, we develop custom test scripts that are robust, maintainable, and scalable.",
    },
    {
      _id: 4,
      title: "Continuous Integration",
      des: "We integrate Cypress Studio into your CI/CD pipeline, enabling automated testing throughout the development process.",
    },
    {
      _id: 5,
      title: "Cross-Browser Testing",
      des: "Ensure your application functions flawlessly on various web browsers, including Chrome, Firefox, and Microsoft Edge.",
    },
    {
      _id: 6,
      title: "Responsive Design Testing",
      des: "We validate your application's responsiveness on different devices and screen sizes.",
    },
    {
      _id: 7,
      title: "Accessibility Testing",
      des: "We check the accessibility of your application to ensure it complies with web accessibility standards (WCAG).",
    },
    {
      _id: 8,
      title: "Detailed Reporting",
      des: "Receive comprehensive test reports with actionable insights to identify and rectify issues effectively.",
    },
  ];

  return (
    <section className="bg-[#121316] text-white p-4 md:px-8 pt-5">
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <h6 className="font-xs text-green-500 mb-3 font-semibold">
            QA automation with cypress studio
          </h6>
          <h2 className="text-5xl my-5">
            Let passionate testers <br /> ensure
            <span className="font-bold"> better software delivery</span>
          </h2>
          <p>
            At TheDQA, we offer comprehensive QA Automation services using
            Cypress Studio, a powerful and versatile tool that enhances the
            efficiency and effectiveness of your software testing processes. Our
            team of experienced QA engineers is well-versed in leveraging
            Cypress Studio to deliver high-quality testing solutions, ensuring
            your software is robust and error-free.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          {/* <img src={QABanner} alt="" /> */}
          image coming soon
        </div>
      </div>

      <div className="bg-[#121316] text-white mt-20 ">
        <div class="grid md:grid-cols-3 gap-3">
          {sqaAutomationServices.map((service) => (
            <div
              key={service?._id}
              className="border border-gray-800 rounded-md p-5"
            >
              <h3 class="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SqaAutomation;
