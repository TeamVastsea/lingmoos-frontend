'use client'

import '@mantine/core/styles.css';
import React from 'react';
import {MantineProvider, ColorSchemeScript, Text, AppShell} from '@mantine/core';
import { theme } from '@/theme';
import {HeaderMenu} from "@/app/component/HeaderMenu";
import {Footer} from "@/app/component/Footer";

export default function RootLayout({ children }: { children: any }) {
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
            <AppShell>
                <AppShell.Header>
                    <HeaderMenu />
                </AppShell.Header>

                <AppShell.Main style={{marginTop: 56}}>
                    {children}
                    <Footer />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
