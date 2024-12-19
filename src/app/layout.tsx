import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "SuperM",
  description: "Online shopping simplified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
