import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From websites to web apps.
          Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />

          {toggle === "webApp" ? (
            <ToggleButton
              active
              value="webApp"
              onClick={() => setToggle("webApp")}
            >
              WEB-APPS
            </ToggleButton>
          ) : (
            <ToggleButton value="webApp" onClick={() => setToggle("webApp")}>
              WEB-APPS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "website" ? (
            <ToggleButton
              active
              value="website"
              onClick={() => setToggle("web app")}
            >
              WEBSITE
            </ToggleButton>
          ) : (
            <ToggleButton value="website" onClick={() => setToggle("website")}>
              WEBSITE
            </ToggleButton>
          )}
          {/* <Divider /> */}
          {/* {toggle === 'landing pages' ?
            <ToggleButton active value="landing pages" onClick={() => setToggle('landing pages')}>LANDING PAGE</ToggleButton>
            :
            <ToggleButton value="landing pages" onClick={() => setToggle('landing pages')}>LANDING PAGE</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
