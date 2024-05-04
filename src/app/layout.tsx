import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Darker_Grotesque } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ren portfolio",
};

// const workSans = Work_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

const darkerGrot = Darker_Grotesque({
  subsets: ["latin"],
  display: "swap",
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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
