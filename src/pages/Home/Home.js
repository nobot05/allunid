import React from "react";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import "../../Components/homeStyle/homeStyle.css";
import "./home.css"

const Home = () => {
  const data = [
    "/images/intro1.jpeg",
    "/images/intro2.jpeg",
    "/images/intro3.jpeg",
  ];
  return (
    <div >
      <div className="container-carousel text-center">
        <MainCarousel className="w-75" interval={4000} items={data} />
      </div>
      <section>
        <div class="curve"></div>
      </section>
    </div>
  );
};

export default Home;
