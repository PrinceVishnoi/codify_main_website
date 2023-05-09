import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import "./Ser_sec5.css";
import { FaRegHandshake, FaCity } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";
import { MdOutlineReduceCapacity } from "react-icons/md";

function Ser_sec5() {
  return (
    <>
      <div className="background-image-sec5">
        <div className="centered-text-sec5">
          <div className="row">
            <div className="col-md-4 text-white sec5_part1 ">
              <h1  style={{textShadow: "2px 2px 5px #03b2cb" , marginTop:"50px"}}>How We Work With</h1>
              <p className="text-start" style={{letterSpacing:"1px"}}>
              As a leading Web development company in  India, we worked with 2000+ businesses either it is a start-up or enterprise and delivers the best solution in the industry. At Hyperlink InfoSystem, we offer a broad range of app development services based on business requirements.
              </p>
            </div>
            <div
              className="col-md-8"
              style={{
                width: "60%",
              }}
            >
              <div className="card-group-sec5">
                <div className="card_sec5">
                  <div className="icon_sec5" style={{color:"#6610f2"}}>
                    <FaRegHandshake />
                  </div>
                 
                  <div className="card-body">
                    <h4 className="card-title">Start Up Business</h4>
                  </div>
                </div>
                <div className="card_sec5">
                  <div className="icon_sec5">
                    <FcComboChart />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Small & Medium Business</h4>
                  </div>
                </div>
                <div className="card_sec5">
                  <div className="icon_sec5"  style={{color:"#cb1ac5"}}>
                    <MdOutlineReduceCapacity />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Enterprise</h4>
                  </div>
                </div>
                <div className="card_sec5">
                  <div className="icon_sec5"  style={{color:"#ffc107"}}>
                    <FaCity />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Agencies</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ser_sec5;
