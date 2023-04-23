import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Video from '../Home Page Assests/MainPageVideo.mp4'

export default function FrontPage() {
  return (
    <>
      <div id="maindiv" style={{ position: 'relative', height: '700px', textAlign: 'center' }}>
        <video src={Video} autoPlay loop muted style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} alt="Custom Web Development, App Development, and UI/UX Design Services video"></video>
        <h1 style={{ fontSize: '5vw', padding: '15vw 40px 10px 40px', lineHeight: '6.5vw', color: '#02042b', letterSpacing: '-2px', position: 'relative', zIndex: 1 }}>
          Custom Web Development, App Development, and UI/UX Design Services
        </h1>
        <MDBBtn id="callNowBtn" className="text-light" style={{ width: '250px', height: '60px', borderRadius: '50px', fontSize: 'large', fontWeight: '600', position: 'relative', zIndex: 1, backgroundColor: '#02042b', fontFamily: 'roboto' }}>
          Call Now
        </MDBBtn>
      </div>
      <style>
        {`
          /* CSS media query to adjust font size for small screens */
          @media (max-width: 768px) {
            h1 {
              font-size: 50px !important;
              line-height: normal !important;
            }
            #callNowBtn {
              height: 48px !important;
              width: 170px !important;
            }
          }
        `}
      </style>
    </>
  );
}
