import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import placeholderImg from "../../assets/img/placeholder.png";
import humanRobotCollaborationImg from "../../assets/img/human_robot_collaboration.png";
import robotWeldImg from "../../assets/img/robot_weld.png";
import bmwLogoImg from "../../assets/img/BMW_logo.png";
import fortoLogoImg from "../../assets/img/forto_logo.png";
// import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "1",
      description: "Design & Development",
      imgUrl: fortoLogoImg,
    },
    {
      title: "1",
      description: "Design & Development",
      imgUrl: humanRobotCollaborationImg,
    },
    {
      title: "1",
      description: "Design & Development",
      imgUrl: robotWeldImg,
    },
    {
      title: "1",
      description: "Design & Development",
      imgUrl: bmwLogoImg,
      imgStyle: { backgroundColor: "white" },
    },
    {
      title: "1",
      description: "Design & Development",
      imgUrl: placeholderImg,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>some projects I've worked on.</p>

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
