'use client';

import { useEffect, useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import { BlogInfo, getGitlabFiles } from '@/src/app/[locale]/blog/interface/Gitlab';
import { BlogCard } from '@/src/app/[locale]/blog/component/BlogCard';

export default function BlogPage() {
    const [files, setFiles] = useState<BlogInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [failedMessage, setFailedMessage] = useState('');

    useEffect(() => {
        getGitlabFiles().then((r) => {
            if (r.length === 0) throw new Error('No blog found');
            setFiles(r);
            setLoading(false);
        }).catch((e) => {
            setFailedMessage(e.message);
            setLoading(false);
        });
    }, []);

    return (
        <>
            Blog
            {loading}
            <Container maw={1000}>
                {failedMessage === '' ? <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt={100}>
                    {files.map((file) => (
                        <BlogCard info={file} key={file.label} />
                    ))}
                                        </SimpleGrid> : failedMessage}
            </Container>
        </>
    );
}
