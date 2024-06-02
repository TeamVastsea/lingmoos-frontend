'use client';

import { ActionIcon, Burger, Container, Group, rem } from '@mantine/core';
import { IconBrandBilibili, IconBrandGithub, IconBrandQq } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import classes from './HeaderMenu.module.css';
import LingmoLogos from '@/components/LingmoLogos/LingmoLogos';
import { ColorSchemeToggle } from '@/src/app/[locale]/component/ColorSchemeToggle';
import { LocaleToggle } from '@/src/app/[locale]/component/LocaleToggle';

const links = [
    { link: '/about', label: 'features' },
    { link: '/downloads', label: 'downloads' },
    { link: '/blog', label: 'blog' },
    { link: 'https://bbs.lingmo.org', label: 'community' },
    { link: '/help', label: 'help' },
];

export function HeaderMenu(props: HeaderMenuProps) {
    const t = useTranslations('Headers');
    const items = links.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
            >
                {t(link.label)}
            </a>
        ));

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
                        <LocaleToggle />
                    </Group>
                    <Burger opened={props.opened} onClick={props.toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    );
}

export interface HeaderMenuProps {
    opened: boolean,
    toggle: () => void,
}
