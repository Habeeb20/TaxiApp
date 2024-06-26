'use client'
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useState } from "react";
import Header from "./components/Header";
import { SourceContext } from "./context/SourceContext";
import { DestinationContext } from "./context/DestinationContext";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <ClerkProvider>
          <html lang="en">
            <body className={inter.className}>
              <Header />
              {children}
            </body>
          </html>
        </ClerkProvider>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
