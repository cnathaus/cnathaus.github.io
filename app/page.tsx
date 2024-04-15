'use client';

import { Affix, Button, Transition, rem, useMantineColorScheme } from '@mantine/core';
import { ArrowUp } from 'tabler-icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Header } from '../components/Header/Header';
import { Welcome } from '../components/Welcome/Welcome';

import { ProjectsCarousel } from '@/components/ProjectsCarousel/ProjectsCarousel';
import { CV } from '@/components/CV/CV';

export default function HomePage() {
  // const { setColorScheme } = useMantineColorScheme();
  // setColorScheme('light');
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <Header />
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<ArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      <Welcome />

      <ProjectsCarousel />
      <CV />
    </>
  );
}
