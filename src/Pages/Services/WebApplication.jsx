import React from "react";
import webApplication from "../../assets/Services/web/WebApplications.svg";
import AllServices from "../../Components/AllServices";

const WebApplication = () => {
  const webServices = [
    {
      _id: 1,
      title: "Planning",
      des: [
        "a. Goal Identification: Determine the purpose of the website (e.g., to showcase products, provide information, generate leads).",
        "b. Target Audience: Define your target audience to tailor the design, content, and functionality accordingly.",
        "c. Featured and Functionality: List the features your website will need (e.g., contact forms, e-commerce, blog).",
        "d. Plan the type of content you’ll need, such as text, images, videos, and other media.",
        "e. Domain Name and Hosting: Choose a domain name that aligns with your company and select a reliable hosting provider.",
      ],
    },
    {
      _id: 2,
      title: "Design",
      des: [
        "a. Visual Identity: Create a design that reflects your company’s branding, including colors, logo placement, and typography.",
        "b. User Experience (UX): Design a user-friendly interface that’s easy to navigate and accessible across various devices (responsive design).",
      ],
    },
    {
      _id: 3,
      title: "Development",
      des: [
        "a. Front-End Development: Build the user interface using HTML, CSS, and possibly JavaScript. Ensure the site is responsive and works well on mobile devices.",
        "b. Back-End Development: If your site requires dynamic content or user interactions, you’ll need back-end development. Choose a suitable programming language (e.g., Python, PHP, Ruby) and a framework (e.g., Django, Laravel) if needed.",
        "c. Database Integration: If your site requires data storage, choose a database system (e.g., MySQL, PostgreSQL) and integrate it with your back-end.",
      ],
    },
    {
      _id: 4,
      title: "Content Creation",
      des: [
        "a. Text: Write clear, concise, and engaging content that communicates your company’s message effectively.",
        "b. Images and Graphics: Use high-quality images and graphics that align with your branding and enhance the visual appeal.",
        "c. Videos: If applicable, create videos to showcase products, explain services, or tell your company’s story.",
      ],
    },
    {
      _id: 5,
      title: "Testing on Dev/Staging Environment",
      des: [
        "a. Functional Testing: Check all interactive elements, forms, and links to ensure they work correctly.",
        "b. Cross-Browser Testing: Test your website on various web browsers to ensure compatibility.",
        "c. Responsive Testing: Verify that the website displays properly on different screen sizes.",
      ],
    },
    {
      _id: 6,
      title: "Optimization",
      des: [
        "a. Performance: Optimize your website’s speed by compressing images, minimizing code, and utilizing caching techniques.",
        "b. SEO: Implement basic search engine optimization practices (meta tags, keyword-rich content, proper URL structure) to improve your website’s visibility on search engines.",
      ],
    },
    {
      _id: 7,
      title: "Launch",
      des: [
        "a. Final Checks: Review the website thoroughly to make sure everything is in place.",
        "b. Domain and Hosting Setup: Point your domain to your hosting server and ensure all configurations are accurate.",
        "c. Launch Plan: Coordinate a launch strategy to make your website live.",
      ],
    },
    {
      _id: 8,
      title: "Post-Launch",
      des: [
        "a. Monitoring: Keep an eye on website performance, user behavior, and any technical issues.",
        "b. Content Updates: Regularly update your website’s content to keep it fresh and relevant.",
        "c. Security Updates: Apply security patches and updates to protect against vulnerabilities.",
        "d. Maintenance Testing: Perform Maintenance Testing if needed.",
      ],
    },
  ];

  return (
    <section className="bg-[#121316] text-white pl-4 md:px-8 pt-5">
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <h6 className="font-xs text-green-500 mb-3 font-semibold">
            Software Development
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

      <div class="mt-20 ">
        {webServices?.map((service) => (
          <div
            className="bg-[#1d1e22] my-3 rounded-md border border-gray-800 mb-4 p-4"
            key={service._id}
          >
            <h3 class="text-lg font-semibold">{service.title}</h3>
            <ul class="pl-6">
              {service.des?.map((d, i) => (
                <li className="text-gray-300 mb-3" key={i}>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <AllServices />
    </section>
  );
};

export default WebApplication;
