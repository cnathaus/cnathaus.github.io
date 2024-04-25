import { MantineColor, Text } from '@mantine/core';

import { HighlightText } from '@/components/HighlightText/HighlightText';

import img from '../thumbnails/IMG_3631_1.jpeg';
import img2 from '../thumbnails/DSC00723.jpeg';
import bmw_logo from '../thumbnails/bmw_logo.png';
import forto_logo from '../thumbnails/forto_logo.png';
import rwth_logo from '../thumbnails/rwth_logo_full.png';
import bachelor_thesis_img from '../thumbnails/bachelor_thesis.png';

export enum Technology {
  Python = 'Python',
  TypeScript = 'TypeScript',
  AI = 'AI',
  CSharp = 'C#',
  Robotics = 'Robotics',
}

export interface Project {
  image: { src: string; scale?: number };
  title: string;
  category: string;
  technologies: Technology[];
  description: JSX.Element;
  video?: string;
}

type TechnologyGradientColorMap = {
  [key in Technology]: {
    startColor: MantineColor;
    midColor: MantineColor;
    endColor: MantineColor;
  };
};

export const technologyGradientColorMap: TechnologyGradientColorMap = {
  Python: {
    startColor: 'var(--mantine-color-pink-filled) 0%',
    midColor: 'var(--mantine-color-orange-filled) 50%',
    endColor: 'var(--mantine-color-yellow-filled) 100%',
  },
  TypeScript: {
    startColor: 'var(--mantine-color-indigo-9) 0%',
    midColor: 'var(--mantine-color-blue-9) 50%',
    endColor: 'var(--mantine-color-blue-filled) 100%',
  },
  AI: {
    startColor: 'var(--mantine-color-pink-filled) 0%',
    midColor: 'var(--mantine-color-grape-filled) 50%',
    endColor: 'var(--mantine-color-red-filled) 100%',
  },
  'C#': {
    startColor: '#6A1577 0%',
    midColor: '#813084 50%',
    endColor: '#9A4993 100%',
  },
  Robotics: {
    startColor: '#333333 0%', // Dark gray
    midColor: '#666666 50%', // Mid gray
    endColor: '#999999 100%',
  },
};

export const projects: Project[] = [
  {
    image: { src: img.src },
    title: 'Active Preference Learning',
    category: "Master's Thesis @ TUM CPS Group",
    technologies: [Technology.AI, Technology.Python, Technology.CSharp, Technology.Robotics],
    description: (
      <Text fw={500} c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))">
        For my Master’s Thesis we investigated how to make robot behaviour adaptable to an
        individual’s needs and preferences. Personalized robot behaviour has potential applications
        in multiple domains, e.g. in industrial environments where a worker may have a specific
        preference for how tools should be handed to them. We accomplished this by applying active
        preference learning (link) wherein the user is prompted to either demonstrate the desired
        behaviour or to evaluate pairwise comparison queries showing the robot’s movement. Our work
        was the first to integrate <HighlightText>Augmented Reality </HighlightText>
        (AR) into this learning process to make it faster and more user-friendly. I presented this
        work as part of a workshop at ICRA 2023 in London supported by a{' '}
        <HighlightText>Google DeepMind grant</HighlightText>. Check out the video below to get a
        glimpse into how the system works. Please feel free to reach out to me to find out more.
      </Text>
    ),
    video: 'https://www.youtube.com/embed/0RNFAXUEJ5U?si=0r8iTjX5jb5GPrUE',
  },
  {
    image: {
      src: rwth_logo.src,
      scale: 0.6,
    },
    title: 'AI Part Identification',
    category: 'Working Student Job @ RWTH Aachen',
    technologies: [Technology.AI, Technology.Python, Technology.TypeScript],
    description: (
      <Text>
        For my working student job, I worked on how to apply AI to identify parts made using
        Additive Manufacturing (AM). Currently, workers have a hard time figuring out which part
        is.. as there are as many as 30 parts on one printing bed. The solution we came up with was
        to render the part models in Blender and train a neural network that could then be used to
        identify the parts by photographing them. Specifically, my work consisted of implementing
        the whole pipeline from receiving a customer’s order, rendering and training the models in
        the backend, developing a web interface for administrators and an app for workers.{' '}
      </Text>
    ),
  },
  {
    image: { src: bmw_logo.src, scale: 0.3 },
    title: 'Software Innovation',
    category: 'Internship @ BMW Israel',
    technologies: [Technology.AI, Technology.Python],
    description: (
      <Text>
        During my internship at the BMW Technology Office in Tel Aviv, Israel I worked on multiple
        projects. Mostly, I developed a prototype for a ChatGPT-based AI assistant for in-vehicle
        entertainment. I also worked on computer-vision based navigation in parking garages where
        lighting conditions and sensor data is unreliable. Also, I assisted with visiting and
        assessing local start-ups.
      </Text>
    ),
  },
  {
    image: { src: img2.src },
    title: 'Robot Welding',
    category: 'Practical Course @ Robco',
    technologies: [Technology.Robotics],
    description: (
      <Text>
        For another practical course we integrated a welding machine onto the startup RobCo’s (link)
        modular robot. The tasks for this included designing and building an enclosure for mounting
        the robot, acquiring a welding machine, and programming both. As welding requires high
        precision movements and timing, this took many hours of tuning the processes to make it
        work. We were also lucky to acquire welding skills of our own in the course of this project.
        Check out the video to see the result of our work.
      </Text>
    ),
    video: 'https://www.youtube.com/embed/OLL2c77cqdY?si=WNwLOrYnEwJLMcDK',
  },
  {
    image: { src: forto_logo.src, scale: 0.6 },
    title: 'Web Development',
    category: 'Practical Course @ Forto',
    technologies: [Technology.TypeScript],
    description: (
      <Text>
        The task was to develop software for tracking container shipments using a GPS tracker. I
        worked on backend development I was also responsible for interfacing between teams and
        making sure they were on the same page. I’m happy to send you a letter of recommendation I
        received for my work upon request.
      </Text>
    ),
  },
  {
    image: { src: bachelor_thesis_img.src },
    title: 'AI Task Planning for Service Robotics',
    category: 'Bachelor’s Thesis @ RWTH Aachen',
    technologies: [Technology.Robotics, Technology.Python, Technology.AI],
    description: (
      <Text>
        TODO : For my Bachelor’s Thesis, I worked on how to plan tasks for a service robot in a way that
        would be efficient and safe. The robot was to be used in a hospital to deliver medication to
        patients. The problem was that the robot had to navigate through a busy hospital corridor
        and had to avoid collisions with people and other obstacles. I solved this by developing a
        system that could predict the future movements of people and then plan the robot’s path
        accordingly. The system was tested in a simulation and showed promising results. I’m happy
        to send you a copy of my thesis upon request.
      </Text>
    ),
    video: "https://www.youtube.com/embed/KgFZVdwmP3w?si=C5TZ2im7VVe04D0g"
  }
];
