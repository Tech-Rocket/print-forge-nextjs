import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Header from "../components/shared/header";
import "./globals.css";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

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
      <body
        className={`${albertSan.className} ${montserratAlternates.variable}  antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
