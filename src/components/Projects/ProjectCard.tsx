import { Col } from "react-bootstrap";
import "./Projects.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  imgStyle?: React.CSSProperties;
}

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  imgStyle = {},
}: ProjectCardProps) => {
  return (
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: "100%",
            height: "50%",
            objectFit: "contain",
            ...imgStyle,
          }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
