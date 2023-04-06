import React from 'react';
import "./style.css";
import { AiOutlineLock } from 'react-icons/ai';

const Header = () => {
  return (
    <div>
      <div className='headcom'>
        <div className='my-hold'>
          <div className='logocon'>
            ajWatch
          </div>
          <div className='navigation'>
            <div className='nav'>Home</div>
            <div className='nav'>Features</div>
            <div className='nav'>Product</div>
            <div className='nav'>Reviews</div>
            <div className='nav'>Blog</div>
            <div className='iconnav'>
              <AiOutlineLock
                style={{
                  color:"white",
                  fontSize:"25px"
                }}
              />
            </div>
          </div>
        </div>
      
      </div>
     
    </div>
  )
}

export default Header