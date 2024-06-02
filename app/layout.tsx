'use client';

import '@mantine/core/styles.css';
import React from 'react';
import { AppShell, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { theme } from '@/theme';
import { HeaderMenu } from '@/app/component/HeaderMenu';
import { Footer } from '@/app/component/Footer';
import { NavbarItems } from '@/app/component/NavbarItems';

export default function RootLayout({ children }: { children: any }) {
    const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
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
        </MantineProvider>
      </body>
    </html>
  );
}
