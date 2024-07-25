import { AspectRatio, Badge, Container, Group, Stack, Text, Title } from '@mantine/core';
import { Project, technologyGradientColorMap } from '@/assets/data/projects';
import classes from './ProjectModal.module.scss';
//
interface ProjectModalProps extends Project {}

export function ProjectModal({
  title,
  description,
  technologies,
  category,
  video,
}: ProjectModalProps) {
  return (
    <Container>
      <Stack>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        {description}
        <Title order={5} c="var(--mantine-color-default-color)">
          Skills
        </Title>
        <Group gap="xs">
          {technologies.map((tech) => {
            const gradient = technologyGradientColorMap[tech];
            return (
              <Badge
                styles={{
                  root: {
                    background: `linear-gradient(to right, white, white), linear-gradient(45deg, ${gradient.startColor}, ${gradient.midColor}, ${gradient.endColor})`,
                    backgroundClip: 'padding-box, border-box',
                    backgroundOrigin: 'padding-box, border-box',
                    border: '2px solid transparent',
                    padding: '0.875rem',
                  },
                  label: {
                    backgroundImage: `linear-gradient(45deg, ${gradient.startColor}, ${gradient.midColor}, ${gradient.endColor})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    fontWeight: 800,
                    WebkitTextFillColor: 'transparent',
                  },
                }}
                size="md"
              >
                {tech}
              </Badge>
            );
          })}
        </Group>
        {video ? (
          <>
            <Title order={5} c="var(--mantine-color-default-color)">
              Video
            </Title>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={video}
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </>
        ) : null}
      </Stack>
    </Container>
  );
}
