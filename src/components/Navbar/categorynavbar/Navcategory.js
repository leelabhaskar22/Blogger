import React, { useState } from 'react'
import "./style.css"
import { useMainContext } from '../../../context/CategoryContext';
const Navcategory = () => {
  const { main, setMain } = useMainContext();
  return (
    <div className='container'>
      <div className='links'>
        <p onClick={() => setMain('foryou')}>For you {main === 'foryou'? <hr /> : <></>}</p>
        <p onClick={() => setMain('trending')}>Trending {main === 'trending'? <hr /> : <></>}</p>
        <p onClick={() => setMain('following')}>Following {main === 'following'? <hr /> : <></>}</p>
      </div>
    </div>
  )
}

export default Navcategory