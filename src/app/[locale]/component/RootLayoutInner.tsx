'use client';

import { AppShell } from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { HeaderMenu } from '@/src/app/[locale]/component/HeaderMenu';
import { NavbarItems } from '@/src/app/[locale]/component/NavbarItems';
import { Footer } from '@/src/app/[locale]/component/Footer';

export default function RootLayoutInner({ children }: { children: any }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            <AppShell header={{ height: 57 }} aside={{ width: 0, breakpoint: 'sm', collapsed: { mobile: !opened } }}>
                <AppShell.Header>
                    <HeaderMenu opened={opened} toggle={toggle} />
                </AppShell.Header>

                <AppShell.Aside>
                    <NavbarItems />
                </AppShell.Aside>

                <AppShell.Main>
                    {children}
                    <Footer />
                </AppShell.Main>
            </AppShell>
        </>
    );
}
