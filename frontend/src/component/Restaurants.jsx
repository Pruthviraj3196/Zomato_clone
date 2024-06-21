import React from "react";
import "./Restaurants.css";
import { useNavigate } from "react-router-dom";


export const Restaurants = () => {
    const naviagte = useNavigate()

  return (
    <>
    <div className="threesections">
      <div className="container1" onClick={()=>naviagte('/orderonline')}>
        <img
          src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt=""
        />
        <h2>Order online</h2>
        <p>Stay Home and order to your d...</p>
      </div>
      <div className="container1" onClick={()=>naviagte('/orderonline')} >
        <img
          src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt=""
        />
        <h2>Dining</h2>
        <p>Views Citys favourite dining..</p>
      </div>
      <div className="container1" onClick={()=>naviagte('/orderonline')} >
        <img
          src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt=""
        />
        <h2>nightLife and Clubs</h2>
        <p>Explore the city best nig...</p>
      </div>
    </div>
    <div>
      <h2 style={{marginLeft:50, marginTop:30}}>Popular localities in and around Pune</h2>
        <div className="collections">
            <div className="places">
                <h2>Baner</h2>
                <p>650 places</p>
            </div>
            <div className="places">
                <h2>Wakad</h2>
                <p>625 places</p>
            </div>
            <div className="places">
                <h2>Balewadi</h2>
                <p>600 places</p>
            </div>
            <div className="places">
                <h2>Akudi</h2>
                <p>250 places</p>
            </div>
            <div className="places">
                <h2>Viman Nagar</h2>
                <p>550 places</p>
            </div>
            <div className="places">
                <h2>Koregoan Park</h2>
                <p>680 places</p>
            </div>
            <div className="places">
                <h2>Khardi</h2>
                <p>150 places</p>
            </div>
            <div className="places">
                <h2>Kothrud</h2>
                <p>764 places</p>
            </div>
            <div className="places">
                <h2>See More</h2>
                <p>650 places</p>
            </div>
        </div>
    </div>
    </>

  );
};
