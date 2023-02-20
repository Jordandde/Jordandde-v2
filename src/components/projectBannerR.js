import React, {useState} from "react";
import {
    Rectangle,
    FlexCol,
    Description
} from "../App.components";
import Lottie from "react-lottie";

const ProjectBannerR = (link, lottieOps, title, subTitle,dates, description) => {
  const [active, setActive] = useState(0);
  const lottieData= {
    loop: true,
    autoplay: false,
    animationData: lottieOps,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
return (
<Rectangle
          style={{
            background: !active
              ? "linear-gradient(130deg,#57058b,#d0b4ef)"
            : "#57058b",
            marginTop: "10%",
            color: !active? "#c3acce" : "#ffdab9",
          }}
          onMouseEnter={() => setActive(!active)}
          onMouseLeave={() => setActive(!active)}
          href={link}
        >
          <FlexCol
            style={{
              marginLeft: !active ? "15%" : "5%",
              marginRight: active ? "5%" : 0
            }}
          >
            <p
              style={{
                marginTop: !active ? "20%" : "2.5%",
                height: !active ? "100%" : "20%"
              }}
            >
                {title}
              <br /> {subTitle} <br />
              {dates}
            </p>
            {active ? (
              <Description style={{ marginTop: "3vh" }}>
                {description}
              </Description>
            ) : null}
          </FlexCol>
          <div
            style={{
              marginTop: "2%",
              height: "30vh",
              width: "30vh",
              marginRight: "10%"
            }}
          >
            <Lottie
              options={lottieData}
              height={"30vh"}
              width={"30vh"}
              isPaused={!active}
            />
          </div>
        </Rectangle>
)
}
export default ProjectBannerR;