import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxPerson, RxCalendar } from "react-icons/rx";
import { BiCommentDots } from "react-icons/bi";
import newsUpdateLeft from "../../assets/HomePage/newsUpdateLeft.webp";
import people1 from "../../assets/HomePage/people-1.webp";
import people2 from "../../assets/HomePage/people-2.webp";
import people3 from "../../assets/HomePage/people-3.webp";
import "./SlideCss/HomeServices.css";

const HomeNewsUpdate = () => {
  const location = useLocation();

  const blogPosts = [
    {
      _id: 1,
      title: "10 Things to Outsource To a Business Process Outsourcing (BPO)",
      summary:
        "In this blog post, we'll explore ten key tasks and processes that you can effectively outsource to a Business Process Outsourcing (BPO) company. Discover how outsourcing can streamline your operations and boost efficiency.",
      bloggerName: "John Doe",
      bloggerProfile: people1,
      postDate: "18 September",
      TotalComments: 15,
    },
    {
      _id: 2,
      title: "5 Workflow Automation Tips for Your Team",
      summary:
        "Learn five valuable workflow automation tips to optimize your team's productivity. From eliminating repetitive tasks to integrating automation tools, we'll guide you on the path to a more efficient and streamlined workflow.",
      bloggerName: "Alice Smith",
      bloggerProfile: people2,
      postDate: "15 September",
      TotalComments: 10,
    },
    {
      _id: 3,
      title: "How to Use Virtual Assistant Effectively",
      summary:
        "Discover the best practices for leveraging the power of virtual assistants to enhance your productivity. This blog post will provide insights on how to delegate tasks, communicate effectively, and make the most of your virtual assistant's support.",
      bloggerName: "David Johnson",
      bloggerProfile: people3,
      postDate: "12 September",
      TotalComments: 8,
    },
  ];

  return (
    <section
      className={
        location.pathname === "/" && "/home"
          ? "mt-12 mb-32 p-5 md:p-10"
          : "my-12 p-5 md:p-10"
      }
    >
      <h6 className="font-xs text-green-500 mb-3 font-semibold text-center">
        News Update
      </h6>
      <h6>
        <h2 className="text-3xl font-semibold mb-5 text-center">
          Blog News & Update
        </h2>
      </h6>

      <div className="md:grid grid-cols-2 gap-5">
        <div className="border border-gray-100 rounded-sm custom-shadow p-3 space-y-3 mb-10 md:mb-0">
          <img
            src={newsUpdateLeft}
            className="w-full object-cover border"
            alt="Customer support image "
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <RxPerson className="w-4 h-4 text-green-500" />
              <p className="text-xs">By John</p>
            </div>
            <div className="flex items-center gap-1">
              <RxCalendar className="w-4 h-4 text-green-500" />
              <p className="text-xs">16 April</p>
            </div>
            <div className="flex items-center gap-1">
              <BiCommentDots className="w-4 h-4 text-green-500" />
              <p className="text-xs">3 Comments</p>
            </div>
          </div>
          <h5 className="text-xl font-semibold">
            Why You Need Business Process Outsourcing (BPO) for Your Company
          </h5>
          <p className="text-sm text-gray-400">
            Business Process Outsourcing (BPO) enhances operational efficiency
            and allows your company to focus on core competencies by delegating
            non-core tasks to specialized professionals...
            <Link className="text-orange-500 font-bold hover:underline">
              Read More
            </Link>
          </p>
        </div>

        <div className="mb-20 md:mb-0">
          {blogPosts.map((blog) => (
            <div
              key={blog._id}
              className="md:grid grid-cols-4 custom-shadow border rounded-sm p-1 my-5"
            >
              <img
                src={blog.bloggerProfile}
                className="w-full object-cover"
                alt="image"
              />
              <div className="col-span-3 p-2 space-y-1">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <RxPerson className="w-4 h-4 text-green-500" />
                    <p className="text-xs">{blog.bloggerName}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <RxCalendar className="w-4 h-4 text-green-500" />
                    <p className="text-xs">{blog.postDate}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BiCommentDots className="w-4 h-4 text-green-500" />
                    <p className="text-xs">{blog.TotalComments} Comments</p>
                  </div>
                </div>

                <h5 className="font-semibold">{blog.title}</h5>
                <p className="text-sm">{blog.summary}</p>
                <p>
                  <Link className="text-orange-500 font-bold">Read More</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNewsUpdate;
