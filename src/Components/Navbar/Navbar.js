import React, {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

    // function animation(){
    //     var tabsNewAnim = $('#navbarSupportedContent');
    //     var activeItemNewAnim = tabsNewAnim.find('a.active');
    //     var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    //     var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    //     var itemPosNewAnimTop = activeItemNewAnim.position();
    //     var itemPosNewAnimLeft = activeItemNewAnim.position();
    //     $('.hori-selector').css({
    //         "top":itemPosNewAnimTop.top + "px",
    //         "left":itemPosNewAnimLeft.left + "px",
    //         "height":activeWidthNewAnimHeight + "px",
    //         "width":activeWidthNewAnimWidth + "px"
    //     });
    //     $("#navbarSupportedContent").on("click", "li", function(e){
    //         $('#navbarSupportedContent ul li').removeClass("active");
    //         $(this).addClass('active');
    //         var activeWidthNewAnimHeight = $(this).innerHeight();
    //         var activeWidthNewAnimWidth = $(this).innerWidth();
    //         var itemPosNewAnimTop = $(this).position();
    //         var itemPosNewAnimLeft = $(this).position();
    //         $(".hori-selector").css({
    //             "top":itemPosNewAnimTop.top + "px",
    //             "left":itemPosNewAnimLeft.left + "px",
    //             "height":activeWidthNewAnimHeight + "px",
    //             "width":activeWidthNewAnimWidth + "px"
    //         });


    //     });

    // }

    useEffect(() => {

        // animation();
        $(window).on('resize', function(){
            // setTimeout(function() { animation();}, 500);
        });
    }, []);

    return (
        <nav className="navbar navbar-mainbg navbar-expand-lg" >
            <NavLink className="navbar-brand navbar-logo botright" to="/" exact>
                AllUnid
            </NavLink>
            {/* <button className="navbar-toggler" onClick={function(){setTimeout(function(){animation();});}} type="button" data-toggle="collapse"  */}

            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle Navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    {/* <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div> */}
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/shop" exact>
                            <span>Shop</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/used" exact>
                            <span>Used</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" exact>
                            <span>Contact Us</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup" exact>
                            <span>Sign Up</span>
                        </NavLink>
                    </li>
                    
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favorites" exact>
                            <i className="fas fa-heart"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart" exact>
                            <i className="far fa-shopping-cart"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/account" exact>
                            <i className="fas fa-user-alt"></i>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;