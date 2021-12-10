// Categories
import React from 'react';
import './Categories.css';
import pic1 from '../images/cart-img-1.png'
import pic2 from '../images/cart-img-2.png'
import pic3 from '../images/cart-img-3.png'
import pic4 from '../images/cart-img-4.png'

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        <span>Product Categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src={pic2} alt="" />
          <h3>Vegetables</h3>
          <p>up to 25% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src={pic1} alt="" />
          <h3>Fresh Fruits</h3>
          <p>up to 25% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src={pic4} alt="" />
          <h3>Dairy products</h3>
          <p>up to 15% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src={pic3} alt="" />
          <h3>Fresh meat</h3>
          <p>up to 20% off</p>
          <button type="button" className="btn">shop now</button>
        </div>
      </div>
    </section>
  );
}
