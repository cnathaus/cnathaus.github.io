'use client';

import { Affix, Button, Transition, rem } from '@mantine/core';
import { ArrowUp } from 'tabler-icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Header } from '@/components/Header/Header';
import { Welcome } from '@/components/Welcome/Welcome';
import { ProjectsCarousel } from '@/components/ProjectsCarousel/ProjectsCarousel';
import { CV } from '@/components/CV/CV';
import { Contact } from '@/components/Contact/Contact';
import { Why } from '@/components/Why/Why';

import { companies } from '@/assets/data/companies';

export default function HomePage() {
  const [scroll, scrollTo] = useWindowScroll();
  const company = companies[0]; // TODO: modify so different companies can be displayed
  const companyName = company.name;

  return (
    <>
      <Header companyName={companyName} />
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<ArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              variant="gradient"
              gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      <Welcome />

      <ProjectsCarousel />
      <CV />
      {/* <Why companyName={companyName} /> */}
      <Contact />
    </>
  );
}
