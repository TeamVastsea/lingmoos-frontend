'use client';

import { Button, Container, Group, Text } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import classes from './HeroText.module.css';
import { Dots } from '@/src/app/[locale]/component/Dots';

export function HeroText() {
    const router = useRouter();

    return (
        <div className={classes.wrapper}>
            <Dots className={classes.dots} style={{ left: 10, top: 10 }} />
            <Dots className={classes.dots} style={{ left: 50, top: 210 }} />
            <Dots className={classes.dots} style={{ left: 30, top: 410 }} />
            <Dots className={classes.dots} style={{ left: 210, top: 10 }} />
            <Dots className={classes.dots} style={{ left: 410, top: 30 }} />
            <Dots className={classes.dots} style={{ left: 210, top: 210 }} />
            <Container size={1000} className={classes.inner}>
                <h1 className={classes.title}>
                    <Text component="span" variant="gradient" gradient={{ from: 'indigo', to: 'violet' }} inherit>
                        Lingmo OS
                    </Text><br />A operating system based on Debian GNU/Linux
                </h1>

                <Text className={classes.description} c="dimmed">
                    Symbolizing{' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'cyan', to: 'grape' }} inherit>
                        nimble and smooth ink
                    </Text>, we have created a efficiency and beautiful UI design for the system.
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
                        Get started
                    </Button>

                    <Button
                      component="a"
                      href="https://git.lingmo.org/lingmo-os-team"
                      size="xl"
                      variant="default"
                      className={classes.control}
                      target="_blank"
                    >
                        GitLab
                    </Button>
                </Group>
            </Container>
        </div>
    );
}
