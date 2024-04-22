import { Container, Title } from '@mantine/core';
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
    </Container>
  );
}
