import React from 'react'
import tour from '../Assets/male-tourist.png'

function Subscribe() {
  return (
    <div>
      <div className='blue'>
              <div className='now'>
                <h3 >Subscribe now for usefull travelling information. <br /></h3>
                <span>
                  <input className='bg-light border-none' type="text" placeholder="Enter your email" id='toy' />
                  <button id='welcome'>Subscribe</button>
                </span>

                <p>Lorem ipsum dolor, sit amet consectetur  <br />Ouia odio iure quasi Deserent,similique in!</p>


              </div>
              <div>
                <img id='tourist' src={tour} alt="" />
              </div>
            </div>
    </div>
  )
}

export default Subscribe;
