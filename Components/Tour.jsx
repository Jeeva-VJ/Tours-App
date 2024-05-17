import React from 'react';
import banner from '../Assets/tour.jpg'
// import tour from '../Assets/male-tourist.png'
import { FaSearch } from "react-icons/fa";
import Footer from './Footer';
import Subscribe from './Subscribe';

const Tour = () => {
  return (
    <>

      <div>
        <div>
          <img id='all' src={banner} alt="" />
          <h3 id='to'>All Tours</h3>
          <div className='ten'>
            <div className='Icon_search'>
              <h5 id='Loc-1'> <i id='icon-1' class="fa-solid fa-location-dot"></i>Location </h5>
              <input id='par-1' type="text" placeholder='Where are you going?' />
            </div>
            <div className='Icon_search1'>
              <h5 id='Loc-1'> <i id='icon-1' class="fa-regular fa-compass"></i> Distance  </h5>
              <input id='par-1' type="text" placeholder='Where are you going?' />
            </div>
            <div className='Icon_search'>
              <h5 id='Loc-1'> <i id='icon-1' class="fa-solid fa-users"></i>Max People </h5>
              <input id='par-1' type="number" value="0" placeholder='Where are you going?' />

            </div>
            <div className='it'>
              <span className='types'><FaSearch /></span>

            </div>
          </div>
          <div>
            <Subscribe />
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Tour;
