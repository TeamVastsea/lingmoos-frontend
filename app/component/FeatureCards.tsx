'use client'

import {Badge, Card, Container, Group, rem, SimpleGrid, Text, Title, useMantineTheme,} from '@mantine/core';
import {IconCategory2, IconKeyframes, IconLayersIntersect, IconShieldLock} from '@tabler/icons-react';
import classes from './FeatureCards.module.css';

const mockdata = [
    {
        title: 'Better Interactions',
        description:
            'Lingmo OS has redesigned the entire system, optimized visual effects, and improved user experiences',
        icon: IconKeyframes,
    },
    {
        title: 'Security and Stability',
        description:
            'The underlying choice for Lingmo OS is the so-called "rock solid" Debian GNU/Linux, so Lingmo OS not only has aesthetic appeal but also stable characteristics',
        icon: IconShieldLock,
    },
    {
        title: 'Smooth UI',
        description:
            'Lingmo OS has relatively lower hardware requirements and a smooth experience on lower hardware',
        icon: IconLayersIntersect,
    },
    {
        title: 'New Global Menu',
        description:
            'Lingmo OS has a global menu at the top with all functions you need, wh ich can safe your screen space',
        icon: IconCategory2,
    },
];

export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Best Linux Distribution ever
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Complete any tasks effortlessly
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Lingmo OS have a user-friendly UI, as well as other features for you.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg" mt={100}>
                {features}
            </SimpleGrid>
        </Container>
    );
}
