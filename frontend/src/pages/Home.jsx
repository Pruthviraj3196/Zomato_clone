import React, { useState } from 'react';
import "./Home.css";
import Header from '../component/Header';
import ExploreMenu from '../component/ExploreMenu';
import FoodDisplay from '../component/FoodDisplay';
import AppDownload from '../component/AppDownload';
import { Restaurants } from '../component/Restaurants';

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
     <Header />
     <Restaurants />
     <ExploreMenu category={category} setCategory={setCategory} />
     <FoodDisplay category={category} />
     <AppDownload />
    </div>
  )
}

export default Home