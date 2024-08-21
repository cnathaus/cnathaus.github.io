import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { theme } from '../theme';

export const metadata = {
  title: 'Christian Nathaus',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-X8MK3HFW5P" />
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/logo192.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
