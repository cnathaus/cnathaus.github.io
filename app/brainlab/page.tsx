'use client';

import { Header } from '../../components/Header/Header';
import { Welcome } from '../../components/Welcome/Welcome';
import { ProjectsCarousel } from '@/components/ProjectsCarousel/ProjectsCarousel';

import { companies } from '@/assets/data/companies';

export default function HomePage() {
  const company = companies[0]; // TODO: modify so different companies can be displayed
  const companyName = company.name;

  return (
    <>
      <Header companyName={companyName} />
      <Welcome />

      <ProjectsCarousel />
    </>
  );
}
