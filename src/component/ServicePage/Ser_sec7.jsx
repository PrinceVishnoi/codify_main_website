import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { ReactComponent as BriefcaseIcon } from '../HomePage/Home Page Assests/briefcase-solid.svg'
import { ReactComponent as SmileIcon } from '../HomePage/Home Page Assests/users-solid.svg'
import { ReactComponent as ClockIcon } from '../HomePage/Home Page Assests/calendar-days-solid.svg'
import { ReactComponent as BoxIcon } from '../HomePage/Home Page Assests/cubes-solid.svg'
import img1 from "./Assests/team.png"
export default function Ser_sec7() {
  return (
    <> 
    <section id="Third-Section" className="bg-light" style={{height:'390px',display:'flex',alignItems:'center',backgroundColor:'#ebebeb'}}>
      <MDBContainer>
      <div style={{ marginTop: "30px" , marginBottom:"100px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "10px",
            }}
          >
            <h1>Glimpse Of Our Work And Presence
</h1>
          </div>
          <hr/>
            <p  style={{
              color: "gray",
              marginBottom:"55px"
            }}>Here, we make almost every genre of applications. You name it and we build it.</p>
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
              {/* <img src={img1} className="text-primary" width="80" height="100" alt='..'/> */}
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
        </div>
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
