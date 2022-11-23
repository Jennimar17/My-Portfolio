import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    spaceBetween: 70,
    slidesPerView: 2,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    },
  };
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Courses</div>
        </div>
        {/* testimonials items */}
        <div className="reviews-carousel">
          <Swiper {...props} className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev1.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      Fullstack Blockchain Developer</div>
                    <div className="company">Blockdemy Aug. 2022</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev2.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      UX/UI and Digital Prototyping</div>
                    <div className="company">Udemy Aug. 2022</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev2.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      UX: Master in User Experience</div>
                    <div className="company">Udemy May. 2022</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev2.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      Design for advanced programming</div>
                    <div className="company">Udemy Oct. 2021</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev3.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      Automation Testing Foundation</div>
                    <div className="company">Tecamia Jun. 2021</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev4.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      Scrum Certificate (SFPC)</div>
                    <div className="company">CertiProf May. 2021</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev7.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      CM & Marketing Digital</div>
                    <div className="company">Potrero Digital Dec. 2020</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev5.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      Git & Github Foundation</div>
                    <div className="company">DevCode Sep. 2020</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev6.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                      Web Technologies & Development</div>
                    <div className="company">Linkedin Aug. 2020</div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          {/* navigation */}
          <div className="swiper-nav">
            <a className="prev swiper-button-prev fas fa-long-arrow-alt-left" />
            <a className="next swiper-button-next fas fa-long-arrow-alt-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
