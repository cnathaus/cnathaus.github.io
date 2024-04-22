import { Title, Text, Image, Group, Stack } from '@mantine/core';
import { GradientOutlineButton } from '@/components/GradientOutlineButton/GradientOutlineButton';
// import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import img from '@/assets/thumbnails/welcome_image.jpg';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <div id="about">
      <Title className={classes.title} ta="center" mt={50}>
        Hi👋 I&#39;m{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'blue' }}>
          Christian
        </Text>
        {/* TODO: add typewriter */}
      </Title>
      {/* <PlaceholderImage width={800} height={600} /> */}
      <Group justify="center">
        <Image radius="md" h={400} src={img.src} fit="contain" />
        <Stack>
          <Text> I like stuff and things</Text>
          <GradientOutlineButton text="Download CV" onClick={() => console.log('clicked')} />
        </Stack>
      </Group>
    </div>
  );
}
