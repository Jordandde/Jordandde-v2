import React from "react";
import {
  FlexCol,
  FlexRow,
  Container,
  Banner2,
  Banner,
  Text,
  Center,
  IntroContainer,
  Jordandde
} from "./App.components";
import JordanddeBanner from "./components/jordandde"
import LeftCard from "./components/leftCard";
import RightCard from "./components/rightCard";

let hrefs = ["Contact","About", "Experience", "Projects"];
let title = ["Contact and Resume","About Me", "Technical Experience", "Projects"];
let descriptions = [
  "Learn about how to contact me, and a link to my resume.",
  "Learn more about me, including my current degree, hobbies, and interests.",
  "Learn more about technical experience, including the languages that I am profficient in, and my work history.",
  "Learn more about my various projects."
];
const stay = ["","an","rew","Souza"];
const stick = ["Jord", "And","de",""];
const offsets = [{},{position: "relative"},{marginTop:"19vh", position:"relative"},{marginTop:"38vh", position:"relative"}];
//container height will be 251vh
function App() {
  return (
    <div>
      <IntroContainer
        style={{
          justifyContent: "space-between",
          background: "#151719"
        }}
      >
        <FlexRow
          style={{ height: "100%", justifyContent: "center", color: "#c3acce" }}
        >
          <FlexCol
            style={{
              paddingRight: 30
            }}
          >
            <Banner>Hi, I'm</Banner>
          </FlexCol>
          {stick.map((item, index) => (
            JordanddeBanner(stay[index], item, offsets[index])
          ))}
        </FlexRow>
      </IntroContainer>
      <Container
        className="Terminal"
        style={{
          height: "270vh",
          position: "relative",
          color: "#c3acce"
        }}
      >
        <Banner2 style={{ fontSize: "7vh" }}>
          <Jordandde>Jordandde</Jordandde>
          <Text>Home</Text>
        </Banner2>
        <Center style={{ transition: "1s" }}>
          {hrefs.map((item, index) => (
            !(index % 2) ? LeftCard(item,title[index], descriptions[index]) : RightCard(item, title[index], descriptions[index])
          ))}
        </Center>
      </Container>
    </div>
  );
}
export default App;
