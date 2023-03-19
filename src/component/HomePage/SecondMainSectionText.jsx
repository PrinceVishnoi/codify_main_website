import React from 'react';
import ImageApp from '../Imgaes/ScrollApp.png'
import Dashboard from '../Imgaes/Dashboard.png'
import UIUX from '../Imgaes/UI UX DESIGN.png'
import './SecondMainSectionText.css'
export default function SecondMainSectionText() {
  return (
    <>
    <div style={{backgroundColor:'white'}}>
    <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6' style={{display: 'flex', alignItems: 'center'}}>
            <h3 style={{fontSize: '1.5rem', lineHeight: 1.5, marginBottom: 0}}>
              Unlock the potential of your brand with our custom app development and UI/UX design services. Our experienced team works diligently to deliver beautiful and intuitive applications that meet your specific needs. We provide end-to-end solutions for businesses across industries, ensuring that every detail is taken care of. Explore our portfolio and see for yourself why our clients keep coming back to us
            </h3>
          </div>
          <div className='col-md-6'>
            <div className='row' style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none',scrollBehavior:'smooth',overflowY:'scroll',height:'378px'}}>
            <div className='col'>
                  <img src={ImageApp} alt='AppDevelopemnt.jpg' style={{height:'370px'}}></img>
            </div>
            <div className='col'>
            <img src={Dashboard} alt='AppDevelopemnt.jpg' style={{height:'370px'}}></img>
            </div>
            <div className='col'>
            <img src={UIUX} alt='AppDevelopemnt.jpg' style={{height:'370px'}}></img>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
