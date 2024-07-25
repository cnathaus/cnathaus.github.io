'use client';

import {
  Button,
  Paper,
  Title,
  useMantineTheme,
  Text,
  Container,
  Group,
  Badge,
  Overlay,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';

import { projects, Project, technologyGradientColorMap } from '@/assets/data/projects';
import classes from './ProjectsCarousel.module.scss';
import { useOpenProjectModal } from '@/hooks/useOpenProjectModal';

interface CardProps extends Project {}

function openProjectModal(props: CardProps) {
  useOpenProjectModal(props);
}

function Card(props: CardProps) {
  const { image, title, category, technologies, video } = props;
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: image.scale ? `${image.scale * 100}%` : 'cover',
      }}
      className={classes.card}
    >
      <div style={{ zIndex: 1 }}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <div style={{ zIndex: 1 }}>
        <Group gap="xs" mb={30}>
          {technologies.map((tech) => {
            const gradient = technologyGradientColorMap[tech];
            return (
              <Badge
                key={tech}
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

        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={() => openProjectModal(props)}
          classNames={{ root: classes.root }}
        >
          Learn More {video ? '(Video)' : null}
        </Button>
        {/* <GradientOutlineButton
          onClick={() => openProjectModal(props)}
          text={`Read More ${video ? '(Video)' : ''}`}
        /> */}
      </div>
      <Overlay
        opacity={0.9}
        zIndex={0}
        radius="md"
        className={classes.overlay}

        // blur={3}
      />
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
    <Container size="xl" id="projects">
      <Title
        order={2}
        className={classes.title}
        style={{
          textAlign: 'center',
          color: 'var(--mantine-color-default-color)',
          marginBottom: '2rem',
          marginTop: '3rem',
        }}
      >
        {/* Some projects I&#39;ve worked on. */}
        Work Experience & Projects
      </Title>
      <Carousel
        slideSize={{ base: '100%', sm: '40%' }}
        slideGap={{ base: 'xl', sm: 6 }}
        align="start"
        slidesToScroll={1}
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
