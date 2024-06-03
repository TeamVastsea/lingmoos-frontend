'use client';

import { useEffect, useState } from 'react';
import { Container, Group, LoadingOverlay, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BlogInfo, getGitlabFiles } from '@/src/app/[locale]/blog/interface/Gitlab';
import { BlogCard } from '@/src/app/[locale]/blog/component/BlogCard';

export default function BlogPage() {
    const [files, setFiles] = useState<BlogInfo[][]>([]);
    const [failedMessage, setFailedMessage] = useState('');
    const [loading, { open, close }] = useDisclosure(true);
    const [finished, setFinished] = useState(false);
    let page = 0;

    function fetchNextPage() {
        if (finished) {
            return;
        }
        open();
        getGitlabFiles(page).then((r) => {
            page += 1;
            if (r.length < 10) {
                setFinished(true);
            }
            if (r.length === 0) throw new Error('No blog found');
            setFiles([...files, r]);
            close();
        }).catch((e) => {
            setFailedMessage(e.message);
            close();
        });
    }

    useEffect(() => {
        fetchNextPage();
    }, []);

    return (
        <Container size={1000}>
            <Stack>
                <Space h={20} />
                <Group>
                    <Space w={20} />
                    <Stack>
                        <Title order={2} mt="sm" style={{ fontSize: 34, fontWeight: 900 }}>
                            Blogs
                        </Title>
                        <Text>
                            Recrive the latest news about Lingmo OS
                        </Text>

                    </Stack>
                </Group>
                <LoadingOverlay visible={loading} overlayProps={{ radius: 'xs', blur: 2 }} />
                {failedMessage === '' ?
                    <SimpleGrid cols={{ base: 1, md: files.length >= 2 ? 2 : files.length }} spacing="lg" mt={100}>
                        {files.map((file, pageIndex) => (
                            file.map((fileInner, index) =>
                                <BlogCard info={fileInner} key={`${pageIndex}-${index}`} index={pageIndex * 10 + index} />)
                        ))}
                    </SimpleGrid> : failedMessage}
            </Stack>
        </Container>
    );
}
