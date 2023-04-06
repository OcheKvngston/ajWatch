import React from 'react';
import "./style.css";
import { BsSmartwatch} from 'react-icons/bs'

const ServiceCard = (props) => {
  return (
    <div>
        <div className='card_service'>
          <div className='con_circle'>
            <BsSmartwatch
              style={{
                fontSize:"60px",
              }}
              />
          </div>
          <div className='text_circle'>{
            props.title
          }</div>
          <div className='link_circle'>
              <a href="#">Read More</a>
          </div>
        </div>
    </div>
  )
}

export default ServiceCard