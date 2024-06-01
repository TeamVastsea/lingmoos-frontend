'use client';

import {ActionIcon, Burger, Center, Container, Group, Menu, Modal, rem} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandBilibili, IconBrandGithub, IconBrandQq, IconChevronDown } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';
import LingmoLogos from '@/components/LingmoLogos/LingmoLogos';
import { ColorSchemeToggle } from '@/app/component/ColorSchemeToggle';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/downloads', label: 'Downloads' },
    { link: '/blog', label: 'Blog' },
    {
        link: '#1',
        label: 'Community',
        links: [
            { link: '/forum', label: 'Forum' },
            { link: '/qq', label: 'QQ Group' },
        ],
    },
    { link: '/help', label: 'Help' },
];

export function HeaderMenu() {
    const [opened, { toggle, close }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link} component="a" href={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                          href={link.link}
                          className={classes.link}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <a href="/">
                        <LingmoLogos.TitleWIthIcon width={200} height={24} />
                    </a>

                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>

                    <Group gap={10} visibleFrom="sm" justify="flex-end">
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandBilibili style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg" variant="default" radius="xl">
                            <IconBrandQq style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                        <ColorSchemeToggle />
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    );
}
