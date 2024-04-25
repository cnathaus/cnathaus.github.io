import { Container, Text, Title } from '@mantine/core';
import classes from './Contact.module.scss';

export function Contact() {
  return (
    <Container size="xl" className={classes.container} id="projects">
      <Title
        order={2}
        className={classes.title}
        style={{ textAlign: 'center', color: 'black', marginBottom: '2rem', marginTop: '2rem' }}
      >
        Contact Me
      </Title>
      <Text>
        I'm currently looking for a PhD position or full-time job in robotics. If you have any
        questions or would like to get in touch, please feel free to contact me via email or
        LinkedIn.
      </Text>
    </Container>
  );
}
