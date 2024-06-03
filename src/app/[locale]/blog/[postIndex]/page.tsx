'use client';

import { useEffect, useState } from 'react';
import { Box, LoadingOverlay, Text, Title } from '@mantine/core';
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
                // setContent(resContent);
                renderMarkdown(resContent);
            });
        }).catch(() => {
            // router.back();
        });
    }, []);

    return (
        <Box>
            <LoadingOverlay visible={file === undefined || content === ''} overlayProps={{ radius: 'sm', blur: 2 }} />
            <Title>{file?.label}</Title>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </Box>
    );
}
