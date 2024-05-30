import '@mantine/core/styles.css';
import React from 'react';
import {MantineProvider, ColorSchemeScript, Text} from '@mantine/core';
import { theme } from '@/theme';
import {HeaderMenu} from "@/app/component/HeaderMenu";
import {Footer} from "@/app/component/Footer";

export const metadata = {
  title: 'LingmoOS',
  description: 'Welcome to the LingmoOS',
};

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
            <HeaderMenu />
            {children}
            <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
