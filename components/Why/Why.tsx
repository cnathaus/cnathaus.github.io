import { Container, Title } from '@mantine/core';
import classes from './Why.module.scss';

export function Why({ companyName }: { companyName: string }) {
  return (
    <Container size="xl" className={classes.container} id="why">
      <Title
        order={2}
        className={classes.title}
        style={{ textAlign: 'center', color: 'black', marginBottom: '2rem', marginTop: '2rem' }}
      >
        Why {companyName}?
      </Title>
    </Container>
  );
}
