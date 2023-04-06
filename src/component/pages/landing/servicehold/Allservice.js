import React from 'react';
import "./style.css";
import ServiceCard from './ServiceCard';

const Allservice = () => {
  
  const Data = 
  [
    {
      id:1,
      title : "Voice Assistant"
    },
    {
      id:2,
      title: "Install Android Apps"
    },
    {
      id:3,
      title: "Call & SMS Alert"
    },
    {
      id:4,
      title: "Interact Design"
    },
    {
      id:5,
      title: "Wireless Freedom"
    },
    {
      id:6,
      title: "Noise Cancelling"
    },
  ]
  return (
    <div>
        <div className='service_main'>
            <div className='service_contain'>
            {Data.map((props)=>(
              <ServiceCard title={props.title}/>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Allservice