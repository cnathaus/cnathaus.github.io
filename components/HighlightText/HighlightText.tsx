import { Text } from '@mantine/core';

export function HighlightText({ children }: { children: React.ReactNode }) {
  return (
    <Text span inherit variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
      {children}
    </Text>
  );
}
