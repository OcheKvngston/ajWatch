import React from 'react'
import "./style.css";
import Cardss from './Cardss';
import Pic from "./download__1_-removebg-preview.png"
import Snap from "./download__2_-removebg-preview.png"
import Shot from "./wat-removebg-preview.png"

const Product = () => {

  const Data = [
    {
      id:1,
      title:"DJI Mavic Pro",
      image:<img src={Pic} alt='yellow'/>,
      bg:"rgb(235, 247, 135)"
    },
    {
      id:2,
      title:"DJI Phantom",
      image:<img src={Snap} alt='red'/>,
      bg:"#fce7de"
    },
    {
      id:3,
      title:"Mavic Air Two",
      image:<img src={Shot} alt='blue'/>,
      bg:"rgb(46, 197, 243)"
    }
  ]
  
  return (
    <div>
        <div className='hero_holder'>
            <div className='hero_case'>
                <div className='img_holder'>
                    <div className='circle_holder'></div>
                </div>
                <div className='text_holder'>
                  <div className='holder'>
                    Best and Fashionable <br/> Watch For Easy Life
                    <div className='line'></div>
                  </div>
                  <div className='holder2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                  </div>
                  <div className='holder3'>Shop Now</div>
                </div>
            </div>
        </div>
        <div className='write'>
          <div className='hold_special'>
            <div className='content'>
                Our Awesome Product Choose Best One
            </div>
            <div className='line2'></div>
          </div>
        </div>
        <div className='card_holder'>
        {
          Data.map((props)=>(
            <Cardss title={props.title} image={props.image} bg={props.bg} />
          ))
        }
        </div>
    </div>
  )
}

export default Product