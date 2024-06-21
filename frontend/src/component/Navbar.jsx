import React, { useContext, useState } from 'react';
import "./Navbar.css";
import {assets} from "../assets/assets"
import {Link, useNavigate} from "react-router-dom";
import {StoreContext} from "../context/StoreContext"

const Navbar = ({setShowlogin}) => {

  const [menu, setMenu] = useState("home");

  const{getTotalCartAmount,token, setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo-700x394.png" alt="" className="log" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("home")} className={menu === 'home'?'active':""} >Home</Link>
        <a href='#exploremenu' onClick={()=> setMenu("menu")} className={menu === 'menu'?'active':""}>Menu</a>
        <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu === 'mobile-app'?'active':""}>Mobile-App</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu === 'contact-us'?'active':""}>Contact-Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
           <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
           <div className={getTotalCartAmount()===0?"":"dot"}>

           </div>
        </div>
        {!token?
        <button onClick={()=>setShowlogin(true)}>SignIn</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={()=> navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
          </ul>
        </div>
      }
        
      </div>
    </div>
  )
}

export default Navbar