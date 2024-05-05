import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Darker_Grotesque } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ren portfolio",
};

const darkerGrot = Darker_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={darkerGrot.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
