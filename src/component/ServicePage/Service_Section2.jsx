// import React from "react";
// import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
// import { color } from "framer-motion";

// export default function App() {
//   return (
//     <MDBContainer className="px-5" style={{ height: "40vh" }}>
//       <MDBRow className="gx-2 mt-5">
//         <MDBCol>
//           <div className="p-3 mt-5">
//             <h2>
//               <span
//                 style={{
//                   fontWeight: "200",
//                   fontSize: "50px",
//                   letterSpacing: "7px",
//                 }}
//               >
//                 DEVELOP TRULY <br /> UNIQUE
//               </span>

//               <br />
//               <span
//                 style={{
//                   color: "#03b2cb",
//                   fontWeight: "300",
//                   fontSize: "50px",
//                   marginTop: "10px",
//                   letterSpacing: "6px",
//                 }}
//               >
//                 WEB EXPERIENCES
//               </span>
//             </h2>
//           </div>
//         </MDBCol>
//         <MDBCol>
//           <div
//             className="p-5 mt-5"
//             style={{
//               fontSize: "22px",
//               fontFamily: "'Raleway', sansSerif",
//               fontFamily: "'Ubuntu', sansSerif",
//               letterSpacing:"1px",
//               color:"#06111"
//             }}
//           >
//             Build user-centric websites and web applications using our unique
//             development processes and our skilled team of developers and
//             designers.
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }


import React from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { color } from "framer-motion";

export default function App(props) {
  return (
    <MDBContainer className="px-5" style={{ height: "40vh" }}>
      <MDBRow className="gx-2 mt-5">
        <MDBCol className="col-12 col-md-6">
          <div className="p-3 mt-5">
            <h2 >
              <span
                style={{
                  fontWeight: "200",
                  fontSize: "50px",
                  letterSpacing: "7px",
                }}
              >
                {props.text1} <br /> {props.text2}
              </span>

              <br />
              <span
                style={{
                  color: "#03b2cb",
                  fontWeight: "400",
                  fontSize: "50px",
                  marginTop: "10px",
                  letterSpacing: "6px",
                }}
              >
                {props.text3}
              </span>
            </h2>
          </div>
        </MDBCol>
        <MDBCol className="col-12 col-md-6">
          <div
            className="p-5 mt-5"
            style={{
              fontSize: "22px",
              fontFamily: "'Raleway', sansSerif",
              fontFamily: "'Ubuntu', sansSerif",
              letterSpacing:"1px",
              color:"#06111"
            }}
          >
            {props.text4}
          </div>
        </MDBCol>
      </MDBRow>
      <style>
        {`
          @media (max-width: 767px) {
            .col-md-6 {
              width: 100%;
              max-width: 100%;
              flex: none;
              font-size: 10px;
              letter-spacing: 1px;

            }
          }
        `}
      </style>
    </MDBContainer>
  );
}
