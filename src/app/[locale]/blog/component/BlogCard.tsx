import {Card, Group, Text, Image, LoadingOverlay, Center} from '@mantine/core';
import {useEffect, useState} from 'react';
import {useDisclosure} from '@mantine/hooks';
import classes from './BlogCard.module.css';
import {BlogInfo} from '@/src/app/[locale]/blog/interface/Gitlab';

export function BlogCard(props: BlogCardProps) {
    const [image, setImage] = useState('');
    const [visible, {open, close}] = useDisclosure(true);

    useEffect(() => {
        open();
        props.info.fetchCover().then((e) => {
            setImage(e);
            close();
        });
    }, []);

    return (
        <Center>
            <Card
                p="lg"
                shadow="lg"
                className={classes.card}
                radius="md"
                component="a"
                href="https://mantine.dev/"
                target="_blank"
                w={400}
            >
                <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{radius: 'md', blur: 2}}/>
                <div
                    className={classes.image}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
                <div className={classes.overlay}/>

                <div className={classes.content}>
                    <div>
                        <Text size="lg" className={classes.title} fw={500}>
                            {props.info.label}
                        </Text>

                        <Group justify="space-between" gap="xs">
                            <Text size="sm" className={classes.author}>
                                {props.info.time.toString()}
                            </Text>
                        </Group>
                    </div>
                </div>
            </Card>
        </Center>
    );
}

export interface BlogCardProps {
    info: BlogInfo,
    index: number,
}
