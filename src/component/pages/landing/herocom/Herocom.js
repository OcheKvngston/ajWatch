import React from 'react';
import "./style.css";
import pic from "./images-removebg-preview.png"

const Herocom = () => {
  return (
    <div>
        <div className='main-hero'>
            <div className='hero-hold'>
                <div className='first'>
                   <div className='title_con'>
                        <h1>Smart Digital Watch For Luxurious Life</h1>
                   </div>
                   <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, repeat predefined chunks as necessary, making this the first true the Internet.making this the first true generator on the Internet.</p>
                   <div className='button'>
                        <div className='order'>Order Now</div>
                        <div className='watch'>Watch Video</div>
                   </div>
                </div> 
                <div className='second'>
                    <div className='circleCon'>
                        <img src={pic}/>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Herocom