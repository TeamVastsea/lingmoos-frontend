'use client';

import {useEffect, useState} from 'react';
import {Box, Center, Container, Group, LoadingOverlay, SimpleGrid, Space, Stack, Text, Title} from '@mantine/core';
import {BlogInfo, getGitlabFiles} from '@/src/app/[locale]/blog/interface/Gitlab';
import {BlogCard} from '@/src/app/[locale]/blog/component/BlogCard';
import {useDisclosure} from "@mantine/hooks";

export default function BlogPage() {
    const [files, setFiles] = useState<BlogInfo[]>([]);
    const [failedMessage, setFailedMessage] = useState('');
    const [loading, {open, close}] = useDisclosure(true);

    useEffect(() => {
        open();
        getGitlabFiles().then((r) => {
            if (r.length === 0) throw new Error('No blog found');
            setFiles(r);
            close();
        }).catch((e) => {
            setFailedMessage(e.message);
        });
    }, []);

    return (
        <Container size={1000}>
            <Stack>
                <Space h={20}/>
                <Group>
                    <Space w={20}/>
                    <Stack>
                        <Title order={2} mt="sm" style={{fontSize: 34, fontWeight: 900}}>
                            Blogs
                        </Title>
                        <Text>
                            Recrive the latest news about Lingmo OS
                        </Text>

                    </Stack>
                </Group>
                <LoadingOverlay visible={loading} overlayProps={{radius: "xs", blur: 2}}/>
                {failedMessage === '' ?
                    <SimpleGrid cols={{base: 1, md: files.length >= 2 ? 2 : files.length}} spacing="lg" mt={100}>
                        {files.map((file, index) => (
                            <BlogCard info={file} key={index} index={index}/>
                        ))}
                    </SimpleGrid> : failedMessage}
            </Stack>
        </Container>
    );
}
