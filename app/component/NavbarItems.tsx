import {Stack, Text} from "@mantine/core";

const links = [
    { link: '/about', label: 'Features' },
    { link: '/downloads', label: 'Downloads' },
    { link: '/blog', label: 'Blog' },
    { link: 'https://bbs.lingmo.org', label: 'Community' },
    { link: '/help', label: 'Help' },
];

export function NavbarItems() {
    const items = links.map((item) => (
        <Text size="xl" component="a" href={item.link}>
            {item.label}
        </Text>
    ));

    return (
        <Stack style={{marginLeft: 30, marginTop: 30}}>
            {items}
        </Stack>
    );
}
