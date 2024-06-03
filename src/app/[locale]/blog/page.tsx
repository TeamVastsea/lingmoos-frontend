'use client';

import { Button } from '@mantine/core';
import { getGitlabFiles } from '@/src/app/[locale]/blog/interface/Gitlab';

export default function BlogPage() {
    return (
        <>
            Blog
            <Button onClick={() => {
                getGitlabFiles().then((r) => {
                    console.log(r[0]);
                    r[0].fetchContent().then((r) => {
                        console.log(r);
                    });
                });
            }}>Fetch
            </Button>
        </>
    );
}
