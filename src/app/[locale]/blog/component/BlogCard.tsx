import { Card, Group, Text, LoadingOverlay, Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import classes from './BlogCard.module.css';
import { BlogInfo } from '@/src/app/[locale]/blog/interface/Gitlab';

export function BlogCard(props: BlogCardProps) {
    const [image, setImage] = useState('');
    const [visible, { open, close }] = useDisclosure(true);
    const router = useRouter();

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
              target="_blank"
              onClick={() => { router.push(`/blog/${props.index}`); }}
              style={{ cursor: 'pointer' }}
              w={400}
            >
                <LoadingOverlay visible={visible} overlayProps={{ radius: 'md', blur: 2 }} />
                <div
                  className={classes.image}
                  style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
                <div className={classes.overlay} />

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
