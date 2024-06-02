import { Button, Grid, List, rem, Space, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import classes from './LeastBanner.module.css';
import {useTranslations} from "next-intl";

export function LeastBanner() {
    const t = useTranslations("Downloads");
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>{t("leastTitle")}</Title>
                <Text fw={500} fz="lg" mb={5}>
                    {t("leastDescription")}
                </Text>

                <Space h={20} />

                <Grid w="100%">
                    <Grid.Col span={9}>
                        <Stack>
                            <Text size="lg" fw={700}>{t("requirements")}</Text>
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
                                <List.Item>{t("requirementsMemory")}</List.Item>
                                <List.Item>{t("requirementsCPU")}</List.Item>
                                <List.Item>{t("requirementsStorage")}</List.Item>
                                <List.Item>{t("requirementsMedia")}</List.Item>
                            </List>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={3}>
                        <Stack h="100%" justify="flex-end">
                            <Text size="xs">
                                {t("version")}beta 3.6<br />
                                {t("date")}2024-04-15<br />
                                {t("size")}3.7 GB
                            </Text>
                            <Button component="a" href="https://sourceforge.net/projects/lingmo-os/files/latest/download" target="_blank">{t("download")}</Button>
                            <Text size="xs">
                                (Sourceforge)
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
}
