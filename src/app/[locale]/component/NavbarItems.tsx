import {ActionIcon, Group, rem, Stack, Text} from '@mantine/core';
import {useTranslations} from "next-intl";
import {IconBrandBilibili, IconBrandGithub, IconBrandQq} from "@tabler/icons-react";
import {ColorSchemeToggle} from "@/src/app/[locale]/component/ColorSchemeToggle";

const links = [
    { link: '/about', label: 'features' },
    { link: '/downloads', label: 'downloads' },
    { link: '/blog', label: 'blog' },
    { link: 'https://bbs.lingmo.org', label: 'community' },
    { link: '/help', label: 'help' },
];

export function NavbarItems() {
    const t = useTranslations('Headers');
    const items = links.map((item) => (
        <Text key={item.label} size="xl" component="a" href={item.link}>
            {t(item.label)}
        </Text>
    ));

    return (
        <Stack style={{ marginLeft: 30, marginTop: 30 }}>
            {items}
            <Group>
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
        </Stack>
    );
}
