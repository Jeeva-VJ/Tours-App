import React from 'react';
import login from '../Assets/login.png'
import user from '../Assets/user.png'
import Footer from './Footer';


const Register = () => {
  return (
    <>
      <div className='zip-file'>
        <div className='two-in-one'>
          <img id='explain' src={login} alt="" />

          <div className='one-or-two'>
            <img id='user-icon' src={user} alt="" />
            <h3 id='cd'>Register</h3>
            <input id='ef' type="text" placeholder='Email' /> <br /> <br />
            <input id='ef' type="text" placeholder='Password' /> <br /> <br />
            <button id='ait'>Create Account</button>
            <h4 id='ij'>Already have an <br /> account? <span id='kl'>Login</span></h4>
          </div>
        </div>
        <Footer />



      </div>
    </>

  );
}

export default Register;
