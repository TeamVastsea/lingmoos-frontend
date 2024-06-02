'use client';

import { Container, Group, Space, Stack, Text, Title } from '@mantine/core';
import { LeastBanner } from '@/app/downloads/component/LeastBanner';

export default function DownloadsPage() {
    return (
        <>
            <Container size={1000}>
                <Stack>
                    <Space h={20} />
                    <Group>
                        <Space w={20} />
                        <Stack>
                            <Title order={2} mt="sm" style={{ fontSize: 34, fontWeight: 900 }}>
                                Download Lingmo OS
                            </Title>
                            <Text>
                                Get efficient and smooth experience out of the box with Lingmo OS
                            </Text>
                        </Stack>
                    </Group>

                    <Space h={20} />
                    <LeastBanner />
                    <Space h={10} />

                    <Group>
                        <Space w={20} />
                        <Stack>
                            <Text size="lg" fw={700}>All downloads</Text>
                            <Text>
                                Currently, the iso is shared on the Sourceforge.
                                Click <a href="https://sourceforge.net/projects/lingmo-os/files/release/iso/" target="_blank" rel="noreferrer">here</a> to get more info.
                            </Text>
                        </Stack>
                    </Group>
                </Stack>
            </Container>
        </>
    );
}
