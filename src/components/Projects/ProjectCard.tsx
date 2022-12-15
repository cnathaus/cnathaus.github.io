import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { ProjectModal } from "../../assets/data/projects";
import "./Projects.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  modal: ProjectModal;
  imgStyle?: React.CSSProperties;
}

function MyVerticallyCenteredModal({
  show,
  modal,
  onHide,
}: {
  show: boolean;
  modal: ProjectModal;
  onHide: () => void;
}) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Body>
        <h4>{modal.title}</h4>
        <p>{modal.description}</p>
        {modal.video && (
          <div className="video-responsive">
            <iframe
              width="100%"
              src={modal.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={modal.title}
            />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export const ProjectCard = ({
  title,
  imgUrl,
  imgStyle = {},
  modal,
}: ProjectCardProps) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        modal={modal}
        onHide={() => setModalShow(false)}
      />

      <Col size={12} sm={12} md={6} lg={4}>
        <div className="proj-imgbx" onClick={() => setModalShow(true)}>
          <img
            src={imgUrl}
            alt={title}
            style={{
              width: "100%",
              aspectRatio: "3/2",
              objectFit: "contain",
              backgroundColor: "white",
              ...imgStyle,
            }}
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span> read more ...</span>
          </div>
        </div>
      </Col>
    </>
  );
};
