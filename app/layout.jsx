import { Albert_Sans } from "next/font/google";
import Header from "../components/shared/header";
import "./globals.css";

const albertSan = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Print Forge",
  description: "Print Forge is a Next.js app for printing documents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${albertSan.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
