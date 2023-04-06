import React from 'react'
import "./style.css"
import { RiStarSLine } from 'react-icons/ri';
import { RiStarSFill } from 'react-icons/ri';

const Cardss = (props) => {
  return (
    <div>
         <div className='card'>
            <div className='img_holding' style={{backgroundColor: props.bg}}>
                {props.image}
            </div>
            <div className='text1'>
              {props.title} 
            </div>
            <div className='next'>
                <div className='icon'>
                <RiStarSFill
                    style={{
                        color:"orangered"
                    }}
                /><RiStarSFill
                style={{
                    color:"orangered"
                }}
                /><RiStarSFill
                style={{
                    color:"orangered"
                }}
                /><RiStarSFill
                style={{
                    color:"orangered"
                }}
                /><RiStarSLine
                style={{
                    color:"orangered"
                }}
                /> &nbsp; 5.0 (2 Ratings)
                </div>
                <div style={{
                        color:"orangered",
                        fontWeight:"600"
                    }}>
                    $800.00
                </div>
                <div className='btn'>
                    <buttton>BUY NOW</buttton>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Cardss