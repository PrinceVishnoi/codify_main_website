import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

} from "mdb-react-ui-kit";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const data = [
  {
    icon: <TbDeviceDesktopAnalytics />,
    title: "Web Development",
    text: " Our highly skilled developers have proficient expertise in the latest technology and trends. We worked with global firms to transform recognized ideas into stunning & inventive websites. ",
  },
  {
    icon: <CiMobile3 />,
    title: "App Development",
    text: "The smartphone Apps have changed the definition of every day activity in human life. We have top mobile app developers who are highly skilled and updated with the latest technology trend. ",
  },
  {
    icon: <AiOutlineShoppingCart />,
    title: "Ecommerce Development",
    text: "E-Commerce websites transform businesses and help them to expand for the growth of the company. Match your needs and preferences with E-Commerce websites.",
  },
  {
    icon: <TbDeviceDesktopAnalytics />,
    title: "Web Development",
    text: " Our highly skilled developers have proficient expertise in the latest technology and trends. We worked with global firms to transform recognized ideas into stunning & inventive websites. ",
  },
  {
    icon: <CiMobile3 />,
    title: "App Development",
    text: "The smartphone Apps have changed the definition of every day activity in human life. We have top mobile app developers who are highly skilled and updated with the latest technology trend. ",
  },
  {
    icon: <AiOutlineShoppingCart />,
    title: "Ecommerce Development",
    text: "E-Commerce websites transform businesses and help them to expand for the growth of the company. Match your needs and preferences with E-Commerce websites.",
  },
];

export default function Ser_sec4() {
  return (
    <>
      <div style={{ marginTop: "120px" }}>
      <div style={{display:"flex" , justifyContent:"center" , color:"#03b2cb"}}>
        <hr style={{width:"60%" , height:"3px" }}/>
      </div>
        <div style={{ display: "flex", justifyContent: "center"  , marginTop:"20px"}}>
          <h1>Services We Offer</h1>
        </div>
        <div style={{ display: "flex", justifyContent:"space-evenly" , flexWrap:"wrap" , marginTop:"60px" , rowGap:"20px" }}>
          {data.map((item, idx) => {
            return (
              <>
                <div style={{ width: "30%" }} key={idx}>
                  <MDBCard style={{ height: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <div style={{ color: "#03b2cb", fontSize: "80px" }}>
                        {item.icon}
                      </div>
                    </div>
                    <MDBCardBody>
                      <MDBCardTitle>{item.title}</MDBCardTitle>
                      <MDBCardText>{item.text}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
