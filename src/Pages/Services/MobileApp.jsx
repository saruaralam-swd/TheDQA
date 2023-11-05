import React from "react";
import mobileApp from "../../assets/Services/web/AppDevelopment.svg";
import AllServices from "../../Components/AllServices";

const MobileApp = () => {
  const mobileServices = [
    {
      _id: 1,
      title: "Define Objectives and Features",
      des: "Clearly define the objectives of the mobile app and list the features that you want to include. Consider which aspects of the website should be accessible through the app and which features will enhance the mobile user experience",
    },
    {
      _id: 2,
      title: "Platform Selection",
      des: "Decide whether you want to develop the app for iOS, Android, or both platforms. You can choose to develop separate native apps for each platform or use cross-platform development frameworks like React Native or Flutter.",
    },
    {
      _id: 3,
      title: "Design and User Experience (UX)",
      des: "Design an intuitive and user-friendly interface for the app. Mobile apps require a different design approach compared to websites due to the limited screen space and touch interactions. Focus on providing a seamless and engaging user experience.",
    },
    {
      _id: 4,
      title: "Backend Development",
      des: "Create the backend infrastructure that supports the app. This includes setting up servers, databases, APIs, and other necessary components to ensure smooth data exchange between the app and the website.",
    },
    {
      _id: 5,
      title: "API Development",
      des: "Develop APIs (Application Programming Interfaces) that allow the app to retrieve data and interact with the website’s backend. APIs enable seamless communication between the app and the website.",
    },
    {
      _id: 6,
      title: "Frontend Development",
      des: "Build the front end of the app, which includes implementing the user interface and integrating the APIs to display content from the website. Pay attention to responsive design to ensure the app works on various device sizes.",
    },
    {
      _id: 7,
      title: "Testing",
      des: "Thoroughly test the app on different devices, operating systems, and network conditions. Identify and fix any bugs, glitches, or performance issues. Testing is crucial to ensure a smooth user experience.",
    },
    {
      _id: 8,
      title: "Security and Data Privacy",
      des: "Implement security measures to protect user data and ensure that the app complies with relevant data privacy regulations, such as GDPR or CCPA.",
    },
    {
      _id: 9,
      title: "App Store Submission",
      des: "If you’re developing for iOS and Android, you’ll need to submit your app to the respective app stores (Apple App Store and Google Play Store). Each platform has its own submission guidelines and review processes.",
    },
    {
      _id: 10,
      title: "Launch and Promotion",
      des: "Once your app is approved by the app stores, launch it and promote it to your target audience. Utilize various marketing strategies to increase app downloads and user engagement.",
    },
    {
      _id: 11,
      title: "Maintenance and Updates",
      des: "Continuously monitor the app’s performance, gather user feedback, and make necessary updates and improvements. Mobile platforms, devices, and software change over time, so your app should evolve accordingly.",
    },
    {
      _id: 12,
      title: "Syncing with Website Content",
      des: "Implement mechanisms to ensure that the app’s content remains up-to-date with the website. Changes made on the website, such as new articles or products, should be reflected in the app as well.",
    },
  ];

  return (
    <section className="bg-[#121316] text-white px-4 py-5">
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <h6 className="font-xs text-green-500 mb-3 font-semibold">
            Mobile App Development
          </h6>
          <h2 className="text-5xl my-5">
            Develop intuitive and
            <br />
            <span className="font-semibold">
              user-centric android, iOS
            </span>{" "}
            <br />& hybrid apps
          </h2>
          <p>
            Developing a mobile app for your company website involves creating a
            user-friendly interface for smartphones and tablets. Begin by
            defining your App’s objective and features, then decide whether to
            target iOS, Android, or both platforms. Design an intuitive user
            experience and set up the necessary backend infrastructure and APIs
            to connect the app with your website. Thoroughly test the app,
            ensure security and data privacy, and submit it to app stores for
            approval. Once launched, continue to monitor and update the app to
            align with website changes and evolving mobile trends.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img src={mobileApp} alt="" />
        </div>
      </div>

      <div className="bg-[#121316] text-white mt-20 ">
        <div class="grid md:grid-cols-3 gap-3">
          {mobileServices.map((service) => (
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

export default MobileApp;
