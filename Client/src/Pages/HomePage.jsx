import React from "react";
import Navbar from '../Elements/Navbar';
import HeroSection from '../Elements/Herosection';
import Blogs from "../Elements/Blogs";
import Explore from "../Elements/Explore";
import Footer from "../Elements/Footer";

const HomePage = () =>{
    return(
        <>
            <Navbar />
            <HeroSection />
            <Blogs />
            <Explore />
            <Footer />
        </>
    )
}

export default HomePage;