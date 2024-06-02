import { Button, Grid, List, rem, Space, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import classes from './LatestBanner.module.css';

export function LatestBanner() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Download the latest LingmoOS</Title>
                <Text fw={500} fz="lg" mb={5}>
                    The brand new 2.0 for Lingmo OS with Debian 12, as well as other features.
                </Text>

                <Space h={20} />

                <Grid w="100%">
                    <Grid.Col span={9}>
                        <Stack>
                            <Text size="lg" fw={700}>System Requirements</Text>
                            <List
                              spacing="xs"
                              size="sm"
                              center
                              icon={
                                  <ThemeIcon color="teal" size={24} radius="xl">
                                      <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                                  </ThemeIcon>
                              }
                            >
                                <List.Item>2 GB system memory</List.Item>
                                <List.Item>2 GHz dual-core processor or better</List.Item>
                                <List.Item>25 GB of free hard drive space</List.Item>
                                <List.Item>3.7 GB USB or disk for installation media</List.Item>
                            </List>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={3}>
                        <Stack h="100%" justify="flex-end">
                            <Text size="xs">
                                Version: beta 3.6<br />
                                Date: 2024-04-15<br />
                                Size: 3.7 GB
                            </Text>
                            <Button component="a" href="https://sourceforge.net/projects/lingmo-os/files/latest/download" target="_blank">Download</Button>
                            <Text size="xs">
                                (Sourceforge)
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </div>
            {/*<Image src={image.src} className={classes.image} />*/}
        </div>
    );
}
