import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        {/* <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div> */}
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                BitBuilders Technologies
              </h6>
              <p>
              We're here to listen! Whether you have a question, want to discuss a project, or simply want to say hello, we're all ears. You can reach us by phone, email, or by filling out the contact form on this page. 
              We'll get back to you as soon as possible!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  App Development
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Web Development
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  UI & Ux Design
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Business Consultation 
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Explore More</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Portfolio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Testimonials
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Our Team
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Farrukhabad, 209724
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@codifyltd.in
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 6386693684
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 7753914103
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          BitBuilders Technologies Pvt Ltd
        </a>
      </div>
    </MDBFooter>
  );
}