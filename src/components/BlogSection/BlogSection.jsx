import "./BlogSection.css";

import {
  FaArrowRight,
  FaRegCalendarAlt
} from "react-icons/fa";

import { blogData } from "./blogData";

const BlogSection = () => {
  return (
    <section className="blog-section">

      <div className="container">

        <div className="section-heading">

          <h2>From Our Blog</h2>
          <div class="title-line"></div>

        </div>

        <div className="blog-grid">

          {blogData.map((blog, index) => (

            <div
              className="blog-card"
              key={index}
            >

              <div className="blog-image">

                <img
                  src={blog.image}
                  alt={blog.title}
                />

              </div>

              <div className="blog-content">

                <div className="blog-meta">

                  <span className="blog-category">
                    {blog.category}
                  </span>

                  <span className="blog-date">
                    <FaRegCalendarAlt />
                    {blog.date}
                  </span>

                </div>

                <h3>
                  {blog.title}
                </h3>

                <a
                  href={blog.link}
                  className="blog-readmore"
                >
                  Read More
                  <FaArrowRight />
                </a>

              </div>

            </div>

          ))}

        </div>

        <div className="blog-footer">

          <a
            href="/blog"
            className="view-all-btn"
          >
            View All Blogs
            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
};

export default BlogSection;