import React from "react";
import QABanner from "../../assets/Services/web/QualityAssurance.svg";
import { Link } from "react-router-dom";
import AllServices from "../../Components/AllServices";

const SQA = () => {
  return (
    <section className="bg-[#121316] text-white px-8 py-5">
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

      <div className="bg-white text-black">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">1. Requirement Analysis</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Understand the project requirements, features, and
              functionalities to be tested.
            </li>
            <li>
              b. Identify key performance indicators (KPIs) and success
              criteria.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">2. Test Planning</h3>
          <ul className="list-disc pl-6">
            <li>a. Develop a comprehensive test strategy and test plan.</li>
            <li>
              b. Define test objectives, scope, testing environments, and
              timelines.
            </li>
            <li>
              c. Allocate resources, tools, and technologies required for
              testing.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">3. Test Case Design</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Create detailed test cases covering all features and
              functionalities.
            </li>
            <li>
              b. Consider positive and negative scenarios, edge cases, and
              boundary conditions.
            </li>
            <li>c. Map test cases to requirements for traceability.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">4. Functional Testing</h3>
          <ul className="list-disc pl-6">
            <li>a. Verify that all features and functions work as intended.</li>
            <li>b. Validate user interface, navigation, and user flows.</li>
            <li>
              c. Perform regression testing to ensure new updates don’t break
              existing features.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">5. Performance Testing</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Measure the responsiveness, speed, and stability of the website
              and mobile apps.
            </li>
            <li>
              b. Conduct load testing to assess the software’s behavior under
              various user loads.
            </li>
            <li>c. Identify bottlenecks and areas for optimization.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">6. Security Testing</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Identify vulnerabilities and security risks in the software.
            </li>
            <li>
              b. Conduct penetration testing to assess the system’s resistance
              to attacks.
            </li>
            <li>
              c. Verify authentication, authorization, data encryption, and
              secure connections.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">7. Compatibility Testing</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Test the software on different browsers, devices, and operating
              systems.
            </li>
            <li>
              b. Ensure a consistent and functional experience across various
              platforms.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">8. Usability Testing</h3>
          <ul className="list-disc pl-6">
            <li>a. Evaluate the user experience and interface design.</li>
            <li>
              b. Gather feedback on user-friendliness and overall satisfaction.
            </li>
            <li>
              c. Identify areas for improvement in terms of user interaction and
              design.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">9. Accessibility Testing</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Ensure the software is accessible to users with disabilities.
            </li>
            <li>
              b. Check compliance with accessibility standards (e.g., WCAG).
            </li>
            <li>c. Verify the compatibility of assistive technologies.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">10. Regression Testing</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Continuously perform regression testing as new features are
              added or changes are made.
            </li>
            <li>b. Prevent the reintroduction of previously fixed issues.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            11. Reporting and Communication
          </h3>
          <ul className="list-disc pl-6">
            <li>a. Document and report defects, issues, and test results.</li>
            <li>
              b. Collaborate with development teams to prioritize and resolve
              identified problems.
            </li>
            <li>
              c. Provide regular updates to stakeholders on the testing
              progress.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">12. Continuous Improvement</h3>
          <ul className="list-disc pl-6">
            <li>
              a. Review and improve the QA process based on lessons learned.
            </li>
            <li>
              b. Incorporate feedback from users and stakeholders for ongoing
              enhancement.
            </li>
          </ul>
        </div>
      </div>

      <AllServices />
    </section>
  );
};

export default SQA;
