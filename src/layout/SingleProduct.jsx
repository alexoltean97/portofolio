import React from "react";
import WhiteTshirt from "../assets/images/white-tshirt.png";
import BlackTshirt from "../assets/images/black-tshirt.png";
import RedTshirt from  "../assets/images/red-tshirt.png";
import GreenTshirt from "../assets/images/green-tshirt.png";
const SingleProduct = () => {


    return(

    <React.Fragment>
    <h2>Single Product</h2>
    <div className="single-product-row d-flex flex-row">
        
        <div className="product-image-container">
            <img src={WhiteTshirt} style={{ width: '30rem' }} alt="white-tshirt" />
        </div>

        <div className="product-filters d-flex flex-column">
            <h2>Plain T-shirt</h2>
            <h3>10$</h3>


            <div className="color-picker d-flex flex-column">
                <span>Color {`colorName`}</span>
                <div className="image-grid">
                <img src={WhiteTshirt} style={{ width: '6rem' }} alt="white-tshirt" />
                <img src={BlackTshirt} style={{ width: '6rem' }} alt="white-tshirt" />
                <img src={RedTshirt} style={{ width: '6rem' }} alt="white-tshirt" />
                <img src={GreenTshirt} style={{ width: '6rem' }} alt="white-tshirt" />
            </div>
              
            </div>
            <p>Pick a GodDamn size</p>
            <select className="size-selector">
                <option>XXL</option>
                <option>XL</option>
                <option>L</option>
                <option>M</option>
                <option>S</option>
                <option>XS</option>
                <option>XXS</option>
            </select>

            <button className="btn btn-liked">Add to Favorites</button>
            <button className="btn btn-cart">Add to cart</button>
        </div>
    </div>
    </React.Fragment>
    );
}

export default SingleProduct;