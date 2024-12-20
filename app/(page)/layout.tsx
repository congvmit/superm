"use client";

import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="container">{children}</main>
    </Provider>
  );
}
