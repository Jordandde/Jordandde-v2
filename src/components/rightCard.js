import React, {useState} from "react";
import Tilt from "react-parallax-tilt";
import {
  Description,
  Square,
} from "../App.components";

const RightCard = (href, title, desc) => {
    const [active, setActive] = useState(0);
    return (
        <Tilt glareEnable={false} tiltMaxAngleX={10} 
                tiltMaxAngleY={10} perspective={1000} 
                style={{
                    marginLeft: "30%",
                    marginTop: "10%",
                }}
                >
                <Square
                    style={{
                    background: !active
                        ? "linear-gradient(#d0b4ef,#57058b)"
                        : "#57058b",
                    
                    transition: "1s"
                    }}
                    href={href}
                    onMouseEnter={() => setActive(!active)}
                    onMouseLeave={() => setActive(!active)}
                >

                    <p style={{ width: "70%", height: !active? "60%" : "20%" }}>
                        {title}
                    </p>
                    {active? (
                    <Description style={{ marginTop: "2vh" }}>
                        {desc}
                    </Description>
                    ) : null}
                </Square>
        </Tilt>
)
}
export default RightCard;