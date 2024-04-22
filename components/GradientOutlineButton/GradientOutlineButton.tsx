import { Button, rem } from '@mantine/core';
import classes from './GradientOutlineButton.module.scss';

export function GradientOutlineButton({ text, onClick }: { text: string; onClick: () => void }) {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-blue-filled) 0%, var(--mantine-color-cyan-filled) 100%)';

  return (
    <Button
      radius="md"
      classNames={{ inner: classes.inner }}
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
