'use client';

import {Alert, Button, Container, Group, Text} from '@mantine/core';
import {IconDownload, IconInfoCircle} from '@tabler/icons-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import classes from './HeroText.module.css';
import { Dots } from '@/src/app/[locale]/component/Dots';

export function HeroText() {
    const router = useRouter();
    const t = useTranslations('Index');

    const description = t('description').split('%');

    return (
        <div className={classes.wrapper}>
            <Dots className={classes.dots} style={{ left: 10, top: 10 }} />
            <Dots className={classes.dots} style={{ left: 50, top: 210 }} />
            <Dots className={classes.dots} style={{ left: 30, top: 410 }} />
            <Dots className={classes.dots} style={{ left: 210, top: 10 }} />
            <Dots className={classes.dots} style={{ left: 410, top: 30 }} />
            <Dots className={classes.dots} style={{ left: 210, top: 210 }} />
            <Container size={1000} className={classes.inner}>
                <Alert variant="filled" color="red" radius="lg" title="版权声明" icon={<IconInfoCircle />}>
                    本项目由
                    <a style={{ color: 'yellow' }} href="https://github.com/LingmoOS" target="_blank" rel="noreferrer">
                        Lingmo OS
                    </a>
                    团队独立开发，从未授权至任何个人或集体，请注意甄别互联网信息真伪。
                    <br />
                    如若发现侵权行为，请及时与我们
                    <a style={{ color: 'yellow' }} href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2422586862" target="_blank" rel="noreferrer">
                    联系(QQ: 2422586862)
                    </a>。
                </Alert>
                <h1 className={classes.title}>
                    <Text component="span" variant="gradient" gradient={{ from: 'indigo', to: 'violet' }} inherit>
                        Lingmo OS
                    </Text><br />{t('title')}
                </h1>

                <Text className={classes.description} c="dimmed">
                    {description[0]}
                    <Text component="span" variant="gradient" gradient={{ from: 'cyan', to: 'grape' }} inherit>
                        {description[1]}
                    </Text>
                    {description[2]}
                </Text>

                <Group className={classes.controls}>
                    <Button
                      size="xl"
                      className={classes.control}
                      variant="gradient"
                      gradient={{ from: 'indigo', to: 'grape' }}
                      leftSection={<IconDownload />}
                      onClick={() => router.push('/downloads')}
                    >
                        {t('getStarted')}
                    </Button>

                    <Button
                      component="a"
                      href="https://github.com/LingmoOS"
                      size="xl"
                      variant="default"
                      className={classes.control}
                      target="_blank"
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    );
}
