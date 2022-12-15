import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../assets/data/projects";

import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>some projects I've worked on.</p>

              {/* for lg and md screens show 2 rows, for sm show 3 rows */}
              <Row>
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </Row>

              <Row>
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </Row>
            </div>
          </Col>
          {/* load more button */}
          <button className="load-more-btn">Load More</button>
        </Row>
      </Container>

      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
