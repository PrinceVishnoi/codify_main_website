import React from 'react';
import ImageApp from '../Home Page Assests/ScrollApp.png'
import Dashboard from '../Home Page Assests/Dashboard.png'
import UIUX from '../Home Page Assests/UI UX DESIGN.png'
import './SecondMainSectionText.css'
export default function SecondMainSectionText() {
  return (
    <>
    <div style={{backgroundColor:'black'}}>
    <div className='container'>
        <div className='row align-items-center'>
          <div className='col' style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none',scrollBehavior:'smooth',overflowY:'scroll'}}>
           <div className='row'>
           <div className='col-md-6' style={{display: 'flex', flexDirection:'column'}}>
            <h3 style={{fontSize: '48px', lineHeight: 1.5, marginBottom: 0,alignItems:'flex-start', color:"#ffffff",fontWeight:'550',marginTop:'50px'}}>
            APP DEVELOPMENT.
            </h3>
            <p style={{alignItems:'flex-start', marginTop:'7px',color:'white',fontSize:'15px',lineHeight:'35px'}}>
            We specialize in custom app development for iOS and Android platforms, utilizing native and hybrid development methods with various programming languages and frameworks. Our cross-platform approach allows for wider reach, while our UI and UX design ensures an engaging and intuitive experience for users. Our team also offers ongoing app maintenance and support to keep your app functioning at its best.
            </p>
          </div>
            <div className='col-md-6'>
                  <img src={ImageApp} alt='AppDevelopemnt.jpg' style={{height:'370px'}}></img>
            </div>
            </div>
            <div className='row' style={{marginTop:'10px'}}>
            <div className='col-md-6'>
            <img src={Dashboard} alt='AppDevelopemnt.jpg' style={{height:'370px'}}></img>
            </div>
            <div className='col-md-6' style={{display: 'flex', flexDirection:'column'}}>
            <h3 style={{fontSize: '48px', lineHeight: 1.5, marginBottom: 0,alignItems:'flex-start', color:"#ffffff",fontWeight:'550',marginTop:'35px'}}>
            WEB DEVELOPMENT.
            </h3>
            <p style={{alignItems:'flex-start', marginTop:'7px',color:'white',fontSize:'15px',lineHeight:'35px'}}>
            We specialize in custom website design and development, using the latest technologies and frameworks. Our e-commerce solutions help businesses sell their products and services online, while our content management systems make it easy to manage website content and updates. Our responsive design ensures that your website looks great on all devices, and we offer search engine optimization services to help improve your website's visibility in search engine results pages.
            </p>
          </div>
            </div>
            <div className='row' style={{marginTop:'15px'}}>
            <div className='col-md-6' style={{display: 'flex', flexDirection:'column'}}>
            <h3 style={{fontSize: '48px', lineHeight: 1.5, marginBottom: 0,alignItems:'flex-start', color:"#ffffff",fontWeight:'550'}}>
            UI & UX DESIGNING.
            </h3>
            <p style={{alignItems:'flex-start', marginTop:'7px',color:'white',fontSize:'15px',lineHeight:'35px'}}>
            Our custom UI/UX design is tailored to align with your brand's vision and business goals. We focus on creating engaging and memorable user experiences that keep users coming back. Attention to detail is a cornerstone of our design process, from choosing the right color schemes and typography to selecting user interface elements. Our designs are not only aesthetically pleasing but also functional and intuitive, ensuring that users can easily navigate your website or app.            </p>
          </div>
            <div className='col-md-6'>
            <img src={UIUX} alt='AppDevelopemnt.jpg' style={{height:'370px'}}></img>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
  {`
    /* CSS media query to adjust image height for small screens */
    @media (max-width: 768px) {
      h3 {
        font-size: 35px !important;
      }
    }
    
    /* CSS media query to adjust image height for medium screens */
  `}
</style>
    </>
  );
}
