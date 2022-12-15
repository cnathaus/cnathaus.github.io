import VerticalTimeline from "../VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "../VerticalTimeline/VerticalTimelineElement";

import { MortarboardFill } from "react-bootstrap-icons";
// import { BriefcaseFill } from "react-bootstrap-icons";
import { WrenchAdjustable } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import "./CV.css";

export const CV = () => {
  return (
    <section className="cv" id="cv">
      <Container>
        <h2>CV</h2>

        <h4>Education | University Projects | Projects | Work Experience</h4>

        <VerticalTimeline lineColor="#ddd">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: "#00A9BD", color: "#fff" }}
            icon={<WrenchAdjustable />}
          >
            <h3 className="vertical-timeline-element-title">Working Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Neobreed</h4>
            <p>Related Projects: </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: "#00A9BD", color: "#fff" }}
            icon={<WrenchAdjustable />}
            contentStyle={{ border: "3px solid #00A9BD" }}
            contentArrowStyle={{ borderRight: "7px solid  #00A9BD" }}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineering Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tel Aviv, Israel
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#006F76", color: "#fff" }}
            icon={<MortarboardFill />}
            contentStyle={{ border: "3px solid #006F76" }}
            contentArrowStyle={{ borderRight: "7px solid  #006F76" }}
          >
            <h3 className="vertical-timeline-element-title">
              M.Sc. Robotics, Cognition, Intelligence
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Technical University of Munich
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: "#006F76 ", color: "#fff" }}
            icon={<MortarboardFill />}
            contentStyle={{ border: "3px solid #006F76" }}
            contentArrowStyle={{ borderRight: "7px solid  #006F76" }}
          >
            <h3 className="vertical-timeline-element-title">Semester Abroad</h3>
            <h4 className="vertical-timeline-element-subtitle">
              National University of Singapore
            </h4>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: "#006F76", color: "#fff" }}
            icon={<MortarboardFill />}
            contentStyle={{ border: "3px solid #006F76" }}
            contentArrowStyle={{ borderRight: "7px solid  #006F76" }}
          >
            <h3 className="vertical-timeline-element-title">
              B.Sc. Mechanical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              RWTH Aachen University
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </section>
  );
};
