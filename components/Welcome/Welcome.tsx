import { Title, Text, Anchor, Image, Group } from '@mantine/core';
// import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import img from '@/assets/thumbnails/welcome_image.jpg';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
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
        <Text> I like stuff and things</Text>
      </Group>
    </>
  );
}
