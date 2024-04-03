import { Carousel } from '@mantine/carousel';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text, Container } from '@mantine/core';
import classes from './ProjectsCarousel.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active Preference Learning',
    category: "Master's Thesis @ TUM",
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'AI Part Identification',
    category: 'Working Student Job @ RWTH Aachen',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'AI in Automotive',
    category: 'Internship @ BMW Israel',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Web Development',
    category: 'Practical Course @ Forto',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Robot Welding',
    category: 'Practical Course @ Robco',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
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
      <Button variant="white" color="dark">
        Read more
      </Button>
    </Paper>
  );
}

export function ProjectsCarousel() {
  const theme = useMantineTheme();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
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
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        onSlideChange={(index) => setCurrentSlide(index)}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
