import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Inter, Darker_Grotesque } from "next/font/google";

export const metadata: Metadata = {
  title: "Warrent Padolina — Software Developer",
  description:
    "Portfolio of Warrent Padolina, a passionate Software Developer specializing in full-stack web development, mobile apps, and game development.",
  keywords: [
    "software developer",
    "full-stack",
    "react",
    "next.js",
    "portfolio",
    "warrent padolina",
  ],
  authors: [{ name: "Warrent Padolina" }],
  openGraph: {
    title: "Warrent Padolina — Software Developer",
    description:
      "Portfolio of Warrent Padolina, a passionate Software Developer.",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const darkerGrot = Darker_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const theme = createTheme({
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  fontFamily: "var(--font-inter), sans-serif",
  headings: {
    fontFamily: "var(--font-display), sans-serif",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${darkerGrot.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          background: "#FEF7ED",
        }}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
