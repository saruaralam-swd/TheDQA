import React from "react";
import sqaAutomation from "../../assets/Services/web/sqaAutomation.svg";
import underLine from "../../assets/Services/web/secLineShape.svg";
import AllServices from "../../Components/AllServices";

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

  const sqaAutomationServicesBenefits = [
    {
      _id: 1,
      title: "Reduced Manual Testing",
      des: "Automating repetitive tasks with Cypress Studio reduces the need for manual testing, saving time and resources.",
    },
    {
      _id: 2,
      title: "Faster Releases",
      des: "Speed up your development process with automated testing, enabling faster and more frequent software releases.",
    },
    {
      _id: 3,
      title: "Improved Test Coverage",
      des: "Comprehensive test suites ensure that all critical functionality is thoroughly tested.",
    },
    {
      _id: 4,
      title: "Cost-Effective",
      des: "Automated testing reduces long-term testing costs and improves the overall quality of your software.",
    },
    {
      _id: 5,
      title: "Higher Quality Assurance",
      des: "Catch and fix bugs early in the development cycle, leading to a more stable and reliable product.",
    },
    {
      _id: 6,
      title: "Proven Expertise",
      des: "Our QA engineers have a strong track record in QA automation, specifically with Cypress Studio.",
    },
    {
      _id: 7,
      title: "Tailored Solutions",
      des: "We customize our services to meet your unique testing requirements.",
    },
    {
      _id: 8,
      title: "Continuous Support",
      des: "We offer ongoing support and maintenance to keep your automated tests up to date.",
    },
    {
      _id: 9,
      title: "Client-Centric Approach",
      des: "Your success is our priority, and we work closely with you to achieve your testing goals.",
    },
  ];

  return (
    <section className="bg-[#121316] text-white ">
      <div className="md:flex md:px-8 pt-5">
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

        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-2/3" src={sqaAutomation} alt="" />
        </div>
      </div>

      <div className="bg-[#121316] text-white mt-20 p-4 md:px-8 pt-5">
        <h2 className="text-center text-3xl mb-3">Our Key Features</h2>

        <div className="flex justify-center mb-8">
          <img src={underLine} alt="" />
        </div>

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

      <div className="bg-[#121316] text-white mt-20 p-4 md:px-8 py-5">
        <h2 className="text-center text-3xl mb-3">Benefits</h2>

        <div className="flex justify-center mb-8">
          <img src={underLine} alt="" />
        </div>

        <div class="grid md:grid-cols-3 gap-3">
          {sqaAutomationServicesBenefits.map((service) => (
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

      <AllServices />
    </section>
  );
};

export default SqaAutomation;
