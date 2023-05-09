import React from "react";
import "./Ser_sec6.css";
import { MDBContainer } from "mdb-react-ui-kit";
import Card1 from "./Assests/ecommerce-website.png";
import Card2 from "./Assests/concept-based-photo-illustration-of-graduation.png";
import Card3 from "./Assests/medical-chat.png";
import Card4 from "./Assests/share.png";
import Card5 from "./Assests/food-vlogger.gif";
import Card6 from "./Assests/people-building-metaverse.png";
import Card7 from "./Assests/travelling-concept-with-luggage-flight-ticket-and-holiday-location.png";
import Card8 from "./Assests/puzzle.png";
import Card9 from "./Assests/concept-of-achievement-with-trophy-and-medal.png";
function Ser_sec6() {
  const data = [
    {
      icon: Card1,
      text: "Retail, Ecommercet",
      color: "#dc3545",
    },
    {
      icon: Card2,
      text: "Education & e-learning",
      color: "#007bff",
    },
    {
      icon: Card3,
      text: "Healthcare & Fitness",
      color: "#dc3545",
    },
    {
      icon: Card4,
      text: "Social Networking",
      color: "#6610f2",
    },
    {
      icon: Card5,
      text: "Food & Restaurant",
      color: "#ffc107",
    },
    {
      icon: Card7,
      text: "Travel & Hospitality",
      color: "#6f42c1",
    },
    {
      icon: Card6,
      text: "Real Estate",
      color: "#20c997",
    },
    {
      icon: Card8,
      text: "On-Demand Solutions",
      color: "#fd7e14",
    },
    {
      icon: Card9,
      text: "Gaming",
      color: "#fd7e14",
    },
  ];
  return (
    <>
   
      <MDBContainer className="px-5">
        <div style={{ marginTop: "30px" , marginBottom:"50px"  }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "10px",
            }}
          >
            <h1>Industries We Serve</h1>
          </div>
          <hr/>
            <p  style={{
              color: "gray",
            }}>Here, we make almost every genre of applications. You name it and we build it.</p>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#03b2cb",
            }}
          >
            <hr style={{ width: "30%", height: "3px" }} />
          </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              marginTop: "40px",
              rowGap: "0px",
            }}
          >
            {data.map((item, idx) => {
              return (
                <>
                  <div className="container_sec6" key={idx}>
                    <div className="card_sec6">
                      <div className="image_sec6">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "white",
                            borderRadius: "15px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "140px",
                              alignItems: "center",
                              display: "contents",
                            }}
                          >
                            <img src={item.icon} width="68%" alt=".." />
                          </div>
                        </div>
                      </div>
                      <div className="content_sec4">
                        <h3>{item.text}</h3>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
           
      </MDBContainer>
    </>
  );
}

export default Ser_sec6;
