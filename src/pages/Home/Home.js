import React from "react";
import { NavLink } from "react-router-dom";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import "../../Components/homeStyle/homeStyle.css";
import "./home.css"

const Home = () => {
  
  const data = [
    "/images/home1.jpeg",
    "/images/home2.jpeg",
    "/images/home3.jpeg",
  ];
  return (
    <div >
      <div className="container-carousel text-center">
        <MainCarousel className="w-75" interval={4000} items={data} />
      </div>
      <section>
        <div class="curve"></div>
      </section>
      <div className="logeen">
        <h1 className="titre">Become part of the AllUnid Family!</h1>
        <div className="joinBtn">
          <NavLink to="/login">
            <button class="button-three">Login!</button>
          </NavLink>
          <NavLink to="/signup">
            <button class="button-three">Signup!</button>
          </NavLink>
        </div>
        {/* <div class="wrap">
            <h1>Squishy-ish Button</h1>
            <input class="btn" type="button" />
            </div> */}
      </div>
    </div>
  );
};

export default Home;
