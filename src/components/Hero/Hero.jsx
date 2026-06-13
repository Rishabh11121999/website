import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  FaSearch,
  FaCalendarAlt,
  FaShieldAlt,
  FaHeadset,
  FaBuilding,
  FaCloud,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import heroSlides from "./heroData";

const Hero = () => {
  return (
    <section className="hero">

      <Swiper
        modules={[
          Pagination,
          Autoplay,
          Navigation
        ]}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next"
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        className="hero-slider"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="container">

              <div className="hero-wrapper">

                {/* LEFT CONTENT */}

                <div className="hero-content">

                  <div className="hero-badge">
                    {slide.badge}
                  </div>

                  <h1>
                    {slide.title1}
                    <br />
                    {slide.title2}
                    <br />
                    {slide.title3}
                    <span> {slide.highlight}</span>
                  </h1>

                  <p>
                    {/* {slide.description} */}
                  </p>

                  <div className="hero-buttons">
                    <h2>
                    <a
                      href="/domain-registration"
                      className="domain-btn"
                    >
                      <FaSearch />
                      {slide.primaryBtn}
                    </a>
                    </h2>
                    <h2>
                    <a
                      href="/contact-us"
                      className="demo-btn"
                    >
                      <FaCalendarAlt />
                      {slide.secondaryBtn}
                    </a>
                    </h2>
                  </div>

                  <div className="hero-features">

                    <div className="feature">
                      <FaShieldAlt />
                      <span>99.9% Uptime</span>
                    </div>

                    <div className="feature">
                      <FaHeadset />
                      <span>24/7 Expert Support</span>
                    </div>

                    <div className="feature">
                      <FaBuilding />
                      <span>Tier IV Datacenter</span>
                    </div>

                    <div className="feature">
                      <FaCloud />
                      <span>Free Migration</span>
                    </div>

                  </div>

                </div>

                {/* RIGHT IMAGE */}

                <div className="hero-image">

                  <img
                    src={slide.image}
                    alt={slide.title1}
                  />

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}

      <div className="hero-nav">

        <button
          className="hero-prev"
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>

        <button
          className="hero-next"
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
};

export default Hero;