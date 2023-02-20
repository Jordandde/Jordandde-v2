import React from "react";
import {
  Container,
  Center,
  Banner2,
  Text,
  Title
} from "../App.components";
import ProjectBannerL from "../components/projectBannersL";
import ProjectBannerR from "../components/projectBannerR";
import sunData from "../Animations/lotties/4804-weather-sunny.json";
import busData from "../Animations/lotties/6546-broken-bus.json";
import padData from "../Animations/lotties/8026-taking-notes.json";
import cData from "../Animations/lotties/17288-c-programming-animation.json";
import messageData from "../Animations/lotties/5919-writing-message-loading.json";

const links = ["https://github.com/Jordandde/Real-time-Operating-System","https://github.com/Jordandde/RSCode","https://github.com/Jordandde/Solar-Charging-Sun-Tracking-Battery.git","https://www.hackerearth.com/challenges/hackathon/yhack-2018/dashboard/163ea9a/submission/?fbclid=IwAR0CG-hYgm2ui1mRBbY6SZ5ZpI9MjmFcuaABbmw0Pnb5u3AHcD-QTa8-ScU","https://github.com/Jordandde/Secure-Laser-Communication-System.git" ];
const lotties = [cData,padData,sunData, busData,messageData];
const titles = ["Real-Time Operating System","RSCode, Online Text Editor","Light Tracking Solar Panel","Secure Ticketing System","Laser Text Transfer System"];
const subTitles = ["Personal and School Project","Personal Project","ECE Design Day Winner","Yale Hacks","Personal Project"];
const dates = ["2022, Team of 4","2021, Team of 4","2019, Team of 4","2018, Team of 4","2018, Team of 3"];
const descriptions = ["As part of my RTOS class I had to build an RTOS from scratch. As part of this I had to create the memory allocation and management algorithms, as well as task creation, management, and concurrency coordination algorithms. This RTOS was built in C and I was provided with some simple templates to facilitate the machine level functions of context switching for multitasking. Note, as this code was done for a university course I am hosting the code in a private repo and access can be granted by emailing me to avoid future students from plagarizing my work.\n Built in C and Assembly",
"As part of my RTOS class I had to build an RTOS from scratch. As part of this I had to create the memory allocation and management algorithms, as well as task creation, management, and concurrency coordination algorithms. This RTOS was built in C and I was provided with some simple templates to facilitate the machine level functions of context switching for multitasking. Note, as this code was done for a university course I am hosting the code in a private repo and access can be granted by emailing me to avoid future students from plagarizing my work.\n Built in Rust, React, Web Assembly, AWS, Git",
  "A solar panel that tracks the strongest source of light and follows it. \n Written in C, with hardware controlled by an Arduino. \n First place winner of the 2019 ECE, faculty wide, design day competition",
"An andriod app that transmits encoded, unique, credentials via ultrasonic waves to validate tickets.\n Written in Java, using Javascript and Google Firebase to store credentials, and periodically change them to enforce security.",
"A system of lasers and photodiodes that transmits text using morse code for discrete, secure, communications without leaving behind any traceable evidence. \n Written in C with hardware controlled by a Raspberry Pi "
];
const Page3 = () => {
  return (
    <Container
      style={{
        height: "100%",
      }}
    >
      {" "}
      <Banner2>
        <Title href="/">Back</Title>
        <Text>Projects</Text>
      </Banner2>
      <Center>
        {links.map((item, index) => (
          ProjectBannerL(item, lotties[index],titles[index],subTitles[index],dates[index],descriptions[index]) 
        ))}
      </Center>
    </Container>
  );
};
export default Page3;
