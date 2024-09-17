'use client';

import { ActionIcon, Burger, Container, Group, rem } from '@mantine/core';
import { IconBrandBilibili, IconBrandGithub, IconBrandQq } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import classes from './HeaderMenu.module.css';
import LingmoLogos from '@/components/LingmoLogos/LingmoLogos';
import { ColorSchemeToggle } from '@/src/app/[locale]/component/ColorSchemeToggle';
import { LocaleToggle } from '@/src/app/[locale]/component/LocaleToggle';
import { links } from '@/src/app/[locale]/component/Links'

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
                    <a style={{ top: '50%', transform: 'translate(0, 10%)' }} href="/">
                        <LingmoLogos.TitleWIthIcon width={200} height={30} />
                    </a>

                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>

                    <Group gap={10} visibleFrom="sm" justify="flex-end">
                        <a href="https://space.bilibili.com/595380133/" target="_blank" rel="noreferrer">
                            <ActionIcon size="lg" variant="default" radius="xl">
                                <IconBrandBilibili style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                            </ActionIcon>
                        </a>
                        <a href="https://github.com/LingmoOS" target="_blank" rel="noreferrer">
                            <ActionIcon size="lg" variant="default" radius="xl">
                                <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                            </ActionIcon>
                        </a>
                        <a href="https://qm.qq.com/q/l8QeupIEjS" target="_blank" rel="noreferrer">
                            <ActionIcon size="lg" variant="default" radius="xl">
                                <IconBrandQq style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                            </ActionIcon>
                        </a>
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
