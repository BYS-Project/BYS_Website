import { HomepageMenu } from "@/components/Menus";
import "./globals.css";
import { Inter } from "next/font/google";
import { HomepageFooter } from "@/components/Footers";

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
          <HomepageMenu />
          {children}
          <HomepageFooter />
        </div>
      </body>
    </html>
  );
}
