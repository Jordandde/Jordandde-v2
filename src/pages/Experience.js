import React from "react";
import {
  Container,
  Title,
  Banner2,
  Text,
  Center,
} from "../App.components";
import InfoBanner from "../components/infoBanner";
import IBMLogo from "../images/IBM_logo_in.jpeg";
import OpenTextLogo from "../images/OpenText_logo.jpeg";
import BitbackLogo from "../images/Bitback_logo.jpg";
import TugoloLogo from "../images/tugolo.jpg";

const titles = ["IBM, TM1 Server Team","OpenText","Bitback", "IBM, Skills Network Team", "Tugolo"];
const subtitles= ["Backend Developer Intern","Software Engineering Intern","Backend Developer Intern", "Backend Developer Intern","Full Stack Developer Intern"];
const dates= ["01/2022 - 04/2022","05/2021 - 08/2021","09/2020 - 12/2020","01/2020 - 04/2020", "05/2019 - 08/2019"];
const descriptions= [
  "I worked on the IBM TM1 server team as a backend developer, mainly working on optimizing their testing processes by modernizing their toolkit through building out new tools. While at IBM I created a concurrent testing tool with a wide variety of features such as: native support for JavaScript-based tests, Postman collection translation and execution, testing groups for test modularization, and instant feedback and execution halting for tests that return errors during concurrent execution",
  "At OpenText I worked as a frontend developer. Over the course of the term I worked on their in-house SCSS library to expanded it out significantly and I made recordings for future users, explaining how to use the library. I also worked on the Service level agreements team (SLA) to build out missing features, such as scheduled user notifications.",
  "Bitback is a startup focused on providing consumers with cashback rewards at their favourite stores by using their app. The development team consisted of only 2 people, including myself, and I worked on building out a lot of the backend, as well as optimizing their existing database through rigorous analysis of execution plans and queries.",
  "At IBM I worked on the Skills Network team as a backend developer. My responsibilities here consisted of choosing to work on any one of the numerous projects this team handles and then build out requested features with a lot of freedom for implementation choices. I worked largely in Go and used knowledge of Docker, Kubernetes, and Ansible to accomplish a lot of tasks.",
  "Tugolo is a travel startup akin to airbnb where vendors can offer experiences, like a tour guide, rather than living accomodations. I worked on a small team of 3 developers to build the platform from scratch and I worked on creating a lot of user account recovery options, as well as building the website."
];
const images = [IBMLogo,OpenTextLogo ,BitbackLogo, IBMLogo, TugoloLogo];
const Page2 = () => {
  return (
    <Container
      style={{
        height: "100%",
      }}
    >
      {" "}
      <Banner2>
        <Title href="/">Back</Title>
        <Text>Experience</Text>
      </Banner2>
      <Center>
        {titles.map((item, index) => (
            InfoBanner(item,subtitles[index],dates[index],descriptions[index],images[index])
        ))}
      </Center>
    </Container>
  );
};
export default Page2;
