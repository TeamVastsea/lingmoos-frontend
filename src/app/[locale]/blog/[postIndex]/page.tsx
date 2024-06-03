'use client';

import { useEffect, useState } from 'react';
import {Box, Card, Container, LoadingOverlay, Text, Title, TypographyStylesProvider} from '@mantine/core';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { reporter } from 'next/dist/trace/report';
import { BlogInfo, getGitlabPost } from '@/src/app/[locale]/blog/interface/Gitlab';

export default function PostContentPage({ params: { postIndex } }:
                { params: { postIndex: number } }) {
    const [file, setFile] = useState<BlogInfo>();
    const [content, setContent] = useState('');
    // const router = useRouter();

    function renderMarkdown(content: string) {
        remark()
            .use(remarkHtml)
            .process(content)
            .then((e) => {
                console.log(String(e));
                setContent(String(e));
                // console.error(reporter(e));
            });
    }

    useEffect(() => {
        getGitlabPost(postIndex).then((res) => {
            setFile(res);
            res!.fetchContent().then((resContent) => {
                console.log(resContent);
                // setContent(resContent);
                renderMarkdown(resContent);
            });
        }).catch(() => {
            // router.back();
        });
    }, []);

    return (
        <Container maw={1200}>
            <LoadingOverlay visible={file === undefined || content === ''} overlayProps={{ radius: 'sm', blur: 2 }} />
            <Title>{file?.label}</Title>
            <Card radius={'md'}>
                <Card.Section>
                    <Container maw={1000}>
                        <TypographyStylesProvider>
                            <div
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </TypographyStylesProvider>
                    </Container>
                </Card.Section>
            </Card>
        </Container>
    );
}
