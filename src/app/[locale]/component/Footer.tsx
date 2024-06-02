'use client';

import { ActionIcon, Anchor, Group, rem } from '@mantine/core';
import { IconBrandBilibili, IconBrandGithub, IconBrandQq } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import classes from './Footer.module.css';
import LingmoLogos from '@/components/LingmoLogos/LingmoLogos';

const links = [
    { link: '/', label: 'home' },
    { link: '/downloads', label: 'downloads' },
    { link: '/blog', label: 'blog' },
    { link: 'https://bbs.lingmo.org', label: 'community' },
];

export function Footer() {
    const t = useTranslations('Headers');
    const items = links.map((link) => (
        <Anchor
          c="dimmed"
          key={link.label}
          href={link.link}
          lh={1}
          size="sm"
        >
            {t(link.label)}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <LingmoLogos.TitleWIthIcon width={200} height={24} />

                <Group className={classes.links}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandBilibili style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandQq style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}
