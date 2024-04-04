import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export function useOpenProjectModal() {
  modals.open({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
  });
}
