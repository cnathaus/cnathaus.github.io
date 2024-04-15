'use client';

import { Header } from '../../components/Header/Header';
import { Welcome } from '../../components/Welcome/Welcome';
import { ProjectsCarousel } from '@/components/ProjectsCarousel/ProjectsCarousel';

export default function HomePage() {
  return (
    <>
      <Header />
      <Welcome />

      <ProjectsCarousel />
    </>
  );
}
