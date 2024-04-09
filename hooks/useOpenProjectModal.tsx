import { modals } from '@mantine/modals';
import { Project } from '@/assets/data/projects';
import { ProjectModal } from '@/components/ProjectModal/ProjectModal';

export function useOpenProjectModal(props: Project) {
  modals.open({
    size: 'xxl',
    children: <ProjectModal {...props} />,
  });
}
