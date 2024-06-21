import React, { useState } from 'react';
import Navbar from "./component/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './component/Footer';
import LoginPopup from './component/LoginPopup';
import PaymentSuccessfull from './pages/PaymentSuccessfull';
import Myorders from './pages/Myorders';
import { AllgetFoods } from './component/AllgetFoods';

const App = () => {

  const[showlogin, setShowlogin] = useState(false);

  return (
    <>
    {
      showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>
    }
    <div className='app'>
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/done' element={<PaymentSuccessfull />} />
        <Route path='/myorders' element={<Myorders />} />
        <Route path='/orderonline' element={<AllgetFoods/>}/>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App