import { Button, rem } from '@mantine/core';

export function GradientOutlineButton({ text, onClick }: { text: string; onClick: () => void }) {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-blue-filled) 0%, var(--mantine-color-cyan-filled) 100%)';

  return (
    <Button
      radius="md"
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--mantine-color-body)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
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
