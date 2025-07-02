import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export const metadata = {
  title: "Print Forge",
  description: "Print Forge is a Next.js app for printing documents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserratAlternates.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
