import React, { useState } from "react";
import {
  Description,
  Rectangle,
  FlexCol,
} from "../App.components";

const InfoBanner = (title, subtitle, dates,description, image) => {
    const [active, setActive] = useState(0);
    return (
        <Rectangle
          style={{
            marginTop: "10%",color: !active? "#c3acce" : "#ffdab9",
            background: !active? "linear-gradient(130deg,#d0b4ef,#57058b)" : "#57058b"
            
          }}
          onMouseEnter={() => setActive(!active)}
          onMouseLeave={() => setActive(!active)}
        >
          <div
            style={{
              marginLeft: "10%",
              justifyContent: "center",
            alignItems: "center"
            }}
          >
            <img src={image} alt={title} style={{ height: "40vh", width:"40vh"}} />
          </div>
          <FlexCol
            style={{
              marginRight: !active? "20%" : "0%",
              marginLeft: "5%"
            }}
          >
            <p
              style={{
                marginTop: !active ? "20%" : "5%",
                height: !active? "100%" : "20%"
              }}
            >
                {title}
              <br /> {subtitle}<br />
              {dates}
            </p>

            {active? (
              <Description style={{ marginTop: "3vh" }}>
              {description} 
              </Description>
            ) : null}
          </FlexCol>
          </Rectangle>
    )
}

export default InfoBanner;