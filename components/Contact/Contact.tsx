import { Container, Text, Title, Group, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import classes from './Contact.module.scss';

export function Contact() {
  return (
    <Container size="md" className={classes.container} id="contact">
      <Title
        order={2}
        className={classes.title}
        style={{
          textAlign: 'center',
          color: 'var(--mantine-color-default-color)',
          marginBottom: '1.5rem',
          marginTop: '3rem',
        }}
      >
        Contact Me
      </Title>
      <Text
        style={{ textAlign: 'center', marginBottom: '1rem' }}
        fw={500}
        c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
      >
        I&apos;m currently looking for a PhD position or full-time job in robotics. If you have any
        questions or would like to get in touch, please contact me via email or LinkedIn.
      </Text>
      <Group my="md" justify="center">
        <ActionIcon
          size="xl"
          variant="subtle"
          color="var(--mantine-color-dimmed)"
          component="a"
          href="mailto:christian.nathaus@tum.de"
        >
          <IconMail size="3rem" strokeWidth={1} />
        </ActionIcon>
        <ActionIcon
          size="xl"
          variant="subtle"
          color="var(--mantine-color-dimmed)"
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/christian-nathaus"
        >
          <IconBrandLinkedin size="3rem" strokeWidth={1} />
        </ActionIcon>
      </Group>
    </Container>
  );
}
