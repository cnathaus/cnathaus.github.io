import { Avatar, Button, List, Container, Title, Text, Timeline, Stack } from '@mantine/core';
import { categoryColorMap, education } from '@/assets/data/education';
import classes from './Education.module.scss';

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

export function Education() {
  return (
    <Container fluid id="education">
      <Stack justify="center" align="center">
        <Title
          order={2}
          className={classes.title}
          style={{ textAlign: 'center', color: 'black', marginBottom: '2rem' }}
        >
          Education
        </Title>

        <Text>
          TODO:

          Starting with mechanical engineering at RWTH Aachen, I took a detour into robotics during a game-changing semester at NUS, where I explored software dynamics. This journey fueled my fascination with human-robot collaboration, inspiring me to dive deeper with a master's in robotics and AI at TUM. Now, my aim is to channel this passion into meaningful contributions within medical or industrial robotics, driven by the desire to make a real difference in people's lives through cutting-edge technology.

          {/* I studied mechanical engineering at RWTH Aachen. There, I learned about the fundamentals of engineering.
          During my semester abroad at NUS, I first got in touch with robotics. I wanted to focus more on software, so
          I decided to pursue a master's degree in robotics and AI at TUM. There, I got into human-robot collaboration.

          I found that I'm passionate about improving people's lives with robots.

          Now, i would ideally like to continue my journey in robotics research with a position in medical robotics or industrial robotics with a focus on human-robot collaboration. */}
        </Text>

        {/* <Title order={3} style={{ textAlign: 'center', color: 'black', marginBottom: '2rem' }}>
          Education | University Projects | Projects | Work Experience
        </Title> */}

        {/* <Timeline bulletSize={bulletSize} reverseActive active={cv.length - 2}>
          {cv.map((item, index) => {
            const color = categoryColorMap[item.category];
            return (
              <Timeline.Item
                title={item.title}
                lineVariant={index === 0 ? 'dotted' : 'solid'}
                bullet={item.logo ? timelineAvatar(item.logo) : null}
                classNames={{ item: classes.item }}
                styles={{
                  itemBody: {
                    marginTop: '1.5rem', // TODO: replace with calculated value
                  },
                  itemBullet: {
                    borderColor: color,
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
            );
          })}
        </Timeline> */}
        <Timeline bulletSize={bulletSize} reverseActive>
          {education.map((item, index) => {
            const color = categoryColorMap[item.category];
            return (
              <Timeline.Item
                title={item.title}
                // lineVariant={index === 0 ? 'dotted' : 'solid'}
                bullet={item.logo ? timelineAvatar(item.logo) : null}
                classNames={{ item: classes.item }}
                styles={{
                  itemBody: {
                    marginTop: '1.5rem', // TODO: replace with calculated value
                  },
                  itemBullet: {
                    borderColor: color,
                  },
                }}
              >
                <Text c="dimmed" size="sm">
                  {item.subtitle}
                </Text>
                <Text c="dimmed" size="sm">
                  {item.date}
                </Text>
                {item.details && (
                  <List c="dimmed" size="sm">
                    {item.details.map((detail) => (
                      <List.Item>{detail}</List.Item>
                    ))}
                  </List>
                )}

              </Timeline.Item>
            );
          })}
        </Timeline>
      </Stack>
    </Container>
  );
}
