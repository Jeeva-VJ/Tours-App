import React from 'react';
import logos from '../Assets/world.png';
import img1 from '../Assets/hero-img01.jpg'
import video from '../Assets/hero-video.mp4'
import img2 from '../Assets/hero-img02.jpg'
import boy from '../Assets/experience.png';
import gallery from '../Assets/gallery-01.jpg'
import winter from '../Assets/gallery-02.jpg'
import green from '../Assets/gallery-03.jpg'
import travel from '../Assets/gallery-04.jpg'
import tower from '../Assets/gallery-05.jpg'
import bagboy from '../Assets/gallery-06.jpg'
import sun from '../Assets/gallery-07.jpg'
import road from '../Assets/gallery-08.jpg'
import tour from '../Assets/male-tourist.png'
import CarouselSlider from './CarouselSlider';
import { FaSearch } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { MdOutlineEngineering } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div>
        <div className='main'>
          <div>
            <p><span id='you'>Know before you go</span><img id="map" src={logos} alt="" /></p>
            <h1>Travelling opens <br /> the doors to <br /> creating <span id='me'>memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Voluptate reiciendis voluptates esse quisquam incidunt <br />
              ducimus.Doloremque nostrum, qui animi laudantium   <br />
              minima quae iure rem ducimus illo distinctio iusto iste. <br />quasi labour.</p>
          </div>
          <div>
            <img className='Heroimg' src={img1} alt="" />
            <video controls id='two' src={video}></video>
            <img className='Heroimg' src={img2} alt="" id='Heroimg' />
          </div>
        </div>
        <div className='ten'>
          <div className='Icon_search'>
            <h5 id='Loc-1'><CiLocationOn id='color' />Location </h5>
            <input id='par-1' type="text" placeholder='Where are you going?' />
          </div>
          <div className='Icon_search1'>
            <h5 id='Loc-1'> <CiLocationOn id='color' /> Distance  </h5>
            <input id='par-1' type="text" placeholder='Where are you going?' />
          </div>
          <div className='Icon_search'>
            <h5 id='Loc-1'> <LuUsers2 id='color' />Max People </h5>
            <input id='par-1' type="number" value="0" placeholder='Where are you going?' mi />
          </div>
          <div className='it'>
            <span className='types'><FaSearch /></span>
          </div>
        </div>
        <div className='services'>
          <div className='libery'>
            <h6 id='head'>What we sevve</h6>
            <h2>We offer our <br />best service</h2>
          </div>
          <div className='react'>
            <TiWeatherPartlySunny id='weather' />
            <h3>Calculate weather</h3>
            <p>Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipisicing elit. Asperiores  <br />
              enim placeat est voluptates <br />
              atque</p>
          </div>
          <div className='react'>
            <LiaNetworkWiredSolid id='weather' />
            <h3>Best tour guide</h3>
            <p>Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipisicing elit. Asperiores  <br />
              enim placeat est voluptates <br />
              atque</p>
          </div>
          <div className='react'>
            <MdOutlineEngineering id='weather' />
            <h3>Customization</h3>
            <p>Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipisicing elit. Asperiores  <br />
              enim placeat est voluptates <br />
              atque</p>
          </div>
        </div>
        <div className='featured'>
          <div>
            <h6 id='explore'>Explore</h6>
            <h3>Our featured tours</h3>
          </div>
        </div>
        <div className='boy-1' >
          <div>
            <div>
              <h6 id='exp'>Experience</h6>
              <h3>With our all experience <br />we will serve you</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Minus distinctio rerum nulla, culpa ducimus quis maiores ad </p>
            </div>
            <div className='exp-3'>
              <div >
                <h4 id='one-k'>12k+</h4><p>Successfull <br />Trips</p>
              </div>
              <div>
                <h4 id='one-k'>2k+</h4><p>Regular <br />clients</p>
              </div>
              <div>
                <h4 id='one-k'>15</h4><p>Years <br />experience</p>
              </div>
            </div>
          </div>
          <div>
            <img src={boy} alt="" />
          </div>
        </div>
        <div className='enjoy'>
          <div>
            <h5 id='gallery'>Gallery</h5>
            <h2>Visit our customers tour gallery</h2>
          </div>
          <div className='section-1'>
            <img id='beach-1' src={gallery} alt="" />
            <img id='beach-2' src={winter} alt="" />
            <img id='beach-3' src={green} alt="" />
            <img id='beach-4' src={travel} alt="" />
            <img id='beach-5' src={tower} alt="" />
            <img id='beach-6' src={bagboy} alt="" />
            <img id='beach-7' src={sun} alt="" />
            <img id='beach-8' src={road} alt="" />
          </div>
        </div>
        <CarouselSlider />
        <div>
          <div className='blue'>
            <div className='now'>
              <h3 >Subscribe now for usefull travelling information. <br /></h3>
              <input type="text" placeholder="Enter your email" id='toy' /> <br />
              <button id='btn'>Subscribe</button>
              <p>Lorem ipsum dolor, sit amet consectetur  <br />Ouia odio iure quasi Deserent,similique in!</p>
            </div>
            <div>
              <img id='tourist' src={tour} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
