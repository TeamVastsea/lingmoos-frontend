'use client';

import { useEffect, useState } from 'react';
import { Box, LoadingOverlay, Text, Title } from '@mantine/core';
import { BlogInfo, getGitlabPost } from '@/src/app/[locale]/blog/interface/Gitlab';

export default function PostContentPage({ params: { postIndex } }:
                { params: { postIndex: number } }) {
    const [file, setFile] = useState<BlogInfo>();
    const [content, setContent] = useState('');
    // const router = useRouter();

    useEffect(() => {
        console.log(postIndex);
        getGitlabPost(postIndex).then((res) => {
            setFile(res);
            res!.fetchContent().then((resContent) => {
                setContent(resContent);
            });
        }).catch(() => {
            // router.back();
        });
    }, []);
    return (
        <Box>
            <LoadingOverlay visible={file === undefined || content === ''} overlayProps={{ radius: 'sm', blur: 2 }} />
            <Title>{file?.label}</Title>
            <Text>{content}</Text>
        </Box>
    );
}
