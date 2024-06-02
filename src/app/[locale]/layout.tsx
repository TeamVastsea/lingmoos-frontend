import '@mantine/core/styles.css';
import React from 'react';
import { AppShell, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { theme } from '@/theme';
import { HeaderMenu } from '@/src/app/[locale]/component/HeaderMenu';
import { Footer } from '@/src/app/[locale]/component/Footer';
import { NavbarItems } from '@/src/app/[locale]/component/NavbarItems';
import RootLayoutInner from "@/src/app/[locale]/component/RootLayoutInner";

export default async function RootLayout({ children, params: { locale } }:
                                       { children: any, params: { locale: string } }) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <head>
            <ColorSchemeScript />
            <link rel="shortcut icon" href="/favicon.svg" />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body>
        <NextIntlClientProvider messages={messages}>
            <MantineProvider theme={theme}>
                <RootLayoutInner>
                    {children}
                </RootLayoutInner>
            </MantineProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
