import { Avatar, Button, Container, Title, Text, Timeline, Stack } from '@mantine/core';
import { cv } from '@/assets/data/cv';
import classes from './CV.module.scss';

interface TimeLineAvatarProps {
  src: string;
  imageProps?: { scale?: number; marginTop?: number };
}

const bulletSize = 96;

function timelineAvatar({ src, imageProps }: TimeLineAvatarProps) {
  return (
    <Avatar
      src={src}
      size={bulletSize * 0.92}
      styles={{
        root: {
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        image: {
          objectFit: 'contain',
          height: imageProps?.scale ? bulletSize * imageProps.scale : bulletSize,
          width: imageProps?.scale ? bulletSize * imageProps.scale : bulletSize,
          marginTop: imageProps?.marginTop,
        },
      }}
    />
  );
}

export function CV() {
  return (
    <Container fluid>
      <Stack justify="center" align="center">
        <Title
          order={2}
          className={classes.title}
          style={{ textAlign: 'center', color: 'black', marginBottom: '2rem' }}
        >
          Experience
        </Title>

        {/* <Title order={3} style={{ textAlign: 'center', color: 'black', marginBottom: '2rem' }}>
          Education | University Projects | Projects | Work Experience
        </Title> */}

        <Timeline bulletSize={bulletSize} reverseActive active={cv.length - 2}>
          {cv.map((item, index) => (
            <Timeline.Item
              title={item.title}
              lineVariant={index === 0 ? 'dotted' : 'solid'}
              bullet={item.logo ? timelineAvatar(item.logo) : null}
              classNames={{ item: classes.item }}
              styles={{
                itemBody: {
                  marginTop: '1.5rem', // TODO: replace with calculated value
                },
              }}
            >
              <Text c="dimmed" size="sm">
                {item.subtitle}
              </Text>
              <Text c="dimmed" size="sm">
                {item.date}
              </Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
      <Button>Download CV</Button>
    </Container>
  );
}
