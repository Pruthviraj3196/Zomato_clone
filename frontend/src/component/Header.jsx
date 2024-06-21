import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Zomato</h2>
        <h2>Order your fav food from here</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus praesentium explicabo, maiores, odio dicta ullam vitae rem asperiores nisi cupiditate molestiae non accusantium distinctio inventore architecto aliquam qui nihil deleniti.</p>
       <input type="text"  placeholder='Search for restaurant,cuisine or a dish'/>
      </div>
    </div>
  )
}

export default Header