import React from "react";
import webApplication from "../../assets/Services/web/WebApplications.svg";
import { Link } from "react-router-dom";
import AllServices from "../../Components/AllServices";

const WebApplication = () => {
  return (
    <section className="bg-[#121316] text-white px-8 py-5">
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <h6 className="font-xs text-green-500 mb-3 font-semibold">
            Static/Dynamic Website Development
          </h6>
          <h2 className="text-5xl my-5">
            Make your web app
            <br />
            <span className="font-semibold">unique & innovative</span> <br />
            with TheDQA
          </h2>
          <p>
            We are offering website development that involves strategic planning
            to determine goals and target audience, followed by designing a
            visually appealing and user-centric interface. The development phase
            includes coding the front end and potentially incorporating back-end
            scripting. Engaging content in the form of text, images, and videos
            should be integrated, while thorough testing guarantees
            functionality across devices and browsers. Once optimized, the site
            is ready for launch, backed by continuous monitoring and updates for
            a seamless online presence.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img src={webApplication} alt="" />
        </div>
      </div>

      <div class="bg-white  text-black">
        <div class="mb-4">
          <h3 class="text-lg font-semibold">1. Planning</h3>
          <ul class="list-disc pl-6">
            <li>
              a. Goal Identification: Determine the purpose of the website
              (e.g., to showcase products, provide information, generate leads).
            </li>
            <li>
              b. Target Audience: Define your target audience to tailor the
              design, content, and functionality accordingly.
            </li>
            <li>
              c. Featured and Functionality: List the features your website will
              need (e.g., contact forms, e-commerce, blog).
            </li>
            <li>
              d. Plan the type of content you’ll need, such as text, images,
              videos, and other media.
            </li>
            <li>
              e. Domain Name and Hosting: Choose a domain name that aligns with
              your company and select a reliable hosting provider.
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-lg font-semibold">2. Design</h3>
          <ul class="list-disc pl-6">
            <li>
              a. Visual Identity: Create a design that reflects your company’s
              branding, including colors, logo placement, and typography.
            </li>
            <li>
              b. User Experience (UX): Design a user-friendly interface that’s
              easy to navigate and accessible across various devices (responsive
              design).
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-lg font-semibold">3. Development</h3>
          <ul class="list-disc pl-6">
            <li>
              a. Front-End Development: Build the user interface using HTML,
              CSS, and possibly JavaScript. Ensure the site is responsive and
              works well on mobile devices.
            </li>
            <li>
              b. Back-End Development: If your site requires dynamic content or
              user interactions, you’ll need back-end development. Choose a
              suitable programming language (e.g., Python, PHP, Ruby) and a
              framework (e.g., Django, Laravel) if needed.
            </li>
            <li>
              c. Database Integration: If your site requires data storage,
              choose a database system (e.g., MySQL, PostgreSQL) and integrate
              it with your back-end.
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-lg font-semibold">4. Content Creation</h3>
          <ul class="list-disc pl-6">
            <li>
              a. Text: Write clear, concise, and engaging content that
              communicates your company’s message effectively.
            </li>
            <li>
              b. Images and Graphics: Use high-quality images and graphics that
              align with your branding and enhance the visual appeal.
            </li>
            <li>
              c. Videos: If applicable, create videos to showcase products,
              explain services, or tell your company’s story.
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-lg font-semibold">
            5. Testing on Dev/Staging Environment
          </h3>
          <ul class="list-disc pl-6">
            <li>
              a. Functional Testing: Check all interactive elements, forms, and
              links to ensure they work correctly.
            </li>
            <li>
              b. Cross-Browser Testing: Test your website on various web
              browsers to ensure compatibility.
            </li>
            <li>
              c. Responsive Testing: Verify that the website displays properly
              on different screen sizes.
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-lg font-semibold">6. Optimization</h3>
          <ul class="list-disc pl-6">
            <li>
              a. Performance: Optimize your website’s speed by compressing
              images, minimizing code, and utilizing caching techniques.
            </li>
            <li>
              b. SEO: Implement basic search engine optimization practices (meta
              tags, keyword-rich content, proper URL structure) to improve your
              website’s visibility on search engines.
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-lg font-semibold">7. Launch</h3>
          <ul class="list-disc pl-6">
            <li>
              a. Final Checks: Review the website thoroughly to make sure
              everything is in place.
            </li>
            <li>
              b. Domain and Hosting Setup: Point your domain to your hosting
              server and ensure all configurations are accurate.
            </li>
            <li>
              c. Launch Plan: Coordinate a launch strategy to make your website
              live.
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-lg font-semibold">8. Post-Launch</h3>
          <ul class="list-disc pl-6">
            <li>
              a. Monitoring: Keep an eye on website performance, user behavior,
              and any technical issues.
            </li>
            <li>
              b. Content Updates: Regularly update your website’s content to
              keep it fresh and relevant.
            </li>
            <li>
              c. Security Updates: Apply security patches and updates to protect
              against vulnerabilities.
            </li>
            <li>
              d. Maintenance Testing: Perform Maintenance Testing if needed.
            </li>
          </ul>
        </div>
      </div>

      <AllServices />
    </section>
  );
};

export default WebApplication;
