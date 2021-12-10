// ProductPageForHome
import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import pic1 from '../images/product-1.png'
import pic2 from '../images/product-2.png'
import pic3 from '../images/product-3.png'
import pic4 from '../images/product-4.png'
import pic5 from '../images/product-5.png'
import pic6 from '../images/product-6.png'
import pic7 from '../images/product-7.png'
import pic8 from '../images/product-8.png'
import {ButtonForProduct} from "./buttonForTheProduct"

export default function ProductPageForHome() {
  SwiperCore.use([Autoplay]);
  return (
      <section className="products" id="products">
        <br/>
        <br/>
        <h1 className="heading">
          <span>Our Products</span>
        </h1>
        <div className="products-slider slider">
          <div className="wrapper swiper-wrapper">
            <Swiper
                loop
                spaceBetween={20}
                autoplay={{ delay: 7500, disableOnInteraction: false }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                centeredSlides
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: { slidesPerView: 3 },
                }}
                style={{ padding: '1rem' }}
            >
              <SwiperSlide>
                <div className="box">
                  <img src={pic1} alt="" />
                  <h3>fresh orange</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={pic2} alt="" />
                  <h3>fresh onion</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={pic3} alt="" />
                  <h3>fresh meat</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={pic4} alt="" />
                  <h3>fresh cabbage</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="products-slider">
          <div className="wrapper swiper-wrapper">
            <Swiper
                loop
                spaceBetween={20}
                autoplay={{ delay: 7500, disableOnInteraction: false }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                centeredSlides
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: { slidesPerView: 3 },
                }}
                style={{ padding: '1rem' }}
            >
              <SwiperSlide>
                <div className="box">
                  <img src={pic5} alt="" />
                  <h3>fresh potato</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={pic6} alt="" />
                  <h3>fresh avocado</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={pic7} alt="" />
                  <h3>fresh carrot</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={pic8} alt="" />
                  <h3>green lemon</h3>
                  <div className="price">$4.99/ -- 10.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <ButtonForProduct to='/cart' type="button" className="btn">
                    Go to the product page
                  </ButtonForProduct>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
  );
}