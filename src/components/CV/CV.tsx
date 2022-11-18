import VerticalTimeline from "../VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "../VerticalTimeline/VerticalTimelineElement";

import { MortarboardFill } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { WrenchAdjustable } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import "./CV.css";

export const CV = () => {
  return (
    <section className="cv" id="cv">
      <Container>
        <h2>CV</h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#006F76", color: "#fff" }}
            icon={<MortarboardFill />}
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
            date="2010 - 2011"
            iconStyle={{ background: "#006F76 ", color: "#fff" }}
            icon={<MortarboardFill />}
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
            date="2021 - 2022"
            iconStyle={{ background: "#90E4EB", color: "#fff" }}
            icon={<BriefcaseFill />}
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
            date="2006 - 2008"
            iconStyle={{ background: "#00A9BD", color: "#fff" }}
            icon={<WrenchAdjustable />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<MortarboardFill />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<MortarboardFill />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<MortarboardFill />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<MortarboardFill />}
          />
        </VerticalTimeline>
      </Container>
    </section>
  );
};
