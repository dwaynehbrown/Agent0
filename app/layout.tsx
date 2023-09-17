import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: "Agent0 - Open Source Delegated Admin for Auth0",
  description:
    "Let your customers manage their Organisations, Connections, login experience, user memberships, roles and much more.",
  // TODO
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed w-full bg-gradient-to-br from-white via-blue-100 to-white" />
        {/* <div className="fixed h-screen w-full bg-gradient-to-br from-white via-blue-100 to-white" /> */}
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
                {children}
        </main>
        <Footer />
      </body>
      </UserProvider>
    </html>
  );
}
