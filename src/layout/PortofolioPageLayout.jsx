import React from "react";
import Navigation from "../components/portofolio/Navigation";
import CardGrid from "./CardGrid";
import Pagination from "../components/portofolio/Pagination";
import SingleProduct from "./SingleProduct";
import TestimonialGrid1 from "./TestimonialGrid1";
import Footer from "../layout/globals/Footer";
import { Link } from "react-router-dom";


const PortofolioPageLayout = () => {
    return(
        <div className="container">
            <Link to="/">Back Home</Link>
            <Navigation />
            <CardGrid />
            <Pagination />
            <SingleProduct />
            <TestimonialGrid1 />
            <Footer />
        </div>
        
    );
};

export default PortofolioPageLayout;