import React from "react";
import '../components/CartSection.css'
import '../App.css'

import pic1 from "../images/product-1.png";
import pic2 from "../images/product-2.png";
import trash from "../images/trash2.png";


function cartSection() {
    return(
        <html>
        <body className='cartBody'>
        <main>
            <div class="basket">
                <div class="basket-labels">
                    <ul>
                        <li class="item item-heading">Item</li>
                        <li class="price">Price</li>
                        <li class="quantity">Quantity</li>
                        <li class="subtotal">Subtotal</li>
                    </ul>
                </div>
                <div class="basket-product">
                    <div class="item">
                        <div class="product-image">
                            <img src={pic1}  class="product-frame"/>
                        </div>
                        <div class="product-details">
                            <h1><strong>Oranges</strong></h1>
                            <p>Product - 232321939</p>
                        </div>
                    </div>
                    <div class="price">5.00</div>
                    <div class="quantity">
                        <input type="number" placeholder="1" min="1" max="99" className="quantity-field"/>
                    </div>
                    <div class="subtotal">5.00</div>
                    <div class="remove">
                        <input type="image" src={trash}/>
                    </div>
                </div>

                <div class="basket-product">
                    <div class="item">
                        <div class="product-image">
                            <img src={pic2} class="product-frame"/>
                        </div>
                        <div class="product-details">
                            <h1><strong>Onions</strong></h1>
                            <p>Product - 232321939</p>
                        </div>
                    </div>
                    <div class="price">7.00</div>
                    <div class="quantity">
                        <input type="number" placeholder="1" min="1" max ="99" class="quantity-field"/>
                    </div>
                    <div class="subtotal">7.00</div>
                    <div class="remove">
                        <input type="image" src={trash} />
                    </div>
                </div>
            </div>
            <aside>
                <div class="summary">
                    <div class="summary-total-items"><span class="total-items"></span> Items in Cart</div>
                    <div class="summary-subtotal">
                        <div class="subtotal-title">Subtotal</div>
                        <div class="subtotal-value final-value" id="basket-subtotal">12.00</div>
                        <div class="summary-promo hide">
                            <div class="promo-title">Promotion</div>
                            <div class="promo-value final-value" id="basket-promo"></div>
                        </div>
                    </div>
                    <div class="summary-delivery">
                        <select name="delivery-collection" class="summary-delivery-selection">
                            <option value="0" selected="selected">Delivery</option>
                            <option value="collection">Pick Up</option>
                        </select>
                    </div>
                    <div class="summary-total">
                        <div class="total-title">Total</div>
                        <div class="total-value final-value" id="basket-total">12.00</div>
                    </div>
                    <div class="summary-checkout">
                        <button
                            className="checkout-cta"
                            onClick={() => {
                                const confirmBox = window.confirm(
                                    "Are you sure you want to order?"
                                )
                                if(confirmBox==true) {
                                    window.alert("Order confirmed");
                                }
                                else window.alert("Order cancelled");
                            }}>
                            Checkout
                        </button>
                    </div>
                </div>
            </aside>
        </main>
        </body>
        </html>
    );
}
export default cartSection;