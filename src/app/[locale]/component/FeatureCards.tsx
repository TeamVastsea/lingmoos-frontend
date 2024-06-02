'use client';

import { Badge, Card, Container, Group, rem, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core';
import { IconCategory2, IconKeyframes, IconLayersIntersect, IconShieldLock } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import classes from './FeatureCards.module.css';

const mockdata = [
    {
        key: 'Interactions',
        icon: IconKeyframes,
    },
    {
        key: 'Security',
        icon: IconShieldLock,
    },
    {
        key: 'UI',
        icon: IconLayersIntersect,
    },
    {
        key: 'Menu',
        icon: IconCategory2,
    },
];

export function FeaturesCards() {
    const theme = useMantineTheme();
    const t = useTranslations('Index');
    const features = mockdata.map((feature) => (
        <Card key={feature.key} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
              style={{ width: rem(50), height: rem(50) }}
              stroke={2}
              color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {t(`feature${feature.key}`)}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {t(`feature${feature.key}Description`)}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    {t('badge')}
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                {t('badgeTitle')}
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                {t('badgeDescription')}
            </Text>

            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg" mt={100}>
                {features}
            </SimpleGrid>
        </Container>
    );
}
