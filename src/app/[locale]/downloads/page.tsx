'use client';

import { Container, Group, Space, Stack, Text, Title } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { LatestBanner } from '@/src/app/[locale]/downloads/component/LatestBanner';
import React from 'react';

export default function DownloadsPage() {
    const t = useTranslations('Downloads');
    const allDownloads = t('allDownloadsDescription').split('%');
    return (
        <>
            <Container size={1000}>
                <Stack>
                    <Space h={20} />
                    <Group>
                        <Space w={20} />
                        <Stack>
                            <Title order={2} mt="sm" style={{ fontSize: 34, fontWeight: 900 }}>
                                {t('title')}
                            </Title>
                            <Text>
                                {t('titleDescription')}
                            </Text>
                        </Stack>
                    </Group>

                    <Space h={20} />
                    <LatestBanner />
                </Stack>
            </Container>
        </>
    );
}
