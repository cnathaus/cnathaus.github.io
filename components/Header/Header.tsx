'use client';

import { useState } from 'react';
import { Menu, Container, Group, Burger, Text, rem } from '@mantine/core';
import { IconChevronRight, IconGauge, IconActivity, IconFingerprint } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const iconStyles = { width: rem(14), height: rem(14) };

const links = [
  {
    link: 'about',
    label: 'About Me',
    icon: <IconFingerprint style={{ ...iconStyles }} />,
  },
  {
    link: 'projects',
    label: 'Projects',
    icon: <IconActivity style={{ ...iconStyles }} />,
  },
  { link: 'cv', label: 'CV', icon: <IconGauge style={{ ...iconStyles }} /> },
  {
    link: 'contact',
    label: 'Contact',
    icon: <IconChevronRight style={{ ...iconStyles }} />,
  },
];

export function Header({ companyName }: { companyName: string }) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const linksWithCompany = [
    ...links.slice(0, -1),
    {
      link: 'why',
      label: `Why ${companyName}?`,
      icon: <IconFingerprint style={{ ...iconStyles }} />,
    },
    links.slice(-1)[0],
  ];

  const items = linksWithCompany.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setTimeout(() => {
          window.scrollTo({
            top: document.getElementById(link.link)!.offsetTop - 60,
            behavior: 'smooth',
          });
        }, 100);
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text className={classes.headertitle}>Christian Nathaus</Text>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Menu shadow="md" width={200} onChange={toggle}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          </Menu.Target>

          <Menu.Dropdown>
            {links.map((link) => (
              <Menu.Item
                key={link.link}
                leftSection={link.icon}
                onClick={() =>
                  setTimeout(() => {
                    window.scrollTo({
                      top: document.getElementById(link.link)!.offsetTop - 60,
                      behavior: 'smooth',
                    });
                  }, 100)
                }
              >
                {link.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
}
