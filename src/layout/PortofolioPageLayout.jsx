import React from "react";
import Navigation from "../components/portofolio/Navigation";
import CardGrid from "./CardGrid";
import Pagination from "../components/portofolio/Pagination";
import SingleProduct from "./SingleProduct";
import TestimonialGrid1 from "./TestimonialGrid1";

const PortofolioPageLayout = () => {
    return(
        <div className="container">
            <Navigation />
            <CardGrid />
            <Pagination />
            <SingleProduct />
            <TestimonialGrid1 />
        </div>
        
    );
};

export default PortofolioPageLayout;