import { Title, Text, Anchor } from '@mantine/core';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Hi👋 I&#39;m{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'blue' }}>
          Christian
        </Text>
        {/* TODO: add typewriter */}
      </Title>
      <PlaceholderImage width={800} height={600} />
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec nunc{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          Mantine
        </Anchor>
        .
      </Text>
    </>
  );
}
