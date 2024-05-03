import { Title, Text, Image, Group, Stack } from '@mantine/core';
import { GradientOutlineButton } from '@/components/GradientOutlineButton/GradientOutlineButton';
// import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import img from '@/assets/thumbnails/welcome_image.jpg';
import classes from './Welcome.module.css';

function downloadCV() {
  window.open('/CV.pdf', '_blank');
}

export function Welcome() {
  return (
    <div id="about">
      <Title className={classes.title} ta="center" mt={50}>
        Hi👋 I&#39;m{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'blue' }}>
          Christian
        </Text>
      </Title>
      {/* <PlaceholderImage width={800} height={600} /> */}
      <Group justify="center">
        <Image radius="md" h={400} src={img.src} fit="contain" />
        <Stack>
          <Text>
            I'm passionate about enabling robots to help humans in the real world.
            I have gained experience in robotics research and software development through my studies, internships, and projects.
            Check out more below!

          </Text>
          <GradientOutlineButton text="Download CV" onClick={downloadCV} />
        </Stack>
      </Group>
    </div>
  );
}
