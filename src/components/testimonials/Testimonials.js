import React from "react";
import "./testimonials.css";
import testimonials from "../../data/testimonials.json";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from peers and seniors</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t) => {
          return (
            <SwiperSlide key={t.id} className="testimonial">
              <div className="client__avatar">
                <img src={t.avatar} alt="" />
              </div>
              <h5 className="client__name">{t.name}</h5>
              <small className="client__review">{t.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
