import React, { useState } from 'react';
import ExploreMenu from './ExploreMenu';
import FoodDisplay from './FoodDisplay';


export const AllgetFoods = () => {
    const [category, setCategory] = useState("All");

  return (
    <>
    <div className='allgetfoods'>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
    </div>
    </>
  )
}
