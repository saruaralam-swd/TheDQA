import React from "react";
import QABanner from "../../assets/Services/web/QualityAssurance.svg";
import AllServices from "../../Components/AllServices";

const SQA = () => {
  const sqaServices = [
    {
      _id: 1,
      title: "Requirement Analysis",
      descriptions: [
        "a. Understand the project requirements, features, and functionalities to be tested.",
        "b. Identify key performance indicators (KPIs) and success criteria.",
      ],
    },
    {
      _id: 2,
      title: "Test Planning",
      descriptions: [
        "a. Develop a comprehensive test strategy and test plan.",
        "b. Define test objectives, scope, testing environments, and timelines.",
        "c. Allocate resources, tools, and technologies required for testing.",
      ],
    },
    {
      _id: 3,
      title: "Test Case Design",
      descriptions: [
        "a. Create detailed test cases covering all features and functionalities.",
        "b. Consider positive and negative scenarios, edge cases, and boundary conditions.",
        "c. Map test cases to requirements for traceability.",
      ],
    },
    {
      _id: 4,
      title: "Functional Testing",
      descriptions: [
        "a. Verify that all features and functions work as intended.",
        "b. Validate user interface, navigation, and user flows.",
        "c. Perform regression testing to ensure new updates don’t break existing features.",
      ],
    },
    {
      _id: 5,
      title: "Performance Testing",
      descriptions: [
        "a. Measure the responsiveness, speed, and stability of the website and mobile apps.",
        "b. Conduct load testing to assess the software’s behavior under various user loads.",
        "c. Identify bottlenecks and areas for optimization.",
      ],
    },
    {
      _id: 6,
      title: "Security Testing",
      descriptions: [
        "a. Identify vulnerabilities and security risks in the software.",
        "b. Conduct penetration testing to assess the system’s resistance to attacks.",
        "c. Verify authentication, authorization, data encryption, and secure connections.",
      ],
    },
    {
      _id: 7,
      title: "Compatibility Testing",
      descriptions: [
        "a. Test the software on different browsers, devices, and operating systems.",
        "b. Ensure a consistent and functional experience across various platforms.",
      ],
    },
    {
      _id: 8,
      title: "Usability Testing",
      descriptions: [
        "a. Evaluate the user experience and interface design.",
        "b. Gather feedback on user-friendliness and overall satisfaction.",
        "c. Identify areas for improvement in terms of user interaction and design.",
      ],
    },
    {
      _id: 9,
      title: "Accessibility Testing",
      descriptions: [
        "a. Ensure the software is accessible to users with disabilities.",
        "b. Check compliance with accessibility standards (e.g., WCAG).",
        "c. Verify the compatibility of assistive technologies.",
      ],
    },
    {
      _id: 10,
      title: "Regression Testing",
      descriptions: [
        "a. Continuously perform regression testing as new features are added or changes are made.",
        "b. Prevent the reintroduction of previously fixed issues.",
      ],
    },
    {
      _id: 11,
      title: "Reporting and Communication",
      descriptions: [
        "a. Document and report defects, issues, and test results.",
        "b. Collaborate with development teams to prioritize and resolve identified problems.",
        "c. Provide regular updates to stakeholders on the testing progress.",
      ],
    },
    {
      _id: 12,
      title: "Continuous Improvement",
      descriptions: [
        "a. Review and improve the QA process based on lessons learned.",
        "b. Incorporate feedback from users and stakeholders for ongoing enhancement.",
      ],
    },
  ];

  return (
    <section className="bg-[#121316] text-white p-4 md:px-8 pt-5">
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <h6 className="font-xs text-green-500 mb-3 font-semibold">
            Software Quality Assurance
          </h6>
          <h2 className="text-5xl my-5">
            Let passionate testers <br /> ensure
            <span className="font-bold"> better software delivery</span>
          </h2>
          <p>
            Our Software Quality Assurance team ensures that the software meets
            high standards of performance, functionality, security, and user
            experience. Below are the key steps and components of a
            comprehensive QA service for both Website and Mobile Applications:
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img src={QABanner} alt="" />
        </div>
      </div>

      <div class="mt-20 ">
        <div className="grid md:grid-cols-2 gap-4">
          {sqaServices?.map((service) => (
            <div
              className="bg-[#292b30] rounded-md border border-gray-800 p-4"
              key={service._id}
            >
              <h3 class="text-lg font-semibold">{service.title}</h3>
              <ul class="pl-6">
                {service?.descriptions?.map((description, i) => (
                  <li className="text-gray-400 mb-2" key={i}>
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <AllServices />
    </section>
  );
};

export default SQA;
