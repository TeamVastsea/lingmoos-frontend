import { Button, Grid, List, Menu, rem, Space, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import classes from './LatestBanner.module.css';

export function LatestBanner() {
    const t = useTranslations('Downloads');
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>{t('latestTitle')}</Title>
                <Text fw={500} fz="lg" mb={5}>
                    {t('latestDescription')}
                </Text>

                <Space h={20} />

                <Grid w="100%" className={classes.grid}>
                    <Grid.Col span={9}>
                        <Stack>
                            <Text size="lg" fw={700}>{t('requirements')}</Text>
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
                                <List.Item>{t('requirementsMemory')}</List.Item>
                                <List.Item>{t('requirementsCPU')}</List.Item>
                                <List.Item>{t('requirementsStorage')}</List.Item>
                                <List.Item>{t('requirementsMedia')}</List.Item>
                            </List>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={3} className={classes.download_container}>
                        <Stack h="100%" justify="flex-end">
                            <Text size="xs">
                                {t('version')}3.0-rc8<br />
                                {t('date')}2025-02-01<br />
                                {t('size')}2.37 GB
                            </Text>
                            <Menu>
                                <Menu.Target>
                                    <Button className={classes.download_button}>{t('download')}</Button>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item component="a" href="https://releases.lingmo.org.cn/releases/3.0rc" target="_blank">
                                        {t('downloadOfficial')}
                                    </Menu.Item>
                                    <Menu.Item className={classes.download_item} component="a" href="https://sourceforge.net/projects/lingmo-os/files/release/iso/helium/rc/" target="_blank">
                                        {t('downloadSourceForge')}
                                    </Menu.Item>
                                    <Menu.Item className={classes.download_item} component="a" href="https://releases.lingmo.org.cn/releases/2.1" target="_blank">
                                        {t('downloadOldversion')}
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
}
