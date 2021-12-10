// Reviews
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay } from 'swiper';
import './Reviews.css';
import 'swiper/swiper.min.css';
import pic1 from '../images/pic-1.png'
import pic2 from '../images/pic-2.png'
import pic3 from '../images/pic-3.png'
import pic4 from '../images/pic-4.png'

export default function Reviews() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        <span>Our customer's review</span>
      </h1>
      <div className="reviews-slider">
        <Swiper
          loop
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          slidesPerView={3}
          centeredSlides
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{ padding: '1rem' }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <img src={pic1} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Benjamin Daryl</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={pic2} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Jane Seers</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={pic3} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Martin Langford</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={pic4} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                maxime inventore illo nemo cupiditate quam eligendi nihil sunt
                ullam, laudantium, earum in nam provident quaerat
                exercitationem?
              </p>
              <h3>Lisa Watson</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
