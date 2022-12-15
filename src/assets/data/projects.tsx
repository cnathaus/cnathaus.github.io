import humanRobotCollaborationImg from "../../assets/img/human_robot_collaboration.png";
import robotWeldImg from "../../assets/img/robot_weld.png";
import bmwLogoImg from "../../assets/img/BMW_logo.png";
import fortoLogoImg from "../../assets/img/forto_logo.png";
import bachelorThesisImg from "../../assets/img/bachelor_thesis.png";
import wzlLogoImg from "../../assets/img/wzl_logo.png";

const modalDescription =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Inventore iure eaque labore quam excepturi explicabo liberoplaceat qui iste consequatur, dolor nisi aperiam ipsam,dicta officia officiis. Obcaecati, sed pariatur!";

export interface Project {
  title: string;
  description: string;
  imgUrl: string;
  imgStyle?: React.CSSProperties;
  modal: ProjectModal;
}

export interface ProjectModal {
  title: string;
  description: string;
  video?: string;
}

export const projects: Array<Project> = [
  {
    title: "Forto",
    description: "Design & Development",
    imgUrl: fortoLogoImg,
    modal: {
      title: "Forto",
      description: modalDescription,
      video: "https://www.youtube.com/embed/2g811Eo7K8U",
    },
  },
  {
    title: "Safe Reinforcement Learning on a Real Robot",
    description: "read more",
    imgUrl: humanRobotCollaborationImg,
    modal: {
      title: "Safe Reinforcement Learning on a Real Robot",
      description: modalDescription,
      video: "https://www.youtube.com/embed/B2PiFF-MhJI",
    },
  },
  {
    title: "Robot Welding",
    description: "Design & Development",
    imgUrl: robotWeldImg,
    modal: {
      title: "Robot Welding",
      description: modalDescription,
      video: "https://www.youtube.com/embed/2g811Eo7K8U",
    },
  },
  {
    title: "BMW",
    description: "Design & Development",
    imgUrl: bmwLogoImg,
    imgStyle: { backgroundColor: "white" },
    modal: {
      title: "BMW",
      description: modalDescription,
      video: "https://www.youtube.com/embed/2g811Eo7K8U",
    },
  },
  {
    title: "Bachelor Thesis",
    description: "Design & Development",
    imgUrl: bachelorThesisImg,
    modal: {
      title: "Bachelor Thesis",
      description: modalDescription,
      video: "https://www.youtube.com/embed/2g811Eo7K8U",
    },
  },
  {
    title: "WZL",
    description: "Design & Development",
    imgUrl: wzlLogoImg,
    imgStyle: { backgroundColor: "white" },
    modal: {
      title: "WZL",
      description: modalDescription,
      video: "https://www.youtube.com/embed/2g811Eo7K8U",
    },
  },
];
