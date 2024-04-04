import {
  Button,
  Paper,
  Title,
  useMantineTheme,
  Text,
  Container,
  Group,
  Badge,
  MantineColor,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';
import img from '../../assets/thumbnails/IMG_3631_1.jpeg';
import img2 from '../../assets/thumbnails/DSC00723.jpeg';
import classes from './ProjectsCarousel.module.scss';
import { useOpenProjectModal } from '@/hooks/useOpenProjectModal';

enum Technology {
  Python = 'Python',
  TypeScript = 'TypeScript',
  AI = 'AI',
  CSharp = 'C#',
  Robotics = 'Robotics',
}

type TechnologyGradientColorMap = {
  [key in Technology]: {
    startColor: MantineColor;
    midColor: MantineColor;
    endColor: MantineColor;
  };
};

const technologyGradientColorMap: TechnologyGradientColorMap = {
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

const projects = [
  {
    image: img.src,
    title: 'Active Preference Learning',
    category: "Master's Thesis @ TUM",
    technologies: [Technology.AI, Technology.Python, Technology.CSharp, Technology.Robotics],
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'AI Part Identification',
    category: 'Working Student Job @ RWTH Aachen',
    technologies: [Technology.AI, Technology.Python, Technology.TypeScript],
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'AI in Automotive',
    category: 'Internship @ BMW Israel',
    technologies: [Technology.AI, Technology.Python],
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Web Development',
    category: 'Practical Course @ Forto',
    technologies: [Technology.TypeScript],
  },
  {
    image: img2.src,
    title: 'Robot Welding',
    category: 'Practical Course @ Robco',
    technologies: [Technology.Robotics],
  },
];

interface Project {
  image: string;
  title: string;
  category: string;
  technologies: Technology[];
}

interface CardProps extends Project {}

function openProjectModal() {
  console.log('Open project modal');
  useOpenProjectModal();
}

function Card({ image, title, category, technologies }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      Technologies
      <Group gap="xs">
        {technologies.map((tech) => {
          const gradient = technologyGradientColorMap[tech];
          return (
            <Badge
              styles={{
                root: {
                  background: `linear-gradient(to right, white, white), linear-gradient(45deg, ${gradient.startColor}, ${gradient.midColor}, ${gradient.endColor})`,
                  backgroundClip: 'padding-box, border-box',
                  backgroundOrigin: 'padding-box, border-box',
                  border: '2px solid transparent',
                  padding: '0.875rem',
                },
                label: {
                  backgroundImage: `linear-gradient(45deg, ${gradient.startColor}, ${gradient.midColor}, ${gradient.endColor})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  fontWeight: 800,
                  WebkitTextFillColor: 'transparent',
                },
              }}
              size="md"
            >
              {tech}
            </Badge>
          );
        })}
      </Group>
      <Button variant="white" color="dark" onClick={openProjectModal}>
        Learn more (with Video)
      </Button>
    </Paper>
  );
}

export function ProjectsCarousel() {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = projects.map((project) => (
    <Carousel.Slide key={project.title}>
      <Card {...project} />
    </Carousel.Slide>
  ));

  return (
    <Container fluid>
      Some projects I&#39;ve worked on.
      <Carousel
        slideSize={{ base: '100%', sm: '40%' }}
        slideGap={{ base: 'xl', sm: 6 }}
        align="start"
        slidesToScroll={1}
        withIndicators
        // plugins={[autoplay.current]}
        // onMouseEnter={autoplay.current.stop}
        // onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
