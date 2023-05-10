import Menu from "@/components/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Build Your Soul",
  description: "BYS Project ltd. Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black text-white">
          <Menu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
