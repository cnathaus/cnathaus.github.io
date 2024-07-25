import { Title, Text, Image, Grid } from '@mantine/core';
import { GradientOutlineButton } from '@/components/GradientOutlineButton/GradientOutlineButton';
// import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import img from '@/assets/thumbnails/welcome_image_2_1.jpeg';
import img3 from '@/assets/thumbnails/welcome_image_3.jpeg';
import classes from './Welcome.module.css';

function downloadCV() {
  window.open('/CV.pdf', '_blank');
}

// TODO: make mobile version work. i.e. put text up top, then images below

export function Welcome() {
  return (
    <div id="about">
      <Grid justify="center" align="center" mt={75} gutter={60}>
        <Grid.Col span="content">
          <Image radius="md" h={400} src={img.src} fit="contain" />
          {/* <Image radius="md" h={400} src={img2.src} fit="contain" />
          <Image radius="md" h={400} src={img3.src} fit="contain" /> */}
        </Grid.Col>
        <Grid.Col span={3}>
          <Title
            className={classes.title}
            // ta="center"
            // mt={50}
            mb={45}
            c="var(--mantine-color-default-color)"
          >
            Hi👋 I&#39;m Christian
            {/* <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'green', to: 'blue' }}
            >
              Christian
            </Text> */}
          </Title>
          <Text
            fw={500}
            c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
            mb={50}
          >
            {' '}
            I&apos;m passionate about enhancing human-robot interactions and leveraging AI methods
            to develop robots that are useful in the real world. I have gained experience in
            robotics research and software development through my studies as well as various
            internships and projects. In my free time I enjoy sports climbing, road biking, and
            playing beach volleyball. Find out more about me below!
          </Text>

          <GradientOutlineButton text="Check out my CV" onClick={downloadCV} />
        </Grid.Col>
        <Grid.Col span="content">
          <Image radius="md" h={400} src={img3.src} fit="contain" />
        </Grid.Col>
      </Grid>
    </div>
  );
}
