import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import { testimonialData } from "./testimonialData";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-title">

          {/* <span className="section-badge">
            Testimonials
          </span> */}

          <h2>
            What Our Clients Say
          </h2>

          <div className="title-line"></div>

        </div>

        {/* Stats */}

        <div className="testimonial-stats">

          <div className="stat-card">
            <h3>200K+</h3>
            <span>Customers Served</span>
          </div>

          <div className="stat-card">
            <h3>99.9%</h3>
            <span>Uptime SLA</span>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <span>Technical Support</span>
          </div>

          <div className="stat-card">
            <h3>15+</h3>
            <span>Years Experience</span>
          </div>

        </div>

        <div className="testimonial-slider-wrapper">

          <button className="testimonial-prev">
            <FaChevronLeft />
          </button>

          <button className="testimonial-next">
            <FaChevronRight />
          </button>

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay
            ]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next"
            }}
            pagination={{
              clickable:true
            }}
            autoplay={{
              delay:4500,
              disableOnInteraction:false
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={25}
            breakpoints={{
              0:{
                slidesPerView:1,
                centeredSlides:false
              },
              768:{
                slidesPerView:2,
                centeredSlides:false
              },
              1200:{
                slidesPerView:3,
                centeredSlides:true
              }
            }}
          >

            {testimonialData.map((item,index)=>(

              <SwiperSlide key={index}>

                <div className="testimonial-card">

                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>

                  <div className="stars">
                    {[...Array(5)].map((_,i)=>(
                      <FaStar key={i}/>
                    ))}
                  </div>

                  <p className="review">
                    "{item.review}"
                  </p>

                  <div className="client-info">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="client-details">

                      <h4>{item.name}</h4>

                      <span>
                        {item.company}
                      </span>

                      <div className="company-badge">
                        Verified Client
                      </div>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;