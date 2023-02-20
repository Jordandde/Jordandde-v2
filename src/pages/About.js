import React, { useState } from "react";
import {
  Container,
  Banner2,
  Text,
  Description,
  Center,
  Square,
  Title
} from "../App.components";
import InfoBanner from "../components/infoBanner";
import UW from "../images/University_of_Waterloo_seal.png";
import Golang from "../images/1_Ifpd_HtDiK9u6h68SZgNuA.png";
import Music from "../images/IMG_2061.JPG";
import UCan from "../images/o-CANADA-UNITED-STATES-FLAGS-facebook.jpeg";
import lol from "../images/LoL_icon.svg.png";
import { inject } from '@vercel/analytics';

const titles = ["Education", "Software Career","Professional Musician", "Looking for Internships","Other Hobbies"];
const subTitles =["Details on my education","Details on my experience", "Details on my experience","starting May 2023","Details on other hobbies"];
const dates =["and program","in software","as a musician","Available for 4 or 8 months","and pastimes"];
const images = [UW,Golang,Music,UCan,lol];
const descriptions = [
  "I am currently a 4th year Computer Engineering student at the University of Waterloo with an AI option. Over the duration of my education I've taken courses on Algorithm design and analysis, data structures, compilers, real-time operating systems, databases, and more.",
  "I have almost 2 years of professional experience as a software development. Throughout my career, I've worked on teams of various sizes, ranging from huge teams to teams where I am the only developer. I am most comfortable working with Golang, C++, Python, SQL, and JavaScript and I am looking for an internship for this summer",
  "Fun fact: I've been a professional jazz musician for the past 8 years! I specialize in the Alto Saxophone however I do bounce between the various other types of saxophones when the piece requires me too. I've played in festivals across the US and Canada and placed highly in all of them. My favourite genre of music is Bebop and my musical inspiration is Charlie Parker!",
  "I am currently looking for a coop position starting May 2023 and I am available for a 4 or 8 month internship. I prefer to work in the US or Canada and I would love to hear about any opportunities you might have in either country. I believe the my passion, creativity, and experience would make me a great fit for any team so please reach out if you know of any opportunities!",
  "Aside from music and coding, I also love playing video games like League of Legends and Valorant! I am also a professional Pokemon card player and I was ranked in the top 4000 players online from November 2022 to the present. I've also been playing table tennis since I was a small child and I am always up for a quick game during breaks or while waiting for my code to finish building."
]
const Page1 = () => {
  inject();
  return (
    <Container
      style={{
        height: "100%",
      }}
    >
      <Banner2 >
        <Title href="/">
          Back
        </Title>
        <Text>About</Text>
      </Banner2>
      <Center>
      {titles.map((item, index) => (
            InfoBanner(item,subTitles[index],dates[index],descriptions[index],images[index])
        ))} 
      </Center>
    </Container>
  );
};
export default Page1;
