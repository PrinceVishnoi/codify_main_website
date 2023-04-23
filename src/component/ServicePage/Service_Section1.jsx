import React from "react";
import "../ServicePage/services.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { FaDesktop, FaMobile, FaPalette } from "react-icons/fa";


function Service_Section1() {
  return (
    <div className="background-image">
      <div className="centered-text">
        <h1 className="backgroundContaint">End-to-End Custom</h1>
        <h2 className="backgroundContaint2"> Software Solutions</h2>

        <ul className="list">
            <li>
              <FaDesktop className="icon" />
              Web Development
            </li>
            <li>
              <FaMobile className="icon" />
              App Development
            </li>
            <li>
              <FaPalette className="icon" />
              UI&UX Designing
            </li>
          </ul>
          <div style={{display:"flex",justifyContent:"center" , marginTop:"2%" , marginBottom:"2%"}}>
         <div className="backgroundContaint3">Leveraging modern approaches to web development, we bring front-end, back-end, and architecture together to meet your business needs.</div>
         </div>

         <MDBBtn rounded className='mx-2 zoom-in
' color='secondary'  style={{width:"180px" , height:"50px" , fontSize:"15px" , color:"black"}}>
        Get In Touch
      </MDBBtn>
      </div>
    </div>
  );
}

export default Service_Section1;
