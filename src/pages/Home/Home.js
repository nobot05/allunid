import React from "react";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import "../../Components/homeStyle/homeStyle.css";

const Home = () => {
  const data = [
    "/images/intro1.jpeg",
    "/images/intro2.jpeg",
    "/images/intro3.jpeg",
  ];
  return (
    <div className="container-fluid">
      <div className="container-carousel text-center">
        <MainCarousel className="w-75" interval={4000} items={data} />
      </div>
    </div>
  );
};

export default Home;
