'use client';

import { useMantineColorScheme } from '@mantine/core';
import { Header } from '../../components/Header/Header';
import { Welcome } from '../../components/Welcome/Welcome';
import { ProjectsCarousel } from '@/components/ProjectsCarousel/ProjectsCarousel';

export default function HomePage() {
  // const { setColorScheme } = useMantineColorScheme();
  // setColorScheme('light');
  return (
    <>
      <Header />
      <Welcome />

      <ProjectsCarousel />
    </>
  );
}
