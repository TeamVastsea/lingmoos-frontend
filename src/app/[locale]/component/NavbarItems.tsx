import { ActionIcon, Group, rem, Stack, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { IconBrandBilibili, IconBrandGithub, IconBrandQq } from '@tabler/icons-react';
import { ColorSchemeToggle } from '@/src/app/[locale]/component/ColorSchemeToggle';
import { LocaleToggle } from '@/src/app/[locale]/component/LocaleToggle';
import { links } from '@/src/app/[locale]/component/Links';

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
                <LocaleToggle />
            </Group>
        </Stack>
    );
}
