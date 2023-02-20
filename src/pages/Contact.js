import React from "react";
import {
  Container,
  Center,
  Banner2,
  Title,
  Text
} from "../App.components";
import LeftCard from "../components/leftCard";
import RightCard from "../components/rightCard";
import { inject } from '@vercel/analytics';

const hrefs = ["mailto:jordan.de.souza@uwaterloo.ca?subject=Hello","https://drive.google.com/file/d/1i9E5LCxsLck9wkxF3yx9qM2r9KDheXbr/view?usp=sharing"];
const descriptions = ["Email: jordan.de.souza@uwaterloo.ca\n\n Phone: \n 647 839 9032", "Click on this box to be redirected to my Resumé, hosted on Google Drive"];
const titles = ["Contact Info","Resume"]
const Page4 = () => {
  inject();
  return (
    <Container
      style={{
        height: "170vh",
      }}
    >
      {" "}
      <Banner2 >
        <Title  href="/">
          Back
        </Title>
        <Text>About</Text>
      </Banner2>
      <Center>
        {hrefs.map((item, index) => (
          !(index % 2) ? LeftCard(item, titles[index], descriptions[index]): RightCard(item, titles[index], descriptions[index])
        ))}
      </Center>
    </Container>
  );
};
export default Page4;
