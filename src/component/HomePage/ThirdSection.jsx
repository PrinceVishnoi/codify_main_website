import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { ReactComponent as BriefcaseIcon } from '..//Imgaes/briefcase-solid.svg'
import { ReactComponent as SmileIcon } from '..//Imgaes/users-solid.svg'
import { ReactComponent as ClockIcon } from '..//Imgaes/calendar-days-solid.svg'
import { ReactComponent as BoxIcon } from '..//Imgaes/cubes-solid.svg'

export default function ThirdSection() {
  return (
    <> 
    <section id="Third-Section" className="bg-light" style={{height:'300px',display:'flex',alignItems:'center',backgroundColor:'#ebebeb'}}>
      <MDBContainer>
        <MDBRow className="g-4">
          <MDBCol md={3} sm={6}>
            <div className="text-center d-flex flex-column align-items-center">
              <BriefcaseIcon className="text-primary" width="60" height="60" />
              <h2 className="fw-bold mt-3 mb-0">21+</h2>
              <p className="text-muted mb-0">Projects Completed</p>
            </div>
          </MDBCol>
          <MDBCol md={3} sm={6}>
            <div className="text-center d-flex flex-column align-items-center">
              <SmileIcon className="text-primary" width="60" height="60" />
              <h2 className="fw-bold mt-3 mb-0">20+</h2>
              <p className="text-muted mb-0">Satisfied Customers</p>
            </div>
          </MDBCol>
          <MDBCol md={3} sm={6}>
            <div className="text-center d-flex flex-column align-items-center">
              <ClockIcon className="text-primary" width="60" height="60" />
              <h2 className="fw-bold mt-3 mb-0">2+</h2>
              <p className="text-muted mb-0">Years of experience</p>
            </div>
          </MDBCol>
          <MDBCol md={3} sm={6}>
            <div className="text-center d-flex flex-column align-items-center">
              <BoxIcon className="text-primary" width="60" height="60" />
              <h2 className="fw-bold mt-3 mb-0">25+</h2>
              <p className="text-muted mb-0">Products delivered</p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    <style>
  {`
    /* CSS media query to adjust image height for small screens */
    @media (max-width: 768px) {
      #Third-Section{
        height: 680px !important;
      }
    }
  `}
</style>
    </>
  )
}
