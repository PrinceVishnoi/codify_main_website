import React from 'react';
import Image from '../Home Page Assests/MobileScreen.png'
export default function SecondMainSection() {
  return (
    <>
    <div className="main-section" style={{textAlign:'center',backgroundColor:'#00000014',display:'flex',justifyContent:'center'}}>
      <div className="image-container">
        <img src={Image} alt="MobileScreen" style={{height:'850px'}}/>
      </div>
    </div>
    <style>
  {`
    /* CSS media query to adjust image height for small screens */
    @media (max-width: 768px) {
      img {
        height: 260px !important;
      }
    }
    
    /* CSS media query to adjust image height for medium screens */
    @media (min-width: 769px) and (max-width: 1100px) {
      img {
        height: 400px !important;
      }
    }
  `}
</style>
    </>
  );
}