import { Avatar, Grid, List, Container, Title, Text, Timeline, Stack } from '@mantine/core';
import { GradientOutlineButton } from '@/components/GradientOutlineButton/GradientOutlineButton';
import { categoryColorMap, education } from '@/assets/data/education';
import classes from './Education.module.scss';

interface TimeLineAvatarProps {
  src: string;
  imageProps?: { scale?: number; marginTop?: number };
}

const bulletSize = 96;

function downloadCV() {
  window.open('/CV_Christian_Nathaus.pdf', '_blank');
}

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
    <Container id="education" size="md">
      <Grid justify="center" align="center" gutter={60}>
        <Grid.Col span={10}>
          <Stack justify="center" gap={0} align="center">
            <Title
              order={2}
              className={classes.title}
              style={{
                textAlign: 'center',
                color: 'var(--mantine-color-default-color)',
                marginTop: '3rem',
                marginBottom: '1.5rem',
              }}
            >
              Education
            </Title>

            <Text
              style={{ textAlign: 'justify', marginBottom: '2rem' }}
              fw={500}
              c="light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))"
            >
              I graduated with a bachelor&apos;s degree in mechanical engineering from RWTH Aachen.
              While spending a transformative semester abroad at NUS in Singapore, I discovered my
              passion for robotics and software development. This led me to pursue a master&apos;s
              degree in robotics and AI at TUM, where I focused on human-robot collaboration. My
              goal now is to apply my passion and expertise to make meaningful contributions in the
              fields of medical or industrial robotics, aiming to make a positive impact on
              people&apos;s lives.
            </Text>
            <Timeline
              bulletSize={bulletSize}
              reverseActive
              style={{ justifyContent: 'center', marginBottom: '3rem' }}
            >
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
                        marginTop: '0.75rem', // TODO: replace with calculated value
                        // alignItems: 'center',
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
                          <List.Item key={detail}>{detail}</List.Item>
                        ))}
                      </List>
                    )}
                  </Timeline.Item>
                );
              })}
            </Timeline>
            <GradientOutlineButton text="Check out my CV" onClick={downloadCV} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
