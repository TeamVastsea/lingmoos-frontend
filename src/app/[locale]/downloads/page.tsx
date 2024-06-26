'use client';

import { Container, Group, Space, Stack, Text, Title } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { LatestBanner } from '@/src/app/[locale]/downloads/component/LatestBanner';

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
                    <Space h={10} />

                    <Group>
                        <Space w={20} />
                        <Stack>
                            <Text size="lg" fw={700}>{t('allDownloads')}</Text>
                            <Text>
                                {allDownloads[0]}
                                <a href="https://sourceforge.net/projects/lingmo-os/files/release/iso/" target="_blank" rel="noreferrer">{allDownloads[1]}</a>
                                {allDownloads[2]}
                            </Text>
                        </Stack>
                    </Group>
                </Stack>
            </Container>
        </>
    );
}
