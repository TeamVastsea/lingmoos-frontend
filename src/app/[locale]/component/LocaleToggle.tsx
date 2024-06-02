'use client';

import { ActionIcon, Menu, useMantineColorScheme } from '@mantine/core';
import { useEffect } from 'react';
import { IconLanguage } from '@tabler/icons-react';
import { useParams } from 'next/navigation';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { LocalesList } from '@/src/locales';

export function LocaleToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales: LocalesList });
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();

    function setLocale(nextLocale: string) {
        router.replace(pathname, { ...params, locale: nextLocale });
    }

    useEffect(() => { setColorScheme('auto'); }, []);

    return (
        <Menu>
            <Menu.Target>
                <ActionIcon size="lg" variant="default" radius="xl"><IconLanguage size={20} /></ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item onClick={() => { setLocale('zh-cn'); }}>中文</Menu.Item>
                <Menu.Item onClick={() => { setLocale('en'); }}>English</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
