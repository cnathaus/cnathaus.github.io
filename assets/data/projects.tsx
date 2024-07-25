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
  Unity = 'Unity',
  Robotics = 'Robotics',
  ROS = 'ROS',
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
  Unity: {
    // TODO: new color
    startColor: '#22c1c3 0%', // Dark gray
    midColor: '#7fdf78 50%', // Mid gray
    endColor: '#4dfd2d 100%',
  },
  Robotics: {
    startColor: '#333333 0%', // Dark gray
    midColor: '#666666 50%', // Mid gray
    endColor: '#999999 100%',
  },
  ROS: {
    // TODO: new color
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
    technologies: [
      Technology.AI,
      Technology.Python,
      Technology.CSharp,
      Technology.Unity,
      Technology.Robotics,
    ],
    description: (
      <Text fw={500} c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))">
        For my Master’s Thesis we investigated how to make robot behaviour adaptable to an
        individual human’s needs and preferences.{' '}
        <HighlightText>Personalized robot behaviour</HighlightText> has potential applications in
        multiple domains, for example in industrial environments where a worker may have a specific
        preference for how tools should be handed to them. We accomplished this by applying active
        preference learning. It works by prompting the user to either demonstrate the desired
        behaviour or to evaluate pairwise comparison queries showing the robot’s movement. Our work
        was the first to integrate <HighlightText>Augmented Reality </HighlightText> into this
        learning process to make it faster and more user-friendly. I presented this work as part of
        a workshop at <HighlightText>ICRA 2023</HighlightText> in London supported by a{' '}
        <HighlightText>Google DeepMind grant</HighlightText>. My work consisted of implementing a{' '}
        <HighlightText>Unity</HighlightText> simulation domain for a realistic use-case, enabling
        UDP communication between all components, and integrating the AI learning algorithms into
        this system. Check out the video below to get an idea how it works. Please feel free to
        reach out to me to find out more.
      </Text>
    ),
    video: 'https://www.youtube.com/embed/0RNFAXUEJ5U?si=0r8iTjX5jb5GPrUE',
  },
  {
    image: { src: bmw_logo.src, scale: 0.3 },
    title: 'Software Innovation',
    category: 'Internship @ BMW Israel',
    technologies: [Technology.AI, Technology.Python],
    description: (
      <Text fw={500} c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))">
        During my internship at the BMW Technology Office in Tel Aviv, Israel I worked on multiple
        projects. I spent most of my time on developing a prototype for a ChatGPT-based AI assistant
        for in-vehicle entertainment. I also worked on computer-vision based navigation in parking
        garages where lighting conditions and sensor data is unreliable. Also, I assisted with
        visiting and assessing local start-ups. Above all, I gained valuable insights into how it is
        to work for a big company.
      </Text>
    ),
  },
  {
    image: { src: img2.src },
    title: 'Robot Welding',
    category: 'Practical Course @ Robco',
    technologies: [Technology.Robotics],
    description: (
      <Text fw={500} c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))">
        For a practical course in cooperation with RobCo (link) we integrated a welding machine onto
        the startup&apos;s modular robot. The tasks for this included acquiring a suitable welding
        machine, designing and building an enclosure for mounting the robot, and programming both
        the robot and welding machine. This project&apos;s main challenge was the many hours of
        fine-tuning the welding process, which requires{' '}
        <HighlightText>high precision movements</HighlightText> and{' '}
        <HighlightText>timing</HighlightText> as well as stringent{' '}
        <HighlightText>safety</HighlightText>. We were also lucky to acquire welding skills of our
        own in the course of this project. Check out the video to see the result of our work.
      </Text>
    ),
    video: 'https://www.youtube.com/embed/OLL2c77cqdY?si=WNwLOrYnEwJLMcDK',
  },
  {
    image: { src: bachelor_thesis_img.src },
    title: 'AI Task Planning for Service Robotics',
    category: 'Bachelor’s Thesis @ RWTH Aachen',
    technologies: [Technology.Robotics, Technology.Python, Technology.AI],
    description: (
      <Text fw={500} c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))">
        For my Bachelor’s Thesis, we worked on how to plan tasks for a fleet of{' '}
        <HighlightText>service robots</HighlightText> in a nursing home environent. We utilized and
        extended the ROSPlan planning package to handle dynamic task planning and execution. The
        focus of my work was to design a simulation domain in order to test the developed methods.
        This for example involved implementing the software interfaces between all the involved
        applications and coming up with realistic usage scenarios. Check out the video to see the
        result of my work.
      </Text>
    ),
    video: 'https://www.youtube.com/embed/KgFZVdwmP3w?si=C5TZ2im7VVe04D0g',
  },
  {
    image: {
      src: rwth_logo.src,
      scale: 0.6,
    },
    title: 'AI Part Identification',
    category: 'Working Student Job @ RWTH Aachen',
    technologies: [
      Technology.AI,
      Technology.Python,
      Technology.TypeScript,
      Technology.CSharp,
      Technology.Unity,
    ],
    description: (
      <Text fw={500} c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))">
        For my working student job, I worked on how to apply AI to identify parts made using
        <HighlightText> Additive Manufacturing</HighlightText>. Currently, workers struggle with
        correctly identifying printed parts as there are as many as 30 parts on one printing bed,
        possibly without easily recognizable features. This leads to the high error rates in the
        manufacturing process. Our solution was to render the part in{' '}
        <HighlightText>Blender</HighlightText> based on their model files and to train a neural
        network that could then be used to identify the parts by photographing them. Specifically,
        my work consisted of implementing the whole pipeline from receiving a customer’s order,
        rendering and training the models in the backend, developing a web interface for
        administrators and a smartphone app for workers. I also developed a Unity app for the{' '}
        <HighlightText>Hololens 2</HighlightText> so workers can identify parts without occupying
        their hands. We managed to raise 10k€ in funding to further investigate this idea.
      </Text>
    ),
  },
  {
    image: { src: forto_logo.src, scale: 0.6 },
    title: 'Web Development',
    category: 'Practical Course @ Forto',
    technologies: [Technology.TypeScript],
    description: (
      <Text fw={500} c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))">
        For this practical course in collaboration with Forto (link) the task was to develop
        software for tracking container shipments using a GPS tracker. Specifically, we worked on
        implementing web applications for warehouse workers, administrators, and customers. I worked
        in the backend team responsible for fetching and processing the tracker&apos;s data and
        making it accessible to the frontends. Also, I was responsible for interfacing between all
        teams and making sure they were on the same page. Upon request I’d be happy to send you a
        letter of recommendation I received for my work.
      </Text>
    ),
  },
];
